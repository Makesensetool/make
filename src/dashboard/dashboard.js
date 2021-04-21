import "./dashboard.scss";
import React, { Fragment } from "react";
import history from '../history';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Landingpage=(props)=>{
  const getstartAnnotation=(values)=>{
    console.log(values)
    switch(values){
      case "Annotation":
        console.log("reached annotation values")
        return history.push('/AfterLogin');
      case "TrackAnnotation":
        return history.push('/imagesloader')
      case "Evaluate":
        return history.push('/imagesloader')
      case "Help":
        return window.location.href ="https://www.helpdesk.com/help/" 
    }
  }

  return (<Fragment>
      <div className="body">
      <div  className="top">
      <img className="topimg" src="ico/DMI-removebg.png"/>
      <div style={{textAlign:"Right"}} >
     <p style={{marginTop:"-45px",paddingRight:"10%",color:"white"}}>{props.username} !<pre className="tab"></pre>
     <button className="logout" style={{marginTop:"-45px"}} onClick={props.logout}>Logout</button>
     </p>
      </div>
     </div>
      <div className="grey-bg container-fluid">
  <section id="minimal-statistics">
<br/><br/><br/><br/>
<div className="marginLeft">
<div>
    <div className="row marginbottom">
      <div className="col-xl-3 col-sm-6 col-12 cusor1-margin" onClick={()=>getstartAnnotation("Annotation")}>
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-graph warning font-large-2 float-left"></i>
                </div>
                <div className="media-body text-center">
                  <p style={{marginTop:"10px"}}>Get Started with Annotation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 cusor2-margin" onClick={()=>getstartAnnotation("TrackAnnotation")} >
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                <i style={{color: "#ec3d2c"}} className="fas fa-chart-pie fa-3x"></i>
                </div>
                <div className="media-body text-center">
                  <p style={{marginTop:"10px"}}>Track Annotation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
  <div>
    <div className="row">
      <div className="col-xl-3 col-sm-6 col-12 cusor1-margin" onClick={()=>getstartAnnotation("Evaluate")} >
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                <i style={{color: "Dodgerblue"}} className="fab fa-battle-net fa-3x"></i>
                </div>
                <div className="media-body text-center">
                  <p style={{marginTop:"10px"}}>Evaluate Model</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 cusor2-margin" onClick={()=>getstartAnnotation("Help")}>
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-speech success font-large-2 float-left"></i>
                </div>
                <div className="media-body text-center">
                  <p style={{marginTop:"10px"}}>Help & Guidelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div></div>
</section>
</div>
      </div>
    
  </Fragment>)
}

export default Landingpage;