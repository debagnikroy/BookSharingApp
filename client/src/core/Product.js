import React, { useEffect,useState } from 'react';
import Layout from './Layout';
import {isAuthenticated} from '../auth'
import { Link } from 'react-router-dom';
import {getTransferMarketListedBooks} from './ApiCore'
import MyCard from './MyCard';
import Menu from './Menu'

const Product=(props)=>{    
    
    const {user: {_id,name,email,role}}=isAuthenticated();  
    const [id,setId]=useState("");
    const token=isAuthenticated().token; 

    
    const init=(userId,token)=>{        
        const isbn = props.match.params.isbn;
        setId(isbn);
        console.log("isbn=",id);   
    }        

    useEffect(()=>{
        init(_id,token);        
    },[]);

    
    const userId=isAuthenticated() && isAuthenticated().user._id;

    return (
        <React.Fragment>
            <Menu />
            <Layout title="View Book" description="About the book" className="container">    
                <MyCard product={props.match.params.isbn} showDesc={true}  />
            </Layout>
        </React.Fragment>        
    )  
}

export default Product;

