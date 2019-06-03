import React, {Component} from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
class About extends Component {
    render() {
        return (
            <BaseLayout>
            <BasePage className="about-page">
            <h1>This is the About Page</h1>
            </BasePage>
            </BaseLayout>
            
        )
    }
}

export default About;