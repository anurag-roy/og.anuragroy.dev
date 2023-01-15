import { LightBulbIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Tips } from './Tips';

export function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="flex flex-row items-center gap-2 pb-4 border-b-2 sm:gap-4 lg:pb-8">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className="text-primary-600"
      >
        <path
          fill="currentColor"
          d="M19 2H5a3.009 3.009 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887l.888-.888a3.008 3.008 0 0 1 4.242 0L22 15.86V5a3.009 3.009 0 0 0-3-3z"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.009 3.009 0 0 0 3 3h14a3 3 0 0 0 2.16-.92L10.12 9.98z"
        />
        <path
          fill="currentColor"
          d="m22 15.858l-3.879-3.879a3.008 3.008 0 0 0-4.242 0l-.888.888l8.165 8.209c.542-.555.845-1.3.844-2.076v-3.142z"
          opacity=".25"
        />
      </svg>
      <h1 className="font-bold font-mono text-2xl text-gray-900 lg:text-4xl">
        og.anuragroy.dev
      </h1>
      <button
        onClick={() => setIsAboutOpen(!isAboutOpen)}
        className="ml-auto p-1 rounded-md"
        title="Tips on usage"
      >
        <LightBulbIcon className="h-6 w-6 text-gray-400 hover:text-gray-600" />
      </button>
      <Tips open={isAboutOpen} setOpen={setIsAboutOpen} />
    </header>
  );
}
