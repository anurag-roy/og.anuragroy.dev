import { toTitleCase } from '../../utils/utils';

interface TextInputProps {
  name: string;
  defaultValue?: string;
  placeHolder: string;
  helpText?: string;
  isTextArea?: boolean;
}

export function TextInput({
  name,
  defaultValue,
  placeHolder,
  helpText,
  isTextArea = false,
}: TextInputProps) {
  const nameInTitleCase = toTitleCase(name);
  const InputTag = isTextArea ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {nameInTitleCase}
      </label>
      <div className="mt-1">
        <InputTag
          type={isTextArea ? undefined : 'text'}
          rows={isTextArea ? 4 : undefined}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeHolder}
          aria-describedby={helpText ? `${name}-description` : undefined}
          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-lg"
        />
      </div>
      {helpText && (
        <p className="mt-2 text-sm text-gray-500" id={`${name}-description`}>
          {helpText}
        </p>
      )}
    </div>
  );
}
