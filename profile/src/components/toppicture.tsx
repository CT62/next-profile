import {Typeanimation} from "./typeanimation"
import AboutMe from "./aboutme"
function TopPicture() {
    return ( 
        <div>
                <div className='relative bg-[url(background.jpg)] h-96 w-full bg-cover bg-center p-24'>
                <Typeanimation />
                </div>
        </div>
    );
}

export default TopPicture;
