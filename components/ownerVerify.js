import {contract, getSigner} from "./contract"


export const ownerVerify = async() => {
        const contractObj = await contract();
        const ownerCheck = await contractObj.owner();
        if (ownerCheck === getSigner())
            return(True)
        else
        return(false);
} 