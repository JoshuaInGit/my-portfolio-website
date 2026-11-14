import { useEffect, useState } from 'react';

function ProjectModal({ project, onClose }) {
    const [index, setIndex] = useState(0);
    const images = project.images.map((file) => `/projects/${project.folder}/${file}`);
    const count = images.length;

    const prev = () => setIndex((i) => (i - 1 + count) % count);
    const next = () => setIndex((i) => (i + 1) % count);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (count > 1 && e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count);
            if (count > 1 && e.key === 'ArrowRight') setIndex((i) => (i + 1) % count);
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [count, onClose]);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-6"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} screenshots`}
        >
            <div
                className="relative w-full max-w-[900px] max-h-full overflow-y-auto bg-white font-42dot tracking-tight p-4 sm:p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="min-w-0">
                        <h3 className="font-black text-[22px] sm:text-[26px] leading-tight">{project.name}</h3>
                        <p className="text-[13px] font-bold text-accent mt-1">{project.type}</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="shrink-0 w-11 h-11 flex items-center justify-center text-[26px] leading-none hover:bg-black/5 cursor-pointer"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                {count > 0 ? (
                    <>
                        <div className="relative bg-[#f1f1f6] flex items-center justify-center h-[55vh] sm:h-[60vh]">
                            <img
                                src={images[index]}
                                alt={`${project.name} screenshot ${index + 1}`}
                                className="max-w-full max-h-full object-contain"
                            />
                            {count > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={prev}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 shadow font-black text-[20px] cursor-pointer"
                                        aria-label="Previous image"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        type="button"
                                        onClick={next}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 shadow font-black text-[20px] cursor-pointer"
                                        aria-label="Next image"
                                    >
                                        ›
                                    </button>
                                </>
                            )}
                        </div>
                        {count > 1 && (
                            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                                {images.map((src, i) => (
                                    <button
                                        key={src}
                                        type="button"
                                        onClick={() => setIndex(i)}
                                        className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#f1f1f6] border-2 cursor-pointer ${i === index ? 'border-accent' : 'border-transparent'}`}
                                        aria-label={`Show image ${i + 1}`}
                                    >
                                        <img src={src} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                        <p className="text-[13px] text-black/40 mt-2">{index + 1} / {count}</p>
                    </>
                ) : (
                    <div className="bg-[#f1f1f6] border-2 border-dashed border-black/15 h-[40vh] flex flex-col items-center justify-center text-center p-6">
                        <p className="font-black text-[18px] text-black/50">Screenshots coming soon</p>
                        <p className="text-[14px] text-black/40 mt-1">Demo images for this project will be added here.</p>
                    </div>
                )}

                <p className="text-[15px] leading-snug mt-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-[#f1f1f6] text-[12px] font-bold">{t}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ProjectModal
