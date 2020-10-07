import styled, { css } from "styled-components";

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid rgb(186,186,186);
  color: rgb(186,186,186);

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: rgb(100,100,100);

    &:placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

