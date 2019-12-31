import { FC, Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const AppHeader: FC = () => (
  <Fragment>
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
    <Link href={"/"}>
      <HeaderItem>{"Samuraikun's trace log"}</HeaderItem>
    </Link>
  </Fragment>
);

const HeaderItem = styled.a`
  font-size: 24px;
  font-family: "Press Start 2P";
  text-decoration: none;
  color: #111111;
  font-weight: bold;
  cursor: pointer;
`;

export default AppHeader;
