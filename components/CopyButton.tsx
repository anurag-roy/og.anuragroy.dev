import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';

interface CopyButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const [buttonState, setButtonState] = useState<'copy' | 'copied'>('copy');
  const copyImageUrl = async () => {
    await navigator.clipboard.writeText(textToCopy);
    setButtonState('copied');
    setTimeout(() => {
      setButtonState('copy');
    }, 3000);
  };
  return (
    <button
      type="button"
      onClick={copyImageUrl}
      className="inline-flex items-center px-3 py-2 border border-emerald-700 shadow-sm text-sm leading-4 font-medium rounded-md text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
    >
      {buttonState === 'copy' ? (
        <>
          <ClipboardDocumentIcon
            className="-ml-0.5 mr-2 h-4 w-4"
            aria-hidden="true"
          />
          Copy
        </>
      ) : (
        <>
          <ClipboardDocumentCheckIcon
            className="-ml-0.5 mr-2 h-4 w-4"
            aria-hidden="true"
          />
          Copied!
        </>
      )}
    </button>
  );
}
