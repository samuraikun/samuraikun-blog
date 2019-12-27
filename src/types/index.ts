export interface BlogI {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  body: string;
  tags: Array<TagI>;
}

export interface BlogsI {
  contents: Array<BlogI>;
}

export interface TagI {
  id: string;
  name: string;
}
