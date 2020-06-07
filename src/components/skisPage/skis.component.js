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
        if (!this.state.skis.length) {
            return <div>Didn't get Skis</div>;
        }

        return (
            <div>
                <div>
                    <h3>Welcome to Skis</h3>
                </div>
                {this.state.skis.map(skis =>(
                    <div key={skis._id}>
                        <img src={skis.imgPath} alt='pictures of skis'/>
                        <div>Name: {skis.name}</div>
                        <div>Type: {skis.description}</div>
                        <div>Price: ${skis.price}</div>
                    </div>
                ))}
            </div>
        )
    }
}