import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { FormEvent, useEffect, useState } from 'react';
import { CopyButton } from './CopyButton';
import { TextInput } from './TextInput';
import { ThemeComboBox } from './ThemeComboBox';

const getBaseImageUrl = () => window.location.origin + '/api';

export function Main() {
  const [imageUrl, setImageUrl] = useState('');

  const defaultValues = {
    theme: 'rose',
    title: 'Dynamic OG Images with @vercel/og',
    description:
      "Taking a look at Vercel's new library to generate dynamic OpenGraph images on the fly!",
    logo: '🐦',
  };

  useEffect(() => {
    const initialSearchParams = new URLSearchParams(defaultValues).toString();
    const initialImageUrl = `${getBaseImageUrl()}?${initialSearchParams}`;
    setImageUrl(initialImageUrl);
  }, []);

  const updateImageUrl = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    for (let [name, value] of Array.from(formData.entries())) {
      if (value === '') formData.delete(name);
    }
    const searchParams = new URLSearchParams(formData as any).toString();

    setImageUrl(`${getBaseImageUrl()}?${searchParams}`);
  };

  return (
    <main className="py-6 grid grid-cols-1 gap-y-8 lg:py-12 lg:grid-cols-[1fr_2fr] lg:gap-x-20">
      {/* LHS Form */}
      <form
        onSubmit={updateImageUrl}
        className="max-w-md mx-auto w-full flex flex-col gap-4 lg:gap-6"
      >
        <ThemeComboBox defaultValue={defaultValues.theme} />
        <TextInput
          name="title"
          defaultValue={defaultValues.title}
          placeHolder="Image title"
        />
        <TextInput
          name="description"
          defaultValue={defaultValues.description}
          placeHolder="Image description"
          isTextArea={true}
        />
        <TextInput name="avatar" placeHolder="https://og.com/image.png" />
        <TextInput name="author" placeHolder="Jane Smith" />
        <TextInput
          name="logo"
          defaultValue={defaultValues.logo}
          placeHolder="https://og.com/logo.svg"
        />
        <button
          type="submit"
          className="mx-auto mt-4 lg:mt-6 inline-flex items-center px-4 py-2 text-base font-medium rounded-full text-white animated-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Update preview and URL
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 hidden lg:inline-block"
            aria-hidden="true"
          />
        </button>
      </form>
      {/* RHS Output */}
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-gray-700">Preview</p>
          <img
            src={imageUrl}
            alt="Generated OG image preview"
            loading="lazy"
            className="mt-1 rounded-lg aspect-[1200/630] w-full"
          />
        </div>
        <div>
          <div className="flex justify-between items-end">
            <p className="text-sm font-medium text-gray-700">Generated URL</p>
            <CopyButton textToCopy={imageUrl} />
          </div>
          <code className="block mt-2 p-4 bg-gray-200 break-all select-all rounded-lg">
            {imageUrl}
          </code>
        </div>
      </div>
    </main>
  );
}
