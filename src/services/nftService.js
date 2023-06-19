import axios from 'axios';
import apiConfig from '../apiConfig';

// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '2jhzbqIWanB8puiqySBIWJVf6Ovp7oPW';

// Set up axios to include the API key in all requests
const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
});

const nftService = {
  getNftMetadata: function (contractAddress, tokenId) {
    return apiClient.put(`/contract/${contractAddress}/token/${tokenId}`);
  },

  getCollectionMetadata: function (contractAddress) {
    return apiClient.put(`/contract/${contractAddress}`);
  },

  getOwnerMetadata: function (ownerAddress) {
    return apiClient.put(`/owner/${ownerAddress}`);
  },
};

export default nftService;