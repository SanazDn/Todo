import { Link } from 'react-router-dom';

import classes from './QuoteItem.module.css';
//import classes from "./InfoItem.module.css";
import { useState } from "react";
import { removeQuote,getAllQuotes  } from '../../lib/api';
import useHttp from '../../hooks/use-http';

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';




const QuoteItem = (props) => {
  
  const { sendRequest, status, data: loadedQuotes } = useHttp(removeQuote);
  const history = useHistory();
  const [isActive, setActive] = useState(false);
    const onReviewClick = (e) => {
        e.preventDefault();
        setActive(!isActive);
    }

    const pdfCaption = (downloadPdf) => {
        if(downloadPdf === true){
            return 'Print PDF(CRA Version)';
        }
        return;
    } 

    useEffect(() => {
      if (status === 'completed') {
        //history.pop('/quotes');
      }
    }, [sendRequest,status,onclick]);

    const removeItemHandler = () => {
      sendRequest(props);
      console.log("props");
      //console.log(props);
      console.log(props);
      console.log("loadedQuotes");
      console.log(loadedQuotes);
      getAllQuotes();
// if(loadedQuotes)
// {
//   loadedQuotes.filter((loadedQuote) => {
//     return loadedQuote.id !== props.id;
//  })
//  return loadedQuotes;
//}
     
    }
   

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <blockquote>
          <p>{props.date}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <button className='btn' onClick={removeItemHandler}>
        Delete
      </button>
      <button className='btn'>
        Edit
      </button>
        <button
                className='btn'
                  //for="btn-check-2"
                  //text-align="center"
                  onClick={onReviewClick}
                 >
                  Done {props.type}
                </button>
                <div className="p-2 flex-fill bd-highlight" className={isActive ? classes.checked:classes.unchecked}></div>
        
    
    </li>
  );
};

export default QuoteItem;
