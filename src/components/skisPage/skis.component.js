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
         <div className='container'>
             <div>
                 <h2 className='text-center'>Welcome to Skis</h2>
             </div>
             {this.state.skis.map(skis =>(
                 <div key={skis._id} className="row">
                     <img src={skis.imgPath} alt='pictures of skis'/>
                     <div className='col-md'>Name: {skis.name}</div>
                     <div className='col-md'>Type: {skis.description}</div>
                     <div className='col-md'>Price: ${skis.price}</div>
                 </div>
             ))}
         </div>
        )
    }
}
