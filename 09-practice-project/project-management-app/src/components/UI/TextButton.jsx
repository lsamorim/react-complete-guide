import { twMerge } from 'tailwind-merge';

export default function TextButton({ className, ...prop }) {
  return (
    <button
      className={twMerge(`
      text-gray-900 rounded-lg min-w-36 p-2 hover:text-black
      ${className ? className : ''}`)}
      {...prop}
    >
      {prop.children}
    </button>
  );
}
