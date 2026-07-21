import ogThemeColors from './og-theme-colors.json';

type OgShade = '200' | '300' | '600';

export function getOgThemeColor(theme: string, shade: OgShade) {
  const palette = ogThemeColors[theme as keyof typeof ogThemeColors];

  if (!palette) {
    return ogThemeColors.rose[shade];
  }

  return palette[shade];
}
