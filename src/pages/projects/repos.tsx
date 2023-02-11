import FooterComponent from "@/components/global/Footer";
import IRepo from "@/interfaces/repos";
import axios from "axios";
import React, { Fragment } from "react";

import * as G from "../../styles/ReposPage.styles";

export const getServerSideProps = async () => {
  const repos = await axios.get("http://api.github.com/users/gabaissues/repos");

  return {
    props: {
      repos: repos.data,
    },
  };
};

interface Props {
  repos: IRepo[]
}

export default function Repos({ repos }: Props) {
  return (
    <div>
      <G.Header id="header">
        <G.TextFixed href="/" right="2.5rem" top="2.5rem">
          Developer
        </G.TextFixed>

        <G.Image src="/eu.svg" alt="um desenho cartoon do desenvolvedor" />
        <G.Text
          fontSize="1.5rem"
          fontWeight="600"
          color="#FAFAFA"
          margin="2rem 0rem 0rem 0rem"
        >
          Antônio Gabriel / Vulgo, Gaba (Repositórios)
        </G.Text>
      </G.Header>

      <G.Main>
        <G.Cards>
          {repos.map((repo, index) => (
            <Fragment key={index}>
              <G.Card>
                <G.CardTop>
                  <G.Text fontSize="1.5rem" color="#FAFAFA" fontWeight="600">
                    {repo.name}
                  </G.Text>
                  <G.Paragraph>{repo.description}</G.Paragraph>
                </G.CardTop>
                <G.CardBottom>
                  <G.LinkCard href={repo.html_url}>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9165 0C9.60328 0 8.30293 0.258658 7.08967 0.761205C5.87641 1.26375 4.77402 2.00035 3.84544 2.92893C1.97007 4.8043 0.916504 7.34784 0.916504 10C0.916504 14.42 3.7865 18.17 7.7565 19.5C8.2565 19.58 8.4165 19.27 8.4165 19V17.31C5.6465 17.91 5.0565 15.97 5.0565 15.97C4.5965 14.81 3.9465 14.5 3.9465 14.5C3.0365 13.88 4.0165 13.9 4.0165 13.9C5.0165 13.97 5.5465 14.93 5.5465 14.93C6.4165 16.45 7.8865 16 8.4565 15.76C8.5465 15.11 8.8065 14.67 9.0865 14.42C6.8665 14.17 4.5365 13.31 4.5365 9.5C4.5365 8.39 4.9165 7.5 5.5665 6.79C5.4665 6.54 5.1165 5.5 5.6665 4.15C5.6665 4.15 6.5065 3.88 8.4165 5.17C9.2065 4.95 10.0665 4.84 10.9165 4.84C11.7665 4.84 12.6265 4.95 13.4165 5.17C15.3265 3.88 16.1665 4.15 16.1665 4.15C16.7165 5.5 16.3665 6.54 16.2665 6.79C16.9165 7.5 17.2965 8.39 17.2965 9.5C17.2965 13.32 14.9565 14.16 12.7265 14.41C13.0865 14.72 13.4165 15.33 13.4165 16.26V19C13.4165 19.27 13.5765 19.59 14.0865 19.5C18.0565 18.16 20.9165 14.42 20.9165 10C20.9165 8.68678 20.6578 7.38642 20.1553 6.17317C19.6528 4.95991 18.9162 3.85752 17.9876 2.92893C17.059 2.00035 15.9566 1.26375 14.7433 0.761205C13.5301 0.258658 12.2297 0 10.9165 0Z"
                        fill="#2D2D2D"
                      />
                    </svg>
                    GitHub
                  </G.LinkCard>
                </G.CardBottom>
              </G.Card>
            </Fragment>
          ))}
        </G.Cards>
      </G.Main>

      <FooterComponent />
    </div>
  );
}
