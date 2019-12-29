import { FC, Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";
import Card from "~/components/atoms/Card";
import { BlogI } from "~/types";

interface ArticleCardI {
  blog: BlogI;
}

const ArticleCard: FC<ArticleCardI> = ({ blog }) => (
  <Card
    renderContent={(): JSX.Element => (
      <Fragment>
        <OArticleCardHeader>
          <Link href={`blogs/${blog.id}`}>
            <a>
              <h3>{blog.title}</h3>
            </a>
          </Link>
        </OArticleCardHeader>
        <OArticleCardBody>This is test.</OArticleCardBody>
        <OArticleCardFooter>
          {blog.tags &&
            blog.tags.map(tag => (
              <Fragment key={tag.id}>
                <span>{tag.name}</span>
              </Fragment>
            ))}
        </OArticleCardFooter>
      </Fragment>
    )}
  />
);

const OArticleCardHeader = styled.div``;

const OArticleCardBody = styled.div``;

const OArticleCardFooter = styled.div``;

export default ArticleCard;
