import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <section className={s.section}>
            <textarea></textarea>
            <button>{props.add}</button>
            <h1>{props.myPosts}</h1>
            <Post message="It's my first post with using props in React." like="+1" />
            <Post message="Second post." like="+2" />
        </section>
    );
}

export default MyPosts;