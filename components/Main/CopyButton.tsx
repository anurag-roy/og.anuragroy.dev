import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CopyButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyImageUrl = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      alert(
        'Sorry, cannot copy the URL to your clipboard. Please select and copy it manually.'
      );
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={copyImageUrl}
      disabled={!textToCopy}
    >
      {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
      {copied ? 'Copied' : 'Copy'}
    </Button>
  );
}
