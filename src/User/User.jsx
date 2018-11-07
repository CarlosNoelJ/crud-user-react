import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class User extends Component {

    handleDelete = (e)=>{
        this.props.dispatch({
            type: 'DELETE_USER',
            id: this.props.user.id
        });
    }

    handleEdit = (e) =>{
        this.props.dispatch({
            type: 'EDIT_USER',
            id: this.props.user.id
        });
    }

    render() {

        var {user} = this.props;

        return (
            <div className="user-list">
                {/* <h4>
                    Name: {user.name} <br/>
                    Last Name: {user.lastName} <br/>
                    Country: {user.country} <br/>
                </h4> */}
                
                <div className="list">
                <p><b>Name: </b>{user.name}</p>
                <p><b>Last Name: </b>{user.lastName}</p>
                <p><b>Country: </b>{user.country}</p>
                </div>
                
                
                <div className="buttons-container">
                    <button className="button-edit" onClick={() => this.handleEdit()}>Edit</button>
                    <button className="button-delete" onClick={()=> this.handleDelete()}>Delete</button>
                </div>
            </div>
        );
    }
}

User.propTypes = {
    users: PropTypes.any
};

export default connect()(User);