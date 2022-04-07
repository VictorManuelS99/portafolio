import styled from "styled-components";

export const Wrapper = styled.nav`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      color: #ffffff;
      padding: 0.5rem;
    }
  }
`;

export const V = styled.p`
  font-size: 100px;
  color: #ffffff;
`;
