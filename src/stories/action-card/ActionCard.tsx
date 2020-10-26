/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import defaultIcon from '../assets/actionCardIcon/icon@2x.png';
import {
  textArrow,
  textSmallPrimary,
  textSmallSecondary,
} from '../../styles/text-styles';

export interface ActionCardProps {
  /**
   * icon for the card
   */
  icon: string;
  /**
   * Primary text to show
   */
  textPrimary: string;
  /**
   * Secondary text to show
   */
  textSecondary?: string;
  /**
   * Link to go to on click
   */
  link?: string;
}

const container = css`
  display: grid;
  grid-template-columns: 1.5fr 2fr 0.5fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: center;

  width: 100%;
  height: 9.2rem;
  max-width: 32.8rem;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #a9a9a933;
  border-radius: 4px;
  margin: 1rem auto;

  > img {
    grid-row: 1/3;
    width: 7.2rem;
    height: 6rem;
    box-shadow: 0px 10px 20px -9px rgba(153, 219, 255, 1);
    transition: all 0.4s;
  }

  :hover {
    img {
      transform: scale(1.15);
    }
  }

  a {
    text-decoration: none;
  }
`;

const textStyles = css`
  grid-row: 1/3;
  p {
    margin: 0.5em 0;
  }
`;

const arrowStyles = css`
  font-size: 1.2em;
  color: black;
`;

/**
 * Primary UI component for user interaction
 */
export const ActionCard: React.FC<ActionCardProps> = ({
  icon = defaultIcon,
  textPrimary,
  textSecondary,
  link,
}) => {
  return (
    <div css={container}>
      <img src={icon} alt="icon" />
      <div css={textStyles}>
        <p css={textSmallPrimary}>{textPrimary}</p>
        {textSecondary && <p css={textSmallSecondary}>{textSecondary}</p>}
      </div>
      {link ? (
        <a href={link}>
          <p css={{ ...textArrow, ...arrowStyles }}>&#8212;&#62;</p>
        </a>
      ) : (
        <p css={{ ...textArrow, ...arrowStyles }}>&#8212;&#62;</p>
      )}
    </div>
  );
};
