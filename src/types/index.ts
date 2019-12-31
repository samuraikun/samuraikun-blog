export interface ArticleI {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  body: string;
  tags?: Array<TagI> | null;
}

export interface ArticlesI {
  contents: Array<ArticleI>;
}

export interface TagI {
  id: string;
  name: string;
}
