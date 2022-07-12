import Axios from "axios";

export const breedFetch = () => {
  Axios.get(
    "https://api.thedogapi.com/v1/breeds?limit=25&page=1&order=Desc&api_key=0dd5931e-dc53-4219-9bfb-51274aef6d80"
  ).then((response) => {
    console.log("breeds:", response);
    return response.data;
  });
};
