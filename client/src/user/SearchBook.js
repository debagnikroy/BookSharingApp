import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import {isAuthenticated} from '../auth'
import { addBook, searchBook } from './ApiUser';
import Menu from '../core/Menu'
import Layout from '../core/Layout';


const AddBook=()=>{

    const [isbn,setIsbn]=useState(""); 
    const [searchResult,setSearchResult]=useState(""); 
    const [redirect,setRedirect]=useState(false);   
    const {user,token}=isAuthenticated();

    const isbnHandler=(event)=>{
        document.getElementById("searchResult").innerHTML ='Loading..'
        setIsbn(event.target.value);
        searchBook(event.target.value).then(data=>{
            
            document.getElementById("searchResult").innerHTML =''
            
            for(let book of data['hits']['hits']){   
                var node = document.createElement("TR");
                var textnode = document.createTextNode(book['_source']['name']);         // Create a text node
                node.appendChild(textnode);                              // Append the text to <li>
                document.getElementById("searchResult").appendChild(node);
            }
        })
    }

    const addButton=(e)=>{
        e.preventDefault();
        addBook(user._id,isbn,token).then(data=>{
            if(data.error){
                console.log(data.error);
            }
            else{
                console.log(data);
                setRedirect(true);                
            }
        })
    }

    const shouldRedirect=redirect=>{
        if(redirect){
            return <Redirect to="/" />
        }
    }
    return(
        <React.Fragment>
            <Menu />
            <Layout title="Search a book by Name" description={`${user.name}`} className="container">    
            <form >
        {shouldRedirect(redirect)}
    
          <div class="form-group"> 
            <label for="isbn">Book Name</label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              className="form-control"
              placeholder="Enter ISBN"
              value={isbn}
              onChange={isbnHandler}
            />
          </div>
          <button onClick={addButton} className="btn btn-primary btn-block">Search</button>
        </form>
        
            <table>
                {searchResult}
                <div id='searchResult' name='searchResult'></div>
            </table>
            
        

            </Layout>
        </React.Fragment>
    
    );
}

export default AddBook;
