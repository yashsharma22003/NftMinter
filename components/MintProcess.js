// import {ethers} from 'ethers'
import { contract, getSigner } from './contract'
import {ethers} from 'ethers'
function toWei(amount) {
    const toWei = ethers.utils.parseUnits(amount.toString());
    return toWei.toString();
}

export async function MintProcess (){
const contractObj = await contract()
const amount = 0.08
let tx = {
    value: toWei(amount)
}
const data = await contractObj.mint(1, tx);
const receipt = await data;
console.log(receipt);



}