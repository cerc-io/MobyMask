import { ethers } from "ethers";

const DEFAULT_BASE_URI = 'http://localhost:3000';

signDelegation();

function signDelegation () {
  // Using random signer to generate fake root invite. Generally contract owner account is used for creating root invite.
  // This fake invite won't work if trying to submit reports on blockchain and is used for demo purposes.
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
