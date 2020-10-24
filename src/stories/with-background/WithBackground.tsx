/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

export interface WithBackgroundProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

const withBackgroundStyles = css`
  min-width: 100vw;
  min-height: 27vh;
  position: fixed;
  border-radius: 0px 0px 24px 0px;
  z-index: -5;
`;

export const WithBackground: React.FC<WithBackgroundProps> = ({
  backgroundColor = 'rgba(70, 72, 195, 0.06)',
  children,
}) => {
  return (
    <React.Fragment>
      <div
        css={css`
          ${withBackgroundStyles}
          background-color: ${backgroundColor};
        `}
      />
      {children}
    </React.Fragment>
  );
};
