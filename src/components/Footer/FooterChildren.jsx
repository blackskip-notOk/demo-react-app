import React from 'react';
import Footer from './Footer';
import footer from '../../image/beach.jpg';
import Avatar from '../Common/Avatar/Avatar';

const FooterChildren = (props) => {
    return (
        <Footer>
            <div>HELLO</div>
            <Avatar src={footer} alt='sdgm,bd'/>
        </Footer>
    );
}

export default FooterChildren;