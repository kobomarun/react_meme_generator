import React from 'react'

import Header from './Header'
import Button from './Button'
import RandomImage from './RandomImage'

class MemeGenerator extends React.Component {
    state = {
        allImages: [],
        name: '',
        error: null,
        randomImg: ''
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => this.setState({
                allImages: response.data.memes
            }))
            .catch(error => this.setState({ error }))

    }

    handleSubmit = (event) => {
        const { allImages } = this.state
        event.preventDefault();
        const random = Math.floor(Math.random() * allImages.length)

        this.setState({
            randomImg: allImages[random].url,
            name: allImages[random].name
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Button handleOnClick={this.handleSubmit} />
                <RandomImage name={this.state.name} randImg={this.state.randomImg} />
            </div>

        )

    }
}

export default MemeGenerator