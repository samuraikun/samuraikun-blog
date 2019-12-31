import { FC, Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";
import Card from "~/components/atoms/Card";
import { ArticleI } from "~/types";

interface ArticleCardI {
  article: ArticleI;
}

const ArticleCard: FC<ArticleCardI> = ({ article }) => (
  <Card
    renderContent={(): JSX.Element => (
      <Fragment>
        <OArticleCardHeader></OArticleCardHeader>
        <OArticleCardBody>
          <Link href={`articles/${article.id}`}>
            <a>
              <h3>{article.title}</h3>
            </a>
          </Link>
        </OArticleCardBody>
        <OArticleCardFooter>
          {article.tags &&
            article.tags.map(tag => (
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
