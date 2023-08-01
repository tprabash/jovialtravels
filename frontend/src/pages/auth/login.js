import { motion } from "framer-motion";
import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Spinner   } from 'react-bootstrap';

export default function Login() {
  const variants = {
    hidden: { opacity: 0, x: 0 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

 
  const [TelNumber, setTelNumber] = useState();
  const [countryvaluearray, setCountryvaluearray] = useState([]);
  const [typeOfHoliday, setTypeOfHoliday] = useState(true);
  const [nightarray, setNightarray] = useState([]);
  const [adultsarray, setAdultsarray] = useState([]);
  const [nights, setnights] = useState(0);
  const [adults, setadults] = useState(0);
  const [name, setName] = useState('');
  const [NameArray, setNameArray] = useState([]);
  const [email, setEmail] = useState('');
  const [emailArray, setEmailArray] = useState([]);
  const emailChange = (event) => {setEmail(event.target.value);}
  const [telephone, setTelephone] = useState('');
  const [phoneArray, setPhoneArray] = useState([]);
  const [CountryPname, sethandleCountryPname] = useState(0);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [children,setchildren] = React.useState('');  
  const [budgects,setget_budgects_value] = React.useState('');  
  const [celebratingarray, setCelebratingarray] = useState([]);
  const [BoxTypeOfHolidayValue, setBoxTypeOfHolidayValue] = useState([]);
  const [BoxTypeOfTiketValue, setBoxTypeTiketValue] = useState([]);

    const [isActive, setActive] = useState(false);
    const formSubmitHandler = (event) => {
      setActive(true)
      event.preventDefault();
      
      let return_status = true;
     
      let Namevalue = [];
      let Emailvalue = [];
      let Phonevalue = [];
      let countryvalue = [];
      let Nightvalue = [];
      let Adultvalue = [];
      let celeprelivalue = [];
    
      if(name == ""){
        Namevalue.push(`Your Name Required`);
        return_status = false;
        setActive(false)
      }

      if(email == ""){
        Emailvalue.push(`Valid Email Address Required`);
        return_status = false;
        setActive(false)
      } else {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
        if (!pattern.test(email)) {
            Emailvalue.push(`Please enter valid email`);
            return_status = false;
            setActive(false)
          }
      }

      if(telephone == ""){
          Phonevalue.push(`Phone Number required`);
          return_status = false;
          setActive(false)
        }
  
       if (CountryPname == 0){
          countryvalue.push(`Passport Issuing Country Name Required`);
          return_status = false;
          setActive(false)
        }

        if (nights < 1){
          Nightvalue.push(`Nights Rquired`);
          return_status = false;
          setActive(false)
        }
     
        if (adults < 1){
          Adultvalue.push(`Required `);
          return_status = false;
          setActive(false)
        }
        if (typeOfHoliday){
          celeprelivalue.push(`Required `);
          return_status = false;
          setActive(false)
        }

      setNameArray(Namevalue);
      setEmailArray(Emailvalue);
      setPhoneArray(Phonevalue);
      setCountryvaluearray(countryvalue);
      setNightarray(Nightvalue);
      setAdultsarray(Adultvalue);
      setCelebratingarray(celeprelivalue);

      if (return_status) {
        fetch('https://jovialtravels.com/sys/thankyou.php', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({

            Name : name,
            Email: email,
            PhoneCode : TelNumber,
            MobilePhone : telephone,
            ArrivalDate : selectedDate,
            Nights : nights,
            Adults : adults,
            Childs : children,
            TypeOFHoliday: BoxTypeOfHolidayValue,
            
            PassportIssuingCountry : CountryPname,
            Budget: budgects,
           
          })
          }).then((response) => response.json())
              .then( data =>{
                  
                  if (data.code == 200) {
                  window.location.href = 'https://jovialtravels.com/thankyou.php';
                  } else {
                  window.location.href = 'https://jovialtravels.com/error.php';
                  }
              }).catch((error) => {
                  console.log('not work');
                  console.log(error);
              });
      }  
    }


  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="min-90"
    >
      <section className=" offer_header">
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
