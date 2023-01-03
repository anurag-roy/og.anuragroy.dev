import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { classNames, toTitleCase } from '../utils/utils';

const colors = [
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
];

export function ColorComboBox() {
  const [query, setQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState('rose');

  const filteredColors =
    query === ''
      ? colors
      : colors.filter((color) => {
          return color.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selectedColor} onChange={setSelectedColor}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Color
      </Combobox.Label>
      {/*  */}
      <div className="hidden bg-slate-600 bg-gray-600 bg-zinc-600 bg-neutral-600 bg-stone-600 bg-red-600 bg-orange-600 bg-amber-600 bg-yellow-600 bg-lime-600 bg-green-600 bg-emerald-600 bg-teal-600 bg-cyan-600 bg-sky-600 bg-blue-600 bg-indigo-600 bg-violet-600 bg-purple-600 bg-fuchsia-600 bg-pink-600 bg-rose-600"></div>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(color: string) => toTitleCase(color)}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredColors.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredColors.map((color) => (
              <Combobox.Option
                key={color}
                value={color}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-gray-100' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <span
                        className={`h-6 w-6 flex-shrink-0 rounded-sm bg-${color}-600`}
                      ></span>
                      <span
                        className={classNames(
                          'ml-3 truncate capitalize',
                          selected && 'font-semibold'
                        )}
                      >
                        {color}
                      </span>
                    </div>

                    {selected && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-emerald-600">
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
