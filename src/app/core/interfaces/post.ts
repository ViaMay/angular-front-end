export interface Post {
  id?: string;
  title: string;
  text: string;
  author: string;
  dateCreateAt?: string;
  tags: string | string[];
  categoryId?: string;
  categoryName?: string;
}
