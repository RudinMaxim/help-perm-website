export default function manifest() {
  return {
    name: 'Samovartime',
    short_name: 'Samovartime',
    description: 'Поставщик весового чая в Перми с доставкой по всей России',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  };
}
