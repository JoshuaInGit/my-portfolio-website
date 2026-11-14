function Container({ children }) {
    return (
        <main className="flex flex-col items-center gap-2 px-3 py-4 sm:px-6 sm:py-8 min-h-screen">
            {children}
        </main>
    );
}
export default Container
