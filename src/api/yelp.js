import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization: 'Bearer X9JjzgnTtY1xOE3ELXD4hHy7Isf_-j49l8ipB1-h7LDUdNHbSH4CfwdDZKK0Sike-iA-QjfcSvVHJeMlRxPC9dnAGFI0Viy0D6PfNPCWXEmL6AX4E53sM5Yog8C1XnYx'
  }
});
