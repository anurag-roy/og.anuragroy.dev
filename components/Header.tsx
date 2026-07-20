import { LightbulbIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tips } from './Tips';

export function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <header className="flex items-center gap-3 pb-5 sm:pb-7">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
          <svg width="23" height="23" viewBox="0 0 24 24" aria-hidden="true">
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
        </div>
        <div>
          <h1 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
            og.anuragroy.dev
          </h1>
          <p className="hidden text-sm text-muted-foreground sm:block">
            Dynamic OpenGraph image generator
          </p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setIsAboutOpen(true)}
          aria-label="Open usage tips"
          title="Tips on usage"
        >
          <LightbulbIcon />
        </Button>
        <Tips open={isAboutOpen} setOpen={setIsAboutOpen} />
      </header>
      <Separator />
    </>
  );
}
