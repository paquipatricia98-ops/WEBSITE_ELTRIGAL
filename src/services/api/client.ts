import { createApiResponseSchema } from '../../schemas/api';
import type { z } from 'zod';
import type { ApiResponse } from '../../types/api';

const BASE_URL = import.meta.env.PUBLIC_API_BASE_URL || 'https://el-trigal-backend-nun9.onrender.com/api/v1';

export interface FetchApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined>;
}

export async function fetchApi<T>(
  endpoint: string,
  dataSchema: z.ZodType<T>,
  options: FetchApiOptions = {},
  fallbackData?: T
): Promise<ApiResponse<T>> {
  const { method = 'GET', headers = {}, body, query } = options;

  let baseUrl = BASE_URL;
  if (baseUrl.startsWith('/')) {
    if (typeof window !== 'undefined') {
      baseUrl = `${window.location.origin}${baseUrl}`;
    } else {
      baseUrl = `https://el-trigal-backend-nun9.onrender.com${baseUrl}`;
    }
  }

  let urlString = `${baseUrl.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
  if (query) {
    const params = new URLSearchParams();
    Object.entries(query).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '') {
        params.append(key, String(val));
      }
    });
    const queryString = params.toString();
    if (queryString) {
      urlString += `?${queryString}`;
    }
  }

  try {
    const res = await fetch(urlString, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(import.meta.env.API_KEY ? { 'x-api-key': import.meta.env.API_KEY } : {}),
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      console.warn(`[API Warning] Request to ${urlString} returned HTTP ${res.status}`);
      if (fallbackData !== undefined) {
        return {
          success: true,
          data: fallbackData,
          meta: { timestamp: new Date().toISOString() },
        };
      }
    }

    const rawJson = await res.json();
    const responseSchema = createApiResponseSchema(dataSchema);
    const parsed = responseSchema.safeParse(rawJson);

    if (parsed.success) {
      return parsed.data as ApiResponse<T>;
    } else {
      console.warn(`[API Zod Validation Failed] ${endpoint}:`, parsed.error);
      if (fallbackData !== undefined) {
        return {
          success: true,
          data: fallbackData,
          meta: { timestamp: new Date().toISOString() },
        };
      }
      return {
        success: false,
        error: {
          code: 'INVALID_SCHEMA',
          message: 'La respuesta del servidor no coincide con el esquema esperado.',
        },
      };
    }
  } catch (err) {
    console.warn(`[API Network Exception] ${urlString}:`, err);
    if (fallbackData !== undefined) {
      return {
        success: true,
        data: fallbackData,
        meta: { timestamp: new Date().toISOString() },
      };
    }
    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: 'No se pudo conectar con el servidor de El Trigal.',
      },
    };
  }
}
