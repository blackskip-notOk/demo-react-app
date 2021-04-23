import React from 'react';
import Button from '../../../Common/Button/Button';

const NewsForm = (props) => {
    return (
        <form>
            <h1>Login Form</h1>
            <div>
                <label htmlFor='rememberMe'>Remember Me </label>
                <input name='rememberMe' type='checkbox'/>
            </div>
            <Button type='submit' span='Sing in' />
        </form>
    )
}

export default NewsForm;