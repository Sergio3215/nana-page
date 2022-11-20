import { useState } from "react"

export default function Navigator(props){

    const [menu, setMenu] = useState([["Photo","Photo"],["Video","Video"],["Calls/VideoCalls","Calls/VideoCalls"],["Offerts Special","Offerts Special"], ["Rent a Girlfriend","Rent a Girlfriend"],["Extra","Extra"],["Gallery","Gallery"], ["Payment Method", "PaymentMethod"]]);

    return(
        <>
        <nav>
            <ul>
            {
                menu.map(m=>{
                    return(
                    <>
                        <li onClick={()=>props.setChild(m[1])}>{m[0]}</li>
                    </>
                    )
                })
            }
            </ul>
        </nav>
        </>
    )
}