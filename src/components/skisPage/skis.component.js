import React, {Component} from 'react';
import axios from 'axios';

export default class skisPage extends Component {
    constructor(props) {
        super(props);

        this.state = {skis: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/skis')
        .then(response => {
            console.log(response)
            this.setState({skis: response.data})
        })
        .catch(function (error) {
            console.log('error')
        })
    }

    
    render() {
        return (
            <div>
                <p>Welcome to the ski page</p>
            </div>
        )
    }
}