
import { contract } from './contract';
// Assume you have this async function somewhere
export const baseUri = async () => {
  const contractObj = await contract();
  const url = await contractObj.baseUri();
  return url;
};