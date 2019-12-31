import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

const AppHeader: FC = () => (
  <Link href={"/"}>
    <HeaderItem>{"Samuraikun's trace log"}</HeaderItem>
  </Link>
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
