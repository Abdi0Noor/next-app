import React, {Component} from 'react';
import axios from 'axios';

import {Link} from '../routes'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
class Portfolios extends Component {
    static async getInitialProps(){
        let posts = [];

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
            posts = response.data;
        } catch(err){  console.log(err);  }
        return {posts: posts.splice(0, 40)};
    }
    renderPosts(posts) {
        return posts.map((post, index) => {
            return (
                <li key={index}>
                    <Link route={`/portfolio/${post.id}`}>
                    <a>{post.title} </a></Link>
                </li>
            )
        })
    }

    render() {
        const {posts} = this.props;
        return (
            <BaseLayout>
            <BasePage>
                <h1>This is the Portfolios Page</h1>
                <ul>{this.renderPosts(posts)}</ul>
                </BasePage>
            </BaseLayout>
          

        )
    }
}

export default Portfolios;