import { useEffect, useState } from "react";
import AddItems from "./AddItems";

export default function RentGirlFriend(){
    const [photo, setPhoto] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [detail, setDetail] = useState("");
    const [showModal, setShowModal] = useState(false);


    const getData = async () => {
        const ftch = await fetch(`/api/getItems?name=GirlFriend`);
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
        const ftch = await fetch(`/api/addItems?name=GirlFriend&nameRecord=${name}&price=${price}&detail=${detail}`);
        const res = await ftch.json();
        getData();
        setName("");
        setPrice("");
        setDetail("");
    }

    return (
        <>
            {
                (showModal) ? <AddItems title="Add a new girlfriend detail"
                    girlfriend={true} extra={false} rules={false}
                    handlerName={handlerName} handlerPrice={handlerPrice} handlerDetail={handlerDetail} handlerSubmit={handlerSubmit} name={name} price={price} detail={detail}
                /> : null
            }
            <div>
                <button onClick={() => setShowModal(!showModal)}>Add New</button>
            </div>
            ☆ I rent myself as a girlfriend ☆
            {
                photo.map(m => {
                    return (
                        <div>
                            {m.name} - ${m.price} Weekly - {m.detail}
                        </div>
                    )
                })
            }
        </>
    )
}