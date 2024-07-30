import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Page = () => {
    return (
        <section id="FAQ" className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6">
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers on Computer History (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What was the Pascaline, and who invented it?</AccordionTrigger>
                        <AccordionContent>
                            The Pascaline was invented by Blaise Pascal, a French mathematician, in 1642. It is considered the first mechanical and automated calculator, consisting of a wooden box with gears and wheels.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Describe two key characteristics of First Generation Computers (1940-1956).</AccordionTrigger>
                        <AccordionContent>
                            Two key characteristics of First Generation Computers (1940-1956) were:
                            1. They used vacuum tube technology.
                            2. They were massive in size, occupying entire rooms.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>What major technological advancement marked the beginning of Second Generation Computers?</AccordionTrigger>
                        <AccordionContent>
                            The major technological advancement that marked the beginning of Second Generation Computers (1956-1963) was the transition from vacuum tubes to transistors. This led to enhanced efficiency, smaller size, and improved speed and memory capacity.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>What is the key innovation of Fourth Generation Computers, and how did it impact computer design?</AccordionTrigger>
                        <AccordionContent>
                            The key innovation of Fourth Generation Computers is the microprocessor, capable of handling all processing tasks. This led to exceptional speed, large storage capacity, small size, high reliability, low power consumption, and affordability in computer design.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>Name two focus areas of Fifth Generation Computers.</AccordionTrigger>
                        <AccordionContent>
                            Two focus areas of Fifth Generation Computers are:
                            1. Artificial Intelligence (AI) technologies
                            2. Natural Language Processing (ability to understand and respond to human languages)
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>What was the Pascaline, and who invented it?</AccordionTrigger>
                        <AccordionContent>
                            The Pascaline was the first mechanical and automated calculator. It was invented in 1642 by Blaise Pascal, a French mathematician. It consisted of a wooden box with gears and wheels.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>Describe two key features of First Generation Computers (1940-1956).</AccordionTrigger>
                        <AccordionContent>
                            Two key features of First Generation Computers were:
                            1. They used vacuum tube technology.
                            2. They had massive size, occupying entire rooms.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>What major technological advancement characterized Second Generation Computers?</AccordionTrigger>
                        <AccordionContent>
                            The major technological advancement that characterized Second Generation Computers (1956-1963) was the transition from vacuum tubes to transistors. This led to enhanced efficiency, smaller size, and improved speed and memory capacity.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>What is the key innovation of Fourth Generation Computers, and how did it impact computer design?</AccordionTrigger>
                        <AccordionContent>
                            The key innovation of Fourth Generation Computers is the microprocessor, capable of handling all processing tasks. This led to computers with exceptional speed, large storage capacity, small size, high reliability, low power consumption, and affordability.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>Name two focus areas of Fifth Generation Computers.</AccordionTrigger>
                        <AccordionContent>
                            Two focus areas of Fifth Generation Computers are:
                            1. Artificial Intelligence (AI) technologies
                            2. Natural Language Processing (ability to understand and respond to human languages)
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default Page