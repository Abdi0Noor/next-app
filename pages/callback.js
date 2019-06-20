import React, {Component} from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

import {withRouter} from 'next/router';
import auth0Client from '../services/auth0';

class Callback extends Component {

    async componentDidMount() {
       await auth0Client.handleAuthentication();
       this.props.router.push('/');
    }
    render() {
        return (
            <BaseLayout>
            <BasePage>
                <h1>Logging in...</h1>
                </BasePage>
            </BaseLayout>
           
        )
    }
}

export default withRouter(Callback);