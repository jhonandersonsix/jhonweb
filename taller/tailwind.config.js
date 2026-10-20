// Configuración de Tailwind de la web. La misma que antes estaba dentro de index.html.
module.exports = {
  content: ['../web/*.html'],
  theme: { extend: {
    fontFamily: { sans: ['"Plus Jakarta Sans"','system-ui','-apple-system','Segoe UI','Roboto','sans-serif'] },
    colors: {
      ink: { 950:'#0B0B0D', 900:'#111114', 800:'#17171B', 700:'#1F1F25' },
      // Gris de textos pequeños: antes #71717a; aclarado para cumplir el contraste mínimo de accesibilidad (4.5 a 1)
      zinc: { 500:'#84848e' }
    },
    keyframes: {
      floaty: { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-10px)' } },
      marquee: { to: { transform:'translateX(-50%)' } }
    },
    animation: { floaty:'floaty 6s ease-in-out infinite', marquee:'marquee 42s linear infinite' }
  } }
}
