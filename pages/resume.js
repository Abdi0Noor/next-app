import React, {Component} from 'react';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
class Resume extends Component {
    render() {
        return (
            <BaseLayout>
            <BasePage>
                <h1>This is the Resume Page</h1>
            </BasePage>
            </BaseLayout>
          

        )
    }
}

export default Resume;