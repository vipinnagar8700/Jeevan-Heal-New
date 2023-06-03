import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function RouteProtect(props) {
    const { Component } = props;
    const history = useHistory();
    useEffect(() => {
        let login = localStorage.getItem('login2');
        if (!login) {
            history.push("/login");
        }
    });
    console.log("hi")
    return (
        <div>
            <Component />
        </div>
    )
}

export default RouteProtect