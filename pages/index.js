import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
export default class Index extends React.Component {
    // static getInitialProps() {
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(
    //         (data) => console.log(data))
    //     .catch(err => console.error(err))
    //     return {initialData: [1,2,3,4]};
    //     }
    
    render() {
        return (
            <BaseLayout>
                <h1> This is the index page</h1>
                <h2>This is the header subtitle</h2>

            </BaseLayout>
            
        )
    }
}