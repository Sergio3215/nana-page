import { useEffect, useState } from "react";
import AddItems from "./AddItems";

export default function OffertSpecial(){
    const [photo, setPhoto] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [detail, setDetail] = useState("");
    const [showModal, setShowModal] = useState(false);


    const getData = async () => {
        const ftch = await fetch(`/api/getItems?name=OfferSpecial`);
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
        const ftch = await fetch(`/api/addItems?name=OfferSpecial&nameRecord=${name}&price=${price}`);
        const res = await ftch.json();
        getData();
        setName("");
        setPrice("");
        setDetail("");
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    return (
        <>
            {
                (showModal) ? <AddItems title="Add a new offert special detail"
                    girlfriend={false} extra={true} rules={false}
                    handlerName={handlerName} handlerPrice={handlerPrice} handlerDetail={handlerDetail} handlerSubmit={handlerSubmit} name={name} price={price} detail={detail}
                /> : null
            }
            <div>
                <button onClick={() => setShowModal(!showModal)}>Add New</button>
            </div>
            ☆ {monthNames[new Date().getMonth()]} Offer Special ☆
            {
                photo.map(m => {
                    return (
                        <div>
                            {m.name}
                        </div>
                    )
                })
            }
        </>
    )
}