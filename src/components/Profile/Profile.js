import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router';

const Profile = () => {
    const auth = useSelector(s => s.page.auth);
    const login = useSelector(s => s.page.login);
    if (auth == false) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <h1>{login}</h1>
        </div>
    );
};

export default Profile;