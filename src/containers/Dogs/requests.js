import axios from 'axios';

export const indexBreeds = () => {
    return axios({
        url: 'https://dog.ceo/api/breeds/list/all',
    })
}