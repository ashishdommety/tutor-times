import fetchAllNotes from './fetchAllNotes';

test('sum in fetchAllNotes', () => {
  expect(fetchAllNotes().type).toBe("fetchAllNotes");
});
