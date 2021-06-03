import React, { useEffect,useState } from 'react';
import Layout from './Layout';
import {isAuthenticated} from '../auth'
import { Link } from 'react-router-dom';
import {getTransferMarketListedBooks} from './ApiCore'
import MyCard from './MyCard';
import Menu from './Menu'

const Product=()=>{
    
    const [listedBooks,setListedBooks]=useState([]);
    const {user: {_id,name,email,role}}=isAuthenticated();  
    const [run,setRun]=useState(false);
    const token=isAuthenticated().token;   

    const init=(userId,token)=>{        
        setListedBooks([]);
        getTransferMarketListedBooks(userId,token).then(data=>{
            if(data.error){
                console.log(data.error);
            }
            else{
                console.log("market",data);
                setListedBooks(data);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }        
    useEffect(()=>{
        init(_id,token);        
    },[run]);

    const userId=isAuthenticated() && isAuthenticated().user._id;

    return (
        <React.Fragment>
            <Menu />
            <Layout title="View Book" description="View" className="container">    
                <MyCard product={"0071808558"} showDesc={true}  />
            </Layout>
        </React.Fragment>        
    )  
}

export default Product;

