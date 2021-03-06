import React from 'react';
import { Button, Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed';


import BaseLayout from '../components/layouts/BaseLayout';
 class Index extends React.Component {
    constructor(props) {
        super(props);
        this.selfTyped = ["War...War never changes", "I need healing", "the cake is a lie", "Just me and the boys"]
    }
    
    render() {
        return (
        <BaseLayout className="cover">
                <div className="main-section">
                    <div className="background-image">
                    <img src="static/images/background-index.png" />
                    </div>

                    <Container>
                    <Row>
                        <Col md="6">
                        <div className="hero-section">
                            <div className={`flipper`}>
                            <div className="back">
                                <div className="hero-section-content">
                                <h2> Full Stack Web Developer </h2>
                                <div className="hero-section-content-intro">
                                    Have a look at my portfolio and job history.
                                </div>
                                </div>
                                <img className="image" src="/static/images/section-1.png"/>
                                <div className="shadow-custom">
                                <div className="shadow-inner"> </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Col>
                        <Col md="6" className="hero-welcome-wrapper">
                        <div className="hero-welcome-text">
                            <h1>

                            Hello this is Abdi, and welcome to my portfolio Website.
                            Check out Some of my work.
                            </h1>
                        </div>
                        <Typed
                        className="self-typed"
                        loop
                        typeSpeed={60}
                        backSpeed={30}
                        strings={this.selfTyped}
                        smartBackspace
                        shuffle={false}
                        backDelay={1000}
                        fadeOut={false}
                        fadeOutDelay={100}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                        />


                        <div className="hero-welcome-bio">
                            <h1>
                            Let's take a look at my Work
                            </h1>
                        </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
                </BaseLayout>
            
        )
    }
}
export default Index;