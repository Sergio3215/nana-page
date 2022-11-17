import { useEffect, useState } from "react";
import { rules } from '../components/style.module.css';

export default function Rules() {
    const [data, setData] = useState([]);

    const getRules = async () => {
        const ftch = await fetch("/api/getItems?name=Rules");
        const res = await ftch.json();
        setData(res.data)
    }

    useEffect(() => {
        getRules();
    }, []);


    return (
        <div className={rules}>
            {
                data.map(m => {
                    return (
                        <div>
                            {m.name}
                        </div>
                    )
                })
            }
        </div>
    )
}