import styled from '@emotion/styled';

export const Button = styled.button`
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 40%;
  border: 0;
  cursor: pointer;
  display: inline-block;
  height: 48px;
  opacity: 0.6;
  outline: none;
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100px;
`;
export const Form = styled.form`
align-items: center;
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    max-width: 600px;
    overflow: hidden;
    width: 400px;
    border:1px solid black;
    margin-left:20px
}
`;

export const Input = styled.input`
  border: none;
  display: inline-block;
  font: inherit;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  width: 100%;
`;
