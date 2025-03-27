export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  datePosted: Date;
}

export interface NewPost {
  title: string;
  author: string;
  content: string;
}
