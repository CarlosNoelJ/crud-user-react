import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import User from "../User/User";
import EditUser from "../EditUser/EditUser";

class Users extends Component {
    render() {

        return (
            <div className="user-container">
                <h1 className="user-head">Users</h1>
                {this.props.users.map((user) =>(
                    <div key={user.id}>
                        {
                            user.editing ? <EditUser key={user.id} user={user} /> :
                            <User key={user.id} user={user}/>
                        }
                    </div>
                ))}
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.any
};

const mapStateToProps = (state)=>{
    return{
        users: state
    }
}

export default connect(mapStateToProps)(Users);