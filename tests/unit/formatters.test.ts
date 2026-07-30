import { describe, expect, it } from 'vitest';
import { formatPriceCents } from '../../src/utils/formatters';

describe('formatPriceCents Utility', () => {
  it('converts cents to USD currency string correctly', () => {
    expect(formatPriceCents(1250, 'es')).toContain('12.50');
    expect(formatPriceCents(450, 'en')).toBe('$4.50');
    expect(formatPriceCents(10000, 'en')).toBe('$100.00');
  });

  it('handles null, undefined, or NaN gracefully', () => {
    expect(formatPriceCents(null)).toBe('');
    expect(formatPriceCents(undefined)).toBe('');
    expect(formatPriceCents(NaN)).toBe('');
  });
});
