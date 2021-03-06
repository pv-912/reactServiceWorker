import React from 'react';
export default class MessageContent extends React.Component{
    render(){
        return(
        	<div>
		        <div className="col-sm-4 cards">
		        	<img src={this.props.data.image_url} className="cardImage" alt={this.props.data.title} />
		        	<p className="clinicName text-justify">{this.props.data.title}</p>
		        	<p className="clinicAddress text-justify">{this.props.data.subtitle}</p>
		        	<div className="bookAppointment">
		        		<a href="" >{this.props.data.buttons["0"].title}</a>
		        	</div>
		        	<div className="moreInfo">
		        		<a href="" >{this.props.data.buttons["1"].title}	</a>
		        	</div>
		        </div>
            </div>
        )
    }
}