import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';
import { useState } from 'react';
import { ColorComboBox } from '../components/ColorComboBox';
import { CopyButton } from '../components/CopyButton';
import { TextInput } from '../components/TextInput';

export default function Home() {
  const BASE_IMAGE_API_URL = '/api/og';

  const [title, setTitle] = useState('OG Image');
  const [description, setDescription] = useState(
    'Generate open graph images on the fly with custom titles, descriptions and color schemes!'
  );
  const [color, setColor] = useState('violet');
  const [imageUrl, setImageUrl] = useState(BASE_IMAGE_API_URL);

  const updateImageUrl = () => {
    const params = [];
    if (title) {
      params.push(`title=${encodeURIComponent(title)}`);
    }
    if (description) {
      params.push(`description=${encodeURIComponent(description)}`);
    }
    if (color) {
      params.push(`color=${encodeURIComponent(color)}`);
    }

    setImageUrl(`${BASE_IMAGE_API_URL}?${params.join('&')}`);
  };

  return (
    <>
      <Head>
        <title>OG Image Generator</title>
        <meta
          name="description"
          content="Open graph image generator for anuragroy.dev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full max-w-6xl mx-auto grid grid-cols-[1fr_2fr] gap-x-20 items-center">
        {/* LHS Form */}
        <div className="flex flex-col gap-6">
          <TextInput name="title" value={title} setValue={setTitle} />
          <TextInput
            name="description"
            value={description}
            setValue={setDescription}
            isTextArea={true}
          />
          <ColorComboBox selectedColor={color} setSelectedColor={setColor} />
          <button
            type="button"
            onClick={updateImageUrl}
            className="ml-auto mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Preview and generate URL
            <ArrowLongRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        {/* RHS Output */}
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-gray-700">Preview</p>
            <img src={imageUrl} alt="OG Image" className="mt-1 rounded-md" />
          </div>
          <div>
            <div className="flex justify-between items-end">
              <p className="text-sm font-medium text-gray-700">Generated URL</p>
              <CopyButton textToCopy={imageUrl} />
            </div>
            <code className="block mt-2 p-4 bg-gray-200 break-all select-all rounded-md">
              {imageUrl}
            </code>
          </div>
        </div>
      </main>
    </>
  );
}
