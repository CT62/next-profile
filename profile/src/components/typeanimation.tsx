"use client"
import { TypeAnimation } from 'react-type-animation';

export function Typeanimation(){
    return (
      <>
        <div className="text-center mx-4 space-y-2">
          <p>I am a</p>

          <TypeAnimation className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500"
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