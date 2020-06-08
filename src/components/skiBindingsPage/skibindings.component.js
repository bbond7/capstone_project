import React, {Component} from 'react';
import axios from 'axios';


export default class skiBindingsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {bindings: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/skibindings')
        .then(response => {
            console.log(response)
            this.setState({bindings: response.data})
        })
        .catch(function (error) {
            console.log('error')
        })
    }

    render() {
        if (!this.state.bindings.length) {
            return <div>Didn't get Bindings</div>;
        }


        return (
            <div className='container'>
                <div>
                    <h3 className='text-center'>Welcome to Bindings</h3>
                </div>
                {this.state.bindings.map(bindings =>(
                    <div key={bindings._id} className='row'>
                        <img src={bindings.imgPath} alt="ski Binidings" />
                        <div className='col-md'>Name: {bindings.name}</div>
                        <div className='col-md'>Type: {bindings.description}</div>
                        <div className='col-md'>Price: ${bindings.price}</div>
                    </div>
                ))}
                
            </div>
        )
    }
}