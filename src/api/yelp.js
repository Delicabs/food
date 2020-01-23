import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer UpNb9f4hE33rUd8mVUX6w8kz_x3zQ_9Z6VMhRbk2mp4npYW05gzhF2IyyLideo_lReV3VM-vSnnL18_kriNKSkxsfgMVm2PRg1_tQc6toFaEOhCiKeepFbWkREkUXnYx'
    }
})