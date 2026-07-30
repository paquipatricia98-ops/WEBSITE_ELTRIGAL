import { describe, expect, it } from 'vitest';
import { ContactFormSchema, CustomCakeFormSchema } from '../../src/schemas/forms';

describe('Form Zod Validation Schemas', () => {
  describe('ContactFormSchema', () => {
    it('validates a correct contact payload', () => {
      const valid = {
        name: 'María Cárdenas',
        email: 'maria@example.com',
        phone: '3478429351',
        subject: 'Consulta de catering',
        message: 'Hola, quisiera cotizar bocaditos para 50 personas.',
        locale: 'es',
      };
      const result = ContactFormSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it('rejects short messages and invalid emails', () => {
      const invalid = {
        name: 'M',
        email: 'bad-email',
        subject: 'Hi',
        message: 'Short',
        locale: 'es',
      };
      const result = ContactFormSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it('rejects honeypot field if filled with spam text', () => {
      const spam = {
        name: 'Spammer',
        email: 'spam@spam.com',
        subject: 'Buy cheap items',
        message: 'Spam message content here 1234567890',
        locale: 'es',
        website: 'http://spam-link.com',
      };
      const result = ContactFormSchema.safeParse(spam);
      expect(result.success).toBe(false);
    });
  });

  describe('CustomCakeFormSchema', () => {
    it('validates a correct custom cake payload', () => {
      const today = new Date();
      today.setDate(today.getDate() + 7);
      const eventDateStr = today.toISOString().split('T')[0];

      const valid = {
        customerName: 'Carlos Villacís',
        email: 'carlos@example.com',
        phone: '+13478429351',
        eventDate: eventDateStr,
        eventType: 'birthday',
        servings: 25,
        flavor: 'Tres Leches',
        filling: 'Manjar',
        theme: 'Ecuador',
        consent: true,
        locale: 'es',
      };

      const result = CustomCakeFormSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it('fails when consent is false or servings is out of bounds', () => {
      const today = new Date();
      today.setDate(today.getDate() + 7);
      const eventDateStr = today.toISOString().split('T')[0];

      const invalid = {
        customerName: 'Carlos',
        email: 'carlos@example.com',
        phone: '3478429351',
        eventDate: eventDateStr,
        eventType: 'birthday',
        servings: 0, // invalid (min 1)
        consent: false, // invalid (must be true)
        locale: 'es',
      };

      const result = CustomCakeFormSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });
  });
});
