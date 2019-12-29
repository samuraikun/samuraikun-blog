import { FC } from "react";
import styled from "styled-components";

interface CardI {
  renderContent(): JSX.Element;
}

const Card: FC<CardI> = ({ renderContent }) => <ACard>{renderContent()}</ACard>;

const ACard = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
`;

export default Card;
