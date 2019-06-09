import React from 'react'

const Button = (props) => {
    return (
        <form onSubmit={props.handleOnClick}>
            <button
                className="btn btn-info"
            >
                Generate More Memes
            </button>
        </form >
    )
}

export default Button;