/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Sidebar } from '../stories/sidebar/Sidebar';
import { WithBackground } from '../stories/with-background/WithBackground';

const layoutStyles = css`
  > div {
    margin-left: 22.3rem;
  }

  @media (max-width: 760px) {
    > div {
      margin-left: 0;
    }
  }
`;

interface LayoutProps {
  username: string;
}

const Layout: React.FC<LayoutProps> = ({ children, username }) => {
  return (
    <WithBackground>
      <div css={layoutStyles}>
        <Sidebar username={username} profileLink="/me" />
        <div>{children}</div>
      </div>
    </WithBackground>
  );
};

export default Layout;
