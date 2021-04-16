import React from 'react';
import Button from '../Common/Button/Button';
import s from './Home.module.css'; 

const Home = (props) => {
    return (
        <section>
            <p>
                Hello, this is homepage of demo-social-network app. 
            </p>
            <p>
                You can login <Button /> or authorized <Button />
            </p>
        </section>
    );
}

export default Home;