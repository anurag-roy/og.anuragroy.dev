import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox';
import { Label } from '@/components/ui/label';

const themeSwatches = {
  slate: 'bg-slate-600',
  gray: 'bg-gray-600',
  zinc: 'bg-zinc-600',
  neutral: 'bg-neutral-600',
  stone: 'bg-stone-600',
  red: 'bg-red-600',
  orange: 'bg-orange-600',
  amber: 'bg-amber-600',
  yellow: 'bg-yellow-600',
  lime: 'bg-lime-600',
  green: 'bg-green-600',
  emerald: 'bg-emerald-600',
  teal: 'bg-teal-600',
  cyan: 'bg-cyan-600',
  sky: 'bg-sky-600',
  blue: 'bg-blue-600',
  indigo: 'bg-indigo-600',
  violet: 'bg-violet-600',
  purple: 'bg-purple-600',
  fuchsia: 'bg-fuchsia-600',
  pink: 'bg-pink-600',
  rose: 'bg-rose-600',
} as const;

type ThemeName = keyof typeof themeSwatches;

interface ThemeOption {
  label: string;
  value: ThemeName;
}

const themes: ThemeOption[] = (Object.keys(themeSwatches) as ThemeName[]).map(
  (value) => ({
    label: value.charAt(0).toUpperCase() + value.slice(1),
    value,
  }),
);

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
                    className={`size-3 rounded-full ${themeSwatches[theme.value]}`}
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
