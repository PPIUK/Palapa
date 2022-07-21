import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/'
})