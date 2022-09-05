import styled from "styled-components";

interface Props {
  color?: string;
  fontSize?: string;
  weight?: string;
}

export const P = styled.p<Props>`
  color: ${(props) => props.color || "#ffffff"};
  font-size: ${(props) => props.fontSize || "0.75rem"};
  font-weight: ${(props) => props.weight || "400"};
`;
