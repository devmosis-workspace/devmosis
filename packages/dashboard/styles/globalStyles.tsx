import { Global, css } from "@emotion/react";
import { normalize } from "@/styles/normalize";

export const globalStyles = (
  <Global
    styles={css`
      ${normalize}

      body {
        font-family: var(--font-inter), sans-serif;
        background-color: #242731;
        color: #fff;
      }

      .h1, .h2, .h3, .h4, .h5, .h6 {
        font-family: var(--font-poppins), sans-serif;
      }
    `}
  />
);
