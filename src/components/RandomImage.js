import React from 'react'

const randomImage = (props) => {
    return (
        <div className="container top">
            <h3 className="toptext">{props.name}</h3>
            <img className="img-rounded" width="500" src={props.randImg} />
        </div>
    )
}

export default randomImage;