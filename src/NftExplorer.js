import React, { useState } from 'react';
// import nftService from './services/nftService';
import axios from 'axios'

const NftExplorer = () => {
  const [metadata, setMetadata] = useState(null);
  const [contractAddress, setContractAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  // const [blockchain, setBlockchain] = useState('eth-main');
  const [ownerAddress, setOwnerAddress] = useState('');
  const [error, setError] = useState(null);

  const fetchNftMetadata = async () => {
    const options = {
      method: 'PUT',
      url: `http://localhost:8080/v1/refresh/contract/0xce4f341622340d56e397740d325fd357e62b91cb/token/1773`,
      headers: { accept: 'application/json', 'X-API-KEY': '2jhzbqIWanB8puiqySBIWJVf6Ovp7oPW' }
    };
  
    try {
      const response = await axios.request(options);
      console.log('response', response);
      setMetadata(response.data.price_summary);
      setError(null);
    } catch (error) {
      console.log('error')
      setError('Error: Verify chain and contract address are valid!');
    }
  };

//  const fetchCollectionMetadata = async () => {
//     try {
//       const response = await nftService.getCollectionMetadata(contractAddress);
//       setMetadata(response.data);
//     } catch (error) {
//       console.error('Error fetching collection metadata:', error);
//     }
//   };

//   const fetchOwnerMetadata = async () => {
//     try {
//       const response = await nftService.getOwnerMetadata(ownerAddress);
//       setMetadata(response.data);
//     } catch (error) {
//       console.error('Error fetching owner metadata:', error);
//     }
//   };

  return (
    <div>
      <input
        type="text"
        value={contractAddress}
        onChange={e => setContractAddress(e.target.value)}
        placeholder="Contract address"
      />
      <input
        type="text"
        value={tokenId}
        onChange={e => setTokenId(e.target.value)}
        placeholder="Token ID"
      />
      <input
        type="text"
        value={ownerAddress}
        onChange={e => setOwnerAddress(e.target.value)}
        placeholder="Owner address"
      />
      <button onClick={fetchNftMetadata}>Fetch NFT Metadata</button>
      {/* <button onClick={fetchCollectionMetadata}>Fetch Collection Metadata</button>
      <button onClick={fetchOwnerMetadata}>Fetch Owner Metadata</button> */}
      <pre>{metadata ? JSON.stringify(metadata, null, 2) : 'Loading...'}</pre>
    </div>
  );
};

export default NftExplorer;