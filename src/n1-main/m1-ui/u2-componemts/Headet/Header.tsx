import React from "react";
import { NavLink } from "react-router-dom";

export const Header = ()=>{
    return(
        <div>
            Hello, I'm a Header Component
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <NavLink to={'/login'}>Login page</NavLink>
                <NavLink to={'/register'}>Register page</NavLink>
                <NavLink to={'/profile'}>Profile page</NavLink>
                <NavLink to={'/recovery'}>Recovery page</NavLink>
                <NavLink to={'/new-password'}>New Password page</NavLink>
                <NavLink to={'/test'}>Test page</NavLink>
                <NavLink to={'/404'}>Error page</NavLink>
            </div>
        </div>
    )
}