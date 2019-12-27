import React from "react";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { BlogsI } from "~/types";

const Page: NextPage<BlogsI> = props => {
  return (
    <div>
      <h2>最新の記事</h2>
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
    </div>
  );
};

Page.getInitialProps = async () => {
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
