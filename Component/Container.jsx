import { useState } from "react";
import Extra from "./Extra";
import Gallery from "./Gallery";
import Navigator from "./Navigator";
import OffertSpecial from "./OffertSpecial";
import Photo from "./Photo";
import ProfileContent from "./Profile";
import RentGirlFriend from "./RentGirlFriend";
import Rules from "./Rules";
import TypeCalls from "./TypeCalls";
import Video from "./Video";

export default function Container() {

    const [components, setComponents] = useState([
        [<Rules />, "Rules"], [<Photo />, "Photo"], [<Video />, "Video"], [<TypeCalls />, "Calls/VideoCalls"], [<OffertSpecial />, "Offerts Special"], [<RentGirlFriend />, "Rent a Girlfriend"], [<Extra />, "Extra"], [<Gallery />, "Gallery"]
    ]);

    const [stateChild, setStateChild] = useState("Rules");


    const setChild = (value)=>{
        setStateChild(value);
    }

    return (
        <>
            <ProfileContent />
            <h2>Menu 🖤</h2>
            <div>
                <Navigator setChild={setChild}/>
                {
                    components.map(m=>{
                        return(
                            <>
                            {
                                (m[1] == stateChild)? m[0] : null
                            }
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}