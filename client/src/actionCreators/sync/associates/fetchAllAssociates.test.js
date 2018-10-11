import fetchAllAssociates from './fetchAllAssociates';

test('fetchAllAssociates', () => {
  expect(fetchAllAssociates().type).toBe("fetchAllAssociates");
});
