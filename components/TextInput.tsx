import type { Dispatch, SetStateAction } from 'react';
import { toTitleCase } from '../utils/utils';

interface TextInputProps {
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function TextInput({ name, value, setValue }: TextInputProps) {
  const nameInTitleCase = toTitleCase(name);
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {nameInTitleCase}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}
