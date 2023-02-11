import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  margin-top: 3.75rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #3A3A3A;
  width: 100%;
  padding: 3.875rem 0rem;

  @media(max-width: 800px) {

    h1 {
      text-align: center;
      margin-bottom: 1rem;
    }
    
}
`;
export const Up = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #313131;
  border-radius: 1rem;
  width: 1rem;
  height: 1rem;
  margin-top: 2rem;
  padding: 1rem 1rem;
  text-decoration: none;
`;

export const TextFixed = styled.div<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}>`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  font-weight: 600;
  font-size: 1.5rem;
`;
export const Text = styled.h1<{
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  color?: string;
}>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => (props.color ? props.color : "#fafafa")};
  font-family: Poppins;
`;
