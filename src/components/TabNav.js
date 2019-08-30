import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { css, cx } from "emotion";

// TODO: Add missing tabs below
export default function TabNav() {
  const NavButton = css`
    padding: 15px 30px;
    text-decoration: none;
    color: #00818a;
    border: 2px solid black;
    border-radius: 15px;
    &:hover {
      cursor: pointer;
      color: white;
      background: #f7be16;
    }
  `;
  return (
    <nav
      className={css`
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 10px 0;
      `}
    >
      <button className={NavButton}>
        <a href="https://refugee-stories-marketing.netlify.com">Home Page</a>
      </button>
      <NavLink className={NavButton} to="/">
        Login/Sign Up Page
      </NavLink>
      <NavLink className={NavButton} to="/submitStory">
        Submit a Story
      </NavLink>
      <NavLink className={NavButton} to="/storyList">
        Stories List
      </NavLink>
    </nav>
  );
}
