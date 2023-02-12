import styled from "styled-components";

export const Main = styled.main``;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;

  @media (max-width: 800px) {
    > h1 {
      text-align: center;
      font-size: 1.2rem;
    }
    margin-top: 10rem;
  }
`;

export const Image = styled.img`
  width: 21.875rem;
  height: 21.875rem;
  @media (max-width: 800px) {
    width: 15rem;
    height: 15rem;
    margin: 0 auto;
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 800px) {
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
  }
`;
export const Card = styled.div`
  display: flex;
  width: 18.75rem;
  height: 20rem;
  padding: 1rem;
  background-color: #333333;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 0.75rem;
  transition: 0.5s ease;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 0.375rem 0.375rem 0.25rem #3a3a3a;
  }
  @media (max-width: 800px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export const CardTop = styled.div`
  h1::first-letter {
    text-transform: uppercase;
  }
`;


export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  margin: 0.75rem 0rem;
`;
export const LinkCard = styled.a`
  margin-top: 1rem;
  display: flex;
  border-radius: 0.3rem;
  justify-content: center;
  align-items: center;
  color: #2d2d2d;
  text-align: center;
  background-color: #fafafa;
  font-size: 1rem;
  font-family: Poppins;
  font-weight: 600;
  text-decoration: none;
  padding: 1.25rem 3rem;

  svg {
    margin-right: 0.625rem;
  }
`;

export const TextFixed = styled.a<{
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
  text-decoration: none;
  color: #fafafa;
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
