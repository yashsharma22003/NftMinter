import {contract} from "./contract"
import {ownerVerify} from './ownerVerify';
export async function FlipSale() {
   
const contractObj = await contract();
const stateStatus = contractObj.flipSaleState();
console.log(stateStatus);
return(stateStatus)
    
   

}