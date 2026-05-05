export interface ApiPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

export interface Post {
  id: number;
  date: string;
  slug: string;
  title: string;
  excerpt: string;
}
