import styled from "styled-components";

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 50rem;
`;
export const Image = styled.img`
  margin-top: 8.25rem;
  width: 21.875rem;
  height: 21.875rem;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;

  @media (max-width: 800px) {
    margin: 0rem 2.5rem;
  }
`;

export const Divider = styled.div`
  background-color: #fd328c;
  width: 14rem;
  height: 0.8rem;
  border-radius: 20rem;
  margin: 1.25rem 0rem;
`;
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  width: 41.25rem;
  background-color: #3a3a3a;
  margin-bottom: 0.75rem;
  padding: 2rem;

  svg {
    width: 3.125rem;
    height: 3.125rem;
  }
  @media (max-width: 800px) {
    width: auto;
  }
`;

export const ImageCard = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const CardContent = styled.div``;

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
  color: ${(props) => (props.color ? props.color : "#2d2d2d")};
  font-family: Poppins;
`;
