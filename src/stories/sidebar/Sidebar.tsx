/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import { textArrow } from '../../styles/text-styles';
import defaultAvatar from '../assets/avatar/avatar@2x.png';
import call from '../assets/call.svg';
import mail from '../assets/mail.svg';
import chat from '../assets/chat.svg';
import menuIcon from '../assets/hamburger_icon.png';

interface NavItem {
  id: string;
  name: string;
  notificationCount: number;
  link: string;
}

const navItems: Array<NavItem> = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    notificationCount: 0,
    link: '/',
  },
  {
    id: 'tasks',
    name: 'Tasks',
    notificationCount: 2,
    link: '/tasks',
  },
  {
    id: 'gym-clubs',
    name: 'Gym Clubs',
    notificationCount: 0,
    link: '/gym-clubs',
  },
  {
    id: 'connections',
    name: 'Your Connections',
    notificationCount: 0,
    link: '/connections',
  },
  {
    id: 'settings',
    name: 'Settings',
    notificationCount: 0,
    link: '/settings',
  },
];

export interface SidebarProps {
  username: string;
  profileLink: string;
  avatarLink?: string;
}

const responsive = css`
  >img: last-of-type {
    display: none;
  }
  @media (max-width: 760px) {
    font-size: 0.8rem;
    left: -22.3rem;
    >img: last-of-type {
      width: 4em;
      margin: 1em;
      display: inline-block;
      position: fixed;
      top: 0;
      right: 0;
    }
    transition: left 0.3s ease-out;
  }
`;

const sidebarStyles = css`
  background: transparent
    linear-gradient(345deg, var(--unnamed-color-262758) 0%, #4042b1 100%) 0% 0%
    no-repeat padding-box;
  background: transparent linear-gradient(345deg, #262758 0%, #4042b1 100%) 0%
    0% no-repeat padding-box;
  border-radius: 0px 47px 0px 0px;
  height: 100vh;
  width: 22.3rem;
  padding-top: 4em;
  position: fixed;
  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding-bottom: 2em;

  > div:nth-of-type(1) {
    margin-left: 3.5em;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    > img {
      max-width: 8em;
      max-height: 8em;
      width: 100%;
      height: 100%;
      margin-left: -5px;
    }
    > h4 {
      color: white;
      margin-bottom: 0.7em;
    }
    > a {
      color: white;
      text-decoration: underline;
      opacity: 0.8;
    }
  }

  // Nav items
  ul {
    margin-bottom: 4em;
    margin-top: 0;
    padding: 0;
    > div {
      :hover {
        background: rgba(242, 242, 242, 0.1) 0% 0% no-repeat padding-box;
        border-radius: 0px 23px 0px 24px;
      }
      > li,
      > a {
        list-style: none;
        color: white;
      }
      > a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 3.5em;
        height: 4.7rem;
        text-decoration: none;
      }
    }
  }

  // my mentor card
  > div:nth-of-type(2) {
    background: rgba(70, 72, 190, 0.24) 0% 0% no-repeat padding-box;
    border-radius: 0px 23px 0px 24px;
    color: white;
    margin: 0 2.5em;
    // first half
    > div:nth-of-type(1) {
      padding: 1.5em 2.5em;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      // arrow
      p > a {
        color: white;
        text-decoration: none;
      }
    }

    // second half of my mentor card
    > div:nth-of-type(2) {
      padding: 1.5em 2.5em 2.5em 2.5em;
      > p {
        padding-bottom: 1.5em;
      }
      //icons
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > a {
          background: rgba(70, 72, 190, 0.7) 0% 0% no-repeat padding-box;
          border-radius: 100%;
          padding: 1em;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  ${responsive}
`;

export const Sidebar: React.FC<SidebarProps> = ({
  username,
  profileLink,
  avatarLink = defaultAvatar,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = css`
    ${sidebarStyles}
    ${menuOpen && 'left: 0 !important;'}
  `;
  return (
    <nav css={styles}>
      <div>
        <img src={avatarLink} alt="avatar" />
        <h4 className="text-14-medium-none">{username}</h4>
        <a className="text-12-medium-none" href={profileLink}>
          View Profile
        </a>
      </div>
      <ul>
        {navItems.map(({ id, name, link }) => {
          return (
            <div key={id}>
              <a className="text-12-bold-titlecase" href={link}>
                <li>{name}</li>
              </a>
            </div>
          );
        })}
      </ul>
      <div>
        <div>
          <h5 className="text-12-bold-uppercase">My Mentor</h5>
          <p css={{ ...textArrow }}>
            <a href="/my-mentor">&#8212;&#62;</a>
          </p>
        </div>
        <div>
          <p className="text-14-bold-none">
            {`${username.split(' ')[0]}'s Page`}
          </p>
          <div>
            <a href="tel:123-456-7890">
              <img src={call} alt="call" />
            </a>

            <a href="mailto:someone@gym-lee.com">
              <img src={mail} alt="mail" />
            </a>

            <a href="/chat-support">
              <img src={chat} alt="chat" />
            </a>
          </div>
        </div>
      </div>
      <img src={menuIcon} alt="menu" onClick={() => setMenuOpen(!menuOpen)} />
    </nav>
  );
};
