import React from 'react';
import './style.scss';
import { CloseOutlined } from '@ant-design/icons'
const Navs = ({ setOpen, navType }) => {
    return (
        <div className='our_story_nav'>
            <div className="our_story_nav_wrapper">

                <CloseOutlined className='close'  onClick={() => setOpen(false)} />

                <div className="heading">Our Story</div>
                <div className="links_div">

                    {/* for our story navs */}
                    {
                        navType === 'story' &&
                        <>
                            <span>Who we are (comic strip)</span>
                            <span>what we are trying to do</span>
                        </>
                    }

                    {/* for our blags navs */}
                    {
                        navType === 'blogs' &&
                        <>
                            <span>nothing here</span>
                        </>
                    }

                    {/* for our get in touch  navs */}
                    {
                        navType === 'contacts' &&
                        <>
                            <span>Corporate Orders</span>
                            <span>Collaborate With Us</span>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navs
