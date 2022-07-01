import React, { useState } from 'react'
import Navs from '../components/Navs/Navs';
import T from '../components/t/T';
import './style.scss'
const Home = () => {
    const [open, setOpen] = useState(false);
    const [navType, setNavType] = useState('');
    // const nav1 = ['o', 'u', 'r', ' ', 's', 't', 'o', 'r', 'y']

    return (
        <div className='home'>
            <div className="home_wrapper">
                <div className="circle">

                    <div className="navs nav_1"
                        onClick={() => {
                            setNavType('story');
                            setOpen(true);
                        }}
                    >
                        {/* <img src="images/story.png" alt="" /> */}
                        {/* Our Story */}
                        {/* <T text='yrotS ruO' /> */}
                        <T text='⅄ꓤOꓕS ꓤՈO' />
                    </div>

                    <div className="navs nav_2 "
                        onClick={() => {
                            setNavType('blogs');
                            setOpen(true);
                        }}
                    >
                        <T text='⅁O⅂ꓭ' />
                    </div>
                    <div className="navs nav_3"
                        onClick={() => {
                            setNavType('contacts');
                            setOpen(true);
                        }}
                    >
                        {/* <T text='Contacts' /> */}
                        <T text='HϽՈOꓕ NI ꓕƎ⅁' />
                    </div>

                </div>
                <div className="links">
                    <div className="link">
                        <span>Shop</span>
                    </div>
                    <div className="link">
                        <span>Teasers</span>
                    </div>
                </div>
            </div>

            {
                open && <Navs setOpen={setOpen} navType={navType} />
            }

        </div>
    )
}

export default Home
