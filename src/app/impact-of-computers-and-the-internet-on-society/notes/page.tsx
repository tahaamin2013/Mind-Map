import React from 'react';

const page: React.FC = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
                    Impact of Computers and the Internet on Society
                </h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black">1. Communication</h2>
                    <ul className="list-disc list-inside text-black">
                        <li>Email, Instant Messaging, and Video Conferencing: Revolutionized how people communicate.</li>
                        <li>Social Media Platforms: Changed social interactions and information sharing.</li>
                        <li>Global Communication: Instant and widespread communication enabled.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black">2. Education</h2>
                    <ul className="list-disc list-inside text-black">
                        <li>Online Learning: Expanded access to education through online platforms.</li>
                        <li>Digital Resources: Enhanced learning with interactive educational software and simulations.</li>
                        <li>Access: Provided education opportunities for people everywhere.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black">3. Business and Economy</h2>
                    <ul className="list-disc list-inside text-black">
                        <li>E-commerce: Transformed retail and consumer behavior.</li>
                        <li>Digital Marketing and Data Analytics: Changed how businesses operate.</li>
                        <li>Remote Work: Became more prevalent, altering traditional work environments.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black">4. Healthcare</h2>
                    <ul className="list-disc list-inside text-black">
                        <li>Electronic Health Records: Improved patient care and data management.</li>
                        <li>Telemedicine: Enabled remote diagnosis and treatment.</li>
                        <li>Advanced Imaging and Data Analysis: Aided in medical research.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black">5. Entertainment</h2>
                    <ul className="list-disc list-inside text-black">
                        <li>Streaming Services: Changed how people consume media.</li>
                        <li>Video Games: Became a major industry.</li>
                        <li>Digital Art and Music Production: Expanded creative possibilities.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black">6. Science and Research</h2>
                    <ul className="list-disc list-inside text-black">
                        <li>Powerful Computers: Enabled complex simulations and data analysis.</li>
                        <li>Global Collaboration: Facilitated by the internet among researchers.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black">7. Privacy and Security</h2>
                    <ul className="list-disc list-inside text-black">
                        <li>Digital Data Collection: Raised concerns about personal privacy.</li>
                        <li>Cybersecurity: Became a critical issue for individuals and organizations.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-black">Introduction to Programming Languages</h2>
                    <ul className="list-disc list-inside text-black">
                        <li>High-Level Languages: Easier to read and write (e.g., Python, JavaScript).</li>
                        <li>Medium-Level Languages: Balance between low-level and high-level (e.g., C).</li>
                        <li>Low-Level Languages: Close to machine code (e.g., Assembly).</li>
                        <li>Concepts of Compiler: Translates high-level code to machine code.</li>
                        <li>Concepts of Interpreter: Executes code line by line.</li>
                        <li>Concepts of Assembler: Converts assembly language to machine code.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default page;
