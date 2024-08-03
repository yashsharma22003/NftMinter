import React,{useState, useEffect} from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {

    return(
      <header>
       <div className="flex justify-center ">
       <div className = "container flex w-full justify-start gap-10 bg-gray-900 p-4 ">
            
            <div className=" w-40 hover:bg-gray-800 hover:cursor-pointer hover:bg-black p-2 pl-4 text-xl font-mono">NFT Minter🖼️🔥🔥💲</div>
    {/* <img loading="lazy" alt="NFT Preview" src={""}/> */}
       <div className = "container items-center flex flex-row justify-end  gap-5 bg-indigo-900 p-2 pr-3">                 
            <ConnectButton />
        
       
        </div>
        </div>
        </div>
        
        </header>   )
}

export default Header;