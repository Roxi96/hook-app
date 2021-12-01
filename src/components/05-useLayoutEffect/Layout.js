import React, {useLayoutEffect, useRef} from 'react';
import '../05-useLayoutEffect/layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const {data }= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote} = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        
        console.log(pTag.current.getBoundingClientRect());
    },[quote])



    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>
                
    
            <blockquote className="blockquote text-right">
                <p 
                className="mb-0"
                ref={pTag}
                >{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
      
        <button 
        className="btn btn-primary "
        onClick={increment}> 
            Siguiente Quote
        </button>
          

            
        </div>
        
    )
}
