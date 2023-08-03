"use client"
import { TypeAnimation } from 'react-type-animation';

export function Typeanimation(){
    return (
        <div md:text-center>
        <p>I am a</p>
        <TypeAnimation font-extrabold text-transparent text-8xl bg-clip-text bg-gradient
          sequence={[
            "Programmer",
            2000, 
            "Tech Enthusiast",
            2000,
            "Full Stack Developer",
            2000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
        </div>
      );
}