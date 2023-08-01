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

const theme = createTheme ({
  palette: {
    primary: {
      light: '##fff6b3',
      main: '#ffe40f',
      dark: '#f4dd32',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
     
    },
  },
}));


 


export default function FormNew() {
 
  const [transferData, setTransferData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [resortData, setResortData] = useState([]);
  const [countryId, setCountryId] = useState(1);

  const [countryNameMap, setCountryNameMap] = useState([]);
  const [TelNumber, setTelNumber] = useState();

  const [budgects, setBudgects] = useState([]);
 
  const [resort_id, setresort_id] = useState(0);
  const [nights, setnights] = useState(0);
  const [adults, setadults] = useState(0);
  
  useEffect(() => {
    getBudgetData();
  }, [adults]);
 
  const [CountryPname, sethandleCountryPname] = useState(0);

  

  const handleCountryPname = (event) => {
    sethandleCountryPname(event.target.value);
  }


  const [rate_season_range, setrate_season_range] = useState();
  const [get_budgects_value, setget_budgects_value] = useState(0);
  const [BudgectsRate, setBudgectsRate] = useState(1);
 
  const [VillaType, setVIlla] = useState(0);

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [date1, setdate1] = useState();
  const [date2, setdate2] = useState();

  const [fexpage, setFexpage] = useState();
 
 


  useEffect(() => {
    getBudgetData();
  }, [nights]);

  useEffect(() => {
    getBudgetData();
  }, [selectedDate]);

  //const firstRender = useRef(true)
  const [post, setPost] = useState([])
  const options = []
  const listItems = ""

  // validation start
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
 
  

  const [typeOfHoliday, setTypeOfHoliday] = useState(true);
  const [errorList, setErrorList] = useState([])


  const [theArray, setTheArray] = useState([]);
  const [BudgectsArray, setBudgectsArray] = useState([]);
  const [NameArray, setNameArray] = useState([]);
  const [emailArray, setEmailArray] = useState([]);
  const [phoneArray, setPhoneArray] = useState([]);
  const [prefertobeArray, setPrefertobeArray] = useState([]);
  const [nightarray, setNightarray] = useState([]);
  const [resortarray, setResortarray] = useState([]);
  const [adultsarray, setAdultsarray] = useState([]);
  

  const [celebratingarray, setCelebratingarray] = useState([]);

  const [countryvaluearray, setCountryvaluearray] = useState([]);


  const [flexiblearray, setflexiblearray] = useState([]);
  const [countrynamearray, setCountrynamearray] = useState([]);

  const nameChange = (event) => {
    setName(event.target.value);
  }
  const emailChange = (event) => {
    setEmail(event.target.value);
  }
  const telephoneChange = (event) => {
    setTelephone(event.target.value);
  }

  
  
 
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
    let newList = [];
    let newListbudgect = [];
    let Namevalue = [];
    let Emailvalue = [];
    let Phonevalue = [];
    let Nightvalue = [];
    let Resortvalue = [];
    let Adultvalue = [];
    let celeprelivalue = [];
    let countryvalue = [];
    

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
   

    if (nights < 1){
      Nightvalue.push(`Nights Rquired`);
      return_status = false;
      setActive(false)
    }
 
    if (get_budgects_value == 0){
      newListbudgect.push(` Required `);
      return_status = false;
      setActive(false)
    }


    if (resort_id == 0){
      Resortvalue.push(`Resort Name Required`);
      return_status = false;
      setActive(false)
    }

    if (CountryPname == 0){
      countryvalue.push(`Passport Issuing Country Name Required`);
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
    
    setTheArray(newList);
    setBudgectsArray(newListbudgect);
    setNameArray(Namevalue);
    setEmailArray(Emailvalue);
    setPhoneArray(Phonevalue);
    setNightarray(Nightvalue);
    setResortarray(Resortvalue);
    setAdultsarray(Adultvalue);
    setCelebratingarray(celeprelivalue);
    setCountryvaluearray(countryvalue);
    


    
    if (return_status) {
      fetch('https://www.ovholidays.com/experience/thank-you.php', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fldcustomerFax : 0,
          fldCustomerFormType : 3,
          fldCustomerFormMessage1 : "Inquiry Form",
          fldAdVisitorID : localStorage.getItem('fldAdVisitorID'),
          adfrom : localStorage.getItem('adfrom'),
          keyword : localStorage.getItem('keyword'),
          first_landing_page : localStorage.getItem('first_landing_page'),
          code : localStorage.getItem('code'),
          fldCustomerCountryOfResidence : countryId,
          fldCustomercountryPhoneCode : TelNumber,
          fldCustomerFName : name,
          fldCustomerEMail : email,
          fldCustomerMobilePhone : telephone,
          ArrivalDate : selectedDate,
          fldCustomerFormNights : nights,
          fldCustomerNoOfAdults : adults,
          fldCustomerNoOfChilds : children,
          fldCustomerFormResort1ID : resort_id,
          fldCustomerFormBudgetNew : get_budgects_value,
          fldCustomerFormResort1VillaID : VillaType,
          fldCustomerFormTypeOFHoliday:BoxTypeOfHolidayValue,
          fldCustomerFormPassportIssuingCountry : CountryPname
         
        })
    }).then((response) => response.json())
        .then( data =>{
            
            if (data.code == 200) {
              window.location.href = 'https://www.ovholidays.com/thankyou.php';
            } else {
              window.location.href = 'https://www.ovholidays.com/errorovx.php';
            }
          }).catch((error) => {
            console.log('not work');
            console.log(error);
        });
    }  
  }
// validation end

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

    $( ".close-btn-accform1[type=button]" ).click(function() {
      $( ".close-btn-accform1" ).toggleClass( "highlight2" );
    });


    fetch('https://www.ovholidays.com/experience/resorts.php', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            destinationURL: "maldives",
        })
    }).then((response) => response.json())
        .then(data => setResortData(data))
        .catch((error) => {
            console.log('not work');
            console.log(error);
        });


        

  },[])



  const [age,setAge] = React.useState(''); 
  const handleChange = (event) => {
    setAge(event.target.value);
    getBudgetData();
  };
  

  const handleChangeVIlla = (event) => {
    setVIlla(event.target.value);
      }

  const handleChangenights = (event) => {
    setnights(event.target.value);
      }

  const handleChangeadults = (event) => {

    console.log(event);
    setadults(event.target.value);
    getBudgetData();
  };
  

  const [children,setchildren] = React.useState('');  

  if (children == "1 Child") {
    console.log("ddd")
  } 
  


  useEffect(() => {
  }, [children]);
 

  const handleChangechildren = (event) => {
    setchildren(event.target.value);
    
   
  };

  

  const innerResort = (event) => {
 
    setresort_id(event.target.value);
    console.log(event.target.value)
    getBudgetData();
       
    let result = []
    fetch('https://www.ovholidays.com/experience/resorts-inner.php', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          destinationURL: event.target.value,
      })
       }).then((response) => response.json())
      .then(data => {
        setSelectedData(data.room_details)
      })
      .catch((error) => {
          console.log('not work');
          console.log(error);
      });   


    const data_all = {
          selectedDate: selectedDate,
          resort_id: event.target.value,
          adults: adults,
          nights: nights
        }

    console.log(data_all);
    let resultw = []

    
    fetch('https://www.ovholidays.com/experience/budgect_setting.php?', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data_all)
       }).then((response) => response.json())
      .then(data => {
        setBudgectsRate(data)
      })
      .catch((error) => {
          console.log('not work');
          console.log(error);
      });
 
 

  };

  
  //budgect_setting.php form
   const get_budgects = (event) => {
    setget_budgects_value(event.target.value);
       
    console.log(nights);
      const data_all = {
          selectedDate: selectedDate,
          resort_id: resort_id,
          adults: adults,
          nights: nights,
          get_budgects_value: event.target.value,
        }

          console.log(data_all);
    let result = []
    fetch('https://www.ovholidays.com/experience/budgect_setting.php?', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data_all)
       }).then((response) => response.json())
      .then(data => {
        setBudgectsRate(data)
      })
      .catch((error) => {
          console.log('not work');
          console.log(error);
      });     


  };

  
  const getBudgetData = ()=> {
    console.log(selectedDate);
    const data_all = {
      selectedDate: selectedDate,
      resort_id: resort_id,
      adults: adults,
      nights: nights,
      get_budgects_value: get_budgects_value,
    }
    console.log(data_all);
    let result = []
    fetch('https://www.ovholidays.com/experience/budgect_setting.php?', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data_all)
       }).then((response) => response.json())
      .then(data => {
        setBudgectsRate(data)
      })
      .catch((error) => {
          console.log('not work');
          console.log(error);
      });     
  }
  

  const classes = useStyles();
 

  return (
    
    <form className={classes.root} autoComplete="off" id="form_wrapper"  >
  
  <Grid className="display-none"  item xs={12}> 
  <TextField type="text"  name="fldcustomerFax" className="display-none" /> 
  <TextField type="hidden" name="fldCustomerFormType" value="3"  />
  <TextField type="hidden"  name="fldCustomerFormMessage1"  value="Inquiry Form" /> 
  <TextField type="hidden"  name="fldAdVisitorID"  value={localStorage.getItem('fldAdVisitorID')} /> 
  <TextField type="hidden"  name="adfrom"  value={localStorage.getItem('adfrom')} /> 
  <TextField type="hidden"  name="keyword"  value={localStorage.getItem('keyword')} /> 
  <TextField type="hidden"  name="first_landing_page"  value={localStorage.getItem('first_landing_page')} /> 
  <TextField type="hidden"  name="code"  value={localStorage.getItem('code')} /> 
  <TextField type="hidden"  name="fldCustomerCountryOfResidence"  value={countryId} />
  <TextField type="hidden"  name="fldCustomercountryPhoneCode"  value={TelNumber} />

  <TextField type="hidden"  name="utm_medium"  value={localStorage.getItem('utm_medium')} /> 
  <TextField type="hidden"  name="agp"  value={localStorage.getItem('agp')} /> 
  </Grid>


<h5 class="  home-para heading-new text-left marg-btm-30  h5heading mobile-h">Enquire Now</h5>

<p className="fnt-15 marg-btm-5 padd-btm-15  body-new  marg-btm-30 mobile-h">To book your holiday or to make an enquiry, please get in touch with us by filling this form. <br/>
Your personal Destination Specialist will contact you shortly with expert guidance and recommendations for your holiday.</p>

<Grid container spacing={3}>


        <Grid item xs={12}>
           <h5 class=" body-new nobtmborder rich-inner-title mrg-bort-0 mrgn-bot-min">Contact Details</h5>
        </Grid>
        
        <Grid item xs={6}>
          <TextField required label="Required" color="primary"  onChange={nameChange} />
          <div className="error-waper">
            <div className="erroe-msg">{NameArray[0]}</div>
          </div> 
        </Grid>

        <Grid item xs={6}>
        <TextField required label="Required" onChange={emailChange} />
        <div className="error-waper">
            <div className="erroe-msg">{emailArray[0]}</div>
          </div> 
        </Grid>

        <Grid item xs={6}>
        <FormLabel required label="Required" className="margin-top-form" component="legend">Telephone/Whatsapp/Viber</FormLabel>
        <div className="tel-nomber-sec">
        <p className="">{TelNumber}</p> 
        
        <InputNumber className="mobilenumberInput"  onChange={setTelephone}   size="lg"/>
        </div>
        <div className="error-waper">
            <div className="erroe-msg">{phoneArray[0]}</div>
          </div> 
        </Grid>

        <Grid className='new-field-width' item xs={6}>
            <FormControl className={classes.formControl}>
            
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
          </FormControl> 
        
        </Grid>
      
        
      
      <Grid item xs={12}>
          <hr/>
        </Grid>
                            <Grid item xs={12}>
                                  <h5 class=" body-new nobtmborder rich-inner-title mrg-bort-0new ">Travel Details </h5>
                            </Grid>

                            <Grid item xs={6}>
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
                                
                                <MenuItem  value={"2 Adults"}>2 Adults</MenuItem>
                                <MenuItem value={"3 Adults"}>3 Adults</MenuItem> 
                                <MenuItem value={"4 Adults"}>4 Adults</MenuItem>
                                <MenuItem value={"5 Adults"}>5 Adults</MenuItem>
                                <MenuItem value={"6 Adults"}>6 Adults</MenuItem>
                                <MenuItem value={"7 Adults"}>7 Adults</MenuItem>
                                <MenuItem value={"8 Adults"}>8 Adults</MenuItem> 
                                <MenuItem value={"9 Adults"}>9 Adults</MenuItem>
                                <MenuItem value={"10 Adults"}>10 Adults</MenuItem>
                                
                            </Select>



  <Select 
                            className="nightSelect"
                              labelId="adults"
                              id="adults"
                              value={children}
                              name="fldCustomerFormadults"
                              onChange={handleChangechildren}
                             
                            >
                                
                                <MenuItem value={"1 children"}>1 Child</MenuItem>
                                <MenuItem value={"2 children"}>2 Children</MenuItem> 
                                <MenuItem value={"3 children"}>3 Children</MenuItem>
                                <MenuItem value={"4 children"}>4 Children</MenuItem>
                                
                                
                            </Select>


</Grid>
<div className="error-waper">
            <div className="erroe-msg">{adultsarray[0]}</div>
          </div>
                                </div>
              
                              </div>
                             
                            
                           
                            </Grid>
                         
                          
                 
<Grid item xs={12}>
          <hr/>
        </Grid>
<Grid item xs={12}>
<h5 class=" body-new nobtmborder rich-inner-title mrg-bort-0new  mrgn-bot-min">Resort, Offer and Other Preferences    </h5>
        </Grid>
        <Grid item xs={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Resort Name</InputLabel>
        
        <Select className="width-100"
          autoOk
          labelId="resort_id"
          id="resort_id"
          defaultValue={""}
          onChange={innerResort}
          name="fldCustomerFormResort1ID"
        >
          {resortData.map(item=> (
            <MenuItem value={item.seo_url}>{item.fldProductShortDisplayName}</MenuItem>
          ))}
        </Select>
        <div className="error-waper">
            <div className="erroe-msg">{resortarray[0]}</div>
          </div> 
      </FormControl>
     
        </Grid>
        <Grid item xs={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Villa Type</InputLabel>
        <Select className="width-100" 
          labelId="demo-simple-select-label"
          id="VillaType"
          defaultValue={""}
          onChange={handleChangeVIlla}
          name="fldCustomerFormResort1VillaID"
          autoOk
        >
          {selectedData.map(item=> (
            <MenuItem value={item.fldAccommodationID}>{item.fldAccommodationName}</MenuItem>
          ))}
         
        </Select>
        
      </FormControl>
        </Grid>
        <Grid  className="margin-around-form" item xs={12}>
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
        

        <Grid className="width-100-form new-mobile-margin" item xs={12}>
        <FormControl className={classes.formControl}>
        <InputLabel required  label="Required" id="get_budgects_value">Your price criteria for the entire stay excluding international flights</InputLabel>
        <Select className="width-100"
          labelId="get_budgects_value"
          id="get_budgects_value" 
          defaultValue={""}
          onChange={get_budgects}
          name="fldCustomerFormBudgetNew"
         
          label="Required"
        >
          
          <MenuItem value={1}>I am sensitive to the price USD 2.5k – 4.5k</MenuItem>
          <MenuItem value={2}>I am flexible based on value USD 5k – 8k</MenuItem>
          <MenuItem value={3}>I am open to recommendations USD 10k – 15k</MenuItem>
          <MenuItem value={4}>I am willing to pay a premium USD 15k – 20k</MenuItem>
          <MenuItem value={5}>I am looking for luxury resorts USD 20k – 30k</MenuItem>
          <MenuItem value={6}>I am looking for ultra-luxury resorts USD 30k – 50k</MenuItem>
          <MenuItem value={7}>My budget is unrestricted USD 50k & Above </MenuItem> 
        </Select>
        
      </FormControl>
      <div className="error-waper">
            <div className="erroe-msg">{BudgectsArray[0]}</div>
          </div> 
        </Grid>


        <Grid className="width-100-form new-mobile-margin mb-5" item xs={12}>
 <FormControlLabel onChange={checkBoxTypeOfHoliday} control={<Checkbox  name="fldCustomerFormTypeOFHolidayHoneymoon" value="If this resort exceeds the selected price range, I am open to consider other resorts. " />} label="If this resort exceeds the selected price range, I am open to consider other resorts. "/>
        </Grid>
       
        
<Grid item xs={12}>
<Accordion className="border-none-form">
  <Card>
    <Card.Header className="header-card-form extra-m">
    <FormLabel component="legend">Is there anything else you’d like us to know<br/> before we put our planning hats on?<br/><span>Any off limits, dislikes, must haves etc. Let us know here… </span> </FormLabel>
    
      <Accordion.Toggle as={Button} variant="link" eventKey="0" className="close-btn-accform1">
        <Plus color="#493737" size={50} />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Grid  className="margin-around-form3" item xs={12}>

<FormLabel component="legend">What’s on your wishlist?</FormLabel>
<FormGroup row>
<FormControlLabel control={<Checkbox  name="checkedA" />} label="  Privacy" />
<FormControlLabel control={ <Checkbox name="checkedB"  /> } label="  Quietness" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="  Adventure " />
<FormControlLabel control={<Checkbox name="checkedC" />} label="  Romance" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="   Partying" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Wellness" />
</FormGroup>
</Grid>
<Grid  className="margin-around-form3" item xs={12}>

<FormLabel component="legend">What are you feeling like for the transfer?</FormLabel>
<FormGroup row>
<FormControlLabel
control={<Checkbox  name="checkedA" />}
label="     A Scenic Sea Plane"
/>
<FormControlLabel
control={
  <Checkbox
    
    name="checkedB"
  
  />
}
label="     A Comfortable Domestic Flight"
/>
<FormControlLabel control={<Checkbox name="checkedC" />} label="     A Quick Speed Boat Ride " />

</FormGroup>
</Grid>

<Grid  className="margin-around-form3" item xs={12}>

<FormLabel component="legend">Would you like your quotation to include international flights?</FormLabel>
<FormGroup row>
<FormControlLabel
control={<Checkbox  name="checkedA" />}
label="       Yes"
/>
<FormControlLabel
control={
  <Checkbox
    
    name="checkedB"
  
  />
}
label="     No"
/>


</FormGroup>
</Grid>
<Grid  className="margin-around-form3" item xs={12}>

<FormLabel component="legend">How would you like to treat your taste buds?</FormLabel>
<FormGroup row>
<FormControlLabel
control={<Checkbox  name="checkedA" />}
label="   Hearty Buffets"
/>
<FormControlLabel
control={
  <Checkbox
    
    name="checkedB"
  
  />
}
label="Choicely Ala Carte"
/>


</FormGroup>
</Grid>

<Grid  className="margin-around-form3" item xs={12}>

<FormLabel component="legend">What type of an island would you rather get lost in?</FormLabel>
<FormGroup row>
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Small cozy island" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Vast breathtaking island" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="     Quiet Island" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Happening Island" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="     Family Friendly Island" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="      Romantic Island" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="     Lush Green Island" />
</FormGroup>
</Grid>

<Grid  className="margin-around-form3" item xs={12}>

<FormLabel component="legend">What view would you like to wake up to?</FormLabel>
<FormGroup row>
<FormControlLabel control={<Checkbox name="checkedC" />} label="    A Soothing Sunrise" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="   A Breathtaking Sunset" />

</FormGroup>
</Grid>

<Grid  className="margin-around-form3" item xs={12}>

<FormLabel component="legend">Cherries on Top… </FormLabel>
<FormGroup row>
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Pre-booked Spa" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="   Wellness Activities" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Baby-Sitting Services" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Pre-booked Kids Club" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Private Dinners" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    In Villa Dining" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="   Floating Breakfast" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="   Sandbank Picnic" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Sunset Cruising" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Outdoor Cinema" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Motorized Water Sports" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Non-motorized water sports" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="   Diving" />

</FormGroup>
</Grid>

<Grid  className="margin-around-form3" item xs={12}>

<FormLabel component="legend">I would like a mobile data connection on arrival </FormLabel>
<FormGroup row>
<FormControlLabel control={<Checkbox name="checkedC" />} label=" Yes" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="No" />

</FormGroup>
</Grid>

<Grid  className="margin-around-form3" item xs={12}>

<FormLabel component="legend">I would like a complimentary guided Male city tour on departure </FormLabel>
<FormGroup row>
<FormControlLabel control={<Checkbox name="checkedC" />} label=" Yes" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="No" />

</FormGroup>
</Grid>

<Grid  className="margin-around-form3" item xs={12}>

<FormLabel component="legend">I have special dietary requirements</FormLabel>
<FormGroup row>
<FormControlLabel control={<Checkbox name="checkedC" />} label="   Lacto-ovo-vegetarian" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="   Vegan Vegetarian" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Hindu Vegetarian" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Jain Vegetarian" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="     Halal" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Kosher" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="   Gluten Free" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="   Lactose Free" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="   Low Calorie Meals" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Diabetic" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="    Other" />


</FormGroup>
</Grid>
<Grid item xs={12}>
        <FormLabel component="legend">Any other special requirements? </FormLabel>
           <TextField
          id="outlined-multiline-static"
          label="Please specify"
          name="fldCustomerFormMessage"
          multiline
          rows={4}
        
          variant="outlined"
        /></Grid>

      </Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>
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


       
        </Grid>
        
       
    </form>
    
  );
}
