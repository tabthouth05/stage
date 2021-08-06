import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import SocialNetwork from '../components/SocialNetwork';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
      <main>
            <Mouse/>
        <div className="contact">
                 <Navigation/>
                 <Logo/>
                 <ContactForm/>
            <ContactForm/>
          <div className="contact-infos">
                <div className="address">
                    <div className="content">
                        <h4>adresse</h4>
                        <p>rue</p>
                        <p>code postal</p>
                    </div>
                </div>
            

            <div className="phone">
                <div className="content">
                    <h4>téléphone</h4>
                    <CopyToClipboard text="+216" className="hover">
                        <p style={{ cursor: "pointer"}}
                           className="clipboard"
                           onClick={() => {
                               alert("téléphone copié !");
                           }}>
                               +216
                           </p>
                    </CopyToClipboard>
                </div>
            </div>

            <div className="email">
                <div className="content">
                    <h4>email</h4>
                    <CopyToClipboard text="ecotawsseel@gmail.com" className="hover">
                        <p
                         style={{ cursor: "pointer"}}
                           className="clipboard"
                           onClick={() => {
                               alert("Email copié !");
                           }}
                           >
                               ecotawsseel@gmail.com
                           </p>
                    </CopyToClipboard>
                </div>
            </div> 
            <SocialNetwork/>
            <div className="credits">
             {/* <p>fromScratch - 2020</p> */}
            </div>
          </div>
          <ButtonsBottom left={'/project-4'}/>
        </div>
     </main>
    );
};
export default Contact;