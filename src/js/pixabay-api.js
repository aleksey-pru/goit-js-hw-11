import axios from "axios";
export const fetchSearch = (search) => {
    return axios({
    method: 'get',
    url: 'https://pixabay.com/api/',
    params : {
        key: '48819306-b63c1eb0b26be23d91021a657',
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    }
});
};