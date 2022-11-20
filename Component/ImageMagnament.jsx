import { useEffect, useState } from 'react'

export default function ImageMagnament(props) {

    const [image, setImage] = useState([]);
    const [name, setName] = useState([]);
    const [data, setData] = useState([]);
    const [url, setUrl] = useState("");

    const handlerImage = (e) => {
        setImage(e.target.files);
    }

    const getItems = async () => {
        const ftch = await fetch("/api/getItems?name=" + props.storage);
        const res = await ftch.json();
        setData(res.data)
    }

    useEffect(() => {
        getItems();
    }, [])

    const handlerSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        // console.log(image);
        // formData.append(
        //     "file",
        //     image
        // );
        formData.append(
            "file",
            image[0]
        )
        formData.append('upload_preset', 'my-uploads-' + props.storage);

        const formData1 = new FormData();
        formData1.append(
            "file",
            image[0]
        )
        formData1.append('upload_preset', 'my-upload-myfiles');
        const data1 = await fetch('https://api.cloudinary.com/v1_1/' + res.cloudname + '/image/upload', {
            method: 'POST',
            body: formData
        }).then(r => r.json());

        const ftch = await fetch('/api/cloudinary')
        const res = await ftch.json();

        const data = await fetch('https://api.cloudinary.com/v1_1/' + res.cloudname + '/image/upload', {
            method: 'POST',
            body: formData
        }).then(r => r.json());
        // console.log(data);

        const ftch1 = await fetch(`/api/addGallery?name=${props.storage}&url=${data.secure_url}&namecustom=${name}&namefile=${data.original_filename}&id=${data.asset_id}&public_id=${data.public_id}`);
        const res1 = await ftch1.json();

        if(props.update !== undefined){
            props.update();
        }

        getItems();
    }

    const deleteGallery = async (id) => {
        const data = await fetch(`/api/removeGallery?public_id=${id}&name=profile`).then(res => res.json());
        getItems();
    }

    const pickSelected = async (id) => {
        console.log(id)

        const ftch = await fetch(`/api/updatePicSelected?id=${id}&url=${url}`).then(res=>res.json())

        props.changeImageProfile();
        props.closeModal();
    }


    const handlerClick = (e)=>{
        // console.log(e.target.src)
        for(let ii=0; document.querySelectorAll('#pic--profile--image').length > ii; ii++){
            document.querySelectorAll('#pic--profile--image')[ii].style.border = "0px solid transparent";
        }
        e.target.style.border = "5px solid red";
        setUrl(e.target.src);
    }

    return (
        <>
            <form id="form--upload--image" onSubmit={(e) => handlerSubmit(e)}>
                <div>
                    <label>Add New Photo</label>
                </div>
                <div>
                    <label>Name (optional)</label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Image File</label><br />
                    <input type="file" accept='image/*' name="files" onChange={(e) => handlerImage(e)} />
                </div>
                <div>
                    <input type="submit" value="Save" />
                </div>
            </form>
            {
                (props.storage == "profile")?
                <div>
                    {
                        data.map(m => {
                            return (
                                <>
                                    <img src={m.url} width="125px" alt={m.name} id="pic--profile--image" onClick={(e)=>handlerClick(e)}/>
                                <button onClick={() => deleteGallery(m.public_id)}>Delete</button>
                                </>
                            )
                        })
                    }
                    <button onClick={()=>pickSelected(props.picSelectedID)}>Select</button>
                </div>
                :
                null
            }
        </>
    )
}