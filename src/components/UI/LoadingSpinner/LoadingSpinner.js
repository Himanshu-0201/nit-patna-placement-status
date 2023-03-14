import Spinner from 'react-bootstrap/Spinner';
import classes from "./LoadingSpinner.module.css";

function LoadingSpinner() {

  return (
    <Spinner className={classes.spinner} animation="grow" variant="info" />
  );
}

export default LoadingSpinner;