import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Products=()=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        async function fetchdata(){
            let {data}=await axios.get('https://fakestoreapi.com/products');
            setData(data);
            
        }
        fetchdata();
    },[])
    return(
        <>
        <div className="container-fluid row ">
            {data.map((item)=>(
                <div className="card col-md-4 mb-2">
                    <h3>Title:{item.title.length>10?item.title.slice(0,10)+'...':item.title}</h3>
                    
                    <img src={item.image} alt="" width={'100%'} height={'300px'} />
                    <p>price:{item.price}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                   <Link to={`/product/${item.id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            ))}
        </div>
        </>
    )
}