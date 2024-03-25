import BlueList from "./Input"
import "./css/button.css"
import "./css/blue.css"
import Button from "./Button"

const Blue = ()=>{

   
    const type= [
        {img: '../../src/component/DISNEY.UK/marvel.jpeg', name: 'The Marvel'},
        {img: '../../src/component/DISNEY.UK/iwaju.jpeg', name: 'Iwaju'},
        {img: '../../src/component/DISNEY.UK/jackson.jpeg', name: 'Percy Jackson and the Olympians'}
    ]

    return(
        <>
        <div className='warri'>
            <h2>What &apos; s on Disney+</h2>

            <span>
                <div className='gay'>
                    <BlueList types={type} />
                </div>
            </span>

            
            <Button id="idy" brand="Subscribe now*"/>
            <p>*Terms and Condtion Apply | Plan start from just </p>
        </div>


           
        </>
    )
}

export default Blue