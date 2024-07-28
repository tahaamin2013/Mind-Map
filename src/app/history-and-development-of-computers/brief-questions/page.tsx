import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Describe the significance of the abacus in the history of computing.",
        answer: (
            <ul className="list-disc list-inside">
                <li>It was one of the first tools used to assist with calculations, dating back over 2,000 years.</li>
                <li>It introduced the concept of using a physical device to aid in mathematical operations.</li>
                <li>It laid the foundational idea of representing numbers and performing calculations mechanically, which influenced later computing devices.</li>
            </ul>
        )
    },
    {
        question: "Explain Wilhelm Schickard's contribution to the development of calculators.",
        answer: (
            <ul className="list-disc list-inside">
                <li>Creating the first mechanical calculator in 1622.</li>
                <li>His device could perform addition and subtraction automatically.</li>
                <li>It laid the groundwork for future mechanical calculating devices, bridging the gap between manual calculation tools like the abacus and more advanced mechanical calculators.</li>
            </ul>
        )
    },
    {
        question: "What was the Pascaline, and who invented it?",
        answer: (
            <ul className="list-disc list-inside">
                <li>An early mechanical calculator invented by Blaise Pascal in 1642.</li>
                <li>Capable of performing addition and subtraction directly, and multiplication and division through repeated additions or subtractions.</li>
                <li>One of the first calculating devices to be commercialized, though it was expensive and had limited success.</li>
            </ul>
        )
    },
    {
        question: "Describe the key features of Gottfried Wilhelm Leibniz's Stepped Reckoner.",
        answer: (
            <ul className="list-disc list-inside">
                <li>Could perform all four basic arithmetic operations: addition, subtraction, multiplication, and division.</li>
                <li>Used a stepped gear mechanism, which was more advanced than previous calculators.</li>
                <li>Introduced the binary system in mechanical calculation, which later became fundamental in electronic computers.</li>
            </ul>
        )
    },
    {
        question: "Why is Charles Babbage's Analytical Engine considered the first general-purpose computer?",
        answer: (
            <ul className="list-disc list-inside">
                <li>It was designed to be programmable, capable of performing various types of calculations.</li>
                <li>It incorporated concepts like looping and conditional branching, essential features of modern computing.</li>
                <li>It separated memory (the 'store') from processing (the 'mill'), similar to the architecture of modern computers.</li>
            </ul>
        )
    },
    {
        question: "Explain the importance of Alan Turing's concept of a universal machine in computer science.",
        answer: (
            <ul className="list-disc list-inside">
                <li>It provided a theoretical foundation for the idea of a general-purpose computer.</li>
                <li>It showed that a single machine could compute anything that is computable, given the right program.</li>
                <li>It laid the groundwork for the development of computer programming and software.</li>
            </ul>
        )
    },
    {
        question: "What was the Z3, and who developed it?",
        answer: (
            <ul className="list-disc list-inside">
                <li>One of the first fully functional programmable computers, completed in 1941.</li>
                <li>Developed by Konrad Zuse in Germany.</li>
                <li>The first computer that was fully automatic, programmable, and could work with binary code.</li>
            </ul>
        )
    },
    {
        question: "Describe the significance of the Colossus computer in World War II.",
        answer: (
            <ul className="list-disc list-inside">
                <li>It was one of the first electronic digital computers, developed in 1943-1944.</li>
                <li>It played a crucial role in breaking German codes during World War II.</li>
                <li>It demonstrated the potential of electronic computing for complex problem-solving tasks.</li>
            </ul>
        )
    },
    {
        question: "What made ENIAC unique in the history of computing?",
        answer: (
            <ul className="list-disc list-inside">
                <li>It was the first general-purpose electronic computer, developed between 1943-1946.</li>
                <li>It was much faster than previous computers, capable of performing thousands of calculations per second.</li>
                <li>It was programmable, although programming required physical rewiring of the machine.</li>
            </ul>
        )
    },
    {
        question: "Explain the key characteristics of first-generation computers.",
        answer: (
            <ul className="list-disc list-inside">
                <li>The use of vacuum tubes as their main electronic components.</li>
                <li>Large size, often filling entire rooms.</li>
                <li>High power consumption and heat generation.</li>
                <li>Relatively slow processing speeds compared to later generations.</li>
            </ul>
        )
    },
    {
        question: "How did the invention of the transistor impact computer development?",
        answer: (
            <ul className="list-disc list-inside">
                <li>Replacing vacuum tubes, making computers smaller and more reliable.</li>
                <li>Reducing power consumption and heat generation significantly.</li>
                <li>Enabling faster processing speeds and more complex computations.</li>
            </ul>
        )
    },
    {
        question: "What advantages did transistors offer over vacuum tubes in computing?",
        answer: (
            <ul className="list-disc list-inside">
                <li>Smaller size, allowing for more compact computer designs.</li>
                <li>Greater reliability and longer lifespan.</li>
                <li>Lower power consumption and less heat generation.</li>
            </ul>
        )
    },
    {
        question: "Describe the main features of second-generation computers.",
        answer: (
            <ul className="list-disc list-inside">
                <li>The use of transistors instead of vacuum tubes.</li>
                <li>Smaller size compared to first-generation computers.</li>
                <li>Increased reliability and reduced maintenance requirements.</li>
                <li>The introduction of high-level programming languages.</li>
            </ul>
        )
    },
    {
        question: "Explain the significance of integrated circuits in the evolution of computers.",
        answer: (
            <ul className="list-disc list-inside">
                <li>Further miniaturized computer components.</li>
                <li>Increased processing speed and efficiency.</li>
                <li>Reduced manufacturing costs, making computers more accessible.</li>
            </ul>
        )
    },
    {
        question: "How did integrated circuits contribute to the miniaturization of computers?",
        answer: (
            <ul className="list-disc list-inside">
                <li>Combining multiple transistors and other electronic components onto a single chip.</li>
                <li>Reducing the physical space required for computer components.</li>
                <li>Enabling the development of smaller, more powerful computers.</li>
            </ul>
        )
    },
    {
        question: "What defines third-generation computers?",
        answer: (
            <ul className="list-disc list-inside">
                <li>The use of integrated circuits (ICs).</li>
                <li>Increased speed and efficiency compared to previous generations.</li>
                <li>The development of operating systems.</li>
                <li>The ability to run multiple programs simultaneously (multitasking).</li>
            </ul>
        )
    },
    {
        question: "Explain the importance of the first microprocessor in computer history.",
        answer: (
            <ul className="list-disc list-inside">
                <li>It integrated the computer's CPU onto a single chip.</li>
                <li>It paved the way for personal computers and embedded systems.</li>
                <li>It significantly reduced the cost and size of computers.</li>
            </ul>
        )
    },
    {
        question: "Describe the key features of the Altair 8800 and its significance.",
        answer: (
            <ul className="list-disc list-inside">
                <li>It was one of the first personal computers available to the public.</li>
                <li>It used the Intel 8080 microprocessor.</li>
                <li>It inspired the creation of software for personal use, including Microsoft's first product.</li>
            </ul>
        )
    },
    {
        question: "How did the Apple II contribute to the personal computer market?",
        answer: (
            <ul className="list-disc list-inside">
                <li>Being one of the first successfully mass-produced microcomputers.</li>
                <li>Featuring a user-friendly design with color graphics and an easy-to-use interface.</li>
                <li>Popularizing personal computers for home and small business use.</li>
            </ul>
        )
    },
    {
        question: "Explain the impact of IBM's first PC on the computer industry.",
        answer: (
            <ul className="list-disc list-inside">
                <li>Setting a standard for personal computers, leading to the 'IBM PC compatible' market.</li>
                <li>Using an open architecture that allowed other companies to produce compatible hardware and software.</li>
                <li>Legitimizing the personal computer market for business use.</li>
            </ul>
        )
    },
];

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers on Computer History (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="py">{faq.question}</AccordionTrigger>
                            <AccordionContent className="pl-4">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
