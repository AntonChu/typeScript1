import Movie from '../ts/movie';

test('new card should be empty', () => {
  const movie = new Movie();
  movie.add({year: 2022, country: 'USA', slogan: 'Poison Always Leaves a Trail', genre: 'documentary', duration: 98});
  expect(movie.items.length).toBe(1);
});
