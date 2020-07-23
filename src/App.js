import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg';

class App extends Component {

    state = { displayBio: false };
 
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {

        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1> <strong> Hello !</strong> </h1>
                <h1>I am Akash Kiran</h1>
                <p>I am a Software Engineer looking forward to work on Meaningful Projects</p>
                {
                    this.state.displayBio ? (
                        <div> 
                            <p>I live in Bengaluru,India</p>
                            <p>My favourate programming language is React</p>
                            <p>Besides coding i also love Cycling and swimming</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                        ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read more</button>
                            </div>
                        )
                }
                <hr/>
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App; 