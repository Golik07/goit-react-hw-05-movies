import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled.div`
  margin-bottom: 20px;
`;

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

export const Img = styled.div`
  display: flex;
`;
export const Container = styled.div`
  display: flex;
`;
export const Value = styled.div`
  margin-left: 20px;
`;

export const Additional = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const Text = styled.p`
  margin-right: 10px;
`;
