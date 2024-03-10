import { twMerge } from 'tailwind-merge';

import TextButton from './TextButton';

export default function Button({ className, ...prop }) {
  return (
    <TextButton
      className={twMerge(`
      text-gray-300 bg-gray-600 rounded-lg hover:text-gray-400 hover:bg-gray-900 hover:outline-gray-400 hover:outline-double outline-2
      ${className ? className : ''}`)}
      {...prop}
    >
      {prop.children}
    </TextButton>
  );
}
