function Container({ children }){

    return(
        <div className="flex flex-col items-center p-4 sm:p-8 h-auto gap-2">
            { children }
        </div>
    );
}
export default Container