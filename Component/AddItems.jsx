export default function AddItems(props) {
    return (
        <>
            <form onSubmit={(e) => props.handlerSubmit(e)}>
                <div>
                    <div className="modal--header">
                        {props.title}
                    </div>
                    <div className="modal--body">
                        {
                            (props.girlfriend) ?
                                <>
                                    <div>
                                        <label>Name</label>
                                        <input type="text" onChange={(e) => props.handlerName(e)} value={props.name} />
                                    </div>
                                    <div>
                                        <label>Price</label>
                                        <input type="text" onChange={(e) => props.handlerPrice(e)} value={props.price} />
                                    </div>
                                    <div>
                                        <label>Detail</label>
                                        <input type="text" onChange={(e) => props.handlerDetail(e)} value={props.detail} />
                                    </div>
                                </>
                                :
                                (props.extra || props.rules) ?

                                    <>
                                        <div>
                                            <label>Name</label>
                                            <input type="text" onChange={(e) => props.handlerName(e)} value={props.name} />
                                        </div>
                                    </>
                                    :
                                    (props.socialNet) ?
                                    <>
                                        {/* <div>
                                            <label>Name</label>
                                            <input type="text" onChange={(e) => props.handlerName(e)} value={props.name} />
                                        </div> */}
                                        <div>
                                            <label>Link</label>
                                            <input type="text" onChange={(e) => props.handlerPrice(e)} value={props.price} />
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div>
                                            <label>Name</label>
                                            <input type="text" onChange={(e) => props.handlerName(e)} value={props.name} />
                                        </div>
                                        <div>
                                            <label>Price</label>
                                            <input type="text" onChange={(e) => props.handlerPrice(e)} value={props.price} />
                                        </div>
                                    </>
                        }
                    </div>
                    <div className="modal--footer">
                        <input type="submit" value="Save" />
                    </div>
                </div>
            </form>
        </>
    )
}