import React from 'react';
import { Link } from "react-router-dom";
import Base from "../core/Base";

const About = () => {
    return ( 
<React.Fragment>
	<Base/>

        
        <div class="container">
		<div class="banner-top">
            <h3 >About</h3>
            <h4><Link to="/">Home</Link><label>/</label>About</h4>
            <div class="clearfix"> </div>
        </div>
    </div>
    <div class="container">
		<div  class="about">
	<div class="spec ">
				<h3>About</h3>
					<div class="ser-t">
						<b></b>
						<span><i></i></span>
						<b class="line"></b>
					</div>
			</div>
			
			<div class="col-md-12 about-left">
				<p>
                Wondem Store is the retail chain that led to a price revolution in the State of Israel.
The network has developed a business model according to which the goal is to sell a lot, earn little and enable low-income consumers to buy more.
The network's price strategy does not come at the expense of service and quality.
The Wondem Store network is awarded to the best service customer and the warm and personal relationship thanks to thousands of employees who see Wondem Store as a home and family.
Wondem Store develops and markets a wide range of its private label products, while maintaining high quality and attractive prices.
All of this is acknowledged by all of our customers and voters in the legs.
 
The Wondem Store, which began as a small store in the Mahaneh Yehuda market, was registered as a public company whose shares are traded on the Tel Aviv Stock Exchange in 2007, has become the leading chain in the retail sector in Israel, has created a consumer revolution in prices and plans to reach every home in Israel Products at the most competitive prices.


                </p>
			</div>
			
		</div>
	</div>
</React.Fragment>
     );
}
 
export default About;