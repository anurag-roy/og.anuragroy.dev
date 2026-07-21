import { formatHex, parse } from 'culori';
import fs from 'fs';

const colors = JSON.parse(
  fs.readFileSync(new URL('../lib/tailwind-colors.json', import.meta.url), 'utf8')
);
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
