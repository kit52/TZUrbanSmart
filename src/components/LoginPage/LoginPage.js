import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import s from "./LoginPage.module.css"
import { Redirect } from "react-router-dom"
import { SET_LOGIN } from '../../redux/reducer/index';
import { validateLogin, validatePassword } from '../../utils/utils';
const LoginPage = () => {
    const auth = useSelector(s => s.page.auth)
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const dispatch = useDispatch()
    const toLogin = () => {
        if (login.length != 0 && loginError && passwordError) {
            dispatch({ type: SET_LOGIN, payload: login })
        }
    }
    if (auth == true) {
        return <Redirect to="/profile" />
    }
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <div className={s.auth}>
                    <div className={s.input__content_login}>
                        <span className={s.input__title}>Логин</span>
                        <input className={s.input__login}
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            onBlur={() => setLoginError(validateLogin(login))}
                        />
                    </div>
                    <div className={s.input__content_password}>
                        <span className={s.input__title}>Пароль</span>
                        <input className={s.input__password}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => setPasswordError(validatePassword(password))}
                        />
                        {passwordError === false || loginError === false ? <p className={s.error}>Проверьте логин или пароль.</p> : null}
                    </div>
                    <button text="Войти" className={s.btn}
                        disabled={validateLogin(login) && validatePassword(password) ? false : true}
                        onClick={() => {
                            toLogin()
                        }} >
                        Войти
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;