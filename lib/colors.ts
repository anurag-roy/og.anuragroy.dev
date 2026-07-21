import themeColors from './og-theme-colors.json';

export type ThemeName = keyof typeof themeColors;
export type ThemeShade = keyof (typeof themeColors)[ThemeName];

export const themeNames = Object.keys(themeColors) as ThemeName[];

export function getThemeColor(theme: string, shade: ThemeShade) {
  const palette = themeColors[theme as ThemeName];

  if (!palette) {
    return themeColors.rose[shade];
  }

  return palette[shade];
}

export function getThemeLabel(theme: ThemeName) {
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}
