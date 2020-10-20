export interface ArticleI {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  body: string;
  thumbnail?: {
    url?: string;
  };
  tags?: Array<TagI> | null;
}

export interface ArticlesI {
  contents: Array<ArticleI>;
  totalCount: number;
  offset: number;
  limit: number;
}

export interface TagI {
  id: string;
  name: string;
}
