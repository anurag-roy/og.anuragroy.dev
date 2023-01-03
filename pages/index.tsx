import { SparklesIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';
import { useState } from 'react';
import { ColorComboBox } from '../components/ColorComboBox';
import { TextInput } from '../components/TextInput';

export default function Home() {
  const BASE_IMAGE_API_URL = '/api/og';

  const [title, setTitle] = useState('OG Image');
  const [color, setColor] = useState('rose');
  const [imageUrl, setImageUrl] = useState(BASE_IMAGE_API_URL);

  const updateImageUrl = () => {
    const params = [];
    if (title) {
      params.push(`title=${title}`);
    }
    if (color) {
      params.push(`color=${color}`);
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
      <main className="h-full grid grid-cols-2 gap-x-10 items-center">
        {/* LHS Form */}
        <div className="space-y-6">
          <TextInput name="title" value={title} setValue={setTitle} />
          <ColorComboBox selectedColor={color} setSelectedColor={setColor} />
          <button
            type="button"
            onClick={updateImageUrl}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <SparklesIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Generate
          </button>
        </div>
        {/* RHS Output */}
        <div>
          <img src={imageUrl} alt="OG Image" className="rounded-md" />
        </div>
      </main>
    </>
  );
}
