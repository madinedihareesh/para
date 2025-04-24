import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

export const SingleProduct=()=>{
    const [products,setProducts]=useState({});
    let {id}=useParams();
    useEffect(()=>{
        async function fetchdata(){
            let {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(data);
            setProducts(data)
            
        }
        fetchdata();
    },[])
    console.log(id);
    
    return(
        <>
         <div className="container row">
            <h1 className="col-4">{products.title}</h1>
            <img src={products.image} alt="" className="col-4"/>
            
         </div>
        </>
    )
}