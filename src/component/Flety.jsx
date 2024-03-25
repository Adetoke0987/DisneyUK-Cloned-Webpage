import Flet from "./Flet";
import "./css/movies.css"


const movies = [
    { img:"../../src/component/DISNEY.UK/red.jpg", desc:"lorem20", type: "shows" },
    { img:"../../src/component/DISNEY.UK/baby.jpg", desc:"lorem20", type: "DISNEYLAND R PARIS" },
    { img:"../../src/component/DISNEY.UK/baby2.jpg", desc:"lorem20", type: "DISNEYLAND R PARIS" },
    { img:"../../src/component/DISNEY.UK/dull.jpg", desc:"lorem20", type: "SHOP" }
];

const Flety = () =>{
    return (
        <>
            <div className='swiss'>
                <Flet movies={movies} />
            </div>
            
        </>
    );
}

export default Flety