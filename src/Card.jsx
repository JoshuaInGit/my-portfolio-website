function Card({ title, children, className = '' }) {
    return (
        <section className={`w-full max-w-[870px] bg-white p-5 sm:p-7 font-42dot tracking-tight shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] ${className}`}>
            {title && <h2 className="font-black text-[22px] sm:text-[26px] mb-4 leading-none">{title}</h2>}
            {children}
        </section>
    );
}
export default Card
