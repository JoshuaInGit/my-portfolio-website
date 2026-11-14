import Card from './Card.jsx';

function AboutMe() {
    return (
        <Card title="About me">
            <div className="flex flex-col gap-4 text-[16px] sm:text-[18px] leading-snug">
                <p>
                    I'm a 4th-year Information Technology student who learns by building. I see code as a tool for
                    solving practical problems, and I don't wait for class assignments to start a project.
                </p>
                <p>
                    I build complete applications across the stack: web apps with React and NestJS, and mobile apps with
                    React Native and Flutter. Most of my projects start from a
                    problem I run into in daily life, from a checkout app for my parents' store to a one-handed control
                    app for scrolling short videos.
                </p>
                <p>
                    I use AI-assisted development to move fast, then test and debug every feature on real devices until
                    it works reliably. I'm currently studying AI engineering.
                </p>
            </div>
        </Card>
    );
}
export default AboutMe
