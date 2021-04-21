import React,{useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./downloadpage.css"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Axios from "axios";


const useStyles = makeStyles((theme) => ({

    formControl: {
      margin: theme.spacing(1),
      minWidth: 180,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  

export default function SimpleSelect() {
  const initialcount={
      scratch:0,
      scuff:0,
      dent:0
  }
  const classes = useStyles();
  const [revieweddata,setdata]=useState([])
  const [damagetype, setdamagetype] = useState('');
  const [countvalue,setcountvalue]=useState(initialcount);

  console.log(countvalue.scuff)
  const val=()=>revieweddata.map(async(val)=>{
      if(val.damagetype===damagetype){
        const response = await fetch(val.image);
        response.blob().then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = 'picture.jpeg';
            a.click();
    });}
})
let scratch=[]
let scuff=[]
let dent=[]
useEffect(()=>{
    Axios.get("http://localhost:3001/api/images").then((response)=>{
       setdata(response.data)
        response.data.map((val,key)=>{
            if(val.damagetype==="Scuff"){
                scuff.push(val.id)
            }
            else if(val.damagetype === "Scratch"){
               scratch.push(val.id)
            }
            else if(val.damagetype==="Dents"){
               dent.push(val.id)
            }
            setcountvalue({
                scratch:scratch.length,
                scuff:scuff.length,
                dent:dent.length
            })
        }
        )
}
    )
  },[])
  const handleChange = (event) => {
    setdamagetype(event.target.value);
  };

  return (
    <React.Fragment >
    <div className="body">
    <div className="centeralign">
    <Card className="middleadju">
      <CardContent>
        <p className="para">Scratch {countvalue.scratch}</p>
      </CardContent>
    </Card>
    <Card className="middleadju">
      <CardContent>
        <p className="para">Scuff {countvalue.scuff}</p>
      </CardContent>
    </Card>
        <Card className="middleadju">
      <CardContent>
        <p className="para">Dent {countvalue.dent}</p>
      </CardContent>
    </Card>
    
    <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label"> <strong>DamageType</strong></InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={damagetype}
          onChange={handleChange}
        >
          <MenuItem style={{fontWeight:"bold", fontFamily:"Poppins",fontSize:"12px"}}value="">
            <em>None</em>
          </MenuItem>
          <MenuItem style={{fontWeight:"bold", fontFamily:"Poppins",fontSize:"12px"}} value={'Scratch'}>Scratch</MenuItem>
          <MenuItem style={{fontWeight:"bold", fontFamily:"Poppins",fontSize:"12px"}} value={'Scuff'}>Scuff</MenuItem>
          <MenuItem style={{fontWeight:"bold", fontFamily:"Poppins",fontSize:"12px"}} value={'Dents'}>Dent</MenuItem>
        </Select>
      </FormControl>
      </div> 

      <div className="button">
      <button className="btn-1"  type='button' onClick={val}>Download</button></div>
      <div className="myGallery">
      </div></div>
    </React.Fragment>
  );
}
