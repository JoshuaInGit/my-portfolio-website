import HTML_icon from './assets/html_button.png';
import CSS_icon from './assets/css_button.png';
import JS_icon from './assets/js_button.png';
import Tailwind_icon from './assets/tailwind_button.png'; 
import React_icon from './assets/react_button.png';
import React, { useState } from "react";
function Skills({ scrollToHome, scrollToProjects }){
    const [isPressed3, setIsPressed3] = useState(false);
        const [isPressed4, setIsPressed4] = useState(false);

        const [isClicked1, setisClicked1] = useState(false);
          const handleClick1 = () => {
                setisClicked1(prevState1 => !prevState1);
            };
        const [isClicked2, setisClicked2] = useState(false);
          const handleClick2 = () => {
                setisClicked2(prevState2 => !prevState2);
            };
        const [isClicked3, setisClicked3] = useState(false);
          const handleClick3 = () => {
                setisClicked3(prevState3 => !prevState3);
            };
        const [isClicked4, setisClicked4] = useState(false);
          const handleClick4 = () => {
                setisClicked4(prevState4 => !prevState4);
            };
        const [isClicked5, setisClicked5] = useState(false);
          const handleClick5 = () => {
                setisClicked5(prevState5 => !prevState5);
            };
    return(
        <div className="mt-[50px] lg:mt-[100px] relative flex h-[700px] bg-[#292421] w-full justify-center items-center">
            <div className="absolute grid h-[95%] w-[95%] grid-cols-2 grid-rows-[auto_auto_1fr] gap-1 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr]">
                {/**grid 1 */}
                <div className="bg-[#6B4C63] col-span-2 row-span-1 flex justify-center items-center rounded-[20px] h-[100px] lg:h-[150px] ">
                    <div className="font-orbitron font-black 3xs:text-[35px] 2xs:text-[50px] xs:text-[60px] sm:text-[70px]">
                        <p>TECH STACK</p>
                    </div>
                </div>
                {/**grid 2 */}
                <div className="flex justify-center items-center col-span-2 row-span-1 bg-[#E0A15E] rounded-[20px] h-[400px]">
                    <div className="grid 3xs:grid-cols-2 gap-3 items-center 2xs:gap-1 xs:grid-cols-3 3xl:grid-cols-5">
                        <div onClick={handleClick1} className={`icons-effects hover:shadow-[0_0_8px_4px_#f67f17] flex justify-center items-center h-[100px] w-[100px] bg-[#292421] rounded-[5px] 2xs:h-[120px] 2xs:w-[120px] xs:h-[150px] xs:w-[150px] sm:h-[170px] sm:w-[170px] ${isClicked1? "shadow-[0_0_8px_4px_#f67f17]" : ""}`}>
                            <img src={HTML_icon} className="h-[50px]"></img>
                        </div>
                        <div onClick={handleClick2} className={`icons-effects hover:shadow-[0_0_8px_4px_#0e79e4] flex justify-center items-center h-[100px] w-[100px] bg-[#292421] rounded-[5px] 2xs:h-[120px] 2xs:w-[120px] xs:h-[150px] xs:w-[150px] sm:h-[170px] sm:w-[170px] ${isClicked2? "shadow-[0_0_8px_4px_#0e79e4]" : ""}`}>
                            <img src={CSS_icon} className="h-[50px]"></img>
                        </div>
                        <div onClick={handleClick3} className={`icons-effects hover:shadow-[0_0_8px_4px_#e1e808] flex justify-center items-center h-[100px] w-[100px] bg-[#292421] rounded-[5px] 2xs:h-[120px] 2xs:w-[120px] xs:h-[150px] xs:w-[150px] sm:h-[170px] sm:w-[170px] ${isClicked3? "shadow-[0_0_8px_4px_#e1e808]" : ""}`}>
                            <img src={JS_icon} className="h-[50px]"></img>
                        </div>
                        <div onClick={handleClick4} className={`icons-effects hover:shadow-[0_0_8px_4px_#0d8694] flex justify-center items-center h-[100px] w-[100px] bg-[#292421] rounded-[5px] 2xs:h-[120px] 2xs:w-[120px] xs:h-[150px] xs:w-[150px] sm:h-[170px] sm:w-[170px] ${isClicked4? "shadow-[0_0_8px_4px_#0d8694]" : ""}`}>
                            <img src={Tailwind_icon} className="h-[50px]"></img>
                        </div>
                        <div onClick={handleClick5} className={`icons-effects hover:shadow-[0_0_8px_4px_#04c2e8] flex justify-center items-center h-[100px] w-[100px] bg-[#292421] rounded-[5px] 2xs:h-[120px] 2xs:w-[120px] xs:h-[150px] xs:w-[150px] sm:h-[170px] sm:w-[170px] ${isClicked5? "shadow-[0_0_8px_4px_#04c2e8]" : ""}`}>
                            <img src={React_icon} className="h-[50px]"></img>
                        </div>
                    </div>
                </div> 
                {/**grid 3 */}
                <div onClick={scrollToHome} style={{ cursor: 'pointer' }} className={`bg-[#8A9E76] navigation-grid col-span-1 rounded-[20px] lg:col-start-3 lg:row-start-1 hover:bg-[#94cd5b] navigation-hover-effects ${
        isPressed3 ? "bg-[#94cd5b]" : "bg-[#8A9E76]"}`} onMouseDown={() => setIsPressed3(true)}
                                                        onMouseUp={() => setIsPressed3(false)}
                                                        onMouseLeave={() => setIsPressed3(false)}>
                    <div className="flex flex-col">
                        <p className="navigation-clue navigation-clue 3xs:text-[10px] 2xs:text-[15px] lg:text-[1vhw]">#NAVIGATION</p>
                        <p className="navigation-name 3xs:text-[15px] 2xs:text-[20px] xs:text-[30px] md:text-[35px] lg:text-[5vw] text-center">HOME</p>
                    </div>  
                </div>
                {/**grid 4 */}
                <div onClick={scrollToProjects} style={{ cursor: 'pointer' }} className={`bg-[#909090] navigation-grid col-span-1 lg:grid-rows-2 rounded-[20px] lg:col-start-3 lg:row-start-2 hover:bg-[#b7b7b7] navigation-hover-effects ${
        isPressed4 ? "bg-[#b7b7b7]" : "bg-[#909090]"}`} onMouseDown={() => setIsPressed4(true)}
                                                        onMouseUp={() => setIsPressed4(false)}
                                                        onMouseLeave={() => setIsPressed4(false)}>
                    <div className="flex flex-col">
                        <p className="navigation-clue 3xs:text-[10px] 2xs:text-[15px] lg:text-[1vhw]">#NAVIGATION</p>
                        <p className="navigation-name 3xs:text-[15px] 2xs:text-[20px] xs:text-[30px] lg:text-[4vw]">PROJECTS</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default Skills