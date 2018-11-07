const convertTitleToPath = (title) =>{
  return title
    .toLowerCase()
    .split(" ")
    .join("-");
}

export default convertTitleToPath;