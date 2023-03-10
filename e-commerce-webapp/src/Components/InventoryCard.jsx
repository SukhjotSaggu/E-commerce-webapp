import React, { useState, useRef } from "react";
import "../Styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Shoes from "../Images/Shoes.jpg";
import Laptop from "../Images/Laptop.jpg";

function InventoryCard({props}) {
       
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <div class="card-columns">
            <div class="col mb-4">
                <div class="card h-100">
                    <div className="row" style={{  paddingLeft: "40px",paddingTop: "0px" }}>
                        <div class="card-body">
                            <h3 class="card-title">{props.item_name}</h3>
                            <h5 class="card-subtitle mb-2 text-muted">${props.item_price}</h5>
                            <div class="row">
                                <div class="col-md-9 border-right">
                                <p class="card-text">
                                    Qty: {props.item_quantity}
                                </p>
                                <p class="card-text">
                                    {props.item_description}
                                </p>
                                </div>
                                <div class="col-md-3">
                                <img
                                    class="rounded float-right"
                                    width="350px"
                                    src={props.picture_url}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

}
export default InventoryCard;