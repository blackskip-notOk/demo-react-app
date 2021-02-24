import React from "react";
import s from './Profile.module.css';
import img_1 from '../../image/beach.jpg';
import img_2 from '../../image/parrot.jpg';
import MyPosts from "./MyPosts/MyPosts";



const Profile = () => {
    return (
        <div>
            <section className={s.section} role="main">
                <article className={s.item1}>
                    <img className={s.img} src={img_1} alt={"bali beach"} />
                </article>
                <article className={s.item2}>
                    <img className={s.img} src={img_2} alt={"red parrot"} />
                </article>
            </section>
            <MyPosts myPosts="My Posts" add="Add new post" />
        </div>
    );
}

export default Profile;