import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import {isAuthenticated} from '../auth'
import { addBook, searchBook } from './ApiUser';
import Menu from '../core/Menu'
import Layout from '../core/Layout';
import { text } from 'body-parser';


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

                var TRnode = document.createElement("TR");
                var eventLinks = "/product/"+book['_source']['isbn'];
                eventLinks = eventLinks + '?name=' + book['_source']['name'];
                eventLinks = eventLinks + '&authors=' + JSON.stringify(book['_source']['authors']);
                eventLinks = eventLinks + '&image=' + encodeURIComponent(book['_source']['image']);
                eventLinks = eventLinks + '&publishedDate=' + JSON.stringify(book['_source']['publishedDate']);
                const tempDiv = document.createElement('a');
                tempDiv.setAttribute('href', eventLinks);

                var textnode = document.createTextNode(book['_source']['name']);         // Create a text node
                tempDiv.appendChild(textnode);
                TRnode.appendChild(tempDiv);
                document.getElementById("searchResult").appendChild(TRnode);
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
              placeholder="Enter a keyword"
              value={isbn}
              onChange={isbnHandler}
            />
          </div>
          <button onClick={addButton} className="btn btn-primary btn-block">Search</button>
        </form>
        
            <table>
                {searchResult}
                <div id='searchResult' name='searchResult' border-color='black' ></div>
            </table>
            
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            </Layout>
        </React.Fragment>
    
    );
}

export default AddBook;