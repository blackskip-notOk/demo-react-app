import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import Button from "../../../Common/Button/Button";
import s from './User.module.css';

const User = (props) => {
    let unfollow = () => {
        props.unfollow(props.id);
    };
    let follow = () => {
        props.follow(props.id);
    };

    return (
        <div className={s.container}>
            <Avatar className={s.img}
                src={props.src}
                alt={props.alt} />
                { props.followed
                    ?
                    <Button onClick= {unfollow}
                        className={s.button} span='Unfollow' >
                    </Button>
                    :
                    <Button onClick={follow}
                        className={s.button} span='Follow' />
                }
            <div className={s.fullName}><h2>{props.fullName}</h2></div>
            <div className={s.status}>Status: {props.status}</div>
            <div className={s.location}>
                <span>City: {props.city}</span>
                <span>Planet: {props.planet}</span>
            </div>
        </div>
    );
}

export default User;