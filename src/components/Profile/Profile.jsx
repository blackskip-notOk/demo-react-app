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
                    <picture>
                        <img className={s.img} src={img_1} alt={"bali beach"} />
                    </picture>
                </article>
                <article className={s.item2}>
                    <picture>
                        <img className={s.img} src={img_2} alt={"red parrot"} />
                    </picture>
                </article>
            </section>
            <MyPosts myPosts="My Posts" add="Add new post" />
        </div>
    );
}

export default Profile;