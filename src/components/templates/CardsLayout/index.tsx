import { FC } from "react";
import styled from "styled-components";
import media from "styled-media-query";

interface CardsLayoutI {
  renderCards(): Array<JSX.Element>;
}

const CardsLayout: FC<CardsLayoutI> = ({ renderCards }): JSX.Element => (
  <TCardsLayout>{renderCards()}</TCardsLayout>
);

const TCardsLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  height: 100%;
  &::after {
    content: "";
    display: block;
    width: 30%;
  }
`;

export default CardsLayout;
