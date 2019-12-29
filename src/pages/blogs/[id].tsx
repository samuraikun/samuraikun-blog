import React from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";
import { NextPage } from "next";
import { BlogI } from "~/types";

const md = new MarkdownIt({
  html: true
});

const Blog: NextPage<BlogI> = ({ title, body, tags }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {tags &&
          tags.map(tag => (
            <React.Fragment key={tag.id}>
              <span>{tag.name}</span>
            </React.Fragment>
          ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: `${body}` }}></div>
    </div>
  );
};

Blog.getInitialProps = async context => {
  const { id } = context.query;

  const key = {
    headers: { "X-API-KEY": process.env.API_KEY }
  };

  const res = await axios.get(
    `https://samuraikun.microcms.io/api/v1/blogs/${id}`,
    key
  );
  const blog = res.data;

  return blog;
};

export default Blog;
