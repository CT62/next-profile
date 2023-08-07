"use client"
import { TypeAnimation } from 'react-type-animation';

export function Typeanimation(){
    return (
      <>
        <div className="text-white mx-4 space-y-2 ">
          <p className="text-2xl">I am a</p>

          <TypeAnimation className="text-9xl font-extrabold"
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
            style={{ fontSize: '2em'}}
            repeat={Infinity}
          />
        </div>
      </>
      );
}