import { useEffect, useState } from "react";
import ImageMagnament from "./ImageMagnament";

export default function Gallery() {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const getItems = async () => {
        const ftch = await fetch("/api/getItems?name=gallery");
        const res = await ftch.json();
        setData(res.data)
    }

    useEffect(() => {
        getItems();
    }, [])

    const deleteGallery = async (id) => {
        const data = await fetch(`/api/removeGallery?public_id=${id}&name=gallery`).then(res => res.json());
        getItems();
    }

    return (
        <>
            {
                (show) ?
                    <ImageMagnament storage='gallery' update={getItems} />
                    :
                    null
            }

            <button onClick={() => { setShow(!show) }}>Add New</button>
            <div>
                {
                    data.map(m => {
                        return (
                            <div>
                                <img src={m.url} width="125px"/>
                                <button onClick={() => deleteGallery(m.public_id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}