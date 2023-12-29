export const isInvalidText = (text: string) => {
  return !text || text.trim() === '';
};

export const composeMetadata = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  const baseMetadData = {
    title: 'Meals App',
    description: 'Meals App course project.',
  };

  return {
    title: title ? `${baseMetadData.title}: ${title}` : baseMetadData.title,
    description: description ?? baseMetadData.description,
  };
};
