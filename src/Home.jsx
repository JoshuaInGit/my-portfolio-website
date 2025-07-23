import Profile from './assets/profile.png';
import Fb_icon from './assets/fb_icon.png';
import Linked_icon from './assets/linked_icon.png';
import React, { useState } from "react";

function Home({ scrollToSkills, scrollToProjects }){
    const [isPressed, setIsPressed] = useState(false);
    const [isPressed2, setIsPressed2] = useState(false);

      const handleMouseDown1 = (setter) => {
    setter(true);
  };

  const handleMouseUp1 = (setter) => {
    setter(false);
  };
      const handleMouseDown2 = (setter) => {
    setter(true);
  };

  const handleMouseUp2 = (setter) => {
    setter(false);
  };
    return(
        /* Main Container of elements in Homepage*/
        <div className="relative flex h-[700px] w-full items-center justify-center bg-[#292421]">
            {/* container for grids */}
            <div className="absolute grid grid-cols-2 grid-rows-[auto_auto_1fr] justify-center h-[95%] w-[95%] gap-1 sm:grid-rows-[auto_1fr_1fr] lg:grid-cols-3 lg:grid-rows-[auto_1fr]">
                {/* Grid 1 */}
                <div className="flex items-end col-span-2 row-span-1 bg-[#B84941] h-[350px] w-full sm:col-span-1 sm:row-span-3 rounded-[20px] justify-center sm:h-full lg:rows-span-3">
                    <div className="flex justify-center h-full">
                        <img src={Profile} className=" object-cover [object-position:70%_center] [filter:brightness(0.5)_saturate(0)_contrast(1.3)] rounded-[50px]"></img>
                    </div>
                </div>
                 {/*---------------*/}
                  {/* Grid 2 */}
                <div className="flex p-[10px] flex-col col-span-2 row-span-1 bg-[#E0A15E] h-[150px] w-full rounded-[20px] sm:col-span-1 sm:gap-5 sm:h-[250px] lg:col-span-2 lg:h-[350px]">
                    <div>
                        <p className="font-orbitron font-medium text-sm text-[#292421]">Hello there, I am</p>
                    </div>
                    <div>
                        <p className="font-orbitron font-extrabold text-[#292421] 3xs:text-[25px] 2xs:text-[35px] xs:text-[45px] leading-none sm:text-[45px] md2:text-[55px] lg:text-[5vw]">JOSHUA SINLAO</p>
                    </div>
                    <div className="flex justify-around sm:items-end sm:justify-center sm:h-[20px] gap-5 lg:mt-[100px]">
                        <p className="font-orbitron 3xs:text-[10px] w-full lg:text-[2vw]">Contacts</p>
                        <p className="font-orbitron font-semibold w-full lg:text-[2vw]">An aspiring developer</p>
                    </div>
                    <div className="flex border-t-2 border-black p-1 gap-5">
                        <a href="https://www.facebook.com/joshua.sinlao.50"><img src={Fb_icon} className="h-[30px]"></img></a>
                        <a href="https://www.linkedin.com/in/joshua-sinlao-3666ab355/"><img src={Linked_icon} className="h-[30px]"></img></a>
                    </div>
                </div>
                {/*---------------*/}
                 {/* Grid 3 */}
                <div  onClick={scrollToSkills} style={{ cursor: 'pointer' }} className={`navigation-grid col-span-1 row-span-1 h-full w-full rounded-[20px] navigation-hover-effects ${
        isPressed ? "bg-[#b7b7b7] duration-[25ms]" : "bg-[#909090] hover:bg-[#b7b7b7] duration-300"}`} onMouseDown={() => setIsPressed(true)}
                                                                                                        onTouchStart={() => handleMouseDown1(setIsPressed)}
                                                                                                        onMouseUp={() => setIsPressed(false)}
                                                                                                        onTouchEnd={() => handleMouseUp1(setIsPressed)}
                                                                                                        onMouseLeave={() => setIsPressed(false)} >
                    <div className="flex flex-col">
                        <p className="navigation-clue 3xs:text-[10px] 2xs:text-[15px] lg:text-[1vhw]">#NAVIGATION</p>
                        <p className="navigation-name  3xs:text-[15px] 2xs:text-[20px] xs:text-[30px] md:text-[35px] lg:text-[5vw]">SKILLS</p>
                    </div>
                </div>
                {/*---------------*/}
                 {/* Grid 4 */}
                <div onClick={scrollToProjects} style={{ cursor: 'pointer' }} className={`navigation-grid col-span-1 row-span-1 h-full w-full rounded-[20px] navigation-hover-effects ${
        isPressed2 ? "bg-[#94cd5b] duration-[25ms]" : "bg-[#8A9E76] hover:bg-[#94cd5b] duration-300"}`} onMouseDown={() => setIsPressed2(true)}
                                                                                                        onTouchStart={() => handleMouseDown2(setIsPressed2)}
                                                                                                        onMouseUp={() => setIsPressed2(false)}
                                                                                                        onTouchEnd={() => 2(setIsPressed2)}
                                                                                                        onMouseLeave={() => setIsPressed2(false)}>
                    <div className="flex flex-col">
                        <p className="navigation-clue 3xs:text-[10px] 2xs:text-[15px] lg:text-[1vhw]">#NAVIGATION</p>
                        <p className="navigation-name 3xs:text-[15px] 2xs:text-[20px] xs:text-[30px] lg:text-[4vw]">PROJECTS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home