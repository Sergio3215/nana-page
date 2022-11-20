import {useEffect, useState} from 'react';
import { ImgProfile, ContentProfile, ContentTitle } from '../components/style.module.css'
import ImageMagnament from "./ImageMagnament";
import NetworkSocial from './NetworkSocial';

import {getLogged} from '../ConfirmLoggedUser'

export default function ProfileContent() {

    const [token, SetToken] = useState(false);
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [url, setUrl] = useState([]);


    const changeImageProfile = async ()=>{
        const ftch = await fetch('/api/getPicSelected');
        const res = await ftch.json();
        setUrl(res.data);
    }

    useEffect(async ()=>{
        let n = await getLogged();
        SetToken(n);
        changeImageProfile();
    }, [])

    const logout = async () => {
        const ftch = await fetch('/api/logout');
        window.location.reload(true);
    }

    const getItems = async () => {
        const ftch = await fetch("/api/getItems?name=gallery");
        const res = await ftch.json();
        setData(res.data)
    }

    const closeModal = () => { setShow(!show) }

    return (
        <>
            <div className={ContentTitle}>
                <h1>Welcome to my Shop</h1> {(token)?<button onClick={logout}>Logout</button>:null}
            </div>
            
            

            <div className={ContentProfile}>
            {
                (show) ?
                    <ImageMagnament storage='profile' update={getItems} picSelectedID={url.__id} changeImageProfile={changeImageProfile} closeModal ={closeModal}/>
                    :
                    null
            }

            <button onClick={() => { setShow(!show) }}>Change Image</button>
                <img src={url.url} className={ImgProfile} />
                <h2>Me</h2>
                <h3><NetworkSocial/></h3>
            </div>
        </>
    )
}