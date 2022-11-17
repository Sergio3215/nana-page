import {useEffect, useState} from 'react';
import { ImgProfile, ContentProfile, ContentTitle } from '../components/style.module.css'
import NetworkSocial from './NetworkSocial';

export default function ProfileContent() {

    const [token, SetToken] = useState(false);

    const getLogged = async ()=>{
        const ftch = await fetch('api/logged');
        const res = await ftch.json();

        SetToken(res.success);
    }
    useEffect(()=>{
        getLogged();
    }, [])

    const logout = async () => {
        const ftch = await fetch('/api/logout');
        window.location.reload(true);
    }

    return (
        <>
            <div className={ContentTitle}>
                <h1>Welcome to my Shop</h1> {(token)?<button onClick={logout}>Logout</button>:null}
            </div>
            <div className={ContentProfile}>
                <img src="./image01.jpg" className={ImgProfile} />
                <h2>Me</h2>
                <h3><NetworkSocial/></h3>
            </div>
        </>
    )
}