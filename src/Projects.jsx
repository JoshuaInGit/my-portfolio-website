import Project1 from './assets/PROJECT1.png';
function Projects({ scrollToHome, scrollToSkills }){
    return(
        <div className="lg:mb-[100px] relative flex h-[700px] bg-[#292421] w-full justify-center items-center sm:h-[570px]">
            <div className="absolute grid h-[95%] w-[95%] grid-cols-2 grid-rows-[auto_1fr_1fr] gap-4  lg:grid-cols-[1fr_1fr_auto] lg:grid-rows-[auto_1fr]">
                {/**GRID 1 */}
                <div className="flex justify-center items-center col-span-2 row-span-1 h-[100px] bg-[#E0A15E] rounded-[20px] 2xs:h-[120px] lg:h-[200px]">
                    <div>
                        <p className="font-orbitron font-black text-[40px] 2xs:text-[50px] xs:text-[60px] sm:text-[70px]  md:text-[80px] md1:text-[90px] md1:text-[90px]">PROJECTS</p>
                    </div>
                </div>
                {/**GRID 2*/}
                <div className="col-span-2 row-span-1 bg-[#B84941] rounded-[20px] h-[full] sm:col-span-1  sm:row-span-2 sm:col-start-1 sm:row-start-2 lg:col-start-3 lg:row-start-1 lg:w-[400px]">
                    <div className="flex flex-col gap-4">
                        <img src={Project1} className="rounded-t-[20px]"></img>
                        <div className="bg-[#1C1A1A] ml-[10px] h-[20px] w-[50px] flex justify-center items-center lg:h-[30px] lg:w-[70px]">
                            <p className="text-white text-[10px]">VIEW</p>
                        </div>
                        <div className="m-[10px] flex justify-center items-center">
                             <p className="font-orbitron font-extrabold text-[13px] lg:text-[20px]">
                            Food Recipe Finder
                            A simple food website built with HTML, CSS, and JavaScript that fetches recipes from the Spoonacular API. 
                            It displays the recipe image, name, and cooking instructions dynamically using JavaScript. 
                            </p>
                        </div>
                    </div>
                </div>
                {/**GRID 3 */}
                <div onClick={scrollToHome} style={{ cursor: 'pointer' }} className="navigation-grid col-span-1 row-span-1 bg-[#909090] rounded-[20px] sm:col-start-2 sm:row-start-2 lg:col-start-1 lg:row-start-2 hover:bg-[#b7b7b7] hover:shadow-[0_0_8px_4px_#b7b7b7] navigation-hover-effects">
                    <div className="flex flex-col">
                        <p className="navigation-clue navigation-clue 3xs:text-[10px] 2xs:text-[15px] lg:text-[1vhw]">#NAVIGATION</p>
                        <p className="navigation-name 3xs:text-[15px] 2xs:text-[20px] xs:text-[30px] md:text-[35px] lg:text-[5vw] text-center">HOME</p>
                    </div> 
                </div>
                {/**GRID 4 */}
                <div onClick={scrollToSkills} style={{ cursor: 'pointer' }} className="navigation-grid col-span-1 row-span-1 bg-[#8A9E76] rounded-[20px] sm:col-start-2 sm:row-start-3 lg:col-start-2 lg:row-start-2 hover:bg-[#94cd5b] navigation-hover-effects">
                    <div className="flex flex-col">
                        <p className="navigation-clue 3xs:text-[10px] 2xs:text-[15px] lg:text-[1vhw]">#NAVIGATION</p>
                        <p className="navigation-name 3xs:text-[15px] 2xs:text-[20px] xs:text-[30px] lg:text-[4vw]">SKILLS</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default Projects