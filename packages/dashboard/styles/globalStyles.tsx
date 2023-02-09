import { Global, css } from "@emotion/react";
import { normalize } from "@/styles/normalize";

export const globalStyles = (
  <Global
    styles={css`
      ${normalize}

      * {
        box-sizing: border-box;
      }

      body {
        font-family: var(--font-inter), sans-serif;
        background-color: #242731;
        color: #fff;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: var(--font-poppins), sans-serif;
        margin: 0;
      }

      p {
        margin: 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;
      }
    `}
  />
);
