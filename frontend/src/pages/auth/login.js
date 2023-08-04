import { motion } from "framer-motion";
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Spinner } from 'react-bootstrap';

export default function Login() {
  const variants = {
    hidden: { opacity: 0, x: 0 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

  const [email, setEmail] = useState('');
  const [emailArray, setEmailArray] = useState([]);
  const [isActive, setActive] = useState(false);

  const emailChange = (event) => {
    setEmail(event.target.value);
  }

  const formSubmitHandler = (event) => {
    setActive(true);
    event.preventDefault();
    // ... (rest of the form submission logic)
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="min-90"
    >
      <section className="offer_header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <motion.h1 className="mb-2 text-white text-center">
                Login
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <div className="form_jovial text-center">
        <Grid xs={12} spacing={3}>
          <Grid item xs={6} className="mb-4" style={{ margin: '0 auto' }}>
            <TextField required label="Your Email" onChange={emailChange} />
            <div className="error-waper">
              <div className="erroe-msg">{emailArray[0]}</div>
            </div>
          </Grid>
          <Grid item xs={6} className="mb-4" style={{ margin: '0 auto' }}>
            <TextField required label="Password" onChange={emailChange} />
            <div className="error-waper">
              <div className="erroe-msg">{emailArray[0]}</div>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12} className="submit-btn">
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={formSubmitHandler}
          >
            <Spinner
              as="span"
              variant="light"
              size="sm"
              role="status"
              aria-hidden="true"
              animation="border"
              className={
                isActive ? "spinnerSubmitactive" : "spinnerSubmitinactive"
              }
            />
            Submit
          </Button>
        </Grid>
      </div>
    </motion.div>
  );
}
