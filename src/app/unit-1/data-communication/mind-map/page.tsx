"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const umlCode = `
@startmindmap
<style>
mindmapDiagram {
    .components {
        BackgroundColor lightskyblue
    }
    .modes {
        BackgroundColor lightgreen
    }
    .devices {
        BackgroundColor lightpink
    }
    .architecture {
        BackgroundColor lightsalmon
    }
    .networks {
        BackgroundColor plum
    }
    .topologies {
        BackgroundColor lightcoral
    }
    .osi {
        BackgroundColor lightseagreen
    }
    .media {
        BackgroundColor wheat
    }
    .protocols {
        BackgroundColor lavender
    }
    .security {
        BackgroundColor paleturquoise
    }
    .cloud {
        BackgroundColor peachpuff
    }
    .iot {
        BackgroundColor lightsteelblue
    }
}
</style>

* Data Communication
** Network Components <<components>>
*** Sender
*** Message
*** Medium
*** Receiver
*** Protocol
left side
** Communication Modes <<modes>>
*** Simplex
*** Half-Duplex
*** Full-Duplex
*** Asynchronous
*** Synchronous
** Communication Devices <<devices>>
*** Hub
*** Switch
*** Router
*** Gateway
** Network Architecture <<architecture>>
*** Client/Server
*** Peer-to-Peer
right side
** Types of Networks <<networks>>
*** LAN
*** WAN
*** MAN
*** VPN
*** Wireless Networks
**** Wi-Fi
**** Bluetooth
**** Cellular
**** Satellite
left side
** Network Topologies <<topologies>>
*** Bus
*** Star
*** Ring
*** Mesh
*** Hybrid
** OSI Model <<osi>>
*** Data Link Layer
*** Network Layer
*** Transport Layer
*** Session Layer
*** Presentation Layer
*** Application Layer
right side
** Transmission Media <<media>>
*** Guided
**** Twisted Pair
**** Coaxial
**** Fiber Optic
*** Unguided
**** Radio Waves
**** Microwaves
**** Infrared
left side
** Network Protocols <<protocols>>
*** HTTP/HTTPS
*** FTP
*** SMTP
*** POP3/IMAP
*** DNS
*** TCP/UDP
*** IP
** Network Security <<security>>
*** Authentication
*** Encryption
*** Firewall
*** IDPS
*** VPN
*** Access Control
*** Antivirus
right side
** Cloud Computing <<cloud>>
*** IaaS
*** PaaS
*** SaaS
*** Deployment Models
**** Public
**** Private
**** Hybrid
**** Community
left side
** Internet of Things <<iot>>
*** Devices and Sensors
*** Connectivity
*** Data Processing
*** User Interface
*** Applications
**** Smart Home
**** Healthcare
**** Industrial IoT
**** Agriculture
**** Transportation
**** Smart Cities

@endmindmap
`;
    const [zoomLevel1, setZoomLevel1] = useState(1);
    const [zoomLevel2, setZoomLevel2] = useState(1);
    const mermaidContainerRef = useRef<HTMLDivElement>(null);

    const mermaidContainerRef1 = useRef<HTMLDivElement>(null);
    const mermaidContainerRef2 = useRef<HTMLDivElement>(null);
    const zoomOut1 = () => setZoomLevel1(prev => Math.max(prev - 0.1, 0.5));

    const zoomIn1 = () => setZoomLevel1(prev => Math.min(prev + 0.1, 2));
    useEffect(() => {
        if (mermaidContainerRef1.current) {
            mermaid.contentLoaded();
        }
    }, [zoomLevel1]);

    useEffect(() => {
        if (mermaidContainerRef2.current) {
            mermaid.contentLoaded();
        }
    }, [zoomLevel2]);
    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className='text-xl mb-3 font-bold'>Network Communication Components</h1>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Component</th>
                            <th className="py-2 px-4 border-b">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Sender</td>
                            <td className="py-2 px-4 border-b">Device that sends the message (e.g., computer, cell phone)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Message</td>
                            <td className="py-2 px-4 border-b">Data or information to be transmitted (text, audio, video)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Medium</td>
                            <td className="py-2 px-4 border-b">Path through which the message travels (wired or wireless)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Receiver</td>
                            <td className="py-2 px-4 border-b">Device that receives the transmitted message</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Protocol</td>
                            <td className="py-2 px-4 border-b">Set of rules governing data communications</td>
                        </tr>
                    </tbody>
                </table>

                <h1 className='text-xl font-bold mb-3'>Modes of Network Communication
                </h1>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Mode</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Simplex</td>
                            <td className="py-2 px-4 border-b">One-way communication; Receiver cannot send data back	</td>
                            <td className="py-2 px-4 border-b">Electronic notice boards, radio, television broadcasting</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Half-Duplex</td>
                            <td className="py-2 px-4 border-b">Two-way communication, but not simultaneous; Parties take turns sending and receiving	</td>
                            <td className="py-2 px-4 border-b">Walkie-talkies
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Full-Duplex	</td>
                            <td className="py-2 px-4 border-b">Two-way communication simultaneously; Both parties can send and receive at the same time	</td>
                            <td className="py-2 px-4 border-b">Telephone networks
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Asynchronous Transmission</td>
                            <td className="py-2 px-4 border-b">Variable time intervals between characters; Uses start and stop bits for synchronization; Ideal for slow-speed communication	</td>
                            <td className="py-2 px-4 border-b">Keyboard data transmission</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Synchronous Transmission	</td>
                            <td className="py-2 px-4 border-b">Fixed time intervals between characters; Sender and receiver are synchronized; Faster than asynchronous transmission	</td>
                            <td className="py-2 px-4 border-b">Network communication links</td>
                        </tr>
                    </tbody>
                </table>

                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Layer</th>
                            <th className="py-2 px-4 border-b">Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Application</td>
                            <td className="py-2 px-4 border-b">Provides network services to applications</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Presentation</td>
                            <td className="py-2 px-4 border-b">Translates, encrypts, and compresses data</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Session</td>
                            <td className="py-2 px-4 border-b">Manages sessions between applications</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Transport</td>
                            <td className="py-2 px-4 border-b">Ensures end-to-end communication and data integrity</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Network</td>
                            <td className="py-2 px-4 border-b">Handles logical addressing and routing</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Data Link</td>
                            <td className="py-2 px-4 border-b">Ensures reliable node-to-node data transfer</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Physical</td>
                            <td className="py-2 px-4 border-b">Transmits raw bit stream over physical medium</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <PlantUMLDiagram code={umlCode} />

        </div>
    );
};

export default Page;
