import { z } from 'zod';

const phoneRegex = /^\+?[1-9]\d{6,14}$/;

export const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
    .max(80, { message: 'El nombre no puede exceder los 80 caracteres.' }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Introduce un correo electrónico válido.' })
    .max(254, { message: 'El correo electrónico es demasiado largo.' }),
  phone: z
    .string()
    .trim()
    .refine((val) => val === '' || phoneRegex.test(val.replace(/[\s()-]/g, '')), {
      message: 'Introduce un número de teléfono válido (7 a 15 dígitos).',
    })
    .optional(),
  subject: z
    .string()
    .trim()
    .min(3, { message: 'El asunto debe tener al menos 3 caracteres.' })
    .max(100, { message: 'El asunto no puede exceder los 100 caracteres.' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' })
    .max(2000, { message: 'El mensaje no puede exceder los 2000 caracteres.' }),
  locale: z.enum(['es', 'en']),
  website: z.string().max(0, { message: 'Spam detectado.' }).optional(),
});

export const EventTypeEnum = z.enum([
  'birthday',
  'baptism',
  'communion',
  'confirmation',
  'wedding',
  'graduation',
  'corporate',
  'other',
]);

export const CustomCakeFormSchema = z.object({
  customerName: z
    .string()
    .trim()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
    .max(80, { message: 'El nombre no puede exceder los 80 caracteres.' }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Introduce un correo electrónico válido.' }),
  phone: z
    .string()
    .trim()
    .refine((val) => phoneRegex.test(val.replace(/[\s()-]/g, '')), {
      message: 'Introduce un número de teléfono válido con código de área (ej: 3478429351).',
    }),
  eventDate: z.string().refine((val) => {
    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 730);
    return !isNaN(selectedDate.getTime()) && selectedDate >= today && selectedDate <= maxDate;
  }, { message: 'La fecha del evento debe ser entre hoy y los próximos 2 años.' }),
  eventType: EventTypeEnum,
  servings: z.coerce
    .number()
    .int({ message: 'Las porciones deben ser un número entero.' })
    .min(1, { message: 'Mínimo 1 porción.' })
    .max(500, { message: 'Máximo 500 porciones.' }),
  budgetCents: z.coerce
    .number()
    .int()
    .min(0)
    .max(1000000)
    .optional(),
  flavor: z.string().trim().max(80).optional(),
  filling: z.string().trim().max(80).optional(),
  theme: z.string().trim().max(120).optional(),
  message: z.string().trim().max(2000).optional(),
  referenceMediaIds: z.array(z.string()).max(5).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar los términos para enviar la solicitud.' }),
  }),
  locale: z.enum(['es', 'en']),
  website: z.string().max(0, { message: 'Spam detectado.' }).optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
export type CustomCakeFormData = z.infer<typeof CustomCakeFormSchema>;
