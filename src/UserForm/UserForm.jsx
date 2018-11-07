import React, { Component } from 'react';
import { connect } from "react-redux";

class UserForm extends Component {
    handleSubmit = (e)=>{
        e.preventDefault();
        var name = this.getName.value;
        var lastName = this.getLastName.value;
        var country = this.getCountry.value;
        var data =({
            id: new Date(),
            name,
            lastName,
            country,
            editing: false
        });

        this.props.dispatch({
            type: 'ADD_USER',
            data
        });

        this.getName.value='';
        this.getLastName.value='';
        this.getCountry.value='Peru';
    }

    render() {
        return (
            <div className="user-container">
                <h1 className="user-head">Create User</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <input type="text" placeholder="Enter First Name" required ref={(input)=> this.getName = input}/>
                    <br/><br/>
                    <input type="text" placeholder="Enter Last Name" required ref={(input)=> this.getLastName = input}/>
                    <br/><br/>
                    <label className="label-country">Select your Country
                    <select className="select-country" type="text" placeholder="Enter Last Name" 
                    required ref={(select)=> this.getCountry = select}>
                        <option value="Peru">Peru</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Argentina">Argentina</option>
                    </select>
                    </label>
                    <br/><br/>
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default connect()(UserForm);