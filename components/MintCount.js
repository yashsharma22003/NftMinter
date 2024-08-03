import { contract, getSigner } from './contract'
import {useEffect, useState} from "react";
import {ethers} from "ethers"
const MintCount = () => {
let [value, setValue] = useState('');

useEffect(() => {

 const fetchTokenCount = async() => {
    const contractObj = await contract()
    const mintReturnValue = await contractObj.totalMinted()

    setValue(mintReturnValue.toString())
    console.log(value)
    
}
console.log(value)


fetchTokenCount()


},[])


return (
    <div className='p-2 text-green-400'>
        Nft Minted - {""}
        {value}{"/10"}
    </div>
)
}

export default MintCount;