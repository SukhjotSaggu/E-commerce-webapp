import React, { Component } from "react";
import "../App.css";
import StoreLogo from "../StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import Cat from "../Kitty";
import Product from "./product/Product";

class SellerStorePage extends Component {
  Name = React.createRef();
  Email = React.createRef();
  Phone = React.createRef();
  Addrress = React.createRef();

  state = {
    isToggled: true,
    user: {
      email: "cps714@gmail.com",
      name: "Ransika",
      phone: "911",
      address: "123 Street",
      ads: "yes",
    },
    products: [
      { id: 1, item: "Shoes", price: "$5", discription: "Red and Black Air Force 1's"},
      { id: 2, item: "Laptop", price: "$300", discription: "13 inch Surface Pro 8"},
      { id: 3, item: "Laptop", price: "$300", discription: "13 inch Surface Pro 8"},
      { id: 4, item: "Laptop", price: "$300", discription: "13 inch Surface Pro 8"},
    ],
    emailOpt: "no"
  };
  EditPage = () => {
    this.setState({ isToggled: false });
  };

  handleEmails = (event) => {

    this.setState({ emailOpt: event.target.value });
  }
  ChangePage = () => {
    let ads = this.state.user.ads;
    this.setState({ isToggled: true,emailOpt:ads });
  };

  HomePage = () => {
    console.log("Go Home");
  };
  SubmitChanges = () => {
    let updateUser = {
      email: this.Email.current.value,
      name: this.Name.current.value,
      phone: this.Phone.current.value,
      address: this.Addrress.current.value,
      ads: this.state.emailOpt,
    };
    this.setState({ isToggled: true, user: updateUser });
  };

  renderButtons() {
    if (this.state.isToggled === true) {
      return (
        <form>
          <div>
            <button class="btn btn-primary pr-50" onClick={this.EditPage}>
              Edit Profile
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="Name">Store Name</label>
            <input
              ref={this.Name}
              id="Name"
              defaultValue={this.state.user.name}
              onChange={(e) => {
                this.setState({ value: e.target.value });
              }}
              disabled={this.state.isToggled}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              ref={this.Email}
              id="Email"
              type="text"
              defaultValue={this.state.user.email}
              disabled={this.state.isToggled}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Phone">Phone Number</label>
            <input
              ref={this.Phone}
              id="Phone"
              type="text"
              defaultValue={this.state.user.phone}
              disabled={this.state.isToggled}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Address">Addrress</label>
            <input
              ref={this.Addrress}
              id="Addrress"
              type="text"
              defaultValue={this.state.user.address}
              disabled={this.state.isToggled}
              className="form-control"
            />
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <button class="btn btn-primary m-2" onClick={this.SubmitChanges}>
            Save
          </button>
          <button class="btn btn-primary m-2" onClick={this.ChangePage}>
            Cancel
          </button>
          <form>
            <div className="form-group">
              <label htmlFor="Name">Store Name</label>
              <input
                ref={this.Name}
                id="Name"
                defaultValue={this.state.user.name}
                onChange={(e) => {
                  this.setState({ value: e.target.value });
                }}
                disabled={this.state.isToggled}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                ref={this.Email}
                id="Email"
                type="text"
                defaultValue={this.state.user.email}
                disabled={this.state.isToggled}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone Number</label>
              <input
                ref={this.Phone}
                id="Phone"
                type="text"
                defaultValue={this.state.user.phone}
                disabled={this.state.isToggled}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Address">Addrress</label>
              <input
                ref={this.Addrress}
                id="Addrress"
                type="text"
                defaultValue={this.state.user.address}
                disabled={this.state.isToggled}
                className="form-control"
              />
            </div>
          </form>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div>
         <label htmlFor="Name" style={{ fontWeight: "bold" }}>
            Help English | French
          </label>
          </div>
        <div className="container">
          <img src={StoreLogo} className="App-logo m-2" alt="logo" />

          <label htmlFor="Name" style={{ fontWeight: "bold" }}>
            Home Options
          </label>


          <button style={{ float: "right" }} onClick={this.HomePage}>
            <img
              src={Cat}
              style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
              className="App-logo m-2 row"
              alt="logo"
            />
          </button>

          <div className="searchbar" style={{ float: "right" } }> 
          <label htmlFor="header-search">
            <span className="visually-hidden">Search Item</span>
          </label>
          <input
              type="text"
              id="header-search"
              placeholder="Search Item"
              name="s" 
          />
          <button type="submit">Search</button>
          </div>



          <div className="row">
            <div className="col">
              
            </div>
          </div>

          <label htmlFor="Name" style={{ fontWeight: "bold" }}>
            Store Home Page / Main Cat / Cat
          </label>
          <div className="row">
            {this.state.products.map((product) => (
              <div className="col-md-3">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>

   
      </div>
    );
  }
}

export default SellerStorePage;
