import { modal } from '@/components/Modal';
import { pages } from '@/components/pages';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const groupBy = <T>(array: T[], callback: (item: T) => string) => {
  return array.reduce((result, item) => {
    const key = callback(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {} as Record<string, T[]>);
};

export const latinize = (str: string) => {
  return str
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getName = (path: string) => {
  const name = pages.find((page) => page.path === path)?.name;
  return capitalize(name || path);
};

export const shouldRegister = () => {
  modal.info({
    title: 'Vous devez être connecté',
    message: 'Pour marquer un boss comme fait, vous devez être connecté',
  });
};
