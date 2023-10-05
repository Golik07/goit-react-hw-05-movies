import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &:hover {
    color: white;
    background-color: orangered;
  }
`;

export const Section = styled.section`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border-bottom: 1px solid black;
`;

export const Container = styled.div`
  display: flex;
`;

export const Container_2 = styled.div`
  margin-left: 20px;
`;

export const Container_3 = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const Text = styled.p`
  margin-right: 10px;
`;
