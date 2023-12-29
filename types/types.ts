export type SampleAT = {
  a: string;
  b: number;
};

export type SampleBT = [a: string, b: number];

export type TMealItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export type TMealItemForm = Omit<TMealItem, 'id' | 'slug' | 'image'> & {
  image: File;
};
