import React, {Component} from 'react';
import UserForm from '../UserForm';
import home_page_photo from './home_page_photo.jpg';



export default class homePage extends Component {


    render() {
        return (
            <div className="container-fluid">
                <div>
                    <img src={home_page_photo} alt='skiing Powder' width="100%" className="img-fluid"/>
                </div>
                <div className='top-overlay'>
                    <h2>Welcome to BondSkis</h2>
                    <p>Here at BondSkis we aim to be one of you, passionate about outdoor recreation and we are committed to providing the best quality products to help you enjoy whatever 
                        activity you are doing. We share the love for being outdoors exploring and pushing the limits. Our expert gearheads will help guide you to buying the right equipment
                        for your needs. We look forward to helping you and exploring with you.
                    </p>
                </div>
                <div>
                    <h3>Join Our Community</h3>
                    <p>Sign up to recieve weekly discounts</p>
                    <UserForm />
                </div>
            </div>
        )
    }
}
