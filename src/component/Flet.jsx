const Flet = ({ movies }) => {
    return (
        <>
            {movies.map((item, index) => (
                <Bill key={index} movie={item} />
            ))}
        </>
    );
};

const Bill = ({ movie }) => {
    return (
        <div className="nile">
                    <img src={movie.img}/>
                    <p>{movie.desc}</p>
                    <h4>{movie.type}</h4>
        </div>
    );
};

export default Flet;