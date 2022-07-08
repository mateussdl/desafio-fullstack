import Axios from 'axios';

export const dogFetch = () => {Axios.get('https://api.thedogapi.com/v1/images/search?limit=5&page=10&order=Desc&api_key=0dd5931e-dc53-4219-9bfb-51274aef6d80').then((response) => {console.log('descrição', response)});}