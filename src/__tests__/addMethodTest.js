import Movie from '../ts/movie';

test('new card should be empty', () => {
    const movie = new Movie();
    movie.add(2022, 'USA', 'Poison Always Leaves a Trail', 'documentary', 98);
    expect(movie.items.length).toBe(1);
});
