import React, { Component } from 'react';
import { connect } from "react-redux";

class EditUser extends Component {

    handleUpdate = (e) =>{
        e.preventDefault();
        const newName = this.getName.value;
        const newLastName = this.getLastName.value;
        const newCountry = this.getCountry.value;
        const data ={
            newName,
            newLastName,
            newCountry
        };
        this.props.dispatch({ 
            type:'UPDATE_USER', 
            id : this.props.user.id, data:data
        });
    }

    render() {
        return (
            <div key={this.props.user.id} className="edit">
               <form onSubmit={this.handleUpdate} className="form">
                    <input type="text" defaultValue={this.props.user.name} required ref={(input)=> this.getName = input} placeholder="Enter First Name"/>
                    <br/><br/>
                    <input type="text" defaultValue={this.props.user.lastName} required ref={(input)=> this.getLastName = input} placeholder="Enter Last Name"/>
                    <br/><br/>
                    <label className="label-country">Select your Country</label>
                    <select className="select-country" type="text" defaultValue={this.props.user.country} 
                    required ref={(select)=> this.getCountry = select} placeholder="Enter Last Name">
                        <option value="Peru">Peru</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Argentina">Argentina</option>
                    </select>
                    <br/><br/>
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditUser);