import Card from './Card.jsx';
import Github from './assets/github.png';
import Linkedin from './assets/linkedin.png';

const links = [
    { label: 'GitHub', href: 'https://github.com/JoshuaInGit', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-sinlao-3666ab355/', icon: Linkedin },
];

function Socials() {
    return (
        <Card title="Socials">
            <div className="flex flex-wrap gap-3">
                {links.map((l) => (
                    <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 min-h-[44px] px-4 border border-black/10 text-[16px] font-bold hover:border-accent hover:text-accent transition-colors touch-manipulation"
                    >
                        <img src={l.icon} className="h-5 w-5" alt="" />
                        <span>{l.label}</span>
                    </a>
                ))}
            </div>
            <p className="mt-5 text-[13px] text-black/40">© {new Date().getFullYear()} Joshua Sinlao</p>
        </Card>
    );
}
export default Socials
