import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox';
import { Label } from '@/components/ui/label';
import {
  getThemeColor,
  getThemeLabel,
  themeNames,
  type ThemeName,
} from '@/lib/colors';

interface ThemeOption {
  label: string;
  value: ThemeName;
}

const themes: ThemeOption[] = themeNames.map((value) => ({
  label: getThemeLabel(value),
  value,
}));

interface ThemeComboBoxProps {
  defaultValue: ThemeName;
}

export function ThemeComboBox({ defaultValue }: ThemeComboBoxProps) {
  const defaultTheme = themes.find((theme) => theme.value === defaultValue);

  return (
    <div className="space-y-2">
      <Label htmlFor="theme">Theme</Label>
      <Combobox items={themes} defaultValue={defaultTheme} name="theme">
        <ComboboxInput id="theme" className="w-full" placeholder="Select a theme" />
        <ComboboxContent>
          <ComboboxEmpty>No theme found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => {
              const theme = item as ThemeOption;

              return (
                <ComboboxItem key={theme.value} value={theme}>
                  <span
                    className="size-3 rounded-full"
                    style={{
                      backgroundColor: getThemeColor(theme.value, '600'),
                    }}
                  />
                  <span>{theme.label}</span>
                </ComboboxItem>
              );
            }}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
