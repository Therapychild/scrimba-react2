import React from 'react';

export function Card(props) {
  return(
    <div className="card">
      <div className="image-main" style={{backgroundImage: `url(${props.imageUrl})`}}></div>
      <div className="card-info">
        <div className="google-info">
          <img className="icon" src="./images/icon.png"/>
          <span className="name-location">{props.location.toUpperCase()}</span>
          <a src={props.googleMapsUrl} className="view-link">View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <h4>{`${props.startDate} - ${props.endDate}`}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}