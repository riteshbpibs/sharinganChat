import styled from "styled-components";

export const StyledHead = styled.h5`
  font-size: ${(props) => props.size || "36px"};
  color: ${(props) => props.color || "#F9FAFB"};
  font-weight: ${(props) => props.weight || "600"};
  margin: ${(props) => props.margin || "0"};

  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`}
`;

export const StyledPara = styled.p`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || "#F9FAFB"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  font-weight: ${(props) => props.weight || "normal"};

  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight}`};
  ${(props) => props.letterSpace && `letter-spacing: ${props.letterSpace}`};
`;
