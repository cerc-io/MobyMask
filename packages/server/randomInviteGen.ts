import { ethers } from "ethers";
const sigUtil = require('eth-sig-util');

const DEFAULT_BASE_URI = 'http://localhost:3000';

signDelegation();

function signDelegation () {
  const signer = ethers.Wallet.createRandom();

  const invitation = {
    v:1,
    signedDelegations: [],
    key: signer.privateKey,
  }

  console.log('A SIGNED DELEGATION/INVITE LINK:');
  console.log(JSON.stringify(invitation, null, 2));
  
  const baseURI = process.env.BASE_URI || DEFAULT_BASE_URI
  console.log(baseURI + '/#/members?invitation=' + encodeURIComponent(JSON.stringify(invitation)));
}
