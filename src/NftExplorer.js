import React, { useState } from 'react';
import nftService from './services/nftService';

const NftExplorer = () => {
  const [metadata, setMetadata] = useState(null);
  const [contractAddress, setContractAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [ownerAddress, setOwnerAddress] = useState('');

  const fetchNftMetadata = async () => {
    try {
      const response = await nftService.getNftMetadata(contractAddress, tokenId);
      setMetadata(response.data);
    } catch (error) {
      console.error('Error fetching NFT metadata:', error);
    }
  };

 const fetchCollectionMetadata = async () => {
    try {
      const response = await nftService.getCollectionMetadata(contractAddress);
      setMetadata(response.data);
    } catch (error) {
      console.error('Error fetching collection metadata:', error);
    }
  };

  const fetchOwnerMetadata = async () => {
    try {
      const response = await nftService.getOwnerMetadata(ownerAddress);
      setMetadata(response.data);
    } catch (error) {
      console.error('Error fetching owner metadata:', error);
    }
  };

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
      <button onClick={fetchCollectionMetadata}>Fetch Collection Metadata</button>
      <button onClick={fetchOwnerMetadata}>Fetch Owner Metadata</button>
      <pre>{metadata ? JSON.stringify(metadata, null, 2) : 'Loading...'}</pre>
    </div>
  );
};

export default NftExplorer;