function Projects(){

    return(
        <div className="flex flex-col sm:flex-row h-auto w-full max-w-[870px] bg-white text-[18px] sm:text-[20px] p-6 mb-[8px] tracking-tighter leading-tight font-42dot relative z-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col gap-10 flex-grow">
                    <div className="font-42dot font-black ml-[5px]">
                    <p>Projects</p>
                </div>
                <div>
                    <div className="pl-2 sm:pl-[30px]">
                        <p className="flex before:content-[''] before:block before:w-2 before:h-2 before:bg-black before:mr-3 before:mt-2 font-42dot font-black">Pantry</p>
                        <p>A quick tap-and-total checkout app created to replace manual math at my parents' convenience store.</p>
                        
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className="pl-2 sm:pl-[30px]">
                        <p className="flex before:content-[''] before:block before:w-2 before:h-2  before:bg-black before:mr-3 before:mt-2 font-42dot font-black">Ripe Sense</p>
                        <p>A mobile app that analyzes vibrations to instantly test and display the ripeness of a watermelon.</p>
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className="pl-2 sm:pl-[30px]">
                        <p className="flex before:content-[''] before:block before:w-2 before:h-2  before:bg-black before:mr-3 before:mt-2 font-42dot font-black">GrandView</p>
                        <p>A clean, user-friendly property listing app designed for posting and viewing real estate project.</p>
                    </div>
                    <div></div>
                </div>
                <div>  
                    <div className="pl-2 sm:pl-[30px]">
                        <p className="flex before:content-[''] before:block before:w-2 before:h-2  before:bg-black before:mr-3 before:mt-2 font-42dot font-black">IngrediSearch</p>
                        <p>An ingredient-based recipe finder that displays all available dishes you can cook using what's in your fridge.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row sm:flex-col justify-between sm:justify-around bg-white font-black mt-10 sm:mt-0 sm:mr-[20px] w-full sm:w-[100px] text-right">
                <div>
                    <p className="sm:pt-[20px]">2026</p>
                </div>
                <div>
                    <p>2026</p>
                </div>
                <div>
                    <p className="sm:pb-0">2025</p>
                </div>
                <div>
                    <p className="sm:pb-[30px]">2025</p>
                </div>
            </div>
        </div>
    );
}
export default Projects