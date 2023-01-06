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
    try {
      await navigator.clipboard.writeText(textToCopy);
      setButtonState('copied');
      setTimeout(() => {
        setButtonState('copy');
      }, 1000);
    } catch (error) {
      alert(
        'Sorry, cannot copy URL to your clipboard. Please select and copy the URL manually.'
      );
    }
  };
  return (
    <button
      type="button"
      onClick={copyImageUrl}
      className="inline-flex items-center px-3 py-2 border text-sm leading-4 font-medium rounded-full text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
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
