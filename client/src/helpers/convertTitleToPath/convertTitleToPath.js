// @flow
module.exports = function(title: string) {
  return title
    .toLowerCase()
    .split(" ")
    .join("-");
};
