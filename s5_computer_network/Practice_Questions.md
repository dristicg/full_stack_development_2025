# Practice Questions

---

## Chapter 1: Introduction to Computer Network

### Q1. Define computer network. List its uses and applications. [3 marks]

**Answer:**
A computer network is a collection of two or more computers and other devices (printers, servers, switches) connected by a transmission medium so that they can exchange data and share resources.

Uses and applications:
- Resource sharing: printers, files, storage and software are shared by many users.
- Communication: email, chat, voice and video calls.
- Information access: World Wide Web, online libraries, e-learning.
- Centralised data and backup: a server stores data for all users.
- E-commerce and banking: online shopping, net banking, ATM networks.
- Remote access: working from home, remote login, cloud services.
- Entertainment: video streaming, online gaming.

---

### Q2. Explain LAN, MAN and WAN with a comparison. [7 marks]

**Answer:**
Networks are classified by the geographical area they cover.

**LAN (Local Area Network):** connects computers inside a room, building or campus. It is privately owned, usually uses Ethernet or Wi-Fi, and gives high speed with low error rate.

**MAN (Metropolitan Area Network):** covers a city or a large campus. It can connect several LANs. Examples are a cable TV network and a city-wide college network.

**WAN (Wide Area Network):** covers a country or the whole world. It uses leased lines, satellites or the public telephone network. The Internet is the largest WAN.

| Parameter | LAN | MAN | WAN |
|---|---|---|---|
| Area covered | Up to a few km (room, building, campus) | Up to about 50 to 100 km (city) | Hundreds to thousands of km |
| Ownership | Private | Private or public | Usually public or leased from carriers |
| Speed | Very high | Moderate to high | Lower |
| Error rate | Low | Moderate | Higher |
| Setup and maintenance cost | Low | Moderate | High |
| Propagation delay | Very short | Moderate | Long |
| Example | College computer lab | Cable TV network of a city | Internet |

---

### Q3. Differentiate between Internet, Intranet and Extranet. [4 marks]

**Answer:**

| Parameter | Internet | Intranet | Extranet |
|---|---|---|---|
| Meaning | Global public network of networks | Private network of one organisation | Intranet extended to selected outside parties |
| Access | Open to everyone | Only employees or members of the organisation | Employees plus authorised partners, suppliers, customers |
| Ownership | Not owned by one body | One organisation | One organisation, shared under control |
| Security | Low, needs user protection | High, protected by firewall | Moderate to high, login and VPN needed |
| Purpose | Public information and services | Internal communication and resource sharing | Business-to-business data sharing |
| Example | www.google.com | A college ERP or internal portal | A supplier portal where a vendor checks orders |

---

### Q4. Compare peer-to-peer and client-server networks. [4 marks]

**Answer:**

| Parameter | Peer-to-Peer | Client-Server |
|---|---|---|
| Structure | Every computer is equal and acts as both client and server | Dedicated server provides services; clients request them |
| Control | No central control | Centralised control |
| Security | Low, set on each computer | High, managed at the server |
| Cost | Low, no server needed | High, server hardware and administrator needed |
| Backup | Each user does their own | Taken centrally |
| Scalability | Suits small networks (about 10 computers) | Suits large networks |
| Performance | Falls as users increase | Better because the server is built for the load |
| Example | Small home network, BitTorrent | University network, web and email services |

---

### Q5. Differentiate between connection-oriented and connectionless services. [4 marks]

**Answer:**

| Parameter | Connection-oriented | Connectionless |
|---|---|---|
| Connection set-up | A connection is set up before data transfer and released afterwards | No set-up; data is sent directly |
| Phases | Establishment, data transfer, termination | Data transfer only |
| Reliability | Reliable: acknowledgement, retransmission, ordered delivery | Unreliable: best effort |
| Path | Same path for all data (virtual circuit) | Each packet may take a different path |
| Overhead | More | Less |
| Speed | Slower | Faster |
| Analogy | Telephone call | Postal letter |
| Example protocol | TCP | UDP, IP |

---

### Q6. What are the different types of servers in a network? [4 marks]

**Answer:**
A server is a computer that provides a service to other computers (clients) in the network.

- **File server:** stores and manages shared files; users read and write files over the network.
- **Web server:** stores websites and delivers pages to browsers using HTTP (Apache, Nginx, IIS).
- **Mail server:** sends, receives and stores email using SMTP, POP3 and IMAP.
- **DNS server:** converts domain names into IP addresses.
- **DHCP server:** automatically gives IP addresses and other settings to devices.
- **FTP server:** allows upload and download of files using FTP.
- **Database server:** runs a database system and answers queries (MySQL, PostgreSQL).
- **Proxy server:** sits between clients and the Internet, caches pages and filters access.
- **Print server:** manages print jobs from many users for shared printers.

---

### Q7. Explain line configuration: point-to-point and multipoint. [3 marks]

**Answer:**
Line configuration is the way two or more devices are connected to a link.

**Point-to-point:** a dedicated link connects exactly two devices. The full capacity of the link is used by those two devices only. Example: a TV remote and the TV, or two routers joined by a leased line.

```
Device A ------------------ Device B
```

**Multipoint (multidrop):** more than two devices share one link. The capacity of the link is shared, in space or in time. Example: many computers on a bus.

```
Device A    Device B    Device C    Device D
   |           |           |           |
 ==============================================
                 shared link
```

---

### Q8. Write short notes on network hardware, network software and network simulator. [4 marks]

**Answer:**
**Network hardware:** the physical devices that build a network.
- NIC (network interface card): connects a computer to the network and holds the MAC address.
- Transmission media: twisted pair, coaxial cable, optical fibre, wireless.
- Connecting devices: repeater, hub, bridge, switch, router, gateway.
- End devices: computers, servers, printers, phones.

**Network software:** the programs that make the hardware work.
- Network operating system (Windows Server, Linux) that manages users, files and security.
- Protocol software such as the TCP/IP stack on every device.
- Device drivers for NICs, and network application software such as browsers and email clients.

**Network simulator:** a program that imitates a network so that it can be designed and tested without real equipment. It saves cost and allows safe experiments. Examples: Cisco Packet Tracer, GNS3, NS-2, NS-3.

---

### Q9. What is a protocol? Explain its key elements. [3 marks]

**Answer:**
A protocol is a set of rules that governs data communication between two devices. Without a common protocol, two devices cannot understand each other, just as two people speaking different languages cannot.

Key elements:
- **Syntax:** the format and structure of the data, for example which part is the header and which is the data.
- **Semantics:** the meaning of each field and what action to take.
- **Timing:** when data should be sent and how fast, so that a fast sender does not overload a slow receiver.

Examples: HTTP, FTP, SMTP, TCP, UDP, IP.

---

## Chapter 2: The Reference Model

### Q1. Explain the OSI reference model with a neat diagram and the functions of each layer. [7 marks]

**Answer:**
The OSI (Open Systems Interconnection) model was developed by ISO. It divides network communication into 7 layers. Each layer provides services to the layer above and uses the services of the layer below.

```
Sender                                         Receiver
+--------------------+                  +--------------------+
| 7 Application      | ---------------- | 7 Application      |
| 6 Presentation     | ---------------- | 6 Presentation     |
| 5 Session          | ---------------- | 5 Session          |
| 4 Transport        | ---------------- | 4 Transport        |
| 3 Network          | ---------------- | 3 Network          |
| 2 Data Link        | ---------------- | 2 Data Link        |
| 1 Physical         | ===== medium === | 1 Physical         |
+--------------------+                  +--------------------+
```

| Layer | Data unit | Functions |
|---|---|---|
| 7 Application | Data | Gives network services to user applications: email, file transfer, web browsing. Protocols: HTTP, FTP, SMTP, DNS |
| 6 Presentation | Data | Translation (for example ASCII to binary), compression (Huffman), encryption and decryption (SSL/TLS) |
| 5 Session | Data | Opens, manages and closes sessions; dialog control; synchronisation with checkpoints |
| 4 Transport | Segment | End-to-end delivery between processes; segmentation and reassembly; port addressing; flow control; error control (ARQ). Protocols: TCP, UDP |
| 3 Network | Packet | Logical (IP) addressing; routing; path selection. Devices: router |
| 2 Data Link | Frame | Physical (MAC) addressing; framing; error detection; flow control; access control. Devices: switch, bridge |
| 1 Physical | Bits | Converts bits into electrical, light or radio signals; defines cables, connectors, voltage, data rate, topology and transmission mode. Devices: hub, repeater |

Data moves down the layers at the sender, with each layer adding its own header (encapsulation), and moves up at the receiver, with each layer removing its header (decapsulation).

---

### Q2. Explain the TCP/IP model with its layers. [7 marks]

**Answer:**
The TCP/IP model was developed by the U.S. Department of Defense (DARPA) and is the model on which the Internet works. It has 4 layers.

```
+---------------------------+      OSI layers covered
| Application               |      Application, Presentation, Session
+---------------------------+
| Transport                 |      Transport
+---------------------------+
| Internet                  |      Network
+---------------------------+
| Network Access (Link)     |      Data Link, Physical
+---------------------------+
```

1. **Network Access (Host-to-Network) layer:** sends frames over the physical network such as Ethernet or Wi-Fi. It handles MAC addressing and the physical connection.
2. **Internet layer:** handles logical addressing and routing of packets across networks. Protocols: IP, ICMP, ARP.
3. **Transport layer:** provides end-to-end delivery between processes. TCP gives reliable connection-oriented delivery; UDP gives fast connectionless delivery.
4. **Application layer:** contains the high-level protocols used by applications: HTTP, HTTPS, FTP, SMTP, POP3, DNS, Telnet. It also does the work of the presentation and session layers.

Data is encapsulated as: data, then segment (TCP) or datagram (UDP), then IP packet, then frame, then bits.

---

### Q3. Compare the OSI model and the TCP/IP model. [7 marks]

**Answer:**

| Parameter | OSI Model | TCP/IP Model |
|---|---|---|
| Full form | Open Systems Interconnection | Transmission Control Protocol / Internet Protocol |
| Developed by | ISO | DARPA (U.S. Department of Defense) |
| Number of layers | 7 | 4 |
| Layers | Physical, Data Link, Network, Transport, Session, Presentation, Application | Network Access, Internet, Transport, Application |
| Approach | Protocol-independent; the model was designed first | Protocol-specific; the protocols were designed first |
| Session and presentation | Separate layers | Merged into the application layer |
| Network layer service | Both connection-oriented and connectionless | Connectionless only (IP) |
| Transport layer service | Connection-oriented only | Both: TCP and UDP |
| Reliability | Transport layer guarantees delivery | Transport layer does not always guarantee delivery (UDP) |
| Use | Reference and teaching model | Used in the real Internet |
| Strictness | Strict layering | Flexible layering |

---

### Q4. Explain different network topologies with their advantages and disadvantages. [7 marks]

**Answer:**
Topology is the arrangement of devices and links in a network.

**1. Bus:** all devices connect to one common cable (backbone) with terminators at both ends.
- Advantages: least cable, cheap, easy for small networks.
- Disadvantages: if the backbone fails the whole network fails; speed falls as nodes increase; hard to find faults.

**2. Star:** every device connects to a central hub or switch.
- Advantages: easy to install and extend; failure of one cable affects only one device; easy fault finding.
- Disadvantages: if the hub or switch fails the whole network fails; needs more cable than bus.

**3. Ring:** each device connects to exactly two neighbours, forming a closed loop. Data travels in one direction, often using a token.
- Advantages: orderly transmission, no collisions with a token, performs well under load.
- Disadvantages: one broken link or node can stop the ring; adding a node disturbs the network.

**4. Mesh:** every device is connected to every other device. A full mesh of n devices needs n(n-1)/2 links and (n-1) ports on each device.
- Advantages: very reliable, dedicated links, no traffic problem, good privacy.
- Disadvantages: very costly, a lot of cabling, difficult to install and manage.

**5. Tree:** a hierarchy of star networks joined to a root.
- Advantages: easy to expand by adding branches; faults are isolated to a branch.
- Disadvantages: failure of the root affects everything; more cable.

**6. Hybrid:** a combination of two or more topologies, for example star networks joined by a bus.
- Advantages: flexible and scalable; faults in one part stay in that part.
- Disadvantages: complex design and costly.

| Topology | Cable cost | Fault tolerance | Single point of failure |
|---|---|---|---|
| Bus | Lowest | Poor | Backbone cable |
| Star | Moderate | Good | Central hub or switch |
| Ring | Moderate | Poor | Any node or link |
| Mesh | Very high | Excellent | None |
| Tree | High | Moderate | Root hub |
| Hybrid | High | Good | Depends on design |

---

### Q5. Calculate the number of links and ports required for a fully connected mesh of 6 devices. [3 marks]

**Answer:**
For n devices in a full mesh:
Number of links = n(n - 1) / 2
Number of I/O ports on each device = n - 1

For n = 6:
Links = 6 x 5 / 2 = **15 links**
Ports on each device = 6 - 1 = **5 ports**

Total ports in the network = 6 x 5 = 30.

---

### Q6. Explain circuit switching, packet switching and message switching. [7 marks]

**Answer:**
Switching is the method used to move data from the source to the destination through intermediate nodes.

**1. Circuit switching:** a dedicated path is set up between sender and receiver before data transfer and stays reserved until the end. It has three phases: circuit establishment, data transfer, circuit disconnection.
- Advantages: constant data rate, no delay at nodes during transfer, data arrives in order.
- Disadvantages: set-up time; the reserved path is wasted when idle; poor use of bandwidth.
- Example: the telephone network.

**2. Packet switching:** the message is divided into small packets. Each packet has a header with source and destination addresses. Packets are stored and forwarded node by node, and share the links with other traffic.
- *Datagram approach:* connectionless; each packet is routed independently, may take a different path and may arrive out of order; the receiver reorders them.
- *Virtual circuit approach:* connection-oriented; a path is fixed at set-up and all packets follow it in order, using a virtual circuit identifier.
- Advantages: efficient use of bandwidth, no set-up delay for datagrams, can reroute around failures.
- Disadvantages: variable delay, packets can be lost or reordered, header overhead.
- Example: the Internet.

**3. Message switching:** the complete message is sent to the first node, stored there, and forwarded to the next node when the link is free (store and forward). There is no limit on message size and no dedicated path.
- Advantages: no set-up; efficient use of links.
- Disadvantages: long delay; each node needs large storage; not suited to real-time traffic.
- Example: early telegraph and email-type systems.

| Parameter | Circuit | Packet | Message |
|---|---|---|---|
| Dedicated path | Yes | No (Yes for virtual circuit logically) | No |
| Set-up phase | Yes | No (Yes for virtual circuit) | No |
| Unit sent | Continuous stream | Small packets | Whole message |
| Delay | Set-up delay only | Variable | Highest |
| Bandwidth use | Poor | Good | Moderate |

---

### Q7. What is a MAC address? Explain its structure. [4 marks]

**Answer:**
A MAC (Media Access Control) address is the physical address of a network interface card (NIC). It works at the data link layer and identifies a device inside a local network. It is assigned by the manufacturer and stored in the NIC (burned-in address).

Structure:
- Length: 48 bits (6 bytes), written as 12 hexadecimal digits, for example `00-1A-2B-3C-4D-5E` or `00:1A:2B:3C:4D:5E`.
- First 3 bytes (24 bits): **OUI (Organisationally Unique Identifier)**, assigned by the IEEE to the manufacturer.
- Last 3 bytes (24 bits): device-specific number assigned by the manufacturer.

```
|<----- 24 bits ----->|<----- 24 bits ----->|
|        OUI          |  Device-specific    |
|   00 : 1A : 2B      |   3C : 4D : 5E      |
```

A device with several NICs (for example Ethernet and Wi-Fi) has a separate MAC address for each NIC. The MAC address is fixed to the hardware, while the IP address is logical and can change.

---

### Q8. Explain simplex, half-duplex and full-duplex transmission modes. [3 marks]

**Answer:**

| Mode | Direction of data | Example |
|---|---|---|
| Simplex | One direction only. The sender can only send; the receiver can only receive | Keyboard to computer, radio or TV broadcast |
| Half-duplex | Both directions, but only one at a time. The link is shared | Walkie-talkie, old Ethernet with a hub |
| Full-duplex | Both directions at the same time. Capacity is available in each direction | Telephone call, modern switched Ethernet |

Full-duplex gives the highest throughput but needs two paths or two frequencies. Simplex needs the least hardware.

---

### Q9. What is multiplexing? Explain FDM, TDM and WDM. [4 marks]

**Answer:**
Multiplexing is a technique that combines many signals so that they share one link. A multiplexer (MUX) combines them at the sender and a demultiplexer (DEMUX) separates them at the receiver. It makes better use of an expensive link.

**FDM (Frequency Division Multiplexing):** the available bandwidth is divided into frequency bands and each signal gets its own band. It is used for analog signals. Guard bands separate the channels to avoid interference. Example: radio and TV broadcasting.

**TDM (Time Division Multiplexing):** the link is shared in time. Each signal gets a time slot in turn. It is used for digital signals.
- *Synchronous TDM:* fixed slots are given to every input, even if it has no data.
- *Statistical TDM:* slots are given only to inputs that have data, so no capacity is wasted.

**WDM (Wavelength Division Multiplexing):** the same idea as FDM but for optical fibre. Different light wavelengths (colours) carry different signals together.

---

### Q10. Explain the mobile telephone (cellular) system. [4 marks]

**Answer:**
A cellular system divides a large area into small regions called **cells**. Each cell has a **base station (BTS)** with an antenna. All base stations connect to a **Mobile Switching Centre (MSC)**, which connects the system to the public telephone network.

Main concepts:
- **Frequency reuse:** radio frequencies are limited, so the same frequencies are reused in cells that are not adjacent. This allows many users with a small number of frequencies.
- **Handoff (handover):** when a moving user crosses into another cell, the call is transferred to the new base station without breaking the call.
- **Roaming:** a user can use the service outside the home network area.
- **Call set-up:** the phone contacts the nearest base station; the MSC finds the called user and sets up the path; when the user moves, handoff keeps the call alive.

Generations: 1G analog voice, 2G digital voice and SMS (GSM), 3G mobile data, 4G (LTE) broadband, 5G very high speed and low delay.

---

### Q11. Explain the Stop-and-Wait protocol. [4 marks]

**Answer:**
Stop-and-Wait is the simplest flow control and error control protocol. The sender sends one frame and then **waits** for an acknowledgement (ACK) before sending the next frame.

```
Sender                          Receiver
  |---- Frame 0 -------------->|
  |<--- ACK 1 -----------------|
  |---- Frame 1 -------------->|
  |<--- ACK 0 -----------------|
```

Working:
1. The sender sends a frame and starts a timer.
2. The receiver checks the frame; if it is correct it sends an ACK.
3. When the ACK arrives, the sender sends the next frame.
4. **Lost frame:** no ACK comes; the timer expires and the sender retransmits the same frame.
5. **Lost ACK:** the sender times out and resends; the receiver detects the duplicate using the sequence number (0 or 1) and discards it.

Sequence numbers 0 and 1 are enough, because only one frame is outstanding.

Advantage: simple. Disadvantage: low efficiency, because the link is idle while the sender waits, especially on long-delay links.

---

### Q12. Explain the Sliding Window protocol. [7 marks]

**Answer:**
Sliding window allows the sender to send several frames before it receives an acknowledgement, so the link stays busy.

Working:
- Frames are numbered with sequence numbers modulo 2^k (k bits in the header).
- The **sender window** is the set of frames that may be sent without an acknowledgement. The window **slides** forward when ACKs arrive.
- The **receiver window** is the set of frames that the receiver is ready to accept.
- ACKs can be sent separately or **piggybacked** on data frames travelling the other way.
- If a frame is lost, the sender retransmits after a timeout (Go-Back-N resends from the lost frame; Selective Repeat resends only that frame).

Window sizes (k-bit sequence numbers):
- Go-Back-N: sender window at most 2^k - 1; receiver window size 1.
- Selective Repeat: sender and receiver window at most 2^(k-1).

Link utilisation = N / (1 + 2a) (maximum 1), where N is the window size and a = propagation delay / transmission time.

Advantages over stop-and-wait: higher efficiency and better use of bandwidth.

---

### Q13. A link has a bandwidth of 1 Mbps, a one-way propagation delay of 20 ms and a frame size of 1000 bits. Find the efficiency of Stop-and-Wait and the window size needed for 100% utilisation. How many sequence number bits are required for Go-Back-N? [7 marks]

**Answer:**
Transmission time Tt = frame size / bandwidth = 1000 / 1,000,000 = 1 ms
Propagation delay Tp = 20 ms

a = Tp / Tt = 20 / 1 = 20

**Efficiency of Stop-and-Wait:**
Efficiency = Tt / (Tt + 2Tp) = 1 / (1 + 2a) = 1 / 41 = 0.0244 = **2.44%**

**Window size for 100% utilisation:**
N = 1 + 2a = 1 + 40 = **41 frames**

**Sequence bits for Go-Back-N:**
Go-Back-N needs N + 1 distinct sequence numbers = 42.
2^6 = 64 is the first power of two that is at least 42, so **6 bits** are required.

(For Selective Repeat, 2N = 82 sequence numbers are needed, so 7 bits.)

---

## Chapter 3: Transmission Medias and IP Address

### Q1. Explain guided transmission media: twisted pair, coaxial cable and optical fibre. [7 marks]

**Answer:**
Guided media carry the signal along a physical path (a wire or fibre).

**1. Twisted pair cable:** two insulated copper wires twisted together to reduce interference and crosstalk. Several pairs are packed in one cable.
- Types: UTP (Unshielded Twisted Pair) and STP (Shielded Twisted Pair, with a metal shield for extra protection).
- Connector: RJ-45 (8P8C, 8 Position 8 Contact).
- Advantages: cheap, light, easy to install.
- Disadvantages: affected by noise, limited distance (about 100 m), lower bandwidth.
- Use: LANs, telephone lines.

**2. Coaxial cable:** a central copper conductor, surrounded by insulation, a metal braided shield and an outer plastic cover.
- Types: thin coax (RG-58) and thick coax (RG-8).
- Advantages: better shielding and higher bandwidth than twisted pair; longer distance.
- Disadvantages: costlier and bulkier than twisted pair; difficult to install.
- Use: cable TV, early Ethernet (10Base2, 10Base5).

**3. Optical fibre:** data travels as light pulses through a thin glass or plastic core. The core is surrounded by cladding of lower refractive index, so light stays inside by total internal reflection. Types: single-mode (long distance) and multi-mode.
- Advantages: very high bandwidth, very low attenuation, immune to electromagnetic interference, secure, light weight.
- Disadvantages: costly, fragile, difficult to splice and install.
- Use: backbone links, undersea cables, high-speed Internet.

| Parameter | Twisted pair | Coaxial | Optical fibre |
|---|---|---|---|
| Signal | Electrical | Electrical | Light |
| Bandwidth | Low | Moderate | Very high |
| Attenuation | High | Moderate | Very low |
| Interference | Affected | Less affected | Not affected |
| Cost | Low | Moderate | High |
| Distance without repeater | About 100 m | 185 to 500 m | Many km |

---

### Q2. Explain the Ethernet standards 10Base5, 10Base2, 10BaseT, 100BaseTX and 100BaseFX. [4 marks]

**Answer:**
Ethernet standards are named as Speed + Signalling + Medium/Length. For example, 10Base5 means 10 Mbps, baseband signalling, maximum segment of about 500 m.

| Standard | Speed | Medium | Maximum segment length | Topology |
|---|---|---|---|---|
| 10Base5 (Thick Ethernet) | 10 Mbps | Thick coaxial cable | 500 m | Bus |
| 10Base2 (Thin Ethernet) | 10 Mbps | Thin coaxial cable | 185 m (about 200 m) | Bus |
| 10BaseT | 10 Mbps | Twisted pair (UTP, Cat 3 or better) | 100 m | Star |
| 100BaseTX (Fast Ethernet) | 100 Mbps | Twisted pair (UTP, Cat 5) | 100 m | Star |
| 100BaseFX | 100 Mbps | Multimode optical fibre | 2 km (full duplex) | Star |

T stands for twisted pair and F for fibre. 10BaseT and 100BaseTX use a hub or switch at the centre. Gigabit Ethernet (1000BaseT) gives 1000 Mbps over Cat 5e UTP up to 100 m.

---

### Q3. Differentiate between baseband and broadband transmission. [3 marks]

**Answer:**

| Parameter | Baseband | Broadband |
|---|---|---|
| Signal | Digital signal sent directly | Analog signal using modulation |
| Bandwidth use | Whole bandwidth of the cable used by one signal | Bandwidth divided into many channels |
| Multiplexing | TDM | FDM |
| Direction | Bidirectional | Unidirectional, needs amplifiers |
| Distance | Short | Long |
| Example | Ethernet LAN (10Base-T) | Cable TV, broadband Internet |

---

### Q4. What is attenuation? How does a repeater overcome it? [3 marks]

**Answer:**
Attenuation is the loss of signal strength as the signal travels through a medium. The signal becomes weaker with distance because the medium absorbs and scatters energy as heat. It is measured in decibels (dB). If the signal becomes too weak, the receiver cannot read it correctly.

A **repeater** is placed on the link at suitable intervals. It receives the weak signal, regenerates it to its original strength and shape, and sends it forward. In this way the signal can travel a longer distance. An amplifier is used for analog signals; a repeater regenerates digital signals and also removes noise.

```
Sender ---- weak signal ----> [Repeater] ---- strong signal ----> Receiver
```

---

### Q5. Explain unguided (wireless) transmission media: radio waves, microwaves, infrared and laser. [7 marks]

**Answer:**
Unguided media carry signals through air or space as electromagnetic waves, without a physical conductor.

**1. Radio waves (3 kHz to 1 GHz):** omnidirectional, so the signal spreads in all directions and can pass through walls. Used for AM/FM radio, TV, cordless phones and paging. Disadvantage: affected by interference, and anyone in range can receive.

**2. Microwaves (1 GHz to 300 GHz):** unidirectional and travel in a straight line, so the sending and receiving antennas must be in line of sight. Towers are placed about every 50 km. Used in mobile networks, satellite links, Wi-Fi and point-to-point links. Disadvantage: affected by rain and obstacles.

**3. Infrared (300 GHz to 400 THz):** short-range, line-of-sight and cannot pass through walls, so it is secure and does not interfere with other rooms. Used in TV remote controls, wireless keyboards and device-to-device transfer.

**4. Laser:** a narrow, highly directed beam of light used for point-to-point links between buildings. It gives high speed and security, but needs exact alignment and is affected by fog, rain and dust.

| Medium | Direction | Range | Passes through walls | Example |
|---|---|---|---|---|
| Radio | Omnidirectional | Long | Yes | FM radio |
| Microwave | Unidirectional | Long (line of sight) | No | Mobile towers, satellite |
| Infrared | Directional | Very short | No | TV remote |
| Laser | Highly directional | Short to medium | No | Building-to-building link |

---

### Q6. Compare wired and wireless transmission. [4 marks]

**Answer:**

| Parameter | Wired (guided) | Wireless (unguided) |
|---|---|---|
| Medium | Cable | Air or space |
| Speed | Higher and stable | Lower and variable |
| Reliability | High | Affected by interference and obstacles |
| Security | Better, physical access needed | Weaker, signals can be intercepted |
| Mobility | None | Users can move |
| Installation | Difficult, cabling needed | Easy |
| Cost | Cabling cost is high | Lower setup cost |
| Example | Ethernet | Wi-Fi, Bluetooth |

---

### Q7. Explain the classful IPv4 addressing scheme with the ranges of Class A to Class E. [4 marks]

**Answer:**
An IPv4 address is a 32-bit logical address written as four decimal numbers (octets) separated by dots, for example 192.168.1.10. Each octet is 0 to 255. The address has a **Network ID** and a **Host ID**. In classful addressing the address space is divided into five classes, found from the first bits of the first octet.

| Class | First bits | First octet range | Default mask | Networks | Hosts per network | Use |
|---|---|---|---|---|---|---|
| A | 0 | 1 to 126 | 255.0.0.0 (/8) | 126 | 16,777,214 | Very large networks |
| B | 10 | 128 to 191 | 255.255.0.0 (/16) | 16,384 | 65,534 | Medium networks |
| C | 110 | 192 to 223 | 255.255.255.0 (/24) | 2,097,152 | 254 | Small networks |
| D | 1110 | 224 to 239 | Not defined | - | - | Multicasting |
| E | 1111 | 240 to 255 | Not defined | - | - | Reserved for research |

Hosts per network = 2^(host bits) - 2, because the all-0s host ID is the network address and the all-1s host ID is the broadcast address. The range 127.x.x.x is reserved for loopback (127.0.0.1 refers to the device itself).

---

### Q8. Find the class of the following addresses and convert the masks into slash notation: 10.5.3.2, 130.45.6.7, 195.1.1.1, 230.1.1.1, 250.0.0.1; 255.0.0.0, 255.255.240.0, 255.255.255.192, 255.255.255.248. [3 marks]

**Answer:**
The class is decided by the first octet.

| Address | First octet | Class |
|---|---|---|
| 10.5.3.2 | 10 (1 to 126) | A |
| 130.45.6.7 | 130 (128 to 191) | B |
| 195.1.1.1 | 195 (192 to 223) | C |
| 230.1.1.1 | 230 (224 to 239) | D (multicast) |
| 250.0.0.1 | 250 (240 to 255) | E (reserved) |

Slash notation is the count of 1 bits in the mask.

| Mask | Binary 1s | Slash notation |
|---|---|---|
| 255.0.0.0 | 8 | /8 |
| 255.255.240.0 | 8 + 8 + 4 | /20 |
| 255.255.255.192 | 8 + 8 + 8 + 2 | /26 |
| 255.255.255.248 | 8 + 8 + 8 + 5 | /29 |

---

### Q9. Differentiate between public and private IP addresses. What is NAT? [7 marks]

**Answer:**

| Parameter | Public IP | Private IP |
|---|---|---|
| Uniqueness | Globally unique | Unique only inside one local network |
| Assigned by | ISP / registry | Network administrator or DHCP |
| Reachable from Internet | Yes | No |
| Cost | Paid | Free |
| Security | Exposed to the Internet | Hidden behind the router |

Private address ranges (not routed on the Internet):
- Class A: 10.0.0.0 to 10.255.255.255
- Class B: 172.16.0.0 to 172.31.255.255
- Class C: 192.168.0.0 to 192.168.255.255

**NAT (Network Address Translation):** a router feature that translates private IP addresses into a public IP address when packets go to the Internet, and translates them back for the replies. A NAT table stores the mapping.

Types:
- *Static NAT:* one private address is mapped to one fixed public address.
- *Dynamic NAT:* private addresses are mapped to a pool of public addresses.
- *PAT (NAT overload):* many private addresses share one public address, separated by port numbers.

Advantages: saves public IPv4 addresses; hides the internal network, which improves security; the internal addressing can be changed without telling the ISP.
Disadvantages: adds delay; breaks the end-to-end principle; some protocols do not work well through NAT.

---

### Q10. Explain the IPv4 header format. [7 marks]

**Answer:**
Every IPv4 packet has a header followed by the data. The header is 20 bytes minimum (no options) and 60 bytes maximum.

| Field | Size | Purpose |
|---|---|---|
| Version | 4 bits | IP version, 4 for IPv4 |
| IHL (Header Length) | 4 bits | Header length in 32-bit words (minimum 5) |
| Type of Service / DSCP | 8 bits | Priority and quality-of-service marking |
| Total Length | 16 bits | Length of header plus data in bytes (maximum 65,535) |
| Identification | 16 bits | Identifies the fragments of one original packet |
| Flags | 3 bits | Reserved, DF (do not fragment), MF (more fragments) |
| Fragment Offset | 13 bits | Position of the fragment in the original packet, in units of 8 bytes |
| Time to Live (TTL) | 8 bits | Reduced by 1 at every router; the packet is discarded at 0, which stops routing loops |
| Protocol | 8 bits | Upper-layer protocol: 6 = TCP, 17 = UDP, 1 = ICMP |
| Header Checksum | 16 bits | Error check of the header only |
| Source IP Address | 32 bits | Address of the sender |
| Destination IP Address | 32 bits | Address of the receiver |
| Options and Padding | Variable | Optional features such as record route; padding makes the header a multiple of 32 bits |

---

### Q11. A datagram of 4000 bytes (20 bytes header + 3980 bytes data) must pass through a link with MTU 1500 bytes. Find the fragments. [4 marks]

**Answer:**
Fragmentation divides a large packet into smaller ones that fit the MTU (Maximum Transmission Unit). Each fragment has its own IP header (20 bytes), so the data in each fragment is at most 1500 - 20 = 1480 bytes. The data in every fragment except the last must be a multiple of 8; 1480 / 8 = 185, so this is allowed.

Data to carry = 4000 - 20 = 3980 bytes.

| Fragment | Data bytes | Total length | Fragment offset | MF flag |
|---|---|---|---|---|
| 1 | 1480 | 1500 | 0 | 1 |
| 2 | 1480 | 1500 | 185 | 1 |
| 3 | 1020 | 1040 | 370 | 0 |

Check: 1480 + 1480 + 1020 = 3980 bytes. The Identification field is the same in all three fragments, and the receiver reassembles them using the offset and the MF flag (MF = 0 marks the last fragment).

---

### Q12. What is subnetting? Explain the subnet mask and the AND operation. [4 marks]

**Answer:**
Subnetting divides one large network into smaller networks called subnets. Some bits of the host part are borrowed to make a subnet ID.

Why it is needed: it reduces broadcast traffic, improves security, uses addresses efficiently and makes the network easier to manage.

**Subnet mask:** a 32-bit number in which the network and subnet bits are 1 and the host bits are 0. Default masks: Class A 255.0.0.0, Class B 255.255.0.0, Class C 255.255.255.0.

**AND operation:** the network address is found by a bitwise AND of the IP address and the subnet mask. 1 AND 1 = 1; every other combination is 0.

Example: IP 192.168.10.65, mask 255.255.255.0

```
IP   : 11000000.10101000.00001010.01000001   (192.168.10.65)
Mask : 11111111.11111111.11111111.00000000   (255.255.255.0)
AND  : 11000000.10101000.00001010.00000000   (192.168.10.0)
```

The network address is 192.168.10.0.

Number of subnets = 2^(borrowed bits). Hosts per subnet = 2^(remaining host bits) - 2.

---

### Q13. The IP network 200.198.160.0 is using the subnet mask 255.255.255.224. Draw the subnets. [7 marks]

**Answer:**
200.198.160.0 is a Class C address (first octet 200), default mask /24.
Mask 255.255.255.224 = /27 (224 = 11100000, so 3 bits are borrowed).

- Number of subnets = 2^3 = 8
- Host bits left = 5, so addresses per subnet = 2^5 = 32
- Usable hosts per subnet = 32 - 2 = 30
- Block size = 256 - 224 = 32

| Subnet | Network address | First host | Last host | Broadcast address |
|---|---|---|---|---|
| 1 | 200.198.160.0 | 200.198.160.1 | 200.198.160.30 | 200.198.160.31 |
| 2 | 200.198.160.32 | 200.198.160.33 | 200.198.160.62 | 200.198.160.63 |
| 3 | 200.198.160.64 | 200.198.160.65 | 200.198.160.94 | 200.198.160.95 |
| 4 | 200.198.160.96 | 200.198.160.97 | 200.198.160.126 | 200.198.160.127 |
| 5 | 200.198.160.128 | 200.198.160.129 | 200.198.160.158 | 200.198.160.159 |
| 6 | 200.198.160.160 | 200.198.160.161 | 200.198.160.190 | 200.198.160.191 |
| 7 | 200.198.160.192 | 200.198.160.193 | 200.198.160.222 | 200.198.160.223 |
| 8 | 200.198.160.224 | 200.198.160.225 | 200.198.160.254 | 200.198.160.255 |

```
Network 200.198.160.0 / 27   (a router connects the eight subnets)

[Subnet 1]--[Subnet 2]--[Subnet 3]--[Subnet 4]--[Subnet 5]--[Subnet 6]--[Subnet 7]--[Subnet 8]
 .0/27       .32/27      .64/27      .96/27      .128/27     .160/27     .192/27     .224/27
```

---

### Q14. Find the network address, broadcast address, host range and number of hosts for 192.168.10.65 with mask 255.255.255.192. [4 marks]

**Answer:**
Mask 255.255.255.192 = /26. Last octet of the mask = 192 = 11000000.
Last octet of the IP = 65 = 01000001.

AND of the last octet: 01000001 AND 11000000 = 01000000 = 64

- Network address = **192.168.10.64**
- Block size = 256 - 192 = 64, so the next network starts at 192.168.10.128
- Broadcast address = 192.168.10.128 - 1 = **192.168.10.127**
- Host range = **192.168.10.65 to 192.168.10.126**
- Number of hosts = 2^6 - 2 = **62**

---

### Q15. An organisation has been given the block 172.16.0.0/16. Design the addressing using VLSM for these departments: Hostel 1000 hosts, Computer 900 hosts, Science 500 hosts, Admin 400 hosts, Library 250 hosts. [7 marks]

**Answer:**
VLSM (Variable Length Subnet Mask) gives every subnet a block that fits its own size, so addresses are not wasted.

Steps:
1. Arrange the departments from largest to smallest requirement.
2. For each, find the smallest block 2^n with 2^n - 2 at least the hosts needed.
3. Allocate blocks one after another from the start of the address block, with no overlap.

| Department | Hosts needed | Block size | Mask |
|---|---|---|---|
| Hostel | 1000 | 1024 (2^10) | /22 = 255.255.252.0 |
| Computer | 900 | 1024 (2^10) | /22 = 255.255.252.0 |
| Science | 500 | 512 (2^9) | /23 = 255.255.254.0 |
| Admin | 400 | 512 (2^9) | /23 = 255.255.254.0 |
| Library | 250 | 256 (2^8) | /24 = 255.255.255.0 |

Allocation:

| Department | Network address | Host range | Broadcast address |
|---|---|---|---|
| Hostel | 172.16.0.0/22 | 172.16.0.1 to 172.16.3.254 | 172.16.3.255 |
| Computer | 172.16.4.0/22 | 172.16.4.1 to 172.16.7.254 | 172.16.7.255 |
| Science | 172.16.8.0/23 | 172.16.8.1 to 172.16.9.254 | 172.16.9.255 |
| Admin | 172.16.10.0/23 | 172.16.10.1 to 172.16.11.254 | 172.16.11.255 |
| Library | 172.16.12.0/24 | 172.16.12.1 to 172.16.12.254 | 172.16.12.255 |

```
                      Router
        /        |        |        |        \
   Hostel    Computer  Science   Admin    Library
 172.16.0.0  172.16.4.0 172.16.8.0 172.16.10.0 172.16.12.0
    /22        /22       /23       /23        /24
```

The addresses from 172.16.13.0 onwards remain free for future use. If a different block is given in the question, use the same method starting from that block's first address.

---

### Q16. Explain IPv6. Write its features, address format and the rules for shortening an address. Compare IPv4 and IPv6. [7 marks]

**Answer:**
IPv6 is the next version of the Internet Protocol. It was created because the 32-bit IPv4 address space (about 4.3 billion addresses) is exhausted.

**Features:**
- 128-bit addresses, about 3.4 x 10^38 addresses.
- Simple fixed 40-byte header, so routers process packets faster.
- No fragmentation by routers; only the sender fragments.
- Built-in security support (IPsec).
- Auto-configuration of addresses without DHCP.
- No broadcast; uses unicast, multicast and anycast.
- Better support for quality of service.

**Address format:** 128 bits written as 8 groups of 4 hexadecimal digits (16 bits each), separated by colons.
Example: `2001:0db8:0000:0000:0000:ff00:0042:8329`

**Shortening rules:**
1. Leading zeros in a group can be removed: 0db8 becomes db8, 0042 becomes 42.
2. One run of consecutive all-zero groups can be replaced by `::`, only once in an address.

So the example becomes `2001:db8::ff00:42:8329`. The loopback address is `::1`.

| Parameter | IPv4 | IPv6 |
|---|---|---|
| Address length | 32 bits | 128 bits |
| Notation | Decimal with dots (192.168.1.1) | Hexadecimal with colons |
| Address space | About 4.3 billion | About 3.4 x 10^38 |
| Header size | 20 to 60 bytes | 40 bytes (fixed) |
| Header checksum | Present | Absent |
| Fragmentation | By sender and routers | By sender only |
| Broadcast | Supported | Not supported (multicast used) |
| Configuration | Manual or DHCP | Auto-configuration and DHCPv6 |
| IPsec | Optional | Built in |

---

### Q17. Explain CIDR. [4 marks]

**Answer:**
CIDR (Classless Inter-Domain Routing) removes the fixed Class A, B and C boundaries of classful addressing. An address is written with a prefix length, `a.b.c.d/n`, where n is the number of bits in the network part. The boundary can be at any bit, not only at 8, 16 or 24.

Advantages:
- Gives an organisation a block of the exact size it needs, so addresses are not wasted.
- **Route aggregation (supernetting):** many contiguous blocks are advertised as one route, which keeps routing tables small.

Examples:
- 192.168.10.0/26: 26 network bits, 6 host bits, so 2^6 - 2 = 62 hosts.
- Aggregation: the four Class C networks 192.168.0.0, 192.168.1.0, 192.168.2.0 and 192.168.3.0 combine into one route, 192.168.0.0/22 (mask 255.255.252.0).

---

### Q18. What is routing? Differentiate between static and dynamic routing. [4 marks]

**Answer:**
Routing is the process of selecting the best path for a packet from the source network to the destination network. A router checks the destination IP address in the packet, looks it up in its **routing table** and forwards the packet to the next hop.

| Parameter | Static routing | Dynamic routing |
|---|---|---|
| Route entry | Entered manually by the administrator | Learned automatically using routing protocols |
| Change in network | Does not adapt; administrator must update | Adapts automatically to link failures and changes |
| Overhead | None, no protocol traffic | Uses bandwidth, CPU and memory for updates |
| Security | More secure, routes are fixed | Less secure, updates can be spoofed |
| Scalability | Small networks | Large networks |
| Complexity | Simple | More complex |
| Example | Default route to the ISP | RIP, OSPF, BGP |

---

### Q19. Explain the distance vector routing algorithm with an example. [7 marks]

**Answer:**
In distance vector routing every router keeps a table with the **distance** (cost) to every destination and the **next hop** (vector). Each router periodically sends its whole table only to its **neighbours**. A router updates its table by the Bellman-Ford rule:

d(X, Y) = min over neighbours Z of [ cost(X, Z) + d(Z, Y) ]

**Example:** three routers A, B, C with link costs A-B = 1, B-C = 2, A-C = 5.

Initial tables (each router knows only direct links):

| Router A | Cost | Router B | Cost | Router C | Cost |
|---|---|---|---|---|---|
| to A | 0 | to A | 1 | to A | 5 |
| to B | 1 | to B | 0 | to B | 2 |
| to C | 5 | to C | 2 | to C | 0 |

After A and C receive B's table, A finds a better path to C through B: 1 + 2 = 3, which is less than 5. In the same way C finds a better path to A through B: 2 + 1 = 3.

Final tables:

| Router A | Cost | Next hop | Router C | Cost | Next hop |
|---|---|---|---|---|---|
| to B | 1 | B | to B | 2 | B |
| to C | 3 | B | to A | 3 | B |

**Problem and fixes:** distance vector can suffer from **count-to-infinity**: when a link fails, routers keep increasing the distance to an unreachable network in each exchange. It is reduced by split horizon (a route is not advertised back on the interface it was learned from), route poisoning and a maximum hop limit (16 in RIP is treated as infinity).

Example protocol: RIP.

---

### Q20. Explain the routing protocols RIP, OSPF and BGP. [7 marks]

**Answer:**
An **Autonomous System (AS)** is a group of networks under one administration. Routing protocols are of two kinds:
- **Interior Gateway Protocols (IGP):** used inside one AS. Examples: RIP, OSPF.
- **Exterior Gateway Protocols (EGP):** used between different ASes. Example: BGP.

**RIP (Routing Information Protocol):**
- Distance vector protocol; metric is **hop count**.
- Maximum 15 hops; 16 means unreachable.
- Sends its full table to neighbours every 30 seconds, using UDP port 520.
- Simple but slow to converge; suited to small networks.

**OSPF (Open Shortest Path First):**
- **Link state** protocol; each router learns the full topology of its area and runs Dijkstra's shortest path algorithm.
- Metric is **cost**, based on link bandwidth.
- The network is split into areas to reduce overhead.
- Fast convergence and supports large networks; sends updates only when something changes.

**BGP (Border Gateway Protocol):**
- **Path vector** protocol; it carries the whole path of ASes, which prevents loops.
- Used between ISPs and organisations, so it joins the whole Internet together.
- Runs over TCP port 179.
- Routing is based on policies as well as the shortest path.

| Parameter | RIP | OSPF | BGP |
|---|---|---|---|
| Type | Distance vector | Link state | Path vector |
| Used | Inside an AS | Inside an AS | Between ASes |
| Metric | Hop count | Cost (bandwidth) | Path attributes and policy |
| Convergence | Slow | Fast | Slow |
| Suitable size | Small | Large | Internet |

---

## Chapter 4: Network Devices and Flow Control

### Q1. Explain repeater, hub, bridge and switch. [7 marks]

**Answer:**
**Repeater:** works at the physical layer. It receives a weak signal, regenerates it and sends it on, so that the signal can travel farther. It has two ports, does not look at addresses and does not filter traffic.

**Hub:** a multiport repeater that works at the physical layer. A frame received on one port is **broadcast to all other ports**, so every device sees all traffic. All ports form one collision domain and the bandwidth is shared. It works in half-duplex mode and is not secure.

**Bridge:** works at the data link layer. It connects two LAN segments and **filters traffic using MAC addresses**. It learns the MAC addresses on each side and builds a table; it forwards a frame to the other segment only when the destination is there. This divides a large LAN into smaller collision domains and reduces collisions.

**Switch:** works at the data link layer. It is a multiport bridge. It keeps a MAC address table and sends a frame **only to the port of the destination device**. Each port is a separate collision domain, full-duplex operation is possible, and the full bandwidth is available on every port. All ports remain in one broadcast domain unless VLANs are used.

| Parameter | Repeater | Hub | Bridge | Switch |
|---|---|---|---|---|
| Layer | Physical | Physical | Data link | Data link |
| Ports | 2 | Many | 2 | Many |
| Forwarding | Regenerates signal | Broadcasts to all ports | By MAC address | By MAC address to one port |
| Collision domain | Same | One for all ports | One per segment | One per port |

---

### Q2. Explain router, brouter and gateway. [7 marks]

**Answer:**
**Router:** works at the network layer. It connects different networks and forwards packets using **IP addresses** and a routing table, choosing the best path. Each interface is a separate broadcast domain, so a router stops broadcasts. It can also do NAT, packet filtering and DHCP.

**Brouter (Bridge + Router):** a device that combines a bridge and a router. For protocols that can be routed (such as IP) it works as a router; for protocols that cannot be routed it works as a bridge, using MAC addresses. It works at the data link and network layers.

**Gateway:** connects two networks that use **different protocols or architectures** and converts the protocol and data format between them. It can work at any layer up to the application layer. Examples: an email gateway that converts between mail systems, and a gateway between a LAN and a mainframe network. A default gateway is also the router address that a host uses to leave its own network.

| Device | Layer | Address used | Main job |
|---|---|---|---|
| Router | Network | IP address | Connect networks, find best path |
| Brouter | Data link and network | MAC and IP | Bridges non-routable and routes routable traffic |
| Gateway | Up to application | Depends on protocol | Protocol conversion between different networks |

---

### Q3. Compare hub, switch and router. Explain collision domain and broadcast domain. [4 marks]

**Answer:**
**Collision domain:** a group of devices whose transmissions can collide if they send at the same time.
**Broadcast domain:** a group of devices that all receive a broadcast frame sent by any one of them.

| Parameter | Hub | Switch | Router |
|---|---|---|---|
| OSI layer | 1 (Physical) | 2 (Data link) | 3 (Network) |
| Address used | None | MAC address | IP address |
| Collision domains | One for the whole hub | One per port | One per port |
| Broadcast domains | One | One (more with VLANs) | One per interface |
| Duplex | Half | Full | Full |
| Intelligence | None | Learns MAC table | Routing table and protocols |

Example: with 8 devices, a hub gives 1 collision domain and 1 broadcast domain; a switch gives 8 collision domains and 1 broadcast domain; a router with 3 interfaces gives 3 broadcast domains.

---

### Q4. Explain the steps to implement a simple LAN. [4 marks]

**Answer:**
1. **Requirement analysis:** number of users, applications, bandwidth needed and future growth.
2. **Choose topology and design:** the star topology is normally used; draw a logical and physical diagram.
3. **Select hardware:** NICs, UTP cables, switch, router, wireless access point and server.
4. **Plan IP addressing:** choose a private address block, subnets and a DHCP range.
5. **Install:** lay the cables, fix connectors, mount and connect devices.
6. **Configure:** set up the switch and router, DHCP, DNS, file sharing, user accounts and security.
7. **Test:** check connectivity with ping, ipconfig and tracert.
8. **Document and maintain:** record the design, take backups, update software and monitor the network.

---

### Q5. Explain flow control. Describe the Stop-and-Wait and Sliding Window techniques. [4 marks]

**Answer:**
Flow control is the set of methods that stops a fast sender from sending more data than a slow receiver can accept, so that the receiver's buffer does not overflow.

**Stop-and-Wait:** the sender sends one frame and waits for its acknowledgement before sending the next. It is simple but wastes time on links with long delay, because only one frame is in transit at a time.

**Sliding Window:** the sender may send several frames, up to the window size, before an acknowledgement arrives. When ACKs come in, the window slides forward and more frames can be sent. This keeps the link busy and is much more efficient. Go-Back-N and Selective Repeat are the two error-control forms of sliding window.

---

### Q6. Differentiate between Go-Back-N and Selective Repeat ARQ. [7 marks]

**Answer:**
ARQ (Automatic Repeat reQuest) retransmits frames that are lost or damaged.

**Go-Back-N:** the sender can have up to N frames outstanding. If frame i is lost or damaged, the receiver **discards all frames after it** and the sender goes back and resends frame i and **all frames sent after it**. The receiver window is of size 1, so frames must arrive in order. ACKs are cumulative.

**Selective Repeat:** the receiver **accepts and buffers out-of-order frames**. Only the lost or damaged frame is retransmitted, using a negative acknowledgement (NAK) or a timeout. The receiver reorders the frames before giving them to the upper layer.

Example: frames 0 to 5 are sent and frame 2 is lost.
- Go-Back-N: the sender resends 2, 3, 4, 5.
- Selective Repeat: the sender resends only 2.

| Parameter | Go-Back-N | Selective Repeat |
|---|---|---|
| Receiver window | 1 | Same as sender window |
| Maximum sender window (k bits) | 2^k - 1 | 2^(k-1) |
| Out-of-order frames | Discarded | Buffered |
| Retransmission | Lost frame and all after it | Only the lost frame |
| Acknowledgement | Cumulative | Individual |
| Bandwidth use | Wasteful on errors | Efficient |
| Receiver complexity | Simple | Complex (sorting and buffering) |

---

### Q7. What are data errors? Explain single-bit error and burst error. [3 marks]

**Answer:**
When data travels over a medium, noise, attenuation and interference can change bits. A bit that is changed from 0 to 1 or from 1 to 0 is an error.

**Single-bit error:** only one bit of the data unit is changed. It is rare in serial transmission. Example: sent 10110101, received 10110001 (one bit changed).

**Burst error:** two or more bits are changed. The burst length is measured from the first corrupted bit to the last corrupted bit; the bits in between need not all be corrupted. Burst errors are the commonest kind, because noise usually lasts longer than one bit time, and they are more likely at high data rates. Example: sent 10110101, received 10001101 (burst of length 3).

---

### Q8. Explain error detection techniques: parity check, checksum and CRC. [7 marks]

**Answer:**
Error detection adds extra redundant bits to the data so that the receiver can discover whether it has been changed.

**1. Parity check:** one extra bit (the parity bit) is added so that the total number of 1s is even (even parity) or odd (odd parity).
Example (even parity): data 1011001 has four 1s, so the parity bit is 0 and the sent word is 10110010. For data 1011011 (five 1s) the parity bit is 1.
- Detects all single-bit errors and any odd number of bit errors.
- Fails when an even number of bits are changed.
- Two-dimensional parity arranges data in rows and columns and adds a parity bit for each row and each column; it detects more burst errors and can find the position of a single-bit error.

**2. Checksum:** the data is divided into equal-size words (for example 8 or 16 bits). The sender adds the words using one's complement arithmetic (the carry is added back to the sum), then takes the complement of the sum as the checksum and sends it with the data. The receiver adds all words including the checksum; if the result is all 1s (so its complement is 0) the data is accepted. It is used in IP, TCP and UDP.

**3. CRC (Cyclic Redundancy Check):** the strongest method. The data is treated as a binary polynomial and divided (using XOR, modulo-2) by an agreed generator. The remainder is appended to the data. The receiver divides the received codeword by the same generator; a remainder of zero means no error. It detects all single-bit errors, all double-bit errors, all odd numbers of errors and burst errors shorter than the generator length. It is used in Ethernet and Wi-Fi.

| Method | Redundant bits | Detection strength |
|---|---|---|
| Parity | 1 | Weak |
| Checksum | 8 or 16 | Moderate |
| CRC | 8, 16 or 32 | Strong |

---

### Q9. Calculate the checksum for the 8-bit words 10110011, 01101101, 11001010 and 00110101. Show how the receiver verifies it. [4 marks]

**Answer:**
Add the words using one's complement addition (a carry out of the 8th bit is added back to the sum).

1. 10110011 + 01101101 = 1 00100000. Carry 1 is added back: 00100000 + 1 = 00100001
2. 00100001 + 11001010 = 11101011
3. 11101011 + 00110101 = 1 00100000. Carry 1 is added back: 00100000 + 1 = 00100001

Sum = 00100001
Checksum = complement of the sum = **11011110**

The sender transmits the four words and the checksum 11011110.

**At the receiver:** add all words and the checksum.
00100001 (sum of the four words) + 11011110 = 11111111
The complement of 11111111 is 00000000, so the data is **accepted** (no error detected).

---

### Q10. Find the CRC for the data word 10011101 using the generator polynomial x^3 + 1. Show how the receiver checks it. [7 marks]

**Answer:**
Generator x^3 + 1 = 1001 (4 bits, degree 3). Append 3 zeros to the data word.
Dividend = 10011101000

The division is done with XOR (modulo-2): wherever the leading bit is 1, XOR the generator 1001 into the next 4 bits.

```
Start                      10011101000
XOR 1001 at bit 0       -> 00001101000
XOR 1001 at bit 4       -> 00000100000
XOR 1001 at bit 5       -> 00000000100
```

The last 3 bits are the remainder: **100**.

Transmitted codeword = data + remainder = **10011101100**

**At the receiver:** divide the received codeword by 1001.

```
Start                      10011101100
XOR 1001 at bit 0       -> 00001101100
XOR 1001 at bit 4       -> 00000100100
XOR 1001 at bit 5       -> 00000000000
```

The remainder is 000, so no error is detected and the data 10011101 is accepted. If any bit were corrupted, the remainder would not be zero.

---

### Q11. Find the CRC for the data word 1001 using the divisor 1011. [4 marks]

**Answer:**
Divisor 1011 has 4 bits, so append 3 zeros to the data. Dividend = 1001000.

```
Start                      1001000
XOR 1011 at bit 0       -> 0010000
XOR 1011 at bit 2       -> 0000110
```

The remainder (last 3 bits) is **110**.

Transmitted codeword = 1001 followed by 110 = **1001110**.

The receiver divides 1001110 by 1011 and gets remainder 000, so the frame is accepted.

---

### Q12. What is error correction? Explain Hamming distance. [3 marks]

**Answer:**
Error detection only finds that an error has occurred. **Error correction** also finds which bit is wrong and corrects it. There are two ways: **backward error correction** (ask the sender to retransmit, as in ARQ) and **forward error correction** (the receiver corrects the error itself using extra bits, as in Hamming code).

**Hamming distance** between two codewords of equal length is the number of bit positions in which they differ. It is found by XOR-ing the two words and counting the 1s.

Example: 10101 and 11110: XOR = 01011, which has three 1s, so the Hamming distance is **3**.

**Minimum Hamming distance (d_min)** is the smallest distance between any two valid codewords of a code.
- To detect up to s errors, d_min must be at least s + 1.
- To correct up to t errors, d_min must be at least 2t + 1.

Example: a code with d_min = 3 can detect 2 errors or correct 1 error.

---

### Q13. Explain the Hamming code. Encode the data 1011 using even parity. [7 marks]

**Answer:**
Hamming code adds r parity (redundant) bits to m data bits so that a single-bit error can be found and corrected. The number of parity bits must satisfy

2^r >= m + r + 1

For m = 4: r = 3, because 2^3 = 8 is at least 4 + 3 + 1 = 8. The codeword has 7 bits.

Parity bits are placed at positions that are powers of 2 (1, 2, 4); data bits fill the other positions.

```
Position:   1    2    3    4    5    6    7
Bit:        P1   P2   D3   P4   D5   D6   D7
```

Each parity bit checks certain positions:
- P1 checks positions 1, 3, 5, 7
- P2 checks positions 2, 3, 6, 7
- P4 checks positions 4, 5, 6, 7

Data 1011 gives D3 = 1, D5 = 0, D6 = 1, D7 = 1. Using even parity:
- P1 covers 3, 5, 7 = 1, 0, 1 (two 1s), so P1 = 0
- P2 covers 3, 6, 7 = 1, 1, 1 (three 1s), so P2 = 1
- P4 covers 5, 6, 7 = 0, 1, 1 (two 1s), so P4 = 0

Codeword (positions 1 to 7) = P1 P2 D3 P4 D5 D6 D7 = 0 1 1 0 0 1 1 = **0110011**

---

### Q14. A 7-bit Hamming code (even parity, parity bits at positions 1, 2 and 4) is received as 1110101. Show that it contains an error and correct it. [4 marks]

**Answer:**
Received bits by position: 1:1, 2:1, 3:1, 4:0, 5:1, 6:0, 7:1

Recompute each parity check (even parity):
- Check 1 (positions 1, 3, 5, 7) = 1, 1, 1, 1: four 1s, even, so c1 = 0
- Check 2 (positions 2, 3, 6, 7) = 1, 1, 0, 1: three 1s, odd, so c2 = 1
- Check 4 (positions 4, 5, 6, 7) = 0, 1, 0, 1: two 1s, even, so c4 = 0

Syndrome c4 c2 c1 = 010 = 2 in decimal.

The syndrome is not zero, so the word **contains an error**, and the error is in **position 2**.

Correction: invert bit 2 (1 becomes 0). Corrected codeword = **1010101**.
The data bits (positions 3, 5, 6, 7) = 1, 1, 0, 1, so the data is **1101**.

**Another example:** the codeword 0110011 (data 1011) is received as 0110001. The checks give c1 = 0, c2 = 1, c4 = 1, so the syndrome is 110 = 6. Bit 6 is wrong; inverting it gives the correct codeword 0110011.

---

## Chapter 5: The Application Layer

### Q1. What is DNS? Explain the DNS name space. [4 marks]

**Answer:**
DNS (Domain Name System) is a distributed, hierarchical database that converts human-readable domain names (such as www.example.com) into IP addresses (such as 93.184.216.34), and the other way round. People remember names easily, but computers and routers need IP addresses. DNS normally uses UDP port 53 (TCP is used for large replies and zone transfers).

**Domain name space:** the names form an inverted tree. The root is at the top and is written as a dot. Each node is a label of up to 63 characters, and a full name (FQDN) has at most 255 characters. A name is read from the leaf up to the root.

```
                    . (root)
        +-----------+-----------+
       com         org          in
        |           |           |
     example      wikipedia    ac
        |
       www
```

Levels:
- **Root:** the top of the tree.
- **Top-Level Domain (TLD):** generic (.com, .org, .net, .edu) or country code (.in, .uk, .us).
- **Second-level domain:** the organisation's name, such as example.com.
- **Subdomain or host:** www.example.com, mail.example.com.

The names are divided into zones, and each zone is managed by an administrator, so no single server holds the whole database.

---

### Q2. Explain DNS name servers and the process of name resolution. Differentiate between iterative and recursive resolution. [7 marks]

**Answer:**
**Types of name servers:**
- **Root servers:** know the addresses of the TLD servers.
- **TLD servers:** responsible for a top-level domain such as .com or .in; know the authoritative servers of the domains under them.
- **Authoritative servers:** hold the actual records of a domain and give the final answer.
- **Local (resolver) DNS server:** run by the ISP or organisation; it receives the queries from hosts, performs the search on their behalf and caches the answers.

**Resolution of www.example.com:**
1. The user enters the name in the browser. The host first checks its own cache, then sends a query to the local resolver.
2. If the resolver does not have the answer in its cache, it asks a **root server**.
3. The root server replies with the address of the **.com TLD server**.
4. The resolver asks the **TLD server**, which replies with the address of the **authoritative server** of example.com.
5. The resolver asks the **authoritative server**, which returns the IP address.
6. The resolver stores the answer in its cache (for the time given in the TTL) and sends it to the host.
7. The browser connects to the web server using the IP address.

```
Host --> Local resolver --> Root server
                        --> .com TLD server
                        --> example.com authoritative server
Host <-- Local resolver <-- IP address (cached for next time)
```

| Parameter | Recursive resolution | Iterative resolution |
|---|---|---|
| Who does the work | The queried server finds the final answer for the client | The client does the work; each server only gives a referral |
| Server's reply | The final answer or an error | The answer or the address of the next server to ask |
| Load on servers | High | Low |
| Usually used | Between host and local resolver | Between local resolver and root, TLD and authoritative servers |

Caching makes DNS fast, because repeated queries are answered from the cache without contacting the other servers.

---

### Q3. Explain DNS resource records. [4 marks]

**Answer:**
The DNS database is made of resource records (RR). Each record has a name, TTL, class, type and value.

| Type | Meaning | Example |
|---|---|---|
| A | Maps a name to an IPv4 address | www.example.com A 93.184.216.34 |
| AAAA | Maps a name to an IPv6 address | www.example.com AAAA 2001:db8::1 |
| NS | Name of the authoritative name server of the domain | example.com NS ns1.example.com |
| CNAME | Canonical name; an alias for another name | web.example.com CNAME www.example.com |
| MX | Mail exchanger; the mail server for the domain, with a preference number | example.com MX 10 mail.example.com |
| PTR | Maps an IP address to a name (reverse lookup) | 34.216.184.93 PTR www.example.com |
| SOA | Start of authority; main information of the zone: primary server, administrator, serial number, refresh and expiry times | - |
| TXT | Free text; used for verification and email security (SPF) | - |

---

### Q4. What is a URL? Explain its parts. [3 marks]

**Answer:**
A URL (Uniform Resource Locator) is the address of a resource on the Internet. It tells the browser which protocol to use, which server to contact and which resource to fetch.

General format:

`scheme://host:port/path?query#fragment`

Example: `https://www.example.com:443/products/list?id=5#reviews`

| Part | Example | Meaning |
|---|---|---|
| Scheme (protocol) | https | The protocol used: http, https, ftp, mailto |
| Host | www.example.com | The domain name or IP address of the server |
| Port | 443 | Port number; optional, the default is used if absent (80 for http, 443 for https, 21 for ftp) |
| Path | /products/list | The location of the resource on the server |
| Query | ?id=5 | Extra parameters sent to the server |
| Fragment | #reviews | A position inside the page |

---

### Q5. Explain the architecture of electronic mail. [7 marks]

**Answer:**
Electronic mail (email) is a store-and-forward service in which a message is sent to the receiver's mailbox and read later; the receiver does not have to be online when it is sent.

```
Sender                                                      Receiver
User Agent --SMTP--> Sender's mail  --SMTP--> Receiver's  --POP3/IMAP--> User Agent
                     server (MTA)             mail server
                                              (mailbox)
```

Components:
- **User Agent (UA):** the program used to compose, send, read and manage mail (Outlook, Gmail app, Thunderbird).
- **Message Transfer Agent (MTA) / mail server:** receives mail from the user agent and forwards it to the destination server. Mail servers talk to each other with **SMTP**.
- **Mailbox:** the storage space on the receiver's mail server where incoming messages are kept.
- **Message Access Agent:** the protocol (POP3 or IMAP) the receiver uses to **pull** the mail from the server to the user agent.

Steps:
1. The sender writes the message in the user agent and clicks send.
2. The user agent pushes the message to the sender's mail server using SMTP.
3. The sender's server finds the destination mail server (the MX record in DNS) and sends the message using SMTP.
4. The receiver's server stores the message in the receiver's mailbox.
5. The receiver reads it with POP3 or IMAP.

**Message format:** a message has a **header** and a **body**, separated by a blank line. The header contains fields such as From, To, Cc, Subject and Date. The body contains the content.

---

### Q6. Explain SMTP with a sample dialog. [4 marks]

**Answer:**
SMTP (Simple Mail Transfer Protocol) is the protocol used to **send (push)** email from the user agent to the mail server and between mail servers. It uses TCP, port 25 (587 for submission from clients). It is a text-based protocol. SMTP only sends mail; it cannot be used to read it.

Main commands: HELO or EHLO (identify the client), MAIL FROM (sender address), RCPT TO (receiver address), DATA (start of message), QUIT (end).

Sample dialog:

```
S: 220 mail.example.com Service ready
C: HELO client.org
S: 250 Hello client.org
C: MAIL FROM:<alice@client.org>
S: 250 OK
C: RCPT TO:<bob@example.com>
S: 250 OK
C: DATA
S: 354 Start mail input, end with a line containing only a dot
C: Subject: Hello
C: Hi Bob, this is a test message.
C: .
S: 250 Message accepted
C: QUIT
S: 221 Service closing
```

The three-digit numbers are server reply codes (2xx means success, 3xx means more input is needed).

---

### Q7. Differentiate between POP3 and IMAP. What is MIME? [4 marks]

**Answer:**
POP3 and IMAP are mail access protocols that **pull** mail from the mail server to the user's computer.

| Parameter | POP3 | IMAP |
|---|---|---|
| Full form | Post Office Protocol version 3 | Internet Message Access Protocol |
| Port | 110 (995 with SSL) | 143 (993 with SSL) |
| Mail storage | Downloaded to the computer, and normally deleted from the server | Stays on the server; the user works on a copy |
| Multiple devices | Not suitable; mail is on one device | Suitable; all devices show the same mailbox |
| Folders on server | No | Yes, server-side folders and flags |
| Partial download | No, whole messages | Yes, headers or parts first |
| Internet needed | Only while downloading | Needed while reading |

**MIME (Multipurpose Internet Mail Extensions):** the original email format allows only 7-bit ASCII text. MIME is an extension that allows non-ASCII text, images, audio, video and attachments to be sent by converting them into ASCII form. It adds headers to the message: MIME-Version, Content-Type (for example text/html, image/jpeg), Content-Transfer-Encoding (7bit, 8bit, base64, quoted-printable) and Content-Description. Base64 encoding increases the size of the data by about one third.

---

### Q8. Explain the World Wide Web (WWW) and its architecture. [4 marks]

**Answer:**
The World Wide Web is a distributed client-server service in which documents (web pages) containing hyperlinks are stored on web servers all over the world and are accessed by clients using browsers. A page is identified by a URL, transferred using HTTP and written in HTML.

```
Browser (client) --- HTTP request ---> Web server
Browser (client) <-- HTTP response --- (stores pages)
```

- **Client (browser):** Chrome, Firefox, Edge. It sends requests, receives pages and displays them.
- **Server:** stores web pages and sends them when requested (Apache, Nginx).

Types of web pages:
- **Static:** content is fixed and stored on the server; the same page is sent to every user.
- **Dynamic:** created by the server at the time of the request using a script (PHP, Node.js, ASP), often with data from a database.
- **Active:** a program is sent to the browser and runs there, for example JavaScript or a Java applet; it makes the page interactive.

---

### Q9. Explain HTTP: its request and response messages, methods, status codes and cookies. [7 marks]

**Answer:**
HTTP (HyperText Transfer Protocol) is the application layer protocol of the Web. It follows a request-response model over TCP, using port 80. HTTP is **stateless**: the server does not remember earlier requests of the same client.

**Request message:** request line (method, URL, HTTP version), header lines, a blank line and an optional body.

```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
```

**Response message:** status line (version, status code, phrase), header lines, a blank line and the body.

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
```

**Common methods:**

| Method | Use |
|---|---|
| GET | Retrieve a resource |
| HEAD | Retrieve only the headers |
| POST | Send data to the server, for example a form |
| PUT | Upload or replace a resource |
| DELETE | Remove a resource |
| OPTIONS | Ask which methods the server supports |

**Status codes:**

| Class | Meaning | Examples |
|---|---|---|
| 1xx | Informational | 100 Continue |
| 2xx | Success | 200 OK |
| 3xx | Redirection | 301 Moved Permanently, 304 Not Modified |
| 4xx | Client error | 400 Bad Request, 403 Forbidden, 404 Not Found |
| 5xx | Server error | 500 Internal Server Error, 503 Service Unavailable |

**Cookies:** because HTTP is stateless, a server can send a small piece of data in a Set-Cookie header. The browser stores it and sends it back in the Cookie header with later requests, so that the server can recognise the user. They are used for login sessions, shopping carts and preferences.

**Persistent and non-persistent connections:** in a non-persistent connection (default in HTTP/1.0) a new TCP connection is made for every object. In a persistent connection (default in HTTP/1.1) one TCP connection is reused for several requests. HTTP/2 adds multiplexing, and HTTP/3 runs over QUIC (UDP).

---

### Q10. Explain HTTPS and the TLS handshake. Differentiate between HTTP and HTTPS. [7 marks]

**Answer:**
HTTPS (HTTP Secure) is HTTP carried over a secure layer, **TLS (Transport Layer Security)**, which replaced the older SSL. It uses port 443. It gives three things:
- **Confidentiality:** the data is encrypted, so nobody on the way can read it.
- **Integrity:** the data cannot be changed without being detected.
- **Authentication:** the server proves its identity with a digital certificate issued by a Certificate Authority (CA).

**TLS handshake (simplified):**
1. **Client Hello:** the browser sends the TLS versions and cipher suites it supports, and a random number.
2. **Server Hello:** the server chooses the version and cipher suite, sends its random number and its **certificate** (containing its public key).
3. The browser **verifies the certificate** (valid date, signed by a trusted CA, matches the domain name).
4. The browser and the server agree on a shared secret using the server's public key (asymmetric cryptography).
5. Both sides derive the **session keys** from the shared secret and exchange "Finished" messages.
6. The application data is now exchanged encrypted using fast **symmetric** encryption with the session key.

| Parameter | HTTP | HTTPS |
|---|---|---|
| Port | 80 | 443 |
| Security | None; data in plain text | Encrypted using TLS |
| Certificate | Not needed | Needed |
| URL starts with | http:// | https:// |
| Speed | Slightly faster | Slight extra handshake overhead |
| Use | Non-sensitive content | Banking, shopping, login pages |

---

### Q11. Explain FTP. Describe the control and data connections and the active and passive modes. [7 marks]

**Answer:**
FTP (File Transfer Protocol) is used to transfer files between a client and a server over TCP. It needs a user name and password, though anonymous FTP is also possible. It can transfer files in ASCII or binary mode and supports commands for listing, changing directories, uploading and downloading.

FTP uses **two separate TCP connections**:
- **Control connection (port 21):** opened first and stays open for the whole session. It carries commands (USER, PASS, LIST, RETR, STOR, QUIT) and the server's replies.
- **Data connection (port 20 in active mode):** opened for each file transfer and closed after it. It carries the file or directory listing.

Because the commands and the data use different connections, FTP is said to send control information **out of band**.

```
Client                                  Server
  |==== control connection (port 21) ====|   commands and replies
  |==== data connection (port 20) =======|   file contents
```

**Active mode:** the client tells the server which port it is listening on; the **server** opens the data connection from its port 20 to that client port. It can be blocked by a firewall or NAT at the client.

**Passive mode:** the server opens a port and tells the client; the **client** opens the data connection to that server port. It works well when the client is behind a firewall or NAT.

---

### Q12. Explain TFTP. Differentiate between FTP and TFTP. [4 marks]

**Answer:**
TFTP (Trivial File Transfer Protocol) is a very simple file transfer protocol for small files. It uses **UDP port 69**, so there is no connection set-up. It has no login, no passwords and no directory listing. A file is sent in blocks of **512 bytes**, and each block must be acknowledged before the next is sent (stop-and-wait); a block shorter than 512 bytes shows the end of the file. Its packet types are read request, write request, data, acknowledgement and error. It is used to boot diskless workstations and to load firmware or configuration files on network devices.

| Parameter | FTP | TFTP |
|---|---|---|
| Transport protocol | TCP | UDP |
| Port | 21 (control), 20 (data) | 69 |
| Connections | Two | One |
| Authentication | User name and password | None |
| Reliability | By TCP | By its own stop-and-wait acknowledgement |
| Commands | Many (list, change directory, delete) | Only read and write |
| Size and speed | Large files, full-featured | Small files, simple |
| Security | Low (needs FTPS or SFTP for security) | Very low |

---

### Q13. Differentiate between TCP and UDP. [7 marks]

**Answer:**
TCP and UDP are the two transport layer protocols. They deliver data from a process on one host to a process on another, using port numbers.

**TCP (Transmission Control Protocol):** connection-oriented and reliable. It sets up a connection with a three-way handshake, numbers the bytes, acknowledges the data, retransmits lost segments, delivers data in order, and provides flow control and congestion control. It supports full-duplex communication.

**UDP (User Datagram Protocol):** connectionless and unreliable. It sends independent datagrams with only a small header, with no handshake, no acknowledgement and no retransmission.

| Parameter | TCP | UDP |
|---|---|---|
| Connection | Connection-oriented | Connectionless |
| Reliability | Reliable: acknowledgement and retransmission | Unreliable: best effort |
| Order of data | Delivered in order | No ordering |
| Header size | 20 to 60 bytes | 8 bytes |
| Speed | Slower | Faster |
| Flow and congestion control | Yes | No |
| Error checking | Checksum plus recovery | Checksum only (detect) |
| Data unit | Segment | Datagram |
| Broadcast and multicast | Not supported | Supported |
| Uses | Web (HTTP, HTTPS), email, FTP, remote login | DNS, DHCP, TFTP, VoIP, video streaming, online games |

Well-known ports: FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, TFTP 69, HTTP 80, POP3 110, IMAP 143, HTTPS 443.

---

### Q14. Explain the TCP three-way handshake and connection termination. [4 marks]

**Answer:**
TCP sets up a connection before data is sent, using three segments.

```
Client                              Server
  |------ SYN (seq = x) ------------->|
  |<----- SYN + ACK (seq = y, ack = x+1) --|
  |------ ACK (ack = y+1) ----------->|
        connection established
```

1. **SYN:** the client sends a segment with the SYN flag and its initial sequence number x.
2. **SYN + ACK:** the server replies with SYN and ACK set, gives its own initial sequence number y and acknowledges the client's number with ack = x + 1.
3. **ACK:** the client acknowledges the server's number with ack = y + 1.

Both sides must announce and confirm their own starting sequence numbers, and this needs three messages. Data can then flow in both directions.

**Termination:** each direction is closed separately, using four segments: the client sends FIN, the server sends ACK, the server sends its own FIN when it has finished, and the client sends the final ACK.

---

### Q15. Explain the TCP segment header and the UDP header. [4 marks]

**Answer:**

**TCP header (20 bytes minimum):**

| Field | Size | Purpose |
|---|---|---|
| Source port | 16 bits | Port of the sending process |
| Destination port | 16 bits | Port of the receiving process |
| Sequence number | 32 bits | Number of the first data byte in the segment |
| Acknowledgement number | 32 bits | Next byte expected by the sender of this segment |
| HLEN | 4 bits | Header length |
| Reserved | 6 bits | For future use |
| Flags | 6 bits | URG, ACK, PSH, RST, SYN, FIN |
| Window size | 16 bits | Number of bytes the receiver can accept (flow control) |
| Checksum | 16 bits | Error check of header and data |
| Urgent pointer | 16 bits | End of urgent data when URG is set |
| Options | Variable | Optional extras |

**UDP header (8 bytes):** source port (16 bits), destination port (16 bits), length (16 bits) and checksum (16 bits).

---

### Q16. What is network security? Explain its goals and the types of attacks. [7 marks]

**Answer:**
Network security is the set of measures that protect a network and the data on it from unauthorised access, misuse, modification and disruption.

**Security goals:**
- **Confidentiality:** only the intended receiver can read the data.
- **Integrity:** the data is not altered without being detected.
- **Availability:** the network and its services are available to authorised users when needed.
- **Authentication:** each party can prove its identity.
- **Non-repudiation:** a sender cannot later deny having sent a message.

**Passive attacks:** the attacker only observes or copies the data; the data is not changed, so these are hard to detect.
- *Eavesdropping (snooping):* reading the data as it travels.
- *Traffic analysis:* studying who communicates with whom and how often, even if the data is encrypted.

**Active attacks:** the attacker changes the data or disturbs the service; these can be detected.
- *Masquerading (spoofing):* pretending to be another user or device.
- *Modification:* changing the contents of a message in transit.
- *Replay:* capturing a valid message and sending it again later.
- *Man-in-the-middle:* secretly sitting between two parties and reading or changing their messages.
- *Denial of Service (DoS) and DDoS:* flooding a server with requests so that real users cannot use it.

**Other threats:** virus, worm, Trojan horse, ransomware, phishing and brute-force password attacks.

**Security measures:** encryption, strong authentication and multi-factor authentication, digital signatures, firewalls, intrusion detection and prevention systems (IDS/IPS), VPNs, antivirus software with regular updates, and backups.

---

### Q17. What is a firewall? Explain its types. [7 marks]

**Answer:**
A firewall is a hardware or software system placed between a trusted network (private LAN) and an untrusted network (the Internet). It examines every packet that passes and, according to a set of rules, allows or blocks it. It blocks unwanted incoming connections, controls which services and ports are reachable, hides the internal network and keeps logs of traffic.

A **DMZ (demilitarised zone)** is a separate zone behind the firewall that holds public servers (web, mail). If a public server is attacked, the private LAN is still protected.

**Types of firewalls:**

| Type | Works at | How it works | Limitation |
|---|---|---|---|
| Packet-filtering | Network and transport layer | Checks each packet separately against rules using source and destination IP address, port number and protocol | Does not know whether a packet belongs to a real connection; cannot see the data |
| Stateful inspection | Network and transport layer | Keeps a table of active connections; allows a packet only if it belongs to a known connection | Needs more memory and processing |
| Circuit-level gateway | Session or transport layer | Checks that the TCP handshake is valid and then allows the session | Cannot inspect the contents |
| Application-level (proxy) | Application layer | Acts as a go-between: the client connects to the proxy, and the proxy makes a separate connection to the server; can inspect the content | Slowest; needs a proxy for each application |
| Next-generation firewall | Up to application layer | Stateful inspection plus deep packet inspection and intrusion prevention | Costly and complex |

Example packet-filter rules (checked in order, the first match decides):

| Rule | Source | Destination | Protocol and port | Action |
|---|---|---|---|---|
| 1 | Any | Web server | TCP 80, 443 | Allow |
| 2 | LAN | Any | Any | Allow |
| 3 | Any | LAN | Any | Deny |

---

### Q18. Explain the basic network commands: ping, ipconfig, tracert, nslookup and netstat. [4 marks]

**Answer:**
Network commands are run in the command prompt (Windows) or terminal (Linux) to check settings and find faults.

| Command | Linux equivalent | Use |
|---|---|---|
| ping | ping | Tests whether a host can be reached and measures the round-trip time. It sends ICMP echo request packets and waits for echo replies. `ping 127.0.0.1` tests the local TCP/IP software. |
| ipconfig | ifconfig or ip addr | Shows the IP address, subnet mask, default gateway and DNS of the computer. `ipconfig /all` also shows the MAC address and DHCP details; `/release` and `/renew` get a new DHCP address; `/flushdns` clears the DNS cache. |
| tracert | traceroute | Shows the path to a destination, one router (hop) at a time, with the time for each. It sends packets with TTL = 1, 2, 3 and so on, and each router that discards a packet sends back an ICMP message. |
| nslookup | nslookup or dig | Queries DNS to find the IP address of a name or the name of an IP address; `nslookup -type=MX example.com` finds the mail servers. |
| netstat | netstat or ss | Shows active connections, listening ports and statistics. `-a` shows all, `-n` shows numbers, `-r` shows the routing table. |

Other useful commands: `arp -a` (shows the ARP table of IP-to-MAC mappings) and `hostname` (shows the computer name).
