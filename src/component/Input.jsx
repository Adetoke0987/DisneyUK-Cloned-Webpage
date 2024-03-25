const BlueList = ({ types }) => {
    return (
        <>
            {types.map((item, index) => (
                <Input key={index} type={item} />
            ))}
        </>
    );
};

const Input = (props) => {
    return (
        <div className="guys">
            <img src={props.type.img}  />
            <span>{props.type.name}</span>
        </div>
    );
};


export default BlueList