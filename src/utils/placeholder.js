// Simple SVG placeholder generator used across the app to avoid external image hosts
export function placeholderFor(name = 'Prod', w = 800, h = 600) {
  const initials = (name || 'Prod')
    .toString()
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const bg = '#E5E7EB'; // tailwind gray-200
  const fg = '#343A40'; // dark gray
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Roboto, Arial' font-size='${Math.max(24, Math.floor(w / 18))}' fill='${fg}'>${initials}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
