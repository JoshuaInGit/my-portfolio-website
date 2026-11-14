import { useState } from 'react';
import Card from './Card.jsx';
import ProjectModal from './ProjectModal.jsx';

const projects = [
    {
        name: 'Nyx',
        folder: 'nyx',
        images: ['nyx1.png', 'nyx2.png', 'nyx3.png','nyx4.png','nyx5.png','nyx6.png'],
        type: 'Full-stack web app',
        year: '2026',
        description: 'A social fitness tracker where users log workouts, post progress photos, track personal records and add friends, with JWT-protected accounts and in-app notifications.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL'],
    },
    {
        name: 'RipeSense',
        folder: 'ripesense',
        images: [],
        type: 'Capstone · IoT + mobile app',
        year: '2026',
        description: 'A two-device system that sends a 300 Hz vibration through a fruit and measures the response with an accelerometer to tell ripeness for watermelon, cantaloupe, honeydew and papaya. The ESP32 firmware filters out taps and handling noise, and a Flutter app shows results over Bluetooth and keeps a history.',
        tech: ['Flutter', 'Dart', 'C++', 'ESP32', 'Bluetooth', 'SQLite'],
    },
    {
        name: 'POS',
        folder: 'loop-pos',
        images: [],
        type: 'Android app',
        year: '2026',
        description: 'An offline point-of-sale app for small restaurants and shops: products with images and prices, ordering and checkout, receipt printing, cash drawer, inventory, and a dashboard for revenue, profit and sales.',
        tech: ['React Native', 'TypeScript', 'Local database'],
    },
    {
        name: 'ThumbReach',
        folder: 'thumbreach',
        images: [],
        type: 'Android app',
        year: '2026',
        description: 'A floating button for one-handed phone use that puts volume, brightness, the comment section and the keyboard within thumb reach while scrolling TikTok, Reels or Shorts.',
        tech: ['React Native', 'TypeScript', 'Android'],
    },
    {
        name: 'Game Space',
        folder: 'game-space',
        images: [],
        type: 'Android app',
        year: '2026',
        description: 'A PlayStation-style game launcher where you add your favorite games with cover images and video previews, plus a lock mode that pins the launcher.',
        tech: ['React Native', 'TypeScript', 'Android'],
    },
    {
        name: 'Pantry',
        folder: 'pantry',
        images: ['pantry1.png', 'pantry2.png', 'pantry3.png','pantry4.png'],
        type: 'Web app',
        year: '2026',
        description: "A quick tap-and-total checkout app made to replace manual math at my parents' convenience store, with item search and a live cart total.",
        tech: ['JavaScript'],
    },
];

function Projects() {
    const [open, setOpen] = useState(null);

    return (
        <Card title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((p) => (
                    <button
                        key={p.name}
                        type="button"
                        onClick={() => setOpen(p)}
                        className="flex flex-col text-left border border-black/10 p-4 sm:p-5 min-w-0 cursor-pointer hover:border-accent transition-colors"
                    >
                        <div className="flex items-start justify-between gap-3 w-full">
                            <h3 className="font-black text-[20px] leading-tight">{p.name}</h3>
                            <span className="font-black text-[15px] text-black/40 shrink-0">{p.year}</span>
                        </div>
                        <p className="text-[13px] font-bold text-accent mt-1">{p.type}</p>
                        <p className="text-[15px] leading-snug mt-3 flex-grow">{p.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {p.tech.map((t) => (
                                <span key={t} className="px-2 py-0.5 bg-[#f1f1f6] text-[12px] font-bold">{t}</span>
                            ))}
                        </div>
                        <span className="mt-4 text-[13px] font-bold text-accent">
                            {p.images.length > 0 ? `View ${p.images.length} screenshot${p.images.length > 1 ? 's' : ''} →` : 'View demo →'}
                        </span>
                    </button>
                ))}
            </div>
            {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
        </Card>
    );
}
export default Projects
