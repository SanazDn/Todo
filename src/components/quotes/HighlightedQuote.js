import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <h1>{props.author}</h1>
      {/* <p>${props.text}</p> */}
      <p>{props.date}</p>
      {/* <figcaption>{props.author}</figcaption> */}
    </figure>
  );
};

export default HighlightedQuote;
