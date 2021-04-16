import React from 'react';
import { createFormError, createInput } from '../../../utils/form-helper';
import Button from '../../Common/Button/Button';

const NewsForm = (pprops) => {
    return (
        <form>
            <h1>Login Form</h1>
            {createInput()}
            {createInput()}
            <div>
                <label htmlFor='rememberMe'>Remember Me </label>
                <input name='rememberMe' type='checkbox'/>
            </div>
            <Button type='submit' span='Sing in' />
        </form>
    )
}

export default NewsForm;