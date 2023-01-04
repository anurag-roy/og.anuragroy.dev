import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';
import { useState } from 'react';
import { CopyButton } from '../components/CopyButton';
import { TextInput } from '../components/TextInput';
import { ThemeComboBox } from '../components/ThemeComboBox';

export default function Home() {
  const BASE_IMAGE_API_URL = '/api/og';

  const [title, setTitle] = useState('OG Card Title');
  const [description, setDescription] = useState(
    'Generate beautiful open graph cards on the fly with custom content and color themes, being used to power anuragroy.dev'
  );
  const [authorImage, setAuthorImage] = useState('');
  const [author, setAuthor] = useState('');
  const [logo, setLogo] = useState('🐦');
  const [theme, setTheme] = useState('rose');

  const getImageUrl = () => {
    const params = [];
    if (title) {
      params.push(`title=${encodeURIComponent(title)}`);
    }
    if (description) {
      params.push(`description=${encodeURIComponent(description)}`);
    }
    if (authorImage) {
      params.push(`authorImage=${encodeURIComponent(authorImage)}`);
    }
    if (author) {
      params.push(`author=${encodeURIComponent(author)}`);
    }
    if (logo) {
      params.push(`logo=${encodeURIComponent(logo)}`);
    }
    if (theme) {
      params.push(`theme=${encodeURIComponent(theme)}`);
    }

    return `${BASE_IMAGE_API_URL}?${params.join('&')}`;
  };

  const [imageUrl, setImageUrl] = useState(getImageUrl());

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
      <main className="h-full max-w-6xl mx-auto grid grid-cols-[1fr_2fr] gap-x-20">
        {/* LHS Form */}
        <div className="flex flex-col gap-6">
          <TextInput
            name="title"
            value={title}
            setValue={setTitle}
            placeHolder="Image title"
          />
          <TextInput
            name="description"
            value={description}
            setValue={setDescription}
            placeHolder="Image description"
            isTextArea={true}
          />
          <TextInput
            name="author image"
            value={authorImage}
            setValue={setAuthorImage}
            placeHolder="https://og.com/image.png"
          />
          <TextInput
            name="author"
            value={author}
            setValue={setAuthor}
            placeHolder="Jane Smith"
          />
          <TextInput
            name="logo"
            value={logo}
            setValue={setLogo}
            placeHolder="https://og.com/logo.svg"
          />
          <ThemeComboBox selectedTheme={theme} setSelectedTheme={setTheme} />
          <button
            type="button"
            onClick={() => setImageUrl(getImageUrl())}
            className="ml-auto mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Update preview and URL
            <ArrowLongRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        {/* RHS Output */}
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-gray-700">Preview</p>
            <img
              src={imageUrl}
              alt="Generated OG image preview"
              className="mt-1 rounded-md aspect-[1200/630] w-full"
            />
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
