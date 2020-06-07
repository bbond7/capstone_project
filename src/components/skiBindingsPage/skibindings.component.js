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
            <div>
                <div>
                    <h3>Welcome to Bindings</h3>
                </div>
                {this.state.bindings.map(bindings =>(
                    <div key={bindings._id}>
                        <img src={bindings.imgPath} alt="ski Binidings" />
                        <div>Name: {bindings.name}</div>
                        <div>Type: {bindings.description}</div>
                        <div>Price: ${bindings.price}</div>
                    </div>
                ))}
                
            </div>
        )
    }
}