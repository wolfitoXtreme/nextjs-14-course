import { SampleAT, SampleBT, TMealItem } from '@/types/types';

export interface SampleAI<P = SampleAT> {
  (args: P): string;
}

export interface SampleBI {
  (...args: SampleBT): string;
}

export interface IHeaderNavigationLink {
  href: string;
  children?: React.ReactNode;
}

export interface IMealsGrid {
  meals: TMealItem[];
}

export interface IImagePicker {
  label: string;
  name: string;
}
