'use client';

import { LightbulbIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover';

export function Tips() {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="ml-auto"
            aria-label="Open usage tips"
            title="Tips on usage"
          />
        }
      >
        <LightbulbIcon />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80">
        <PopoverHeader>
          <PopoverTitle>Tips on usage</PopoverTitle>
          <PopoverDescription>
            A couple of useful details for customizing generated images.
          </PopoverDescription>
        </PopoverHeader>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            To hide an element that has a default value, pass a single space
            character as its input.
          </li>
          <li>Fields that accept image URLs also accept emojis.</li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
