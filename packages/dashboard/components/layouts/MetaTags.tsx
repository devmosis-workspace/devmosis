import type { FC } from "react";

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
}

export const MetaTags: FC<MetaTagsProps> = ({ title, description, image }) => {
  const currentTitle = title ?? "devmosis";
  const currentDescription = description ?? "Create your own Interchain transactions";
  const currentURL = "https://devmos.is";
  const currentImage = image ?? "https://devmos.is/og-image.png";

  return (
    <>
      <title>{currentTitle}</title>
      <meta name="title" content={currentTitle} />
      <meta name="description" content={currentDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentURL} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:image" content={currentImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentURL} />
      <meta property="twitter:title" content={currentTitle} />
      <meta property="twitter:description" content={currentDescription} />
      <meta property="twitter:image" content={currentImage} />

      <link href="/favicon.ico" rel="shortcut icon" />
    </>
  );
};
