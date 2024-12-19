export interface Pair {
  key: string;
  label: string;
}

export interface Metadata {
  title: string;
  description: string;
  og: Partial<{
    title: string;
    description: string;
    url: string;
    siteName: string;
    image: string;
    type: string;
  }>;
  x: Partial<{
    title: string;
    description: string;
    card: string;
    image: string;
  }>;
}
