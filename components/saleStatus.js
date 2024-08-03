import {contract} from "./contract"

export const saleState = async() => {
    const contractObj = await contract();
    const saleStatus = await contractObj.isSaleActive();
    return saleStatus;
}
