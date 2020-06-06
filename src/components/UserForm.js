import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            user_name: '',
            user_email: ''
        }
    }
    onChangeUserName(e) {
        this.setState({
            user_name: e.target.value
        });
    }
    onChangeUserEmail(e) {
        this.setState({
            user_email: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('Form Submitted: ');
        const newUser = {
            user_name: this.state.user_name,
            user_email: this.state.user_email
        }
        axios.post('http://localhost:5000/user/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            user_name: '',
            user_email: ''
        })
    }

           render() {
               return (
                   <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
                       <div className="form-group">
                       <label>
                           <input className="form-control mr-sm-2" type="text" placeholder="Name" value={this.state.user_name} onChange={this.onChangeUserName} />
                       </label>
                       </div>
                       <div className="form-group">
                       <label> 
                           <input className="form-control mr-sm-2" type="email" placeholder="Email" value={this.state.user_email} onChange={this.onChangeUserEmail} />
                       </label>
                       </div>
                       <button className="btn btn-ourline-success my-2 my-sm-0" type="submit">Submit</button>
                   </form>
               );    
            }
        }