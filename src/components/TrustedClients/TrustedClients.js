import React from 'react';
import './TrustedClients.css';
import color from '../../images/128-color.png'; 
import down from '../../images/download.png';
import lysonia from '../../images/large_lysonia.png';
import ordda from '../../images/large_ordda.png';
import pepaso from '../../images/large_pepaso.png';
import zewwe from '../../images/large_zewwe.png';
import Slide from 'react-reveal/Slide';
import Carousel, { autoplayPlugin,slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function TrustedClients({heading}) {
    return (
        <div className="container">
            <div className="trustedClients">
                <Slide bottom>
                    <h1>{heading}</h1>
                </Slide>
                    <div className="trustedClients__clients">
                        <Carousel
                                plugins={[
                                    'infinite',
                                    {
                                      resolve: slidesToShowPlugin,
                                      options: {
                                       numberOfSlides: 5
                                      }
                                    },
                                    {      
                                    resolve: autoplayPlugin,
                                      options: {
                                        interval: 2000,
                                      }
                                    },
                                  ]}

                                  animationSpeed={4000}

                                  breakpoints={{
                                    1000: {
                                        plugins: [
                                         {
                                           resolve: slidesToShowPlugin,
                                           options: {
                                            numberOfSlides: 3
                                           }
                                         },
                                       ]
                                      },
                                    640: {
                                      plugins: [
                                       {
                                         resolve: slidesToShowPlugin,
                                         options: {
                                          numberOfSlides: 1
                                         }
                                       },
                                     ]
                                    }
                                  }}
                            >
                            <img src={color} alt="128-color" className="trustedClients__images"/>
                            <img src={down} alt="logo" className="trustedClients__images"/>
                            <img src={lysonia} alt="lysonia" className="trustedClients__images"/>
                            <img src={ordda} alt="ordda" className="trustedClients__images"/>
                            <img src={pepaso} alt="pepaso" className="trustedClients__images"/>
                            <img src={zewwe} alt="zewwe" className="trustedClients__images"/>
                        </Carousel>
                    </div>
            </div>
        </div>
    )
}

export default TrustedClients
