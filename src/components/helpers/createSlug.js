export const createSlug = (str) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  str = str.toLowerCase(); // convert to lowercase
  str = str.replace(/[^\w\s-]/g, ""); // remove non-word chars (except hyphens and underscores)
  str = str.replace(/[\s_-]+/g, "-"); // replace spaces and underscores with hyphens
  return str;
};
