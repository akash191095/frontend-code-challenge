/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import icon from '../assets/plane.svg';
import {
  textLargePrimary,
  textMediumPrimary,
  textMediumSecondary,
  textMediumTertiary,
} from '../../styles/text-styles';
import { Button } from '../button/Button';

export interface OfferCardProps {
  /**
   * Name to show
   */
  name: string;
  /**
   * Secondary text to show
   */
  description: string;
  /**
   * Price of the offer
   */
  price: number;
  /**
   * Duration in months of the offer
   */
  durationMonths: number;
  /**
   * On click action
   */
  onClick?: () => void;
}

const responsive = css`
  @media (max-width: 900px) {
    > div > h5,
    > div > h6 {
      font-size: 1.3em !important;
    }
    font-size: 0.8em;
  }

  @media (max-width: 765px) {
    display: grid;
    grid-template-columns: 0.1fr repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: flex-start;
    justify-items: flex-start;
    height: 100%;
    padding: 1.5em;
    grid-gap: 3em 1em;

    div:nth-of-type(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    div:nth-of-type(2) {
      grid-area: 1 / 2 / 2 / 4;
    }
    div:nth-of-type(3) {
      grid-area: 2 / 2 / 3 / 3;
    }
    div:nth-of-type(4) {
      grid-area: 2 / 3 / 3 / 4;
      justify-self: flex-end;
    }
  }

  @media (max-width: 350px) {
    div:nth-of-type(4) {
      font-size: 0.9em;
    }
  }
`;

const container = css`
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-ececec);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #a9a9a91a;
  border: 1px solid #ececec;
  border-radius: 4px;

  * {
    margin: 0;
  }

  display: grid;
  grid-template-columns: 1.2fr 5fr repeat(2, 3fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: center;
  height: 9.3rem;
  width: 100%;

  img {
    width: 4.8em;
    height: 4.8em;
    background: #f4f4fa 0% 0% no-repeat padding-box;
    border-radius: 50%;
    padding: 1em;
    font-size: 0.7em;
  }

  // name and description
  div:nth-of-type(2) {
    width: 100%;
    h5 {
      ${textMediumPrimary}
      margin-bottom: 4px;
    }
    h6 {
      ${textMediumSecondary}
    }
  }

  // estimated price
  div:nth-of-type(3) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    h6 {
      ${textMediumTertiary}
      line-height: 0;
      margin-bottom: 2em;
    }
    h5 {
      ${textLargePrimary}
      line-height: 0;
    }
  }
  // Responsive
  ${responsive}
`;

/**
 * Primary UI component for user interaction
 */
export const OfferCard: React.FC<OfferCardProps> = ({
  price,
  durationMonths,
  name,
  description,
}) => {
  return (
    <div css={container}>
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div>
        <h5>{name}</h5>
        <h6>{description}</h6>
      </div>
      <div>
        <h6>Estimated Price</h6>
        <h5>{`$${price}/${durationMonths}mo.`}</h5>
      </div>
      <div>
        <Button label="Order Now" primary={false} />
      </div>
    </div>
  );
};
