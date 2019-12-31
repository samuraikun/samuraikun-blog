import React from "react";
import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { ArticlesI } from "~/types";

import SingleColumn from "~/components/templates/SingleColumn";
import CardLayout from "~/components/templates/CardsLayout";
import ArticleCard from "~/components/organisms/ArticleCard";

const Page: NextPage<ArticlesI> = props => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{"Samuraikun's trace log"}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <style jsx global>{`
        html,
        body,
        pre,
        code,
        kbd,
        samp {
          font-family: -apple-system, BlinkMacSystemFont, Roboto, "游ゴシック体",
            YuGothic, "Yu Gothic Medium", sans-serif;
          font-feature-settings: "pkna" 1;
        }
        body {
          background: #f2f2f2;
          margin: 0;
        }
      `}</style>
      <SingleColumn
        renderHeader={(): JSX.Element => (
          <Link href={"/"}>
            <HeaderItem>{"Samuraikun's trace log"}</HeaderItem>
          </Link>
        )}
        renderMain={(): JSX.Element => (
          <CardLayout
            renderCards={(): Array<JSX.Element> => {
              return props.contents.map(article => (
                <ArticleCard article={article} key={article.id} />
              ));
            }}
          />
        )}
      />
    </div>
  );
};

Page.getInitialProps = async (): Promise<ArticlesI> => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY }
  };
  const res = await axios.get(
    `https://samuraikun.microcms.io/api/v1/articles`,
    key
  );
  const data = await res.data;
  return data;
};

const HeaderItem = styled.a`
  font-size: 24px;
  font-family: "Press Start 2P";
  text-decoration: none;
  color: #111111;
  font-weight: bold;
  cursor: pointer;
`;

export default Page;
