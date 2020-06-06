import React, {Component} from 'react';
import about_us_photo from './about_us_photo.jpg';


export default class aboutUsPage extends Component {
    render() {
        return (
            <div>
                <img src={about_us_photo} alt="Snowy Trees" width="100%" className="img-fluid"/>
                <p>BondSkis was asstablished in 2002 as the world looked to Utah for hosting the Winter Olympics. We thought what a better time to share our passion with the world.
                    Our humble beginings of working out of a grage has blossomed into a business helping others find their passion for the outdoors. We are based at the bottom of
                    Trappers Loop and SnowBasin.
                    <br></br>
                    <br></br>
                    We may have started as a ski shop but have expanded to many of our different passions. We dont only sell the gear we love but we also get out and use it. From
                    early morning touring sessions during the winter to early morning bike rides and everything in between you can bet that we have used the products we sell. We are 
                    able to give first hand knowledge of what works and how it works and if you will like it or not. 
                    <br></br>
                    <br></br>
                    We are looking forward to you visiting the store and are even more extcited for you to join our shop promoted adventures. Now go and explore!
                </p>
            </div>
        )
    }
}