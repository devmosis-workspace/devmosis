export const getValidatorProfilePicture = async (
  identity: string | undefined
) => {
  if (identity === undefined) return undefined;

  const fetchThumbnail = (
    await fetch(
      `https://keybase.io/_/api/1.0/user/lookup.json?fields=pictures&key_suffix=${identity}`
    )
  ).json();

  const thumbnail:
    | {
        status: { code: number; name: string };
        them: { id: string; pictures: { primary: { url: string } } }[];
      }
    | undefined = await fetchThumbnail;

  return thumbnail?.them?.[0]?.pictures?.primary?.url;
};
