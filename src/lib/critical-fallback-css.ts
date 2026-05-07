/**
 * Stil minim în <head> — când pe mobil lipsesc chunk-urile Tailwind (HTML vechi în cache
 * față de hash-uri noi la `/_next/static`), clasele `hidden` / `md:flex` nu se aplică:
 * nav-ul desktop apare lipit („ServiciiPortofoliu…”) pe fundal alb implicit.
 * Acest CSS folosește `data-nextera-*` din Navbar și media queries, fără a depinde de Tailwind.
 */
export const criticalNavbarFallbackCss = `
html{background-color:#030303;color:#e4e4e7;}
body{margin:0;min-height:100dvh;background-color:#030303;}
@media (max-width:767.98px){
  [data-nextera-desktop-nav]{display:none!important;}
  [data-nextera-mobile-toggle]{display:inline-flex!important;}
  [data-nextera-mobile-panel][data-open="false"]{display:none!important;}
  [data-nextera-mobile-panel][data-open="true"]{display:block!important;}
}
@media (min-width:768px){
  [data-nextera-mobile-toggle],
  [data-nextera-mobile-panel]{display:none!important;}
  [data-nextera-desktop-nav]{display:flex!important;align-items:center;gap:1.75rem;}
}
`.trim();
