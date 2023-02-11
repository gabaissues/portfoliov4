import React from "react";

import * as G from './styles'

const FooterComponent = () => {
  return(
    <G.Footer>
        <G.Text color="#fafafa" fontWeight="500" fontSize="1.5rem">
          Antônio Gabriel, ou melhor, Gaba! É um prazer ter você aqui :)
        </G.Text>
        <G.Text color="#fafafa" fontWeight="500" fontSize="1rem">gabaissues@gmail.com</G.Text>

        <G.Up href="#header">
          <svg
            width="26"
            height="32"
            viewBox="0 0 26 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2134 0.786648C13.5432 0.116533 12.4568 0.116533 11.7866 0.786648L0.866484 11.7068C0.196368 12.3769 0.196368 13.4634 0.866484 14.1335C1.5366 14.8036 2.62307 14.8036 3.29319 14.1335L13 4.4267L22.7068 14.1335C23.3769 14.8036 24.4634 14.8036 25.1335 14.1335C25.8036 13.4634 25.8036 12.3769 25.1335 11.7068L14.2134 0.786648ZM14.7159 32V2H11.2841V32H14.7159Z"
              fill="#FAFAFA"
            />
          </svg>
        </G.Up>
      </G.Footer>
  )
}

export default FooterComponent