import tailwindColors from './tailwind-colors.json';

export type ThemeName = keyof typeof tailwindColors;
export type ThemeShade = keyof (typeof tailwindColors)[ThemeName];

export const themeNames = Object.keys(tailwindColors) as ThemeName[];

export function getThemeColor(theme: string, shade: ThemeShade) {
  const palette = tailwindColors[theme as ThemeName];

  if (!palette) {
    return tailwindColors.rose[shade];
  }

  return palette[shade];
}

export function getThemeLabel(theme: ThemeName) {
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}
