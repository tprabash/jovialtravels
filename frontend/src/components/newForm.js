import React, {useEffect, useState, useRef} from 'react';
import TextField from '@material-ui/core/TextField';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DateFnsUtils from '@date-io/date-fns';
import {Card, Accordion, Spinner   } from 'react-bootstrap';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import $ from 'jquery';
import { InputNumber, InputGroup } from 'rsuite';
import { Plus } from 'react-bootstrap-icons';






export default function Form() {

    const [countryId, setCountryId] = useState(1);
    const [countryNameMap, setCountryNameMap] = useState([]);
    const [TelNumber, setTelNumber] = useState();
    const [countryvaluearray, setCountryvaluearray] = useState([]);
    const [typeOfHoliday, setTypeOfHoliday] = useState(true);
    const [nightarray, setNightarray] = useState([]);
    const [adultsarray, setAdultsarray] = useState([]);


    const [nights, setnights] = useState(0);
    const handleChangenights = (event) => {
        setnights(event.target.value);
          }

          
    const [adults, setadults] = useState(0);
    const handleChangeadults = (event) => {
        setadults(event.target.value);
      
      };


    const [name, setName] = useState('');
    const [NameArray, setNameArray] = useState([]);
    const nameChange = (event) => {
        setName(event.target.value);
     }

    const [email, setEmail] = useState('');
    const [emailArray, setEmailArray] = useState([]);
    const emailChange = (event) => {
        setEmail(event.target.value);
      }

    const [telephone, setTelephone] = useState('');
    const [phoneArray, setPhoneArray] = useState([]);
    const telephoneChange = (event) => {
        setTelephone(event.target.value);
      }
    
    const [CountryPname, sethandleCountryPname] = useState(0);
    const handleCountryPname = (event) => {
        sethandleCountryPname(event.target.value);
      }
  

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
    setSelectedDate(date);
    };

    const [children,setchildren] = React.useState('');  
    const handleChangechildren = (event) => {
        setchildren(event.target.value);
      };

      const [budgects,setget_budgects_value] = React.useState('');  
      const get_budgects = (event) => {
        setget_budgects_value(event.target.value);
        };

      const [celebratingarray, setCelebratingarray] = useState([]);
      const [BoxTypeOfHolidayValue, setBoxTypeOfHolidayValue] = useState([]);
 
      useEffect(() => {
       
      }, [BoxTypeOfHolidayValue]);
     
     
     const checkBoxTypeOfHoliday = (event) => {
     
       let newArray3 = [...BoxTypeOfHolidayValue, event.target.value, ];
       if (BoxTypeOfHolidayValue.includes(event.target.value)) {
         newArray3 = newArray3.filter(day2 => day2 !== event.target.value);
       }
       setBoxTypeOfHolidayValue(newArray3)
     
     
       if (newArray3.length > 0) {
         setTypeOfHoliday(false);
       } else {
         setTypeOfHoliday(true);
       }
         
       }



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


      useEffect(()=>{
        fetch('https://www.ovholidays.com/experience/get-country-all.php', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
             }).then((response) => response.json())
            .then(data => 
              
              setCountryNameMap(data)
              
              
              )
            .catch((error) => {
                console.log('not work');
                console.log(error);
            });

            fetch('https://www.ovholidays.com/experience/get_location.php', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
                 }).then((response) => response.json())
                .then(data => {
                  console.log(data)
                  setCountryId(data.country_id);
                  setTelNumber(data.telephone_no);
                })
                .catch((error) => {
                    console.log('not work');
                    console.log(error);
                });
      },[])


  return (
    <div className='form_jovial'>
        <Grid container spacing={3}>
            <Grid item xs={6} className="mb-5">
            <TextField required label="Your Name" color="primary"  onChange={nameChange} />
                <div className="error-waper">
                <div className="erroe-msg">{NameArray[0]}</div>
                </div> 
            </Grid>

            <Grid item xs={6} className="mb-4">
            <TextField required label="Your Email" onChange={emailChange} />
                <div className="error-waper">
                <div className="erroe-msg">{emailArray[0]}</div>
                </div> 
            </Grid>


            <Grid item xs={6} className="mb-4">
                <FormLabel required label="Required" className="margin-top-form" component="legend">Telephone/Whatsapp/Viber</FormLabel>
                <div className="tel-nomber-sec">
                <p className="">{TelNumber}</p> 
                
                <InputNumber className="mobilenumberInput"  onChange={setTelephone}   size="lg"/>
                </div>
                <div className="error-waper">
                    <div className="erroe-msg">{phoneArray[0]}</div>
                </div> 
             </Grid>

        <Grid className='new-field-width mb-4' item xs={6} >
            <FormLabel required id="standard-required" label="Required" className="margin-top-form2" component="legend">Passport Issuing Country</FormLabel>
            <Select className="width-100"
              autoOk
              labelId="country_id"
              id="country_id"
              defaultValue={""}
              onChange={handleCountryPname}
              name="fldCustomerFormResort1ID"
            >

              {countryNameMap.map(item=> (
                <MenuItem value={item.fldCountryID}>{item.fldCountryName}</MenuItem>
              ))}

            </Select>
            <div className="error-waper mt-2w">
                <div className="erroe-msg">{countryvaluearray[0]}</div>
            </div> 
          
        
        </Grid>

        <Grid item xs={6} >
                            <FormLabel required id="standard-required" label="Required" className="margin-top-form2" component="legend">Travel Dates </FormLabel>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            maxDate ="2024-12-31"
                            autoOk
                              //disableToolbar
                              variant="inline"
                              format="MM/dd/yyyy"
                              margin="normal"
                              id="selectedDate" 
                              value={selectedDate}
                              name="ArrivalDate"
                              onChange={handleDateChange}
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />
                            </MuiPickersUtilsProvider>
                            
                            
                            </Grid>

                            <Grid item xs={6}>
                                <div className="display-flex-form">
                                <div className="flex-50-form">
                                <InputLabel  className="margin-top-form2" component="legend" id="nights">Number of Nights</InputLabel>
                                <Select 
                                className="nightSelect"
                                labelId="nights"
                                id="nights"
                                value={nights}
                                name="fldCustomerFormNights"
                                onChange={handleChangenights}
                               
                                >

                                <MenuItem value={3}>3 nights</MenuItem> 
                                <MenuItem value={4}>4 nights</MenuItem>
                                <MenuItem value={5}>5 nights</MenuItem>
                                <MenuItem value={6}>6 nights</MenuItem>
                                <MenuItem value={7}>7 nights</MenuItem>
                                <MenuItem value={8}>8 nights</MenuItem> 
                                <MenuItem value={9}>9 nights</MenuItem>
                                <MenuItem value={10}>10 nights</MenuItem>
                                <MenuItem value={11}>11 nights</MenuItem>
                                <MenuItem value={12}>13 nights</MenuItem>
                                <MenuItem value={14}>14 nights</MenuItem>

                                </Select>
                                <div className="error-waper">
                                <div className="erroe-msg">{nightarray[0]}</div>
                                </div> 


                                </div>
                                <div className="left-side-form">
                                <FormLabel  component="legend" className="mrgn-mins">No.of pax and Child</FormLabel>

                                <Grid className="ag-range">



                                <Select 
                                className="nightSelect mr-right-form"
                                labelId="adults"
                                id="adults"
                                value={adults}
                                name="fldCustomerFormadults"
                                onChange={handleChangeadults}
                               
                                >
                                
                                <MenuItem  value={"2"}>2 Adults</MenuItem>
                                <MenuItem value={"3"}>3 Adults</MenuItem> 
                                <MenuItem value={"4"}>4 Adults</MenuItem>
                                <MenuItem value={"5"}>5 Adults</MenuItem>
                                <MenuItem value={"6"}>6 Adults</MenuItem>
                                <MenuItem value={"7"}>7 Adults</MenuItem>
                                <MenuItem value={"8"}>8 Adults</MenuItem> 
                                <MenuItem value={"9"}>9 Adults</MenuItem>
                                <MenuItem value={"10"}>10 Adults</MenuItem>
                                
                                </Select>



                                <Select 
                                className="nightSelect"
                                labelId="adults"
                                id="adults"
                                value={children}
                                name="fldCustomerFormadults"
                                onChange={handleChangechildren}
                            
                                >
                                
                                <MenuItem value={"1"}>1 Child</MenuItem>
                                <MenuItem value={"2"}>2 Children</MenuItem> 
                                <MenuItem value={"3"}>3 Children</MenuItem>
                                <MenuItem value={"4"}>4 Children</MenuItem>
                                
                                
                                </Select>


                                </Grid>
                                <div className="error-waper">
                                <div className="erroe-msg">{adultsarray[0]}</div>
                                </div>
                                </div>

                                </div>
                            </Grid>

                            <Grid  className="margin-around-form mt-4" item xs={12}>
                                    <FormLabel component="legend">Are You Celebrating Something? </FormLabel>
                                    <FormGroup row>

                                    <FormControlLabel onChange={checkBoxTypeOfHoliday} control={<Checkbox  name="fldCustomerFormTypeOFHolidayHoneymoon" value="Honeymoon" />} label="Honeymoon"/>
                                    <FormControlLabel onChange={checkBoxTypeOfHoliday} control={<Checkbox name="fldCustomerFormTypeOFHolidayAnniversary" value="Anniversary"  /> } label="Anniversary"/>
                                    <FormControlLabel onChange={checkBoxTypeOfHoliday} control={<Checkbox   name="fldCustomerFormTypeOFHolidayFamily" value="Family Holiday"  />} label="Family Holiday"/>
                                    <FormControlLabel  onChange={checkBoxTypeOfHoliday} control={<Checkbox name="fldCustomerFormTypeOFHolidayWedding" value="Ceremonial Wedding"  />} label="Ceremonial Wedding"/>
                                    <FormControlLabel onChange={checkBoxTypeOfHoliday} control={<Checkbox name="fldCustomerFormTypeOFHolidayBirthday" value="Birthday"  />} label="Birthday"/>
                                    </FormGroup>
                                    <div className="error-waper">
                                        <div className="erroe-msg">{celebratingarray[0]}</div>
                                    </div>
                                    </Grid>
                                    <Grid className="width-100-form new-mobile-margin mt-4" item xs={12} >
        
        <InputLabel id="standard-required" label="Required">Your price criteria for the entire stay excluding international flights</InputLabel>
        <Select className="width-100"
     
          defaultValue={""}
          onChange={get_budgects}
          name="fldCustomerFormBudgetNew"
        >
          
          <MenuItem value={1}>2.5 USD - 4.k USD</MenuItem>
          <MenuItem value={2}>5 - 7k USD</MenuItem>
          <MenuItem value={3}>7 - 10K USD</MenuItem>
          <MenuItem value={3}>10k USD & Above</MenuItem>
        </Select>
        
     
      {/* <div className="error-waper">
            <div className="erroe-msg">{BudgectsArray[0]}</div>
          </div>  */}
        </Grid>
    
        </Grid>

        <Grid item xs={12} className="submit-btn">

            <Button variant="contained" color="primary" type="button" onClick={formSubmitHandler}>
            <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"
                    className= {isActive ? "spinnerSubmitactive" : "spinnerSubmitinactive"}
                    />

            Submit
</Button>
</Grid>
    </div>
  )
}
