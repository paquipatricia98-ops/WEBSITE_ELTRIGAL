export const SITE_CONFIG = {
  name: 'Panadería y Pastelería El Trigal',
  legalName: 'Panadería y Pastelería El Trigal LLC',
  description: {
    es: 'Sabores auténticos de Ecuador en Orange, NJ: pan fresco, postres tradicionales y pasteles personalizados.',
    en: 'Authentic flavors of Ecuador in Orange, NJ: fresh bread, traditional desserts, and custom cakes.',
  },
  address: {
    street: '23 S Essex Ave',
    suiteConfirmed: false, // Flag to indicate if 'Ste E' needs confirmation prior to production release
    suite: 'Ste E',
    city: 'Orange',
    state: 'NJ',
    zip: '07050',
    county: 'Essex County',
    fullFormatted: '23 S Essex Ave, Orange, NJ 07050',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Panaderia+y+Pasteleria+El+Trigal+23+S+Essex+Ave+Orange+NJ+07050',
  },
  phone: {
    display: '(862) 704-2116',
    e164: '+18627042116',
    tel: 'tel:+18627042116',
    
    whatsappDisplay: '(347) 842-9351',
    whatsappE164: '+13478429351',
    whatsapp: 'https://wa.me/13478429351',

    businessDisplay: '(862) 704-2116',
    businessE164: '+18627042116',
    businessTel: 'tel:+18627042116',
  },
  email: 'eltrigalbakery2024@gmail.com',
  geo: {
    latitude: 40.7753,
    longitude: -74.2329,
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61556764960773',
    instagram: 'https://www.instagram.com/bakery.eltrigal/',
    tiktok: 'https://www.tiktok.com/@bakery.eltrigal',
    googleBusiness: 'https://www.google.com/maps/search/?api=1&query=Panaderia+y+Pasteleria+El+Trigal+23+S+Essex+Ave+Orange+NJ+07050',
  },
  hours: [
    { days: { es: 'Lunes a Sábado', en: 'Monday to Saturday' }, hours: '6:00 AM - 8:00 PM' },
    { days: { es: 'Domingo', en: 'Sunday' }, hours: '6:00 AM - 7:00 PM' },
  ],
  ordering: {
    doordashUrl: 'https://www.doordash.com/store/panaderia-y-pasteleria-el-trigal-orange-33062059/54896547',
    ubereatsUrl: 'https://www.ubereats.com/store/panaderia-y-pasteleria-el-trigal/gDo8qlwkUaiHR_z3ww21_A',
  },
  serviceAreas: ['Orange, NJ', 'East Orange, NJ', 'West Orange, NJ', 'South Orange, NJ', 'Essex County, NJ'],
};
