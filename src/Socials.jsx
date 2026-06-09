import Github from './assets/github.png';
import Linkedin from './assets/linkedin.png';
function Socials(){

    return(
        <div className="flex flex-col h-auto w-full max-w-[870px] p-4 font-42dot text-[18px] sm:text-[20px] relative z-10 bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)]">
            <p className="font-black ml-[5px]">Socials</p>
            <div className="flex flex-wrap gap-4 mt-2">
                <img src={Github} className="h-[20px] w-[20px] mt-[5px] ml-[20px]" alt="Github"></img>
                <p>Github</p>
                <img src={Linkedin} className="h-[20px] w-[20px] mt-[5px] ml-[20px]" alt="LinkedIn"></img>
                <p>LinkedIn</p>
            </div>
        </div>
    );
}
export default Socials