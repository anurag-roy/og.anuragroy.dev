'use client';

import { ArrowRightIcon } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/main/copy-button';
import { TextInput } from '@/components/main/text-input';
import { ThemeComboBox } from '@/components/main/theme-combo-box';

const getBaseImageUrl = () => `${window.location.origin}/api`;

export function Main() {
  const [imageUrl, setImageUrl] = useState('');

  const defaultValues = {
    theme: 'rose' as const,
    title: 'Dynamic OG Images with @vercel/og',
    description:
      "Taking a look at Vercel's new library to generate dynamic OpenGraph images on the fly",
    logo: '🐦',
  };

  useEffect(() => {
    const initialSearchParams = new URLSearchParams(defaultValues).toString();
    setImageUrl(`${getBaseImageUrl()}?${initialSearchParams}`);
  }, []);

  const updateImageUrl = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    for (const [name, value] of Array.from(formData.entries())) {
      if (value === '') formData.delete(name);
    }

    const searchParams = new URLSearchParams(
      Array.from(formData.entries()) as Array<[string, string]>
    ).toString();

    setImageUrl(`${getBaseImageUrl()}?${searchParams}`);
  };

  return (
    <main className="grid flex-1 gap-8 py-6 sm:py-8 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.4fr)] lg:gap-10 lg:py-10">
      <section className="h-fit space-y-5">
        <div className="space-y-1">
          <h2 className="font-heading text-base font-medium">Customize image</h2>
          <p className="text-sm text-muted-foreground">
            Set the content and color theme for your OpenGraph image.
          </p>
        </div>
        <form onSubmit={updateImageUrl} className="space-y-5">
          <ThemeComboBox defaultValue={defaultValues.theme} />
          <TextInput
            name="title"
            defaultValue={defaultValues.title}
            placeholder="Image title"
          />
          <TextInput
            name="description"
            defaultValue={defaultValues.description}
            placeholder="Image description"
            isTextArea
          />
          <TextInput name="avatar" placeholder="https://og.com/image.png" />
          <TextInput name="author" placeholder="Jane Smith" />
          <TextInput
            name="logo"
            defaultValue={defaultValues.logo}
            placeholder="https://og.com/logo.svg"
          />
          <Button type="submit" size="lg" className="w-full">
            Update preview
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </form>
      </section>

      <div className="space-y-8">
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="font-heading text-base font-medium">Preview</h2>
            <p className="text-sm text-muted-foreground">
              Your image updates when you submit the form.
            </p>
          </div>
          <div className="aspect-[1200/630] overflow-hidden rounded-3xl bg-muted ring-1 ring-border">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Generated OpenGraph image preview"
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
                Preparing preview…
              </div>
            )}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-heading text-base font-medium">Generated URL</h2>
              <p className="text-sm text-muted-foreground">
                Ready to paste into your metadata.
              </p>
            </div>
            <CopyButton textToCopy={imageUrl} />
          </div>
          <code className="block max-h-32 overflow-auto break-all rounded-2xl bg-muted px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground select-all">
            {imageUrl || 'The generated URL will appear here.'}
          </code>
        </section>
      </div>
    </main>
  );
}
