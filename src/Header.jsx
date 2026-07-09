import Profile from './assets/profile1.png';

function Header(){

    return(
        <div className="flex flex-col sm:flex-row h-auto sm:h-[200px] w-full max-w-[870px] gap-4 p-4 mb-[8px] bg-white relative z-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] tracking-tighter overflow-visible">
            <div className="h-[150px] sm:h-[190px] flex justify-center">
                <img src={Profile} className="object-cover h-full w-auto" alt="Profile"></img>
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start h-full text-center sm:text-left">
                <p className="font-42dot font-black text-[28px] sm:text-[32px]">Joshua Sinlao</p>
                <a
                    href="mailto:joshuasinlao13@gmail.com"
                    className="font-42dot font-bold text-[13px] mb-4 sm:mb-[40px] pl-[10px] leading-none text-black/40 hover:underline"
                >
                    joshuasinlao13@gmail.com
                </a>
                <button onClick={() => window.open("/Joshua_Sinlao_Resume.pdf", "_blank")} className="w-[140px] h-[56px] bg-[#525AF4] text-white relative z-30 cursor-pointer active:scale-95 transition-transform">Resume</button>
            </div>
        </div>
    );
}
export default Header