export interface IArticle {
  id: number;
  title: string;
  content: string;
  summary: string;
  created_at: string;
  updated_at: string;
  deleted: boolean;
  authors: Array<string>;
  public: boolean;
  tags: Array<string>;
  cover: string;
}

export interface IArticleSynopsis extends Omit<IArticle, 'content' | 'updated_at' | 'deleted' | 'authors' | 'public' | 'tags'> { }
