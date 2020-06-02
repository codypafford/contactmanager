import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false,
    num: 1, // this is useless. just for testing things
  };

  // uses arrow function because otherwise we couldn't use 'this'
  onShowClick = () => {
    console.log("clicked");
    var newNum = this.state.num;
    newNum = newNum + 1;
    this.setState({
      showContactInfo: !this.state.showContactInfo,
      num: newNum,
    });
  };

  onDeleteClick = async (id, dispatch) => {
    // this is a function which is a part of the global state

    // this would delete from the database
    // const res = await axios.delete(
    //   `http://jsonplaceholder.typicode.com/users/${id}`
    // );

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    //pull boolean out of this.state
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {this.props.name}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  onClick={() => this.onDeleteClick(this.props.id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                ></i>
                <Link to={`contacts/edit/${this.props.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                    }}
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {this.props.email}</li>
                  <li className="list-group-item">Phone: {this.props.phone}</li>
                  <li className="list-group-item">
                    Website: {this.props.website}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
