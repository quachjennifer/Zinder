import React, { Component } from 'react';
import axios from 'axios'
export default class submit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sign1: '',
            sign2: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`First sign: ${this.state.sign1}`)
        console.log(`Second sign: ${this.state.sign2}`)

        const newSubmit = {
            sign1: this.state.sign1,
            sign2: this.state.sign2
        }

        axios.post('http://localhost:4000/tutorial/result', newSubmit)
            .then(res => console.log(res.data))

        // Probably don't need this??
        // this.setState(
        //     sign1: '',
        //     sign2: ''
        // )
    }

    render() {
        return (
            // Add how the result should look like here????
            <div>
                <p>Welcome to Zinder!!</p>
                </div>
        )
    }
}