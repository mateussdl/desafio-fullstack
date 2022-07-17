import Axios from "axios";

export const breedFetch = async (setState) => {
 await Axios.get(
    "https://api.thedogapi.com/v1/breeds?limit=25&page=1&order=Desc&api_key=0dd5931e-dc53-4219-9bfb-51274aef6d80"
  ).then((response) => {
    setState(response.data);
  });
};
