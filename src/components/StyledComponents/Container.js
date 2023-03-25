import styled from "styled-components";

export const StyledBox = styled.div`
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.bgColor && `background-color: ${props.bgColor}`};

  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
`;

export const StyledSpan = styled.span`
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.bgColor && `background-color: ${props.bgColor}`};
`;
