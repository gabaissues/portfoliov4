import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 2.5rem;
  video {
    height: 80vh;
  }
  @media(max-width: 800px) {
    margin: 0rem 2rem;
  }
`

export const Divider = styled.div`
  background-color: #fafafa;
  width: 4rem;
  height: .3rem;
  border-radius: 20rem;
  margin-bottom: 1rem;
`

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #fafafa;
  width: 50rem;
  margin-bottom: 2rem;

  @media(max-width: 800px) {

    width: 100%;

  }
`

export const Back = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 2rem;
  svg {
    width: 1rem;
    margin-right: 1rem;
    height: 1rem;
  }
`

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