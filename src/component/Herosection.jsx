import disney from "./DISNEY.UK/disney.png";
import "./css/Hero.css"



const Herosection = ()=> {
    return(
        <>
        <header>
            <div><img src={disney} alt="Disney Logo"  width={100}/></div>
            <div>
                <ul>
                    <li><a href="#">DISNEY+</a></li>
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">SHOWS</a></li>
                    <li><a href="#">PARKS</a></li>
                </ul>
            </div>
        </header>
        <nav className="hero">
            <div className="hword">
                <h1>TAYLOR SWIFT</h1>
                <h2>THE ERAS TOUR</h2>
                <h3>(TAYLOR'S VERSION)</h3>
                <p>Includes "cardigan" and four additional acoustic songs.</p>
                <p>Now streaming on Disney+</p>
                <button>SUBSCRIBE NOW*</button>
            </div>
        </nav>
        </>
    )
}

export default Herosection