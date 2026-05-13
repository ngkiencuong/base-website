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
  content: {
    rendered: string;
  };
}

export interface Post {
  id: number;
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}
