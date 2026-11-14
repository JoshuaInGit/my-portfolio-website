import Profile from './assets/profile1.webp';

function Header() {
    return (
        <header className="w-full max-w-[870px] bg-white p-5 sm:p-6 font-42dot tracking-tight shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row items-center gap-5 sm:gap-7">
            <img
                src={Profile}
                alt="Joshua Sinlao"
                className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] object-cover shrink-0"
            />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-0 w-full">
                <h1 className="font-black text-[30px] sm:text-[38px] leading-none">Joshua Sinlao</h1>
                <p className="mt-2 text-[16px] sm:text-[18px] font-bold text-black/70">Full-Stack, Mobile and Web Developer</p>
                <p className="mt-1 text-[14px] text-black/50">BS Information Technology student · Cavite, Philippines</p>
                <a
                    href="mailto:joshuasinlao13@gmail.com"
                    className="mt-2 text-[14px] font-bold text-black/50 hover:underline break-all"
                >
                    joshuasinlao13@gmail.com
                </a>
                <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
                    <a
                        href="/Joshua_Sinlao_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center min-w-[140px] h-[48px] px-6 bg-accent text-white font-bold active:scale-95 transition-transform"
                    >
                        Resume
                    </a>
                    <a
                        href="tel:+639685519932"
                        className="inline-flex items-center justify-center min-w-[140px] h-[48px] px-6 border-2 border-accent text-accent font-bold active:scale-95 transition-transform whitespace-nowrap"
                    >
                        0968 551 9932
                    </a>
                </div>
            </div>
        </header>
    );
}
export default Header
