import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface TipsProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Tips({ open, setOpen }: TipsProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tips on usage</DialogTitle>
          <DialogDescription>
            A couple of useful details for customizing generated images.
          </DialogDescription>
        </DialogHeader>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            To hide an element that has a default value, pass a single space
            character as its input.
          </li>
          <li>Fields that accept image URLs also accept emojis.</li>
        </ul>
        <DialogFooter>
          <DialogClose render={<Button className="w-full sm:w-auto" />}>
            Got it
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
