export const getEpisodesNumbers = (episodes: string[]) => {
  const episodesNumbers = episodes.map(episode => episode.replace(/\D/g, ''));
  const episodesString = episodesNumbers.join(', ');
  return episodesString;
};
