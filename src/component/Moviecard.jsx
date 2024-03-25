const Moviecard =(props)=>{
    return(
            <>
                <div>
                    <div>
                        {props.band.img}
                    </div>
                    <h2>{props.band.title}</h2>
                </div>
            </>
    )
}

export default Moviecard