import React from 'react';
import DynamicText from '../components/DynamicText';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import Mouse from '../components/Mouse';

const HomeB = () => {
    return (
        <main>
            <Mouse/>
            <div className="home">
           <Navigation/>
           <SocialNetwork/>
           <div className="home-main">
            <div className="main-content">
                <h1>Eco Tawssel</h1>
                <h2><DynamicText/></h2>
            </div>
           </div>
           <ButtonsBottom right={"/project-1"}/>  
            </div>
        </main>
    );
};

export default HomeB;