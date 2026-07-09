import Github from './assets/github.png';
import Linkedin from './assets/linkedin.png';
function Socials(){

    return(
        <div className="flex flex-col h-auto w-full max-w-[870px] p-4 font-42dot text-[18px] sm:text-[20px] relative z-10 bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)]">
            <p className="font-black ml-[5px]">Socials</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                <a
                    href="https://github.com/JoshuaInGit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center cursor-pointer hover:underline ml-[20px] py-2 px-2 touch-manipulation"
                >
                    <img src={Github} className="h-[20px] w-[20px] mr-2" alt="Github" />
                    <span>Github</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/joshua-sinlao-3666ab355/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center cursor-pointer hover:underline ml-[20px] py-2 px-2 touch-manipulation"
                >
                    <img src={Linkedin} className="h-[20px] w-[20px] mr-2" alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    );
}
export default Socials
