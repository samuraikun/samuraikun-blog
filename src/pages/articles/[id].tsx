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
          <ThumbnailImage src={thumbnail.url} />
          <h1>{title}</h1>
          <TagsContainer>
            {tags &&
              tags.map(tag => (
                <React.Fragment key={tag.id}>
                  <Tag>{tag.name}</Tag>
                </React.Fragment>
              ))}
          </TagsContainer>
          <ContentContainer dangerouslySetInnerHTML={{ __html: `${body}` }} />
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

const ThumbnailImage = styled.img`
  object-fit: contain;
  width: 80%;
`;

const ContentContainer = styled.div``;
const TagsContainer = styled.div``;
const Tag = styled.span`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 10px;
  font-size: 13px;
  color: #111111;
  user-select: none;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 3px;
`;

export default Blog;
