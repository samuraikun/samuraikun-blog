import React from "react";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { BlogsI } from "~/types";
import SingleColumn from "~/components/templates/SingleColumn";

const Page: NextPage<BlogsI> = props => {
  return (
    <SingleColumn
      renderHeader={(): JSX.Element => <h2>最新の記事</h2>}
      renderMain={(): JSX.Element => (
        <div>
          {props.contents.map(blog => (
            <React.Fragment key={blog.id}>
              <Link href={`blogs/${blog.id}`}>
                <a>
                  <h2>{blog.title}</h2>
                </a>
              </Link>
              {blog.tags.map(tag => (
                <React.Fragment key={tag.id}>
                  <span>{tag.name}</span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
    />
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
