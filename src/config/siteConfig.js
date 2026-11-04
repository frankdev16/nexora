export const siteConfig = {
  name: 'NEXORA',
  tagline: 'Technology. Elevated.',
  description:
    'Discover smartphones, computers, accessories and everyday technology at NEXORA.',

  country: 'Uganda',
  city: 'Kampala',

  currency: 'UGX',
  locale: 'en-UG',

  contact: {
    phone: '+256 700 000 000',
    whatsapp: '256700000000',
    email: 'hello@nexora.ug',
  },

  address: {
    street: 'Business address coming soon',
    city: 'Kampala',
    country: 'Uganda',
  },

  socialMedia: {
    instagram: '#',
    facebook: '#',
    tiktok: '#',
    youtube: '#',
  },

  delivery: {
    freeShippingMinimum: 500000,
    estimatedDays: '1–3 business days',
  },

  businessHours: {
    weekdays: 'Monday – Friday: 9:00 AM – 6:00 PM',
    saturday: 'Saturday: 10:00 AM – 4:00 PM',
    sunday: 'Sunday: Closed',
  },
}

export function formatPrice(amount) {
  return new Intl.NumberFormat(siteConfig.locale, {
    style: 'currency',
    currency: siteConfig.currency,
    maximumFractionDigits: 0,
  }).format(amount)
}