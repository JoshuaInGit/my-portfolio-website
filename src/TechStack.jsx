import Card from './Card.jsx';

const groups = [
    { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Dart', 'SQL', 'HTML', 'CSS'] },
    { label: 'Frontend & Mobile', items: ['React', 'React Native', 'Flutter', 'Tailwind CSS', 'Android'] },
    { label: 'Backend & Data', items: ['Node.js', 'NestJS', 'REST APIs', 'JWT', 'Prisma', 'PostgreSQL', 'SQLite'] },
    { label: 'Tools', items: ['Git', 'VS Code', 'Android Studio', 'IntelliJ IDEA', 'Vercel', 'AI-assisted development'] },
];

function TechStack() {
    return (
        <Card title="Tech Stack">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {groups.map((g) => (
                    <div key={g.label}>
                        <p className="font-bold text-[15px] text-black/50 mb-2">{g.label}</p>
                        <div className="flex flex-wrap gap-2">
                            {g.items.map((item) => (
                                <span key={item} className="px-3 py-1 bg-[#f1f1f6] text-[15px] font-bold">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
export default TechStack
