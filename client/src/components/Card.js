import React from "react"
import  user from "../assets/images/creative.jpg"

const Card = (props) => {
    return (
        <div  className="card__box">
            <div className="row">
                <div className="col-lg-2">
                    <img src={user} alt="" className="avatar__user" style={{width : "75px"}} />
                </div>
                <div className="col-lg-10">
                     <div className="pull-right"><i className="fa fa-map-marker"></i>  0.1 Km</div>
                    <p>
                        <b>Alfred</b>
                        <em>Alfred barber Shop</em>
                    </p>
                    <p>26 Main Road, Middlesbrough,TS 1XX</p>
                    <button className="fabl gold fabl-sm pull-right" onClick={props.detailshop}><i className="fa fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default  Card