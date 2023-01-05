import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { CopyButton } from './CopyButton';
import { TextInput } from './TextInput';
import { ThemeComboBox } from './ThemeComboBox';

export function Main() {
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
    <main className="py-12 grid grid-cols-[1fr_2fr] gap-x-20">
      {/* LHS Form */}
      <div className="flex flex-col gap-6">
        <ThemeComboBox selectedTheme={theme} setSelectedTheme={setTheme} />
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
        <button
          type="button"
          onClick={() => setImageUrl(getImageUrl())}
          className="ml-auto mt-8 inline-flex items-center px-4 py-2 text-base font-medium rounded-full text-white animated-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
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
