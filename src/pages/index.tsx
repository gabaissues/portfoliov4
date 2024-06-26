import React from "react";

import HeaderComponent from "@/components/pages/Header";
import ProjectsComponent from "@/components/pages/Projects";
import ReposComponent from "@/components/pages/Repos";
import IProject from "@/interfaces/projects";
import Head from "next/head";

import * as G from "../styles/InitialPage.styles";
import FormationsComponent from "@/components/pages/Formations";
import AboutComponent from "@/components/pages/About";
import FooterComponent from "@/components/global/Footer";
import axios from "axios";

export const getServerSideProps = async () => {
  const projects = await axios.get("https://api.gabaissues.com/projects/listen");

  return {
    props: {
      projects: projects.data.filter((p: IProject) => p.type === "dev")
    },
  };
};

interface Props {
  projects: IProject[]
}

export default function Home({ projects }: Props) {
  return (
    <>
      <Head>
        <title>Gaba - Portfólio</title>
        <meta name="description" content="Portfólio do Gaba" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HeaderComponent projects={projects} />

      <G.Main>
        <ReposComponent/>
        <ProjectsComponent projects={projects}/>
        <FormationsComponent />
        <AboutComponent />
      </G.Main>

      <FooterComponent />
    </>
  );
}
