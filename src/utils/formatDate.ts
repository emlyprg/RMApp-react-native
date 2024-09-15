export const formatDate = (date: string) => {
  const parsed = new Date(date);
  const formattedDate = parsed.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return formattedDate;
};
