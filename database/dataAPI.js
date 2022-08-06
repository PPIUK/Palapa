/* 
Axios API to connect to MongoDB Atlas database
will need to be connected with the latter half of the URL in respective screens
*/

import axios from 'axios';

export default axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/'
})