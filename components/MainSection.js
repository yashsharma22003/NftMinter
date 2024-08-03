import {baseUri} from "./baseUriComp"
import {useState, useEffect, useRef} from "react";
import { MintProcess } from "./MintProcess"
import {FlipSale} from "./FlipSale";
import {saleState} from "./saleStatus";
import MintCount from "./MintCount"


const MainSection = () => {
    const stateRef = useRef(0);
    const [uri, setUri] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [state, setState] = useState('');
    let [statusString, setStatusString] = useState('Not Set');
  
    useEffect(() => {
      flip();
     },[state])

     const flip = () => {
      if (state == true){
        setStatusString('Sale Active');
      }
        else{
        setStatusString('Sale Inactive');
        }
   
        return setStatusString;

    }

    useEffect(()=> {
      const fetchSaleState = async () => {
        try {
          const state = await saleState();
          setState(state);
          stateRef.current = state;
        }
        catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
        
      };    
      fetchSaleState();
    }, []);
    
    useEffect(() => {
      
      const fetchBaseUri = async () => {
        try {
          const url = await baseUri();
          setUri(url);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchBaseUri();
  
    }, []);

   



    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    console.log(statusString);
  
 

    return (<div className=''>
        <section className=" h-screen flex-column ">
      <div className='h-auto pt-20 bg-indigo-900'>
        <h1 className='felx text-center  text-3xl font-serif  p-4 '>  Todays's NFT Drop </h1>
        </div>
        <div className='bg-gray-900 h-1/2'>   
        <MintCount/>
        <div className="p-2 text-cyan-200 "> State: {statusString}</div>  
        <div className="text-xs ml-6">--^Only Owner Can Flip The State</div>
                  <div className=' flex flex-row items-top justify-center  '>          
              
                  
                <button
    
           className='bg-gray-600 align-center px-6 rounded-lg mx-8 transition-transform duration-900 transform hover:scale-110 hover:cursor-pointer hover:bg-yellow-600 h-10 mt-20 '
           onClick={FlipSale}
            >
                Flip Status  </button>
                

                <button
           
           className='bg-gray-600 align-center px-6 rounded-lg mx-16 transition-transform duration-900 transform hover:scale-110 hover:cursor-pointer hover:bg-yellow-600 h-10 mt-20 '
           onClick={MintProcess}
            >
                Mint</button>
                

            <div className= "transition-transform duration-900 transform hover:scale-110 hover:cursor-pointer " >
           
           
            <img loading="lazy" src={uri} width="300" height="200" alt="NFT Preview" />
            </div>

            </div>
            </div>



           
        </section>
        </div>
    );
};

export default MainSection;