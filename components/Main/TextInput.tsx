import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toTitleCase } from '@/utils/utils';

interface TextInputProps {
  name: string;
  defaultValue?: string;
  placeholder: string;
  helpText?: string;
  isTextArea?: boolean;
}

export function TextInput({
  name,
  defaultValue,
  placeholder,
  helpText,
  isTextArea = false,
}: TextInputProps) {
  const descriptionId = helpText ? `${name}-description` : undefined;
  const sharedProps = {
    id: name,
    name,
    defaultValue,
    placeholder,
    'aria-describedby': descriptionId,
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{toTitleCase(name)}</Label>
      {isTextArea ? (
        <Textarea {...sharedProps} rows={4} />
      ) : (
        <Input {...sharedProps} type="text" />
      )}
      {helpText && (
        <p id={descriptionId} className="text-xs text-muted-foreground">
          {helpText}
        </p>
      )}
    </div>
  );
}
