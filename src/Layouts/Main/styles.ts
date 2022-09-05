import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Main = styled.main`
  width: calc(100% - 230px);

  @media (max-width: 768px) {
    width: 100%;
  }
`;
