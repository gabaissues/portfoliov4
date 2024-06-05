import Head from "next/head";
import React from "react";
import * as G from "@/styles/ProjectPage.styles";
import axios from "axios";
import IProject from "../../interfaces/projects";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps = async (ctx: any) => {
  const res = await axios.get(
    `https://api.gabaissues.com/projects/listen/specify`,
    {
      headers: {
        id: ctx.query.id.toString(),
      },
    }
  );

  return {
    props: {
      data: res.data,
    },
  };
};

interface Props {
  data: IProject;
}

export default function ViewProject(project: Props) {
  return (
    <>
      <Head>
        <title>Gaba - {project?.data.name}</title>
      </Head>
      <G.Main>
        <video controls>
          <source
            src={`https://api.gabaissues.com/public/${project?.data.videoName}`}
            type="video/mp4"
          />
        </video>
        <G.Text margin="1rem 0rem 0rem 0rem" fontSize="1.5rem" fontWeight="600">
          {project?.data.name}
        </G.Text>
        <G.Divider></G.Divider>

        <G.Paragraph>{project?.data.description}</G.Paragraph>

        <G.Back href="/">
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 5H1M1 5L5 9M1 5L5 1" stroke="#fafafa" />
          </svg>

          <G.Text fontSize="1.5rem" fontWeight="600">
            Voltar
          </G.Text>
        </G.Back>
      </G.Main>
    </>
  );
}
