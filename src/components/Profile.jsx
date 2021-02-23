import React from "react";
import s from "../css/Profile.module.css";

const Profile = () => {
    return (
        <section className={s.section} role="main">
            <article className={s.item1}>
                <img className={s.img} src="./bali.jpg" alt="bali beach gate"></img>
            </article>
            <article className={s.item2}>
                <img id="imageParrot" src="./parrot-logo.jpg" alt="red parrot"></img>
            </article>
            <article className={s.item3}>
                post 1
            </article>
            <article className={s.item4}>
                post 2
            </article>
      </section>
    );
}

export default Profile;