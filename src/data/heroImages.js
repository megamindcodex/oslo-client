// Hero image per page, keyed by route name (see router/index.js).
// Most pages will get a hero image at the top; not all will — pages without
// one should stay `null` and the component rendering the hero should skip
// itself when the value is null rather than showing a broken image.
// Populated with real Cloudinary URLs once available.
export const heroImages = {
  home: 'https://res.cloudinary.com/xltcxujw/image/upload/v1785855071/2023_kolleger_hvitt3_2_ms_vwmh4x.webp',
  about: 'https://res.cloudinary.com/xltcxujw/image/upload/v1785855072/beskaret_ous-hr-nadiaf-low_03_cokrx4.webp',
  services: null,
  facilities: null,
  specialists: 'https://res.cloudinary.com/xltcxujw/image/upload/v1785856979/specialist-hero-image_dc9zx4.webp',
  news: null,
  events: null,
  contact: 'https://res.cloudinary.com/xltcxujw/image/upload/v1785856366/contact-us-page-image_d0szye.webp'
}
