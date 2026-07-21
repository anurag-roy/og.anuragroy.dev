'use client';

import { ArrowRightIcon } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CopyButton } from './CopyButton';
import { TextInput } from './TextInput';
import { ThemeComboBox } from './ThemeComboBox';

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
    <main className="grid flex-1 gap-6 py-6 sm:py-8 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.4fr)] lg:gap-8 lg:py-10">
      <Card className="h-fit">
        <CardHeader>
          <CardTitle>Customize image</CardTitle>
          <CardDescription>
            Set the content and color theme for your OpenGraph image.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
            <CardDescription>
              Your image updates when you submit the form.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader className="grid grid-cols-[1fr_auto] items-center">
            <div>
              <CardTitle>Generated URL</CardTitle>
              <CardDescription>Ready to paste into your metadata.</CardDescription>
            </div>
            <CopyButton textToCopy={imageUrl} />
          </CardHeader>
          <CardContent>
            <code className="block max-h-32 overflow-auto break-all rounded-2xl bg-muted px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground select-all">
              {imageUrl || 'The generated URL will appear here.'}
            </code>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
