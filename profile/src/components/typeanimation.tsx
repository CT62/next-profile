"use client"
import { TypeAnimation } from 'react-type-animation';

export function Typeanimation(){
    return (
        <TypeAnimation
          sequence={[
            "I am a Programmer",
            2000, 
            "I am a Tech Enthusiast",
            2000,
            "I am a Full Stack Developer",
            2000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      );
}