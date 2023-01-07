import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { classNames, toTitleCase } from '../../utils/utils';

// All tailwind color names
const themes = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;

interface ThemeComboBoxProps {
  defaultValue: string;
}

export function ThemeComboBox({ defaultValue }: ThemeComboBoxProps) {
  const [query, setQuery] = useState('');

  const filteredThemes =
    query === ''
      ? themes
      : themes.filter((theme) => {
          return theme.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" defaultValue={defaultValue} name="theme">
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Theme
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(theme: string) => toTitleCase(theme)}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredThemes.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredThemes.map((theme) => (
              <Combobox.Option
                key={theme}
                value={theme}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-2 pr-9 mx-1 rounded-lg',
                    active ? 'bg-gray-100' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      {/* Listed all classes so they get detected and added to the tailwind css bundle */}
                      {/* bg-slate-600 bg-gray-600 bg-zinc-600 bg-neutral-600 bg-stone-600 bg-red-600 bg-orange-600 bg-amber-600 bg-yellow-600 bg-lime-600 bg-green-600 bg-emerald-600 bg-teal-600 bg-cyan-600 bg-sky-600 bg-blue-600 bg-indigo-600 bg-violet-600 bg-purple-600 bg-fuchsia-600 bg-pink-600 bg-rose-600 */}
                      <span
                        className={`h-6 w-6 flex-shrink-0 rounded-full bg-${theme}-600`}
                      ></span>
                      <span
                        className={classNames(
                          'ml-3 truncate capitalize',
                          selected && 'font-semibold'
                        )}
                      >
                        {theme}
                      </span>
                    </div>

                    {selected && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
