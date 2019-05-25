import React, {Component} from 'react';
import {withRouter} from 'next/router';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';

class Portfolio extends Component {
    static async getInitialProps({query}) {
        const portfolioId = query.id;
        let portfolio = {};
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
            portfolio = response.data;
        } catch(err) {
            console.error(err);
        }
        return {portfolio}
        // const postId = query.id;
        
}
    render() {
        const { portfolio} = this.props;
        
        return (
            <BaseLayout>
                <h1>{portfolio.title}</h1>
                <p>{portfolio.body}</p>
                <p>{portfolio.id}</p>

            </BaseLayout>
          

        )
    }
}

export default withRouter(Portfolio);