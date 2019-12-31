import React from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";
import styled from "styled-components";
import { NextPage } from "next";
import { ArticleI } from "~/types";
import SingleColumn from "~/components/templates/SingleColumn";
import AppHeader from "~/components/molecules/AppHeader";

const md = new MarkdownIt({
  html: true
});

const Blog: NextPage<ArticleI> = ({ thumbnail, title, body, tags }) => {
  return (
    <SingleColumn
      renderHeader={(): JSX.Element => <AppHeader />}
      renderMain={(): JSX.Element => (
        <MainContainer>
          <img src={thumbnail.url} />
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
        </MainContainer>
      )}
    />
  );
};

Blog.getInitialProps = async context => {
  const { id } = context.query;

  const key = {
    headers: { "X-API-KEY": process.env.API_KEY }
  };

  const res = await axios.get(
    `https://samuraikun.microcms.io/api/v1/articles/${id}`,
    key
  );
  const blog = res.data;

  return blog;
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export default Blog;
