import loaderToggle from "./loader";
const request = async (resource) => {
  loaderToggle(true);
  const request = await fetch(resource);
  if (!request.ok) {
    throw new Error("Something went wrong :(");
    loaderToggle(false);
  } else {
    const data = await request.json();
    loaderToggle(false);
    return data;
  }
};
export default request;
