import React from 'react';
import '../02-useEffect/effects.css';
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHook = () => {
   const {loading, data }= useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    // console.log(loading);

    const {author, quote} = !!data && data[0];

    console.log(author, quote);



    return (
        <div>
            <h1>Breaking Quotes</h1>
            <hr/>
                
        {
        loading ? 
        (  
             <div className="alert alert-info text-center">
                Loading...
             </div>
             
        )
        : 
        (
            <blockquote className="blockquote text-right">
                <p className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
        )
        }

        <button className="btn btn-primary"> 
            Siguiente Quote
        </button>
          

            
        </div>
        
    )
}
