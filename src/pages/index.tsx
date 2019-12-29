import React from "react";
import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";

import { BlogsI } from "~/types";

import SingleColumn from "~/components/templates/SingleColumn";
import CardLayout from "~/components/templates/CardsLayout";
import ArticleCard from "~/components/organisms/ArticleCard";

const Page: NextPage<BlogsI> = props => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        body {
          background: #f2f2f2;
          margin: 0;
        }
      `}</style>
      <SingleColumn
        renderHeader={(): JSX.Element => <h2>My Blog</h2>}
        renderMain={(): JSX.Element => (
          <CardLayout
            renderCards={(): Array<JSX.Element> => {
              return props.contents.map(blog => (
                <ArticleCard blog={blog} key={blog.id} />
              ));
            }}
          />
        )}
      />
    </div>
  );
};

Page.getInitialProps = async (): Promise<BlogsI> => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY }
  };
  const res = await axios.get(
    `https://samuraikun.microcms.io/api/v1/blogs`,
    key
  );
  const data = await res.data;
  return data;
};

export default Page;
