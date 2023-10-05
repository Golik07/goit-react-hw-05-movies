import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: black;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
