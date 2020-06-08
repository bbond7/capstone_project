import React, {Component} from 'react';
import axios from "axios";

export default class skiBootsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {skiboots: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/skiboots')
        .then(response => {
            console.log(response)
            this.setState({skiboots: response.data})
        })
        .catch(function (error) {
            console.log('error')
        })
    }

    render() {
        if (!this.state.skiboots.length) {
            return <div>Didn't get boots</div>
        }

        return (
            <div className='container'>
                <div>
                    <h3 className='text-center'>Welcome to Boots</h3>
                </div>
                {this.state.skiboots.map(skiboots =>{
                    return (<div key={skiboots._id} className='row'>
                        <img src={skiboots.imgPath} alt='Ski Boots' />
                        <div className='col-md'>Name: {skiboots.name}</div>
                        <div className='col-md'>Type: {skiboots.description}</div>
                        <div className='col-md'>Price: ${skiboots.price}</div>
                    </div>);
                })}
            </div>
        )
    }
}