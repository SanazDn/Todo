import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [error, setError] = useState(null);
  const errorBlur = {
    title: "Invalid input",
    message: "Please fill all the fields.",
  };

  const typeInputRef = useRef();
  const textInputRef = useRef();
  const dateInputRef = useRef();

  


  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = typeInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const enteredDate =  dateInputRef.current.value;

    

    if (
      enteredAuthor.trim().length === 0 ||
      enteredText.trim().length === 0 ||
      enteredDate.trim().length === 0 
      
    ) {
      setError({
        title: "Invalid input",
        message: "Please fill all the fields correctly!",
      });

      return;
    }

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText , date: enteredDate });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

 
  
  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Task</label>
            <input type='text' id='author' ref={typeInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='number'>List</label>
            <input id='text' rows='5' ref={textInputRef} ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor='number'>Date</label>
            <input id='date' rows='5' ref={dateInputRef}></input>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Add ToDo</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
