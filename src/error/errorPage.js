import React, { Fragment, useEffect, useState } from "react";
import "./errorpage.scss"

const errorpage=()=>{

   const redirect=()=>{
        window.location.href = "/login"
    }
    return(
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="error-template">
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <div class="error-details">
                        Sorry, an error has occured, Requested page not found!
                    </div>
                    <div class="error-actions">
                       <button onClick={redirect}  className="errorbtn btn-2"> <span style={{color:'white',marginTop:"-10px"}} class="fa fa-envelope fa-lg fa-fw i-style"></span>
                        &nbsp; &nbsp;Take Me Home</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }

export default errorpage;