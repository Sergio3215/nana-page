import { useEffect, useState } from "react";
import AddItems from "./AddItems";

export default function Photo() {
    const [photo, setPhoto] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [detail, setDetail] = useState("");
    const [showModal, setShowModal] = useState(false);


    const getData = async () => {
        const ftch = await fetch(`/api/getItems?name=Photo`);
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
        setPrice(e.target.value);
    }
    const handlerDetail = (e) => {
        setDetail(e.target.value);
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const ftch = await fetch(`/api/addItems?name=Photo&nameRecord=${name}&price=${price}`);
        const res = await ftch.json();
        getData();
        setName("");
        setPrice("");
        setDetail("");
    }

    const handlerDelete = async (id) => {
        const ftch = await fetch(`/api/deleteItems?name=Photo&nameRecord=${name}&id=${id}`);
        const res = await ftch.json();
    }

    return (
        <>
            {
                (showModal) ? <AddItems title="Add a new photo detail"
                    girlfriend={false} extra={false} rules={false}
                    handlerName={handlerName} handlerPrice={handlerPrice} handlerDetail={handlerDetail} handlerSubmit={handlerSubmit} name={name} price={price} detail={detail}
                /> : null
            }
            <div>
                <button onClick={() => setShowModal(!showModal)}>Add New</button>
            </div>
            ☆ Photos ☆
            {
                photo.map(m => {
                    return (
                        <div>
                            {m.name} - ${m.price}
                            <buton onClick={()=>handlerDelete(m.__id)}>Delete</buton>
                        </div>
                    )
                })
            }
        </>
    )
}