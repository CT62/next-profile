import { TypeAnimation } from 'react-type-animation';

interface Props{
    FirstMessage: string;
    SecondMessage: string;
    ThirdMessage: string;
}

export function Typeanimation({FirstMessage, SecondMessage, ThirdMessage}:Props){
    return (
        <TypeAnimation
          sequence={[
            {FirstMessage},
            2000, 
            {SecondMessage},
            2000,
            {ThirdMessage},
            2000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      );
}