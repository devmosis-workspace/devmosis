import { Global, css } from "@emotion/react";
import { normalize } from "@/styles/normalize";

export const globalStyles = (
  <Global
    styles={css`
      ${normalize}
    `}
  />
);
