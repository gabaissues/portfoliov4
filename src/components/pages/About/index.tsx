import React from "react";
import * as G from "./styles";

const formatTime = (time: number) => {
  const dateCurrent = new Date();
  const dateLast = new Date(time, 0, 1);

  const difference = dateCurrent.getTime() - dateLast.getTime();
  const date = Math.floor(difference / (1000 * 60 * 60 * 24))

  return date
};

const AboutComponent = () => {
  return (
    <G.About>
      <G.Image src="eu.svg" alt="um desenho cartoon do desenvolvedor" />
      <G.Text
        fontSize="1.5rem"
        fontWeight="600"
        color="#fafafa"
        margin="3.875rem 0rem 1.25rem 0rem"
      >
        Um pouco sobre o Gaba
      </G.Text>
      <G.Paragraph>
        Gaba é um apelido que minha melhor amiga me deu, desde então uso pra
        tudo. Gaba é desenvolvedor há mais de 4 anos, e UI/UX Designer a 2.
        Sempre fui estudando através de cursos (DankiCode), até que desisti e
        aprendi a ler documentações. Desde então só aprendo assim. Mas sempre
        vou atrás de um tutorial ou um curso mesmo para aprender um pouco mais
        sobre algo mais aprofundado.
      </G.Paragraph>

      <G.Divider></G.Divider>

      <G.Text
        fontSize="1.5rem"
        fontWeight="600"
        margin="0rem 0rem 1.25rem 0rem"
      >
        Programas que sei utilizar
      </G.Text>

      <G.Cards>
        <G.Card>
          <G.ImageCard src="javascript.svg" />

          <G.CardContent>
            <G.Text
              margin="0rem 0rem .5rem 1.375rem"
              color="#fafafa"
              fontSize="1.25rem"
              fontWeight="600"
            >
              JavaScript
            </G.Text>
            <G.Text
              margin="0 0rem 0rem 1.375rem"
              color="#fafafa"
              fontSize="1rem"
            >
              {formatTime(2018)} dias.
            </G.Text>
          </G.CardContent>
        </G.Card>
        <G.Card>
          <G.ImageCard src="nodejs.svg" />

          <G.CardContent>
            <G.Text
              margin="0rem 0rem .5rem 1.375rem"
              color="#fafafa"
              fontSize="1.25rem"
              fontWeight="600"
            >
              Node.JS
            </G.Text>
            <G.Text
              margin="0 0rem 0rem 1.375rem"
              color="#fafafa"
              fontSize="1rem"
            >
              {formatTime(2018)} dias.
            </G.Text>
          </G.CardContent>
        </G.Card>
        <G.Card>
          <G.ImageCard src="express.svg" />

          <G.CardContent>
            <G.Text
              margin="0rem 0rem .5rem 1.375rem"
              color="#fafafa"
              fontSize="1.25rem"
              fontWeight="600"
            >
              Express.JS
            </G.Text>
            <G.Text
              margin="0 0rem 0rem 1.375rem"
              color="#fafafa"
              fontSize="1rem"
            >
              {formatTime(2018)} dias.
            </G.Text>
          </G.CardContent>
        </G.Card>
        <G.Card>
          <G.ImageCard src="html.svg" />

          <G.CardContent>
            <G.Text
              margin="0rem 0rem .5rem 1.375rem"
              color="#fafafa"
              fontSize="1.25rem"
              fontWeight="600"
            >
              HTML
            </G.Text>
            <G.Text
              margin="0 0rem 0rem 1.375rem"
              color="#fafafa"
              fontSize="1rem"
            >
              {formatTime(2019)} dias.
            </G.Text>
          </G.CardContent>
        </G.Card>
        <G.Card>
          <G.ImageCard src="css.svg" />

          <G.CardContent>
            <G.Text
              margin="0rem 0rem .5rem 1.375rem"
              color="#fafafa"
              fontSize="1.25rem"
              fontWeight="600"
            >
              CSS
            </G.Text>
            <G.Text
              margin="0 0rem 0rem 1.375rem"
              color="#fafafa"
              fontSize="1rem"
            >
              {formatTime(2019)} dias.
            </G.Text>
          </G.CardContent>
        </G.Card>
        <G.Card>
          <G.ImageCard src="typescript.svg" />

          <G.CardContent>
            <G.Text
              margin="0rem 0rem .5rem 1.375rem"
              color="#fafafa"
              fontSize="1.25rem"
              fontWeight="600"
            >
              TypeScript
            </G.Text>
            <G.Text
              margin="0 0rem 0rem 1.375rem"
              color="#fafafa"
              fontSize="1rem"
            >
              {formatTime(2022)} dias.
            </G.Text>
          </G.CardContent>
        </G.Card>
        <G.Card>
          <G.ImageCard src="react.svg" />

          <G.CardContent>
            <G.Text
              margin="0rem 0rem .5rem 1.375rem"
              color="#fafafa"
              fontSize="1.25rem"
              fontWeight="600"
            >
              React
            </G.Text>
            <G.Text
              margin="0 0rem 0rem 1.375rem"
              color="#fafafa"
              fontSize="1rem"
            >
              {formatTime(2020)} dias.
            </G.Text>
          </G.CardContent>
        </G.Card>
        <G.Card>
          <G.ImageCard src="react.svg" />

          <G.CardContent>
            <G.Text
              margin="0rem 0rem .5rem 1.375rem"
              color="#fafafa"
              fontSize="1.25rem"
              fontWeight="600"
            >
              React-Native
            </G.Text>
            <G.Text
              margin="0 0rem 0rem 1.375rem"
              color="#fafafa"
              fontSize="1rem"
            >
              {formatTime(2020)} dias.
            </G.Text>
          </G.CardContent>
        </G.Card>
        <G.Card>
          <G.ImageCard src="nextjs.svg" />

          <G.CardContent>
            <G.Text
              margin="0rem 0rem .5rem 1.375rem"
              color="#fafafa"
              fontSize="1.25rem"
              fontWeight="600"
            >
              Next.JS
            </G.Text>
            <G.Text
              margin="0 0rem 0rem 1.375rem"
              color="#fafafa"
              fontSize="1rem"
            >
              {formatTime(2021)}  dias.
            </G.Text>
          </G.CardContent>
        </G.Card>
      </G.Cards>
    </G.About>
  );
};

export default AboutComponent;
