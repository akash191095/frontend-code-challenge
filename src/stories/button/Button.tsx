/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
  buttonTextPrimary,
  buttonTextSecondary,
} from '../../styles/text-styles';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const buttonStyles = css`
  ${buttonTextPrimary}
  background: var(--unnamed-color-262758) 0% 0% no-repeat padding-box;
  background: #262758 0% 0% no-repeat padding-box;
  border-radius: 1.78em;
  height: 3.5em;
  border: none;
  > p {
    padding: 0 2em;
    margin: 0;
  }

  :hover {
    background: #4648c3 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px #26275833;
  }
`;

const buttonLarge = css`
  font-size: 1.8em;
`;

const buttonMedium = css`
  font-size: 1.4em;
`;

const buttonSmall = css`
  font-size: 1em;
`;

const buttonSecondary = css`
  ${buttonTextSecondary}
  background: var(--unnamed-color-ecf4f9) 0% 0% no-repeat padding-box;
  background: #ecf4f9 0% 0% no-repeat padding-box;
  :hover {
    color: #ffffff;
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = true,
  size = 'medium',
  label,
  ...props
}) => {
  const mode =
    (size === 'large' && buttonLarge) ||
    (size === 'medium' && buttonMedium) ||
    (size === 'small' && buttonSmall);

  const styles = css`
    ${buttonStyles}
    ${!primary && buttonSecondary}
    ${mode}
  `;
  return (
    <button {...props} css={styles}>
      <p>{label}</p>
    </button>
  );
};
