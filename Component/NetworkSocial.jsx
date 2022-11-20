import { useEffect, useState } from "react";
import AddItems from "./AddItems";
import Link from 'next/link'
import { socialNet } from '../components/style.module.css'

export default function NetworkSocial() {

    const [photo, setPhoto] = useState([]);
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [detail, setDetail] = useState("");
    const [showModal, setShowModal] = useState(false);


    const getData = async () => {
        const ftch = await fetch(`/api/getItems?name=SocialNetwork`);
        const res = await ftch.json();
        setPhoto(res.data);
    }

    useEffect(() => {
        getData();
    }, [])


    const handlerName = (e) => {
        setName(e.target.value);
    }

    const handlerPrice = (e) => {
        setLink(e.target.value);
    }
    const handlerDetail = (e) => {
        setDetail(e.target.value);
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const ftch = await fetch(`/api/addItems?name=SocialNetwork&nameRecord=${name}&link=${link}`);
        const res = await ftch.json();
        getData();
        setName("");
        setLink("");
    }

    return (
        <>
            {
                (showModal) ? <AddItems title="Add a new social network detail"
                    girlfriend={false} extra={false} rules={false} socialNet={true}
                    handlerName={handlerName} handlerPrice={handlerPrice} handlerDetail={handlerDetail} handlerSubmit={handlerSubmit} name={name} link={link} detail={detail}
                /> : null
            }
            <div>
                <button onClick={() => setShowModal(!showModal)}>Add New</button>
            </div>
            <div style={{display:"flex"}}>
            {
                photo.map(m => {
                    return (
                        <div className={socialNet}>
                            <Link href={m.link}>
                                <img src=
                                    {
                                        (m.link.toLowerCase().includes('instagram')) ?
                                            "/Instagram.png"
                                            :
                                            (m.link.toLowerCase().includes('discord')) ?
                                                "/discord.png"
                                                :
                                                (m.link.toLowerCase().includes('tiktok')) ?
                                                    "/TikTok.png"
                                                    :
                                                    m.name
                                    } />
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}