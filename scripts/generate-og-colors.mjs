import { formatHex, parse } from 'culori';
import fs from 'fs';

const css = fs.readFileSync(
  new URL('../node_modules/tailwindcss/theme.css', import.meta.url),
  'utf8'
);
const colors = {};

for (const match of css.matchAll(/--color-([a-z]+)-(\d+):\s*([^;]+);/g)) {
  const [, name, shade, value] = match;

  if (!colors[name]) {
    colors[name] = {};
  }

  colors[name][shade] = value.trim();
}

const og = {};

for (const [name, palette] of Object.entries(colors)) {
  og[name] = {
    200: formatHex(parse(palette['200'])),
    300: formatHex(parse(palette['300'])),
    600: formatHex(parse(palette['600'])),
  };
}

fs.writeFileSync(
  new URL('../lib/og-theme-colors.json', import.meta.url),
  `${JSON.stringify(og, null, 2)}\n`
);
