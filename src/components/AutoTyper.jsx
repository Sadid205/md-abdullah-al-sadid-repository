import { Typewriter } from 'react-simple-typewriter'
const AutoTyper = () =>{
    return (
        <div>
            <h1 className='font-bold text-xl text-white'>I'M A <span> <Typewriter 
              words={['PROGRAMMER', 'WEB DEVELOPER', 'DJANGO DEVELOPER', 'PROBLEM SOLVER' ,'BACKEND DEVELOPER', 'PASSIONATE PROGRAMMER']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
               /> </span></h1>
        </div>
    )
}

export default AutoTyper;