import React,{Component} from 'react'
import MapContainer from "../components/MapContainer";
import Card from "../components/Card";
import  user from "../assets/images/creative.jpg"
import StarRatingComponent from 'react-star-rating-component';
import Service from "../components/Service";
import {RadioGroup, RadioButton} from 'react-radio-buttons'
import { CSSTransition } from 'react-transition-group';
import '../assets/animations.css'


import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

// must manually import the stylesheets for each plugin
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

class Dashboard  extends Component {

    constructor(props){
        super(props)
        this.state = {
            detail  : 1,
            timeList  : 1,
            choosebooking : "",
            cashpaycolor : "",
            cardpaycolor : "",
            maptoken : `https://maps.googleapis.com/maps/api/js?key=AIzaSyDR5-GEgHP3kHq7bPnMOZJDpe7D8BC9CUM&v=3.exp&libraries=geometry,drawing,places`
        }
    }


     detailshop = () => {
             this.setState({
                 detail : 2
             })
    }

    detailBarber = () => {
             this.setState({
                 detail : 3
             })

    }

    available = () => {
             this.setState({
                 detail : 4
             })

    }



    getDate = () => {
        this.setState({
            detail : 5
        })

    }

    getSelectTime = () => {
        this.setState({
            detail : 6
        })
    }

    changeColor = () => {
        if (this.state.choosebooking == ""){
            this.setState({
                choosebooking : " gold"
            })
        } else{
            this.setState({
                choosebooking : ""
            })
        }
    }

    cardPayment = () => {
        this.setState({
            detail : 7
        })

        if (this.state.cardpaycolor == ""){
            this.setState({
                cardpaycolor : " gold"
            })
        } else{
            this.setState({
                cardpaycolor : ""
            })
        }
    }

    cashpayment = () => {
        this.setState({
            detail : 8
        })

        if (this.state.cashpaycolor == ""){
            this.setState({
                cashpaycolor : " gold"
            })
        } else{
            this.setState({
                cashpaycolor : ""
            })
        }
    }

    finishProcesss = () => {
        this.setState({
            detail : 8
        })
    }

   render(){
        var online = true
        var network = navigator.onLine ? "online" : "offline";
        if (network === "online"){
            fetch('https://www.google.com', {
                mode : "no-cors"
            }).then(()=>{
                online = true
            })
        } else {
            online = false
        }
       return (
           <>
               {
                   this.state.detail < 2  &&  online &&
                   <div className="container-fluid">
                       <div className="row">
                           <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                               <div className="ui-block">
                                   <div className="top-header">
                                       <MapContainer
                                           className="__map__box"
                                           isMarkerShown
                                           googleMapURL={this.state.maptoken}
                                           loadingElement={<div style={{ height: `100%` }} />}
                                           containerElement={<div style={{ height: `450px` }} />}
                                           mapElement={<div style={{ height: `100%`, width : "100%" }} />}
                                       />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               }

             <div className="container">
                 {
                     this.state.detail == 1 &&
                     <div>
                         <h3 className="mt-3">Find your Stylist</h3>
                         <div className="row">
                             <div className="col-lg-6">
                                 <Card detailshop={this.detailshop}  />
                             </div>
                             <div className="col-lg-6" >
                                 <Card  detailshop={this.detailshop}/>
                             </div>
                             <div className="col-lg-6" >
                                 <Card detailshop={this.detailshop} />
                             </div>
                             <div className="col-lg-6" >
                                 <Card detailshop={this.detailshop} />
                             </div>
                         </div>
                     </div>
                 }

                 {
                     this.state.detail == 2 &&
                     <CSSTransition
                         timeout={2000}
                         classNames='fade'
                        >
                         <div className="row">
                             <div className="col-lg-4">
                                 <div className="row barber__box barber_user_box" onClick={this.detailBarber} style={{cursor : "pointer"}}>
                                     <img src={user} alt="" className="" />
                                     <div className="col-lg-12">
                                         <p className="barber__star">
                                             <strong>Alfred</strong> <br/>
                                             <StarRatingComponent
                                                 name="about_rating"
                                                 value="4"
                                                 editing={false}
                                             /></p>
                                     </div>
                                 </div>
                             </div>
                             <div className="col-lg-4">
                                 <div className="row barber__box barber_user_box" onClick={this.detailBarber} style={{cursor : "pointer"}}>
                                     <img src={user} alt="" className=""  />
                                     <div className="col-lg-12">
                                         <p className="barber__star">
                                             <strong>Martin</strong> <br/>
                                             <StarRatingComponent
                                                 name="about_rating"
                                                 value="3"
                                                 editing={false}
                                             /></p>
                                     </div>
                                 </div>
                             </div>
                             <div className="col-lg-4">
                                 <div className="row barber__box barber_user_box" onClick={this.detailBarber} style={{cursor : "pointer"}}>
                                     <img src={user} alt="" className=""  />
                                     <div className="col-lg-12">
                                         <p className="barber__star">
                                             <strong>Bernard</strong> <br/>
                                             <StarRatingComponent
                                                 name="about_rating"
                                                 value="5"
                                                 editing={false}
                                             /></p>
                                     </div>
                                 </div>
                             </div>

                         </div>
                     </CSSTransition>
                 }

                 {
                     this.state.detail  == 3 &&
                     <div className="row">
                          <div className="col-lg-3">
                              <div className="step__head"></div>
                          </div>
                          <div className="col-lg-9">
                              <h4 style={{marginLeft : "10px",marginBottom : "20px", marginTop : "20px"}}>Services</h4>
                              <div>
                                  <div className="col-lg-12">
                                      <Service />
                                  </div>
                                  <div className="col-lg-12">
                                      <Service />
                                  </div>
                                  <div className="col-lg-12">
                                      <Service />
                                  </div>
                                  <div className="col-lg-12">
                                      <Service />
                                  </div>
                              </div>
                              <div className="col-lg-12 mb-1 text-center">
                                  <button className=" fabl gold" onClick={this.available}>Check availability</button>
                              </div>
                          </div>
                     </div>
                 }

                 {
                     this.state.detail == 4 &&
                     <CSSTransition
                         timeout={300}
                         classNames="alert"
                     >
                         <div className="col-lg-12">
                             <FullCalendar
                                 defaultView="dayGridMonth"
                                 header={{
                                     left: "prev,next today",
                                     center: "title",
                                     right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                                 }}
                                 plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                 weekends={true}
                                 dateClick={this.getDate}
                             />


                         </div>
                     </CSSTransition>
                 }

                 {
                     this.state.detail == 5 &&
                     <div>
                         <RadioGroup   className="row mt-5" onChange={this.getSelectTime } horizontal>
                             <RadioButton value="9" className="col-lg-6" name="fruit">
                                 9:00
                             </RadioButton>
                             <RadioButton value="10" className="col-lg-6" name="fruit">
                                 10:00
                             </RadioButton>
                         </RadioGroup>
                         <RadioGroup   className="row mt-5" onChange={this.getSelectTime } horizontal>
                             <RadioButton value="11" className="col-lg-6" name="fruit">
                                 11:00
                             </RadioButton>
                             <RadioButton value="12" className="col-lg-6" name="fruit">
                                 12:00
                             </RadioButton>
                         </RadioGroup>
                         <RadioGroup   className="row mt-5" onChange={this.getSelectTime } horizontal>
                             <RadioButton value="13" className="col-lg-6" name="fruit">
                                 13:00
                             </RadioButton>
                             <RadioButton value="14" className="col-lg-6" name="fruit">
                                 14:00
                             </RadioButton>
                         </RadioGroup>
                     </div>
                 }

                 {
                     this.state.detail == 6 &&

                     <div className="row box-content">
                         <div className="col-lg-12">
                             <h3>Payment Method</h3>
                         </div>
                         <div className="col-lg-12">
                             <hr/>
                             <h4>Confirm Booking</h4>
                             <br/>
                             <div style={{marginBottom : "10px"}}>
                                 <div className={`step__list confirm__booking __pay__element`+ this.state.choosebooking} onClick={this.changeColor}>
                                     <div className="row">
                                         <div className="col-lg-9">
                                             <h6>Adult Haircut</h6>
                                             <p>25th May 2021 super <br/> <small>09:00</small></p>

                                         </div>
                                         <div className="col-lg-3 step__list__service">
                                             <div className="step__list__price">
                                                 £25.0
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <br/>
                             <br/>

                             <h4>Select Payment Option</h4>
                             <div className="row box-content">
                                 <div className="col-lg-6">
                                     <div className={`confirm__booking __pay__element`} onClick={this.cashpayment} >
                                         <div className="row">
                                             <div className="col-lg-7">
                                                 Cash payment
                                             </div>
                                             <div className="col-lg-3">
                                                 <h4>£25.00</h4>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="col-lg-6">
                                     <div className={`confirm__booking __pay__element`} onClick={this.cardPayment}>
                                         <div className="row">
                                             <div className="col-lg-7">
                                                 Card payment
                                             </div>
                                             <div className="col-lg-3">
                                                 <h4>£25.00</h4>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 }

                 {
                     this.state.detail == 7 &&
                     <div>
                         <div className="col-lg-12">
                             <h3>Card Details</h3>
                         </div>
                         <div className="col-lg-12">
                             <hr/>
                             <form action="">
                                 <div className="row">
                                     <div className="col-lg-12">
                                         <input type="text" className="custom__input" placeholder="Name on Card" />
                                     </div>
                                     <div className="col-lg-12">
                                         <input type="text" className="custom__input" placeholder="Card Number"/>
                                     </div>
                                     <div className="col-lg-6">
                                         <input type="month" className="custom__input" placeholder="" />
                                     </div>
                                     <div className="col-lg-6">
                                         <input type="number" className="custom__input" placeholder="123" />
                                     </div>

                                     <div className="col-lg-12">
                                         <br/>
                                         <label className="f-radio">Select to save card
                                             <input type="checkbox" name="squareradio" />
                                             <span className="square"></span>
                                         </label>
                                     </div>

                                 </div>

                                 <div className="offset-lg-4 col-lg-4">
                                     <button className="fabl fabl-block gold" onClick={this.finishProcesss}>Proceed</button>
                                 </div>
                             </form>
                         </div>
                     </div>

                 }

                 {
                     this.state.detail == 8 &&
                     <div className="form-group text-center">
                         <h5>Thank you for completing your booking</h5>
                         <br/>
                         <br/>
                         <p className="success__icon"><i className="fa fa-check"></i></p>
                         <br/>
                         <h5 className="text-center">
                             Your Completion has been successful <br/>
                             A confirmation email <br/>
                             Be <br/>
                             Sent shortly
                         </h5>
                     </div>
                 }
             </div>
           </>

       )
   }
}

export default Dashboard