// Activities & Quizzes: separate from lesson content.

// Book titles are placeholders until matched to the actual Library catalog.

const booksByYear = {

  1: ["History and Evolution of Computers", "Computer Generations and Classification", "Computer Hardware and Software", "Input, Processing, Output, and Storage", "Data, Information, and Number Systems", "Operating System Fundamentals", "Programs and Processes", "Computer Networks and the Internet", "Cybersecurity, Privacy, and Computer Ethics", "Emerging Technologies and Artificial Intelligence"],

  2: ['Computer System Platforms and Architecture', 'Computer System Platforms and Architecture', 'Operating System Concepts and Functions', 'Processes, Threads, and Process Scheduling', 'Processes and Threads', ...Array.from({length:5},(_,i)=>`Book ${String(i+6).padStart(2,'0')}`)],

  3: Array.from({length:10},(_,i)=>`Book ${String(i+1).padStart(2,'0')}`)

};



// Transcribed from the user's supplied First Year Book 01 quiz.

const quizBank = {

  '1-1': [

    {title:'Quiz 1: History of Computers',questions:[

      {q:'Which ancient calculating device uses beads to perform mathematical operations?',options:['Pascaline','Abacus','Analytical Engine','ENIAC'],answer:1,explanation:'The abacus uses beads for calculations.'},

      {q:'Who invented the calculating machine known as the Pascaline?',options:['Charles Babbage','Alan Turing','Blaise Pascal','John Napier'],answer:2,explanation:'Blaise Pascal invented the Pascaline.'},

      {q:'Who is known as the Father of Computing?',options:['Charles Babbage','Gottfried Leibniz','George Stibitz','Vannevar Bush'],answer:0,explanation:'Charles Babbage is known as the Father of Computing.'},

      {q:'Which machine was designed by Charles Babbage to perform general-purpose calculations?',options:['UNIVAC','Abacus','Pascaline','Analytical Engine'],answer:3,explanation:'The Analytical Engine was designed as a mechanical computing machine.'},

      {q:'Which computer was introduced by Apple in 1977?',options:['Macintosh','Apple II','IBM PC','UNIVAC'],answer:1,explanation:'The Apple II was introduced in 1977.'}

    ]},

    {title:'Quiz 2: Generations of Computers',questions:[

      {q:'What technology was used in first-generation computers?',options:['Transistors','Microprocessors','Vacuum tubes','Integrated circuits'],answer:2,explanation:'First-generation computers used vacuum tubes.'},

      {q:'Which technology replaced vacuum tubes in second-generation computers?',options:['Transistors','Artificial intelligence','Microprocessors','Quantum processors'],answer:0,explanation:'Transistors replaced vacuum tubes.'},

      {q:'Which technology characterized third-generation computers?',options:['Magnetic drums','Integrated circuits','Vacuum tubes','Mechanical gears'],answer:1,explanation:'Third-generation computers used integrated circuits.'},

      {q:'What major technology brought the fourth generation of computers?',options:['Punched cards','Vacuum tubes','Magnetic core memory','Microprocessors'],answer:3,explanation:'Microprocessors characterized the fourth generation.'},

      {q:'Which technology is strongly associated with fifth-generation computing?',options:['Mechanical calculators','Vacuum tubes','Artificial intelligence','Punched cards'],answer:2,explanation:'Fifth-generation computing focuses on artificial intelligence.'}

    ]},

    {title:'Quiz 3: Types of Computers',questions:[

      {q:'Which computer is commonly used for scientific research requiring large amounts of processing power?',options:['Laptop','PDA','Supercomputer','Calculator'],answer:2,explanation:'Supercomputers perform demanding scientific calculations.'},

      {q:'Which type of computer is commonly used by organizations for large-scale data processing?',options:['Mainframe','Palmtop','Laptop','Microcontroller'],answer:0,explanation:'Mainframes support large-scale organizational computing.'},

      {q:'What is a laptop?',options:['A mechanical calculator','A portable personal computer','A computer that only processes analog signals','A computer that uses vacuum tubes'],answer:1,explanation:'A laptop is a portable personal computer.'},

      {q:'What does PDA stand for?',options:['Personal Data Application','Portable Digital Access','Processing Device Adapter','Personal Digital Assistant'],answer:3,explanation:'PDA stands for Personal Digital Assistant.'},

      {q:'What is a microcomputer generally characterized by?',options:['A microprocessor as its CPU','Vacuum tubes as its main circuitry','Mechanical gears for processing','A requirement to occupy an entire room'],answer:0,explanation:'A microcomputer uses a microprocessor as its central processing unit.'}

    ]},

    {title:'Quiz 4: Analog, Digital, and Hybrid Computers',questions:[

      {q:'Which type of computer processes continuous physical quantities?',options:['Digital','Analog','Mainframe','Personal'],answer:1,explanation:'Analog computers use continuous physical variables.'},

      {q:'Which type of computer processes information using binary digits?',options:['Analog','Mechanical','Digital','Hybrid only'],answer:2,explanation:'Digital computers process discrete information represented using binary digits.'},

      {q:'Which type of computer combines analog and digital computing features?',options:['Hybrid','Laptop','Mainframe','Supercomputer'],answer:0,explanation:'Hybrid computers combine analog and digital features.'},

      {q:'Which is an example of a digital computer?',options:['Mechanical differential analyzer','Traditional analog computing device','Mechanical gear calculator','Personal computer'],answer:3,explanation:'A personal computer is a digital computer.'},

      {q:'In a hybrid computer, which component normally provides logical operations and control?',options:['Analog component','Digital component','Mechanical component','Magnetic drum'],answer:1,explanation:'The digital component normally handles logical operations and control.'}

    ]},

    {title:'Final Assessment',questions:[

      ['Who is known as the Father of Computing?',['Blaise Pascal','Charles Babbage','Alan Turing','John Napier'],1,'Charles Babbage is known as the Father of Computing.'],

      ['Which device is one of the earliest tools used for calculations?',['Abacus','Laptop','Microprocessor','ENIAC'],0,'The abacus is an ancient calculating device.'],

      ['Who invented the Pascaline?',['Gottfried Leibniz','Charles Babbage','Blaise Pascal','George Stibitz'],2,'Blaise Pascal invented the Pascaline.'],

      ['Which of the following was designed by Charles Babbage?',['Apple II','UNIVAC','Intel 4004','Analytical Engine'],3,'Charles Babbage designed the Analytical Engine.'],

      ['Which computer is identified in the lesson as an early commercial computer?',['Macintosh','UNIVAC','Apple II','IBM PC'],1,'UNIVAC was an early commercial computer.'],

      ['What was the main technology used in first-generation computers?',['Vacuum tubes','Transistors','Integrated circuits','Microprocessors'],0,'First-generation computers used vacuum tubes.'],

      ['Which generation introduced transistors?',['First','Third','Second','Fourth'],2,'Second-generation computers used transistors.'],

      ['Which generation used integrated circuits?',['First','Second','Fourth','Third'],3,'Third-generation computers used integrated circuits.'],

      ['What technology characterized fourth-generation computers?',['Vacuum tubes','Microprocessors','Magnetic drums','Mechanical gears'],1,'Fourth-generation computers used microprocessors.'],

      ['Which development is associated with fifth-generation computing?',['Artificial intelligence','Punched cards','Vacuum tubes','Mechanical calculators'],0,'Fifth-generation computing focuses on artificial intelligence.'],

      ['What type of computer is commonly used for complex scientific calculations?',['PDA','Laptop','Supercomputer','Basic calculator'],2,'Supercomputers are used for demanding scientific calculations.'],

      ['Which computer is designed to be portable?',['Mainframe','Laptop','Supercomputer','Differential analyzer'],1,'Laptops are portable personal computers.'],

      ['What does PDA stand for?',['Personal Digital Assistant','Portable Data Analyzer','Processing Digital Application','Personal Desktop Adapter'],0,'PDA means Personal Digital Assistant.'],

      ['Which computer type uses a microprocessor as its CPU?',['Analog calculator','Mechanical calculator','Vacuum-tube computer','Microcomputer'],3,'Microcomputers use microprocessors as their CPUs.'],

      ['Which type of computer uses continuous physical variables?',['Digital','Mainframe','Analog','Personal'],2,'Analog computers process continuous physical quantities.'],

      ['Which type of computer uses binary digits?',['Analog','Digital','Mechanical','Hydraulic'],1,'Digital computers use binary digits.'],

      ['Which type of computer combines analog and digital features?',['Hybrid','Mainframe','Laptop','PDA'],0,'Hybrid computers combine analog and digital computing.'],

      ['What is the main advantage of transistors compared with vacuum tubes?',['They require more electricity','They make computers larger','They require mechanical gears','They make computers smaller and more efficient'],3,'Transistors made computers smaller and more efficient.'],

      ['Which computer component is strongly associated with the Intel 4004?',['Vacuum tube','Magnetic drum','Microprocessor','Punched card'],2,'The Intel 4004 is a microprocessor.'],

      ['What major technological development helped personal computers become widely available?',['Astrolabes','Microprocessors','Mechanical gears','Vacuum tubes'],1,'Microprocessors helped make personal computers practical.']

    ].map(([q,options,answer,explanation])=>({q,options,answer,explanation}))}
  ]
  , '2-1': [
    { title: 'Assessment: Computer System Platforms and Architecture', questions: [
      {q:'Which component executes program instructions?',options:['Monitor','CPU','Keyboard','Printer'],answer:1},
      {q:'Which memory type is generally volatile?',options:['SSD','HDD','RAM','Optical disc'],answer:2},
      {q:'What does the ALU perform?',options:['Printing','Arithmetic and logical operations','File storage','Network routing'],answer:1},
      {q:'Which component connects major computer hardware?',options:['Motherboard','Mouse','Speaker','Projector'],answer:0},
      {q:'What is an operating system?',options:['A physical storage device','A software environment that manages system resources','A cooling component','A display interface'],answer:1},
      {q:'Which storage technology uses flash memory?',options:['SSD','Magnetic tape','Optical disc','Mechanical HDD'],answer:0},
      {q:'What does ISA stand for?',options:['Internet System Application','Instruction Set Architecture','Integrated Storage Access','Internal Software Arrangement'],answer:1},
      {q:'Which platform commonly supports virtual machines?',options:['Hypervisor','Printer driver','Keyboard controller','Display adapter'],answer:0},
      {q:'What does GPU stand for?',options:['General Processing Utility','Graphics Processing Unit','Global Platform Unit','Graphic Program Utility'],answer:1},
      {q:'Which cloud service model provides ready-to-use applications?',options:['IaaS','PaaS','SaaS','LAN'],answer:2},
      {q:'Temporary working memory used by active programs.',type:'identification',answerText:'Random Access Memory (RAM)',accepted:['random access memory','ram','random access memory ram']},
      {q:"A computer's main circuit board.",type:'identification',answerText:'Motherboard',accepted:['motherboard']},
      {q:'The component responsible for directing instruction execution.',type:'identification',answerText:'Control Unit',accepted:['control unit','cu']},
      {q:'A high-speed memory located close to or inside the processor.',type:'identification',answerText:'Cache memory',accepted:['cache memory','cache']},
      {q:'The technology that allows multiple virtual machines to run on one physical computer.',type:'identification',answerText:'Virtualization',accepted:['virtualization']}
    ]}
  ],
  "2-2": [
  {
    "title": "Final Assessment — Parts A & B",
    "questions": [
      {
        "q": "Which term describes the programmer-visible behavior of a processor?",
        "options": [
          "Architecture",
          "Cooling",
          "Fabrication",
          "Chassis"
        ],
        "answer": 0,
        "explanation": "Architecture defines programmer-visible behavior."
      },
      {
        "q": "What does an operating system primarily do?",
        "options": [
          "Manage resources and provide services",
          "Replace the CPU",
          "Manufacture memory",
          "Convert all data to text"
        ],
        "answer": 0,
        "explanation": "The OS manages resources and provides application services."
      },
      {
        "q": "Which memory is commonly used for main system RAM?",
        "options": [
          "DRAM",
          "Optical disc",
          "ROM only",
          "Magnetic tape"
        ],
        "answer": 0,
        "explanation": "DRAM is widely used for main memory."
      },
      {
        "q": "What is the purpose of an ISA?",
        "options": [
          "Define software-visible machine behavior",
          "Set monitor brightness",
          "Specify a computer’s color",
          "Replace an OS"
        ],
        "answer": 0,
        "explanation": "An ISA defines instructions and related architectural behavior."
      },
      {
        "q": "What is a cache hit?",
        "options": [
          "Requested data is found in cache",
          "A disk is damaged",
          "A CPU overheats",
          "A network packet is lost"
        ],
        "answer": 0,
        "explanation": "A cache hit means the requested block is present."
      },
      {
        "q": "Which component performs arithmetic and logical operations?",
        "options": [
          "ALU",
          "Power supply",
          "Keyboard",
          "Fan"
        ],
        "answer": 0,
        "explanation": "The ALU performs arithmetic and logical operations."
      },
      {
        "q": "What is DMA used for?",
        "options": [
          "Data transfer with limited CPU involvement",
          "Encrypting every file",
          "Rendering fonts",
          "Naming domains"
        ],
        "answer": 0,
        "explanation": "DMA transfers data with reduced CPU involvement."
      },
      {
        "q": "Which is a nonvolatile storage technology?",
        "options": [
          "Flash memory",
          "CPU register",
          "Typical DRAM",
          "L1 cache"
        ],
        "answer": 0,
        "explanation": "Flash memory retains data without power."
      },
      {
        "q": "What does a hypervisor manage?",
        "options": [
          "Virtual machines",
          "Webpage styles",
          "Keyboard layouts",
          "DNS names"
        ],
        "answer": 0,
        "explanation": "A hypervisor creates and manages VMs."
      },
      {
        "q": "Containers generally share which host resource?",
        "options": [
          "Operating-system kernel",
          "Separate physical motherboard",
          "Independent BIOS chip",
          "Dedicated CPU for every container"
        ],
        "answer": 0,
        "explanation": "Containers typically share the host kernel."
      },
      {
        "q": "Which is especially important for a real-time system?",
        "options": [
          "Meeting timing requirements",
          "Maximum screen size",
          "Number of browser tabs",
          "File extension"
        ],
        "answer": 0,
        "explanation": "Real-time correctness includes timing constraints."
      },
      {
        "q": "What does an IP router do?",
        "options": [
          "Forward packets between networks",
          "Compile programs",
          "Store all files",
          "Display graphics"
        ],
        "answer": 0,
        "explanation": "Routers forward IP packets."
      },
      {
        "q": "Which feature can help verify startup components?",
        "options": [
          "Secure boot",
          "Screen saver",
          "Clipboard",
          "File compression"
        ],
        "answer": 0,
        "explanation": "Secure boot verifies startup components according to policy."
      },
      {
        "q": "Why is backup important even when RAID is used?",
        "options": [
          "RAID may not protect against deletion or site loss",
          "RAID makes backups impossible",
          "RAID prevents all malware",
          "RAID stores no data"
        ],
        "answer": 0,
        "explanation": "RAID does not replace independent backups."
      },
      {
        "q": "What is a system bottleneck?",
        "options": [
          "A resource limiting overall performance",
          "A type of connector",
          "A programming language",
          "A security certificate"
        ],
        "answer": 0,
        "explanation": "A bottleneck constrains total performance."
      },
      {
        "q": "Explain why platform choice should be based on requirements rather than processor speed alone.",
        "type": "short_response"
      }
    ]
  }
],
  "2-3": [
  {
    "title": "Final Assessment — Part A: Multiple Choice",
    "questions": [
      {
        "q": "Which software manages hardware resources and provides services to applications?",
        "options": [
          "Operating system",
          "Spreadsheet",
          "Presentation file",
          "Image editor"
        ],
        "answer": 0,
        "explanation": "The OS manages resources and provides common application services."
      },
      {
        "q": "What is the kernel?",
        "options": [
          "Core privileged OS component",
          "External storage",
          "User document",
          "Display device"
        ],
        "answer": 0,
        "explanation": "The kernel is the central privileged component."
      },
      {
        "q": "Which is a process?",
        "options": [
          "A program in execution",
          "A printed page",
          "A source-code comment",
          "A file extension"
        ],
        "answer": 0,
        "explanation": "A process is a program executing with state and resources."
      },
      {
        "q": "Which scheduling algorithm uses a time quantum?",
        "options": [
          "Round Robin",
          "FCFS only",
          "SJF only",
          "FIFO storage allocation"
        ],
        "answer": 0,
        "explanation": "Round Robin allocates a time quantum to each ready task."
      },
      {
        "q": "What does a page table map?",
        "options": [
          "Virtual pages to physical frames",
          "Files to users",
          "Devices to cables",
          "Passwords to accounts"
        ],
        "answer": 0,
        "explanation": "Page tables translate virtual page numbers to physical frame numbers."
      },
      {
        "q": "What is a page fault?",
        "options": [
          "An event requiring OS handling for a page access",
          "A broken keyboard",
          "A network cable issue",
          "A print queue"
        ],
        "answer": 0,
        "explanation": "A page fault occurs when an access requires OS handling, such as loading a nonresident page or resolving a protection violation."
      },
      {
        "q": "What does DMA support?",
        "options": [
          "Data transfer with limited CPU involvement",
          "User authentication",
          "File naming",
          "Screen resolution"
        ],
        "answer": 0,
        "explanation": "DMA enables device transfers with reduced CPU involvement."
      },
      {
        "q": "What is spooling commonly used for?",
        "options": [
          "Queuing jobs for a device",
          "Allocating CPU registers",
          "Translating IP addresses",
          "Encrypting memory"
        ],
        "answer": 0,
        "explanation": "Spooling queues jobs, such as print jobs, for a device."
      },
      {
        "q": "Authentication means:",
        "options": [
          "Verifying identity",
          "Choosing permitted actions",
          "Compressing files",
          "Scheduling processes"
        ],
        "answer": 0,
        "explanation": "Authentication verifies identity; authorization determines allowed actions."
      },
      {
        "q": "Containers typically share the host:",
        "options": [
          "OS kernel",
          "Physical monitor",
          "BIOS battery",
          "Keyboard"
        ],
        "answer": 0,
        "explanation": "Containers typically share the host kernel."
      },
      {
        "q": "Which is a real-time concern?",
        "options": [
          "Meeting timing deadlines",
          "Wallpaper style",
          "File icon size",
          "Screen color"
        ],
        "answer": 0,
        "explanation": "Real-time systems have timing requirements."
      },
      {
        "q": "What does a bootloader do?",
        "options": [
          "Loads the OS kernel during startup",
          "Edits documents",
          "Runs a browser tab",
          "Stores user passwords only"
        ],
        "answer": 0,
        "explanation": "A bootloader loads the kernel as part of startup."
      }
    ]
  }
],
  "2-5": [
  {
    "title": "Assessment: Processes and Threads",
    "questions": [
      {
        "q": "What is a process?",
        "options": [
          "A physical computer component.",
          "A program currently being executed.",
          "A storage device.",
          "A network connection."
        ],
        "answer": 1,
        "explanation": "A process is a program in execution."
      },
      {
        "q": "What is the main purpose of process scheduling?",
        "options": [
          "To create computer hardware.",
          "To select which process receives processor time.",
          "To delete stored documents.",
          "To increase screen brightness."
        ],
        "answer": 1,
        "explanation": "Scheduling assigns processor time."
      },
      {
        "q": "What is the smallest unit of execution commonly scheduled by modern operating systems?",
        "options": [
          "File.",
          "Folder.",
          "Thread.",
          "Monitor."
        ],
        "answer": 2,
        "explanation": "Threads are execution units."
      },
      {
        "q": "Which process state indicates that a process is waiting for processor time?",
        "options": [
          "Ready.",
          "Terminated.",
          "Running.",
          "New."
        ],
        "answer": 0,
        "explanation": "Ready processes await CPU allocation."
      },
      {
        "q": "What does PCB stand for?",
        "options": [
          "Program Computer Bus.",
          "Process Control Block.",
          "Processor Core Buffer.",
          "Primary Control Base."
        ],
        "answer": 1,
        "explanation": "PCB means Process Control Block."
      },
      {
        "q": "Which scheduling algorithm follows arrival order?",
        "options": [
          "SJF.",
          "Priority.",
          "FCFS.",
          "Round Robin."
        ],
        "answer": 2,
        "explanation": "FCFS follows arrival order."
      },
      {
        "q": "Which scheduling method uses a time quantum?",
        "options": [
          "Round Robin.",
          "FCFS.",
          "Non-preemptive SJF.",
          "Basic priority scheduling."
        ],
        "answer": 0,
        "explanation": "Round Robin uses a time quantum."
      },
      {
        "q": "What is a race condition?",
        "options": [
          "A hardware overheating problem.",
          "A situation where the outcome depends on concurrent execution timing.",
          "A network cable failure.",
          "A storage formatting process."
        ],
        "answer": 1,
        "explanation": "Timing can affect concurrent results."
      },
      {
        "q": "Which mechanism helps prevent simultaneous unsafe access to shared resources?",
        "options": [
          "Mutex.",
          "Monitor display.",
          "Keyboard.",
          "Printer."
        ],
        "answer": 0,
        "explanation": "A mutex controls exclusive access."
      },
      {
        "q": "Which is a necessary condition for deadlock?",
        "options": [
          "Circular wait.",
          "High screen resolution.",
          "Large storage capacity.",
          "Fast network connectivity."
        ],
        "answer": 0,
        "explanation": "Circular wait is a deadlock condition."
      },
      {
        "q": "Which algorithm selects the process with the shortest expected CPU burst?",
        "options": [
          "FCFS.",
          "SJF.",
          "Round Robin.",
          "Multilevel Queue."
        ],
        "answer": 1,
        "explanation": "SJF selects the shortest expected burst."
      },
      {
        "q": "What is context switching?",
        "options": [
          "Changing desktop wallpaper.",
          "Saving one execution state and restoring another.",
          "Moving files between folders.",
          "Changing the operating system."
        ],
        "answer": 1,
        "explanation": "Context switching changes execution context."
      },
      {
        "q": "Which technique gradually increases the priority of waiting processes?",
        "options": [
          "Aging.",
          "Formatting.",
          "Paging.",
          "Spooling."
        ],
        "answer": 0,
        "explanation": "Aging increases waiting-process priority."
      },
      {
        "q": "Which communication method allows processes to exchange messages?",
        "options": [
          "Message passing.",
          "CPU cooling.",
          "Screen sharing.",
          "Disk defragmentation."
        ],
        "answer": 0,
        "explanation": "Message passing exchanges information."
      },
      {
        "q": "What is multithreading?",
        "options": [
          "Running multiple operating systems on one monitor.",
          "Executing multiple threads within a process.",
          "Connecting multiple printers.",
          "Increasing hard drive capacity."
        ],
        "answer": 1,
        "explanation": "Multithreading uses multiple threads in a process."
      },
      {
        "q": "The data structure that stores information about a process.",
        "type": "identification",
        "answerText": "Process Control Block",
        "accepted": [
          "process control block",
          "pcb"
        ]
      },
      {
        "q": "The time a process spends waiting in the ready queue.",
        "type": "identification",
        "answerText": "Waiting time",
        "accepted": [
          "waiting time"
        ]
      },
      {
        "q": "The total time from arrival to completion.",
        "type": "identification",
        "answerText": "Turnaround time",
        "accepted": [
          "turnaround time"
        ]
      },
      {
        "q": "A process that has been created by another process.",
        "type": "identification",
        "answerText": "Child process",
        "accepted": [
          "child process"
        ]
      },
      {
        "q": "A scheduling method that assigns equal time slices.",
        "type": "identification",
        "answerText": "Round Robin",
        "accepted": [
          "round robin",
          "round robin scheduling"
        ]
      },
      {
        "q": "The condition where processes wait indefinitely for one another.",
        "type": "identification",
        "answerText": "Deadlock",
        "accepted": [
          "deadlock"
        ]
      },
      {
        "q": "The part of a program that accesses shared resources.",
        "type": "identification",
        "answerText": "Critical section",
        "accepted": [
          "critical section"
        ]
      },
      {
        "q": "The operating system component that selects the next process.",
        "type": "identification",
        "answerText": "CPU scheduler",
        "accepted": [
          "cpu scheduler"
        ]
      },
      {
        "q": "The technique of coordinating concurrent execution.",
        "type": "identification",
        "answerText": "Synchronization",
        "accepted": [
          "synchronization"
        ]
      },
      {
        "q": "The memory space shared by multiple threads within the same process.",
        "type": "identification",
        "answerText": "Process address space or shared process memory",
        "accepted": [
          "process address space",
          "shared process memory"
        ]
      }
    ]
  }
]

};




/* First Year quiz questions and answer keys from 1styearquizzes.docx. */
Object.assign(quizBank, {
  "1-1": [
    {
      "title": "History And Evolution Of Computers — 10-Item Quiz",
      "questions": [
        {
          "q": "Who is known as the \"Father of Computing\"?",
          "part": "multiple_choice",
          "options": [
            "Alan Turing",
            "Charles Babbage",
            "Blaise Pascal",
            "Bill Gates"
          ],
          "answer": 1
        },
        {
          "q": "Which early calculating device uses beads placed on wires to perform mathematical calculations?",
          "part": "multiple_choice",
          "options": [
            "Pascaline",
            "Analytical Engine",
            "Abacus",
            "Napier's Bones"
          ],
          "answer": 2
        },
        {
          "q": "What technology was used in the first generation of computers?",
          "part": "multiple_choice",
          "options": [
            "Transistors",
            "Integrated Circuits",
            "Microprocessors",
            "Vacuum Tubes"
          ],
          "answer": 3
        },
        {
          "q": "Which generation introduced the use of microprocessors?",
          "part": "multiple_choice",
          "options": [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
          ],
          "answer": 3
        },
        {
          "q": "She is recognized as the first computer programmer because of her work on Charles Babbage's Analytical Engine.",
          "part": "identification",
          "type": "identification",
          "answerText": "Ada Lovelace",
          "accepted": [
            "Ada Lovelace"
          ]
        },
        {
          "q": "It is a type of computer that uses binary digits (0 and 1) to process information.",
          "part": "identification",
          "type": "identification",
          "answerText": "Digital Computer",
          "accepted": [
            "Digital Computer"
          ]
        },
        {
          "q": "It is an operating system developed by Microsoft and introduced in 1985 as a graphical operating environment.",
          "part": "identification",
          "type": "identification",
          "answerText": "Microsoft Windows",
          "accepted": [
            "Microsoft Windows"
          ]
        },
        {
          "q": "The Analytical Engine was designed by Charles Babbage and included concepts such as input, output, and memory.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "The internet and the World Wide Web are exactly the same thing.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "Enumerate the four basic functions of a computer known as the Information Processing Cycle.",
          "part": "enumeration",
          "type": "enumeration",
          "answerText": "Input, Processing, Output, Storage",
          "accepted": [
            "input processing output storage",
            "input process output storage"
          ]
        }
      ]
    }
  ],
  "1-2": [
    {
      "title": "Computer Generations — 10-Item Quiz",
      "questions": [
        {
          "q": "Which electronic component was mainly used for circuitry in first-generation computers?",
          "part": "multiple_choice",
          "options": [
            "Transistor",
            "Vacuum tube",
            "Integrated circuit",
            "Microprocessor"
          ],
          "answer": 1
        },
        {
          "q": "Which generation introduced transistors as replacements for vacuum tubes?",
          "part": "multiple_choice",
          "options": [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Fourth Generation"
          ],
          "answer": 1
        },
        {
          "q": "What is the main electronic component of third-generation computers?",
          "part": "multiple_choice",
          "options": [
            "Vacuum tubes",
            "Transistors",
            "Integrated circuits",
            "Microprocessors"
          ],
          "answer": 2
        },
        {
          "q": "Which invention helped make personal computers smaller, cheaper, and more accessible during the fourth generation?",
          "part": "multiple_choice",
          "options": [
            "Magnetic drum",
            "Vacuum tube",
            "Microprocessor",
            "Magnetic core"
          ],
          "answer": 2
        },
        {
          "q": "Which person is known as the Father of Computing?",
          "part": "multiple_choice",
          "options": [
            "Alan Turing",
            "Charles Babbage",
            "Blaise Pascal",
            "John von Neumann"
          ],
          "answer": 1
        },
        {
          "q": "Which of the following are characteristics of first-generation computers?",
          "part": "multiple_response",
          "type": "multiple_response",
          "options": [
            "Used vacuum tubes for circuitry",
            "Used magnetic drums for memory",
            "Used microprocessors",
            "Consumed large amounts of electricity"
          ],
          "answers": [
            0,
            1,
            3
          ]
        },
        {
          "q": "Second-generation computers used transistors and generally consumed less electricity than first-generation computers.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "Machine language uses abbreviated words such as ADD, SUB, and DIV instead of binary digits.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "It stands for Random Access Memory and temporarily stores programs and data currently being used by the computer.",
          "part": "identification",
          "type": "identification",
          "answerText": "RAM (Random Access Memory)",
          "accepted": [
            "RAM (Random Access Memory)"
          ]
        },
        {
          "q": "It is the main focus of fifth-generation computers and aims to develop machines capable of learning, reasoning, and performing tasks associated with human intelligence.",
          "part": "identification",
          "type": "identification",
          "answerText": "Artificial Intelligence (AI)",
          "accepted": [
            "Artificial Intelligence (AI)"
          ]
        }
      ]
    }
  ],
  "1-3": [
    {
      "title": "Computer Hardware And Software — 10-Item Quiz",
      "questions": [
        {
          "q": "Which of the following refers to the physical parts of a computer that can be seen and touched?",
          "part": "multiple_choice",
          "options": [
            "Software",
            "Hardware",
            "Peopleware",
            "Data"
          ],
          "answer": 1
        },
        {
          "q": "What are the four basic operations of a computer system?",
          "part": "multiple_choice",
          "options": [
            "Save, Edit, Delete, Print",
            "Input, Process, Output, Storage",
            "Open, Run, Close, Save",
            "Read, Write, Copy, Paste"
          ],
          "answer": 1
        },
        {
          "q": "Which hardware component is known as the brain of the computer?",
          "part": "multiple_choice",
          "options": [
            "RAM",
            "GPU",
            "CPU",
            "Motherboard"
          ],
          "answer": 2
        },
        {
          "q": "Which type of memory is temporary and loses its stored data when the computer is turned off?",
          "part": "multiple_choice",
          "options": [
            "ROM",
            "RAM",
            "HDD",
            "SSD"
          ],
          "answer": 1
        },
        {
          "q": "Which of the following is an example of application software?",
          "part": "multiple_choice",
          "options": [
            "Windows",
            "Linux",
            "Microsoft Word",
            "Device Driver"
          ],
          "answer": 2
        },
        {
          "q": "It is the main circuit board that connects the different components of a computer.",
          "part": "identification",
          "type": "identification",
          "answerText": "Motherboard",
          "accepted": [
            "Motherboard"
          ]
        },
        {
          "q": "It is a software program that acts as a translator between the operating system and a hardware device.",
          "part": "identification",
          "type": "identification",
          "answerText": "Device Driver",
          "accepted": [
            "Device Driver"
          ]
        },
        {
          "q": "It is a technology that converts printed or handwritten text in images into machine-readable text.",
          "part": "identification",
          "type": "identification",
          "answerText": "Optical Character Recognition (OCR)",
          "accepted": [
            "Optical Character Recognition (OCR)"
          ]
        },
        {
          "q": "An SSD uses magnetic storage and contains rotating disks.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "A firewall monitors network traffic and helps control incoming and outgoing connections.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "1-4": [
    {
      "title": "Input, Processing , Output,And Storage — 10-Item Quiz",
      "questions": [
        {
          "q": "What are the five main stages of the Information Processing Cycle?",
          "part": "multiple_choice",
          "options": [
            "Input, Process, Save, Print, Delete",
            "Input, Processing, Storage, Output, Communication",
            "Open, Process, Edit, Save, Close",
            "Input, Output, Download, Upload, Storage"
          ],
          "answer": 1
        },
        {
          "q": "Which stage involves entering data into a computer using devices such as a keyboard, mouse, or microphone?",
          "part": "multiple_choice",
          "options": [
            "Processing",
            "Storage",
            "Input",
            "Output"
          ],
          "answer": 2
        },
        {
          "q": "Which component is responsible for processing instructions and performing calculations?",
          "part": "multiple_choice",
          "options": [
            "CPU",
            "Monitor",
            "Keyboard",
            "Printer"
          ],
          "answer": 0
        },
        {
          "q": "Which type of processing involves collecting data and processing it as a group at a scheduled time?",
          "part": "multiple_choice",
          "options": [
            "Real-Time Processing",
            "Batch Processing",
            "Interactive Processing",
            "Distributed Processing"
          ],
          "answer": 1
        },
        {
          "q": "What does GIGO stand for?",
          "part": "multiple_choice",
          "options": [
            "General Input, General Output",
            "Garbage In, Garbage Out",
            "Generated Information, Generated Output",
            "Global Input, Global Output"
          ],
          "answer": 1
        },
        {
          "q": "It is the smallest unit of digital information and can have a value of 0 or 1.",
          "part": "identification",
          "type": "identification",
          "answerText": "Bit",
          "accepted": [
            "Bit"
          ]
        },
        {
          "q": "It is a technology that converts printed or handwritten text in images into machine-readable text.",
          "part": "identification",
          "type": "identification",
          "answerText": "Optical Character Recognition (OCR)",
          "accepted": [
            "Optical Character Recognition (OCR)"
          ]
        },
        {
          "q": "It is an organized collection of information that can be stored, managed, and retrieved using computer software.",
          "part": "identification",
          "type": "identification",
          "answerText": "Database",
          "accepted": [
            "Database"
          ]
        },
        {
          "q": "RAM temporarily holds information that the CPU needs while executing programs.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "Communication allows computers, applications, users, and networks to exchange information.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "1-5": [
    {
      "title": "Data, Information, And Number System — 10-Item Quiz",
      "questions": [
        {
          "q": "Which number system uses only two digits, 0 and 1?",
          "part": "multiple_choice",
          "options": [
            "Decimal",
            "Binary",
            "Octal",
            "Hexadecimal"
          ],
          "answer": 1
        },
        {
          "q": "What is the base of the hexadecimal number system?",
          "part": "multiple_choice",
          "options": [
            "Base 2",
            "Base 8",
            "Base 10",
            "Base 16"
          ],
          "answer": 3
        },
        {
          "q": "How many bits are there in one byte?",
          "part": "multiple_choice",
          "options": [
            "2 bits",
            "4 bits",
            "8 bits",
            "16 bits"
          ],
          "answer": 2
        },
        {
          "q": "What is the binary equivalent of decimal number 10?",
          "part": "multiple_choice",
          "options": [
            "1001₂",
            "1010₂",
            "1100₂",
            "1110₂"
          ],
          "answer": 1
        },
        {
          "q": "Which logic gate produces an output of 1 only when both inputs are 1?",
          "part": "multiple_choice",
          "options": [
            "OR",
            "NOT",
            "XOR",
            "AND"
          ],
          "answer": 3
        },
        {
          "q": "It is a very small and fast storage location inside the CPU that temporarily holds data and instructions.",
          "part": "identification",
          "type": "identification",
          "answerText": "Register",
          "accepted": [
            "Register"
          ]
        },
        {
          "q": "It is a character encoding standard that supports different writing systems, mathematical symbols, and emojis.",
          "part": "identification",
          "type": "identification",
          "answerText": "Unicode",
          "accepted": [
            "Unicode"
          ]
        },
        {
          "q": "It is a method of representing negative binary numbers by inverting all bits and adding 1.",
          "part": "identification",
          "type": "identification",
          "answerText": "Two's Complement",
          "accepted": [
            "Two's Complement"
          ]
        },
        {
          "q": "Convert the binary number 1011₂ into decimal.",
          "part": "problem",
          "type": "identification",
          "answerText": "11",
          "accepted": [
            "11",
            "11₁₀",
            "11₂"
          ]
        },
        {
          "q": "Convert the decimal number 15₁₀ into binary.",
          "part": "problem",
          "type": "identification",
          "answerText": "1111",
          "accepted": [
            "1111",
            "1111₁₀",
            "1111₂"
          ]
        }
      ]
    }
  ],
  "1-6": [
    {
      "title": "Operating System — 10-Item Quiz",
      "questions": [
        {
          "q": "What is an operating system in simple words?",
          "part": "multiple_choice",
          "options": [
            "A computer game",
            "Manager of the computer",
            "A storage device",
            "An input device"
          ],
          "answer": 1
        },
        {
          "q": "Which component is considered the core of an operating system?",
          "part": "multiple_choice",
          "options": [
            "Shell",
            "File System",
            "Kernel",
            "Device Driver"
          ],
          "answer": 2
        },
        {
          "q": "Which user interface allows users to interact with a computer by typing commands?",
          "part": "multiple_choice",
          "options": [
            "GUI",
            "CLI",
            "Desktop",
            "Application"
          ],
          "answer": 1
        },
        {
          "q": "Which CPU scheduling algorithm executes processes in the order they arrive?",
          "part": "multiple_choice",
          "options": [
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin",
            "First-Come, First-Served"
          ],
          "answer": 3
        },
        {
          "q": "What is the main purpose of virtual memory?",
          "part": "multiple_choice",
          "options": [
            "To permanently store files",
            "To support memory management when physical RAM is insufficient",
            "To increase monitor resolution",
            "To manage printer connections"
          ],
          "answer": 1
        },
        {
          "q": "What is the process of starting a computer and loading the operating system into memory?",
          "part": "identification",
          "type": "identification",
          "answerText": "Boot Process",
          "accepted": [
            "Boot Process"
          ]
        },
        {
          "q": "What data structure stores information about a process, such as its process ID, state, and scheduling information?",
          "part": "identification",
          "type": "identification",
          "answerText": "Process Control Block (PCB)",
          "accepted": [
            "Process Control Block (PCB)"
          ]
        },
        {
          "q": "What software allows the operating system to communicate with a particular hardware device?",
          "part": "identification",
          "type": "identification",
          "answerText": "Device Driver",
          "accepted": [
            "Device Driver"
          ]
        },
        {
          "q": "A process is a program that is currently being executed.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "Multithreading allows multiple threads to perform activities within a single process.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "1-7": [
    {
      "title": "Programs And Processes In Computing — 10-Item Quiz",
      "questions": [
        {
          "q": "What is a program in computing?",
          "part": "multiple_choice",
          "options": [
            "A program currently being executed",
            "A set of instructions designed to perform specific tasks",
            "A computer hardware component",
            "A type of memory"
          ],
          "answer": 1
        },
        {
          "q": "What is a process?",
          "part": "multiple_choice",
          "options": [
            "A stored file that cannot be executed",
            "A programming language",
            "An executing instance of a program",
            "A storage device"
          ],
          "answer": 2
        },
        {
          "q": "Which component of the operating system stores important information about a process, such as its process ID and state?",
          "part": "multiple_choice",
          "options": [
            "CPU",
            "Process Control Block (PCB)",
            "RAM",
            "Shell"
          ],
          "answer": 1
        },
        {
          "q": "Which process state means that a process is currently being executed by the CPU?",
          "part": "multiple_choice",
          "options": [
            "New",
            "Ready",
            "Waiting",
            "Running"
          ],
          "answer": 3
        },
        {
          "q": "Which CPU scheduling algorithm gives each process a fixed amount of CPU time called a time quantum?",
          "part": "multiple_choice",
          "options": [
            "First-Come, First-Served",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
          ],
          "answer": 3
        },
        {
          "q": "What is the process of saving the current execution state of one process or thread and restoring another?",
          "part": "identification",
          "type": "identification",
          "answerText": "Context Switching",
          "accepted": [
            "Context Switching"
          ]
        },
        {
          "q": "What is the smallest unit of execution within a process?",
          "part": "identification",
          "type": "identification",
          "answerText": "Thread",
          "accepted": [
            "Thread"
          ]
        },
        {
          "q": "What is the communication method that allows separate processes to exchange information and coordinate their activities?",
          "part": "identification",
          "type": "identification",
          "answerText": "Inter-Process Communication (IPC)",
          "accepted": [
            "Inter-Process Communication (IPC)"
          ]
        },
        {
          "q": "Threads within the same process share the process's memory space and certain resources.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A deadlock occurs when two or more processes become unable to continue because each is waiting for a resource held by another process.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "1-8": [
    {
      "title": "Computer Networks And The Internet — 10-Item Quiz",
      "questions": [
        {
          "q": "What is the Internet?\nA. A collection of websites only\nB. A global network of interconnected computers and devices\nC. A computer operating system\nD. A single powerful computer",
          "part": "multiple_choice",
          "type": "identification",
          "answerText": "B – A global network of interconnected computers and devices",
          "accepted": [
            "B – A global network of interconnected computers and devices"
          ]
        },
        {
          "q": "Which device connects different networks and determines the best path for data packets?\nA. Hub\nB. Switch\nC. Router\nD. Modem",
          "part": "multiple_choice",
          "type": "identification",
          "answerText": "C – Router",
          "accepted": [
            "C – Router"
          ]
        },
        {
          "q": "Which protocol is responsible for reliable and orderly data delivery?\nA. HTTP\nB. TCP\nC. DNS\nD. DHCP",
          "part": "multiple_choice",
          "type": "identification",
          "answerText": "B – TCP",
          "accepted": [
            "B – TCP"
          ]
        },
        {
          "q": "What system translates human-readable domain names into IP addresses?\nA. HTML\nB. SMTP\nC. DNS\nD. FTP",
          "part": "multiple_choice",
          "type": "identification",
          "answerText": "C – DNS",
          "accepted": [
            "C – DNS"
          ]
        },
        {
          "q": "Which OSI layer handles logical addressing and routing?\nA. Physical Layer\nB. Data Link Layer\nC. Network Layer\nD. Application Layer",
          "part": "multiple_choice",
          "type": "identification",
          "answerText": "C – Network Layer",
          "accepted": [
            "C – Network Layer"
          ]
        },
        {
          "q": "A network that connects devices within a limited geographical area, such as a classroom or office.",
          "part": "identification",
          "type": "identification",
          "answerText": "Local Area Network (LAN)",
          "accepted": [
            "Local Area Network (LAN)"
          ]
        },
        {
          "q": "A wireless technology commonly used to connect nearby devices such as headphones, speakers, and smartwatches.",
          "part": "identification",
          "type": "identification",
          "answerText": "Bluetooth",
          "accepted": [
            "Bluetooth"
          ]
        },
        {
          "q": "A protocol that automatically provides devices with IP addresses and other network configuration information.",
          "part": "identification",
          "type": "identification",
          "answerText": "Dynamic Host Configuration Protocol (DHCP)",
          "accepted": [
            "Dynamic Host Configuration Protocol (DHCP)"
          ]
        },
        {
          "q": "HTTPS uses encryption through Transport Layer Security (TLS) to help protect communication between a browser and a website.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "UDP guarantees that all packets arrive successfully and in the correct order.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        }
      ]
    }
  ],
  "1-9": [
    {
      "title": "Computer Ethics And Cyber Security — 10-Item Quiz",
      "questions": [
        {
          "q": "What does computer ethics refer to?\nA. Rules for repairing computers\nB. Moral principles that guide responsible computer use\nC. Ways to improve computer speed\nD. Methods of installing software",
          "part": "multiple_choice",
          "type": "identification",
          "answerText": "B – Moral principles that guide responsible computer use",
          "accepted": [
            "B – Moral principles that guide responsible computer use"
          ]
        },
        {
          "q": "Which of the following is an example of unethical computer behavior?\nA. Giving credit to the original author\nB. Respecting other people's privacy\nC. Using pirated software\nD. Protecting personal information",
          "part": "multiple_choice",
          "type": "identification",
          "answerText": "C – Using pirated software",
          "accepted": [
            "C – Using pirated software"
          ]
        },
        {
          "q": "What is the term for deceiving users through messages or websites to obtain private information?\nA. Ransomware\nB. Phishing\nC. Adware\nD. Plagiarism",
          "part": "multiple_choice",
          "type": "identification",
          "answerText": "B – Phishing",
          "accepted": [
            "B – Phishing"
          ]
        },
        {
          "q": "Which type of malware secretly collects information about a user's activities?\nA. Virus\nB. Worm\nC. Spyware\nD. Trojan Horse",
          "part": "multiple_choice",
          "type": "identification",
          "answerText": "C – Spyware",
          "accepted": [
            "C – Spyware"
          ]
        },
        {
          "q": "What is the main purpose of Multi-Factor Authentication (MFA)?\nA. To make passwords shorter\nB. To provide an additional layer of account protection\nC. To share account information\nD. To remove security updates",
          "part": "multiple_choice",
          "type": "identification",
          "answerText": "B – To provide an additional layer of account protection",
          "accepted": [
            "B – To provide an additional layer of account protection"
          ]
        },
        {
          "q": "The use of another person's words, ideas, or work without proper acknowledgment and presenting them as your own.",
          "part": "identification",
          "type": "identification",
          "answerText": "Plagiarism",
          "accepted": [
            "Plagiarism"
          ]
        },
        {
          "q": "Proper behavior and manners when communicating online.",
          "part": "identification",
          "type": "identification",
          "answerText": "Netiquette",
          "accepted": [
            "Netiquette"
          ]
        },
        {
          "q": "A set of rules explaining how members of an organization are allowed to use its computers, networks, and digital resources.",
          "part": "identification",
          "type": "identification",
          "answerText": "Acceptable Use Policy",
          "accepted": [
            "Acceptable Use Policy"
          ]
        },
        {
          "q": "Cyberbullying involves using digital platforms to repeatedly harass, threaten, embarrass, or intimidate another person.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "AI-generated information is always accurate, so there is no need to verify it using reliable sources.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        }
      ]
    }
  ],
  "1-10": [
    {
      "title": "Emerging Technologies And Artificial Intelligence — 10-Item Quiz",
      "questions": [
        {
          "q": "What is Artificial Intelligence (AI)?",
          "part": "multiple_choice",
          "options": [
            "Intelligence displayed only by humans",
            "Intelligence demonstrated by machines to mimic human behavior",
            "A computer storage device",
            "A type of computer virus"
          ],
          "answer": 1
        },
        {
          "q": "Which of the following is an example of AI when typing a document?",
          "part": "multiple_choice",
          "options": [
            "Printing a document",
            "Saving a file",
            "Automatic spelling and grammar suggestions",
            "Turning off the computer"
          ],
          "answer": 2
        },
        {
          "q": "What is Machine Learning?",
          "part": "multiple_choice",
          "options": [
            "A way of training algorithms to learn from data",
            "A process of manually repairing computers",
            "A method of storing files",
            "A type of computer hardware"
          ],
          "answer": 0
        },
        {
          "q": "Which machine learning method uses trial and error to discover actions that provide the greatest rewards?",
          "part": "multiple_choice",
          "options": [
            "Supervised Learning",
            "Unsupervised Learning",
            "Semi-supervised Learning",
            "Reinforcement Learning"
          ],
          "answer": 3
        },
        {
          "q": "What is Deep Learning inspired by?",
          "part": "multiple_choice",
          "options": [
            "Human muscles",
            "The structure and function of the human brain",
            "Computer networks",
            "Database systems"
          ],
          "answer": 1
        },
        {
          "q": "A technology that allows computers to learn from training examples using interconnected processing nodes.",
          "part": "identification",
          "type": "identification",
          "answerText": "Neural Networks",
          "accepted": [
            "Neural Networks"
          ]
        },
        {
          "q": "A structured set of data held in a computer's memory or on the cloud.",
          "part": "identification",
          "type": "identification",
          "answerText": "Database",
          "accepted": [
            "Database"
          ]
        },
        {
          "q": "The technology solution used to manage the storage and retrieval of data from databases.",
          "part": "identification",
          "type": "identification",
          "answerText": "Database Management System (DBMS)",
          "accepted": [
            "Database Management System (DBMS)"
          ]
        },
        {
          "q": "Chatbots provide quick responses to commonly asked questions and help reduce human labor and expenditure.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "Big Data Analytics uses analytical techniques to discover hidden patterns, correlations, and insights from large amounts of data.",
          "part": "true_false",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        }
      ]
    }
  ]
});


/* Complete 2nd Year assessments, faithfully organized in DOCX order. */
Object.assign(quizBank, {
  "2-1": [
    {
      "title": "Computer System Platforms and Architecture — Final Assessment",
      "questions": [
        {
          "q": "Which term describes the programmer-visible behavior of a processor?",
          "options": [
            "Architecture",
            "Cooling",
            "Fabrication",
            "Chassis"
          ],
          "answer": 0
        },
        {
          "q": "What does an operating system primarily do?",
          "options": [
            "Manage resources and provide services",
            "Replace the CPU",
            "Manufacture memory",
            "Convert all data to text"
          ],
          "answer": 0
        },
        {
          "q": "Which memory is commonly used for main system RAM?",
          "options": [
            "DRAM",
            "Optical disc",
            "ROM only",
            "Magnetic tape"
          ],
          "answer": 0
        },
        {
          "q": "What is the purpose of an ISA?",
          "options": [
            "Define software-visible machine behavior",
            "Set monitor brightness",
            "Specify a computer’s color",
            "Replace an OS"
          ],
          "answer": 0
        },
        {
          "q": "What is a cache hit?",
          "options": [
            "Requested data is found in cache",
            "A disk is damaged",
            "A CPU overheats",
            "A network packet is lost"
          ],
          "answer": 0
        },
        {
          "q": "Which component performs arithmetic and logical operations?",
          "options": [
            "ALU",
            "Power supply",
            "Keyboard",
            "Fan"
          ],
          "answer": 0
        },
        {
          "q": "What is DMA used for?",
          "options": [
            "Data transfer with limited CPU involvement",
            "Encrypting every file",
            "Rendering fonts",
            "Naming domains"
          ],
          "answer": 0
        },
        {
          "q": "Which is a nonvolatile storage technology?",
          "options": [
            "Flash memory",
            "CPU register",
            "Typical DRAM",
            "L1 cache Final Assessment — Part B"
          ],
          "answer": 0
        },
        {
          "q": "What does a hypervisor manage?",
          "options": [
            "Virtual machines",
            "Webpage styles",
            "Keyboard layouts",
            "DNS names"
          ],
          "answer": 0
        },
        {
          "q": "Containers generally share which host resource?",
          "options": [
            "Operating-system kernel",
            "Separate physical motherboard",
            "Independent BIOS chip",
            "Dedicated CPU for every container"
          ],
          "answer": 0
        },
        {
          "q": "Which is especially important for a real-time system?",
          "options": [
            "Meeting timing requirements",
            "Maximum screen size",
            "Number of browser tabs",
            "File extension"
          ],
          "answer": 0
        },
        {
          "q": "What does an IP router do?",
          "options": [
            "Forward packets between networks",
            "Compile programs",
            "Store all files",
            "Display graphics"
          ],
          "answer": 0
        },
        {
          "q": "Which feature can help verify startup components?",
          "options": [
            "Secure boot",
            "Screen saver",
            "Clipboard",
            "File compression"
          ],
          "answer": 0
        },
        {
          "q": "Why is backup important even when RAID is used?",
          "options": [
            "RAID may not protect against deletion or site loss",
            "RAID makes backups impossible",
            "RAID prevents all malware",
            "RAID stores no data"
          ],
          "answer": 0
        },
        {
          "q": "What is a system bottleneck?",
          "options": [
            "A resource limiting overall performance",
            "A type of connector",
            "A programming language",
            "A security certificate"
          ],
          "answer": 0
        },
        {
          "q": "Explain why platform choice should be based on requirements rather than processor speed alone.",
          "type": "short_response"
        }
      ]
    }
  ],
  "2-2": [
    {
      "title": "Operating System Concepts and Functions — Multiple Choice",
      "questions": [
        {
          "q": "Which software manages hardware resources and provides services to applications?",
          "options": [
            "Operating system",
            "Spreadsheet",
            "Presentation file",
            "Image editor"
          ],
          "answer": 0
        },
        {
          "q": "What is the kernel?",
          "options": [
            "Core privileged OS component",
            "External storage",
            "User document",
            "Display device"
          ],
          "answer": 0
        },
        {
          "q": "Which is a process?",
          "options": [
            "A program in execution",
            "A printed page",
            "A source-code comment",
            "A file extension"
          ],
          "answer": 0
        },
        {
          "q": "Which scheduling algorithm uses a time quantum?",
          "options": [
            "Round Robin",
            "FCFS only",
            "SJF only",
            "FIFO storage allocation"
          ],
          "answer": 0
        },
        {
          "q": "What does a page table map?",
          "options": [
            "Virtual pages to physical frames",
            "Files to users",
            "Devices to cables",
            "Passwords to accounts"
          ],
          "answer": 0
        },
        {
          "q": "What is a page fault?",
          "options": [
            "An event requiring OS handling for a page access",
            "A broken keyboard",
            "A network cable issue",
            "A print queue"
          ],
          "answer": 0
        },
        {
          "q": "What does DMA support?",
          "options": [
            "Data transfer with limited CPU involvement",
            "User authentication",
            "File naming",
            "Screen resolution"
          ],
          "answer": 0
        },
        {
          "q": "What is spooling commonly used for?",
          "options": [
            "Queuing jobs for a device",
            "Allocating CPU registers",
            "Translating IP addresses",
            "Encrypting memory"
          ],
          "answer": 0
        },
        {
          "q": "Authentication means:",
          "options": [
            "Verifying identity",
            "Choosing permitted actions",
            "Compressing files",
            "Scheduling processes"
          ],
          "answer": 0
        },
        {
          "q": "Containers typically share the host:",
          "options": [
            "OS kernel",
            "Physical monitor",
            "BIOS battery",
            "Keyboard"
          ],
          "answer": 0
        },
        {
          "q": "Which is a real-time concern?",
          "options": [
            "Meeting timing deadlines",
            "Wallpaper style",
            "File icon size",
            "Screen color"
          ],
          "answer": 0
        },
        {
          "q": "What does a bootloader do?",
          "options": [
            "Loads the OS kernel during startup",
            "Edits documents",
            "Runs a browser tab",
            "Stores user passwords only"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "2-3": [
    {
      "title": "Processes, Threads, and Process Scheduling — Multiple Choice",
      "questions": [
        {
          "q": "What is a process?",
          "options": [
            "A physical computer component",
            "A program currently being executed",
            "A storage device",
            "A network connection"
          ],
          "answer": 1
        },
        {
          "q": "What is the main purpose of process scheduling?",
          "options": [
            "To create computer hardware",
            "To select which process receives processor time",
            "To delete stored documents",
            "To increase screen brightness"
          ],
          "answer": 1
        },
        {
          "q": "What is the smallest unit of execution commonly scheduled by modern operating systems?",
          "options": [
            "File",
            "Folder",
            "Thread",
            "Monitor"
          ],
          "answer": 2
        },
        {
          "q": "Which process state indicates that a process is waiting for processor time?",
          "options": [
            "Ready",
            "Terminated",
            "Running",
            "New"
          ],
          "answer": 0
        },
        {
          "q": "What does PCB stand for?",
          "options": [
            "Program Computer Bus",
            "Process Control Block",
            "Processor Core Buffer",
            "Primary Control Base"
          ],
          "answer": 1
        },
        {
          "q": "Which scheduling algorithm follows arrival order?",
          "options": [
            "SJF",
            "Priority",
            "FCFS",
            "Round Robin"
          ],
          "answer": 2
        },
        {
          "q": "Which scheduling method uses a time quantum?",
          "options": [
            "Round Robin",
            "FCFS",
            "Non-preemptive SJF",
            "Basic priority scheduling"
          ],
          "answer": 0
        },
        {
          "q": "What is a race condition?",
          "options": [
            "A hardware overheating problem",
            "A situation where the outcome depends on concurrent execution timing",
            "A network cable failure",
            "A storage formatting process"
          ],
          "answer": 1
        },
        {
          "q": "Which mechanism helps prevent simultaneous unsafe access to shared resources?",
          "options": [
            "Mutex",
            "Monitor display",
            "Keyboard",
            "Printer"
          ],
          "answer": 0
        },
        {
          "q": "Which is a necessary condition for deadlock?",
          "options": [
            "Circular wait",
            "High screen resolution",
            "Large storage capacity",
            "Fast network connectivity"
          ],
          "answer": 0
        },
        {
          "q": "Which algorithm selects the process with the shortest expected CPU burst?",
          "options": [
            "FCFS",
            "SJF",
            "Round Robin",
            "Multilevel Queue"
          ],
          "answer": 1
        },
        {
          "q": "What is context switching?",
          "options": [
            "Changing desktop wallpaper",
            "Saving one execution state and restoring another",
            "Moving files between folders",
            "Changing the operating system"
          ],
          "answer": 1
        },
        {
          "q": "Which technique gradually increases the priority of waiting processes?",
          "options": [
            "Aging",
            "Formatting",
            "Paging",
            "Spooling"
          ],
          "answer": 0
        },
        {
          "q": "Which communication method allows processes to exchange messages?",
          "options": [
            "Message passing",
            "CPU cooling",
            "Screen sharing",
            "Disk defragmentation"
          ],
          "answer": 0
        },
        {
          "q": "What is multithreading?",
          "options": [
            "Running multiple operating systems on one monitor",
            "Executing multiple threads within a process",
            "Connecting multiple printers",
            "Increasing hard drive capacity"
          ],
          "answer": 1
        }
      ]
    }
  ],
  "2-4": [
    {
      "title": "Memory Management and Virtual Memory — Multiple Choice",
      "questions": [
        {
          "q": "Which component normally translates virtual addresses into physical addresses?",
          "options": [
            "Keyboard controller",
            "Memory-management unit",
            "File compressor",
            "Display adapter"
          ],
          "answer": 1
        },
        {
          "q": "What does the offset identify in a paged virtual address?",
          "options": [
            "The byte within a page",
            "The process ID",
            "The disk partition",
            "The page-replacement policy"
          ],
          "answer": 0
        },
        {
          "q": "A TLB hit means:",
          "options": [
            "A disk read completed",
            "A cached address translation was found",
            "The process has crashed",
            "A page is necessarily swapped out"
          ],
          "answer": 1
        },
        {
          "q": "Which policy evicts the page that entered memory earliest?",
          "options": [
            "LRU",
            "FIFO",
            "Optimal",
            "Clock"
          ],
          "answer": 1
        },
        {
          "q": "What is thrashing?",
          "options": [
            "Excessive page movement that prevents useful progress",
            "A CPU overclock",
            "A file permission",
            "A cache-coherence protocol"
          ],
          "answer": 0
        },
        {
          "q": "Which statement about virtual memory is correct?",
          "options": [
            "It is identical to physical RAM",
            "It gives processes controlled virtual address spaces",
            "It removes all page faults",
            "It guarantees every access is fast"
          ],
          "answer": 1
        },
        {
          "q": "A clean file-backed page may often be:",
          "options": [
            "Discarded and read again from its file",
            "Executed as kernel code",
            "Converted into a register",
            "Used as a page table"
          ],
          "answer": 0
        },
        {
          "q": "Copy-on-write usually copies a shared page:",
          "options": [
            "At every context switch",
            "Only when a write requires a private copy",
            "Before a process starts",
            "Every time it is read"
          ],
          "answer": 1
        }
      ]
    },
    {
      "title": "Memory Management and Virtual Memory — True or False",
      "questions": [
        {
          "q": "Paging allows a process's pages to occupy nonadjacent physical frames",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A TLB miss always means that the referenced page is absent from RAM",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "External fragmentation is the presence of scattered free holes",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "Optimal page replacement can be implemented exactly without knowing future references",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "Swap storage is generally as fast as RAM",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "A page fault can be recoverable when a valid page is not resident",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "2-5": [
    {
      "title": "File Systems and Storage Management — Multiple Choice",
      "questions": [
        {
          "q": "What is the main purpose of a file system?",
          "options": [
            "Control CPU temperature",
            "Organize and manage stored data",
            "Schedule network packets",
            "Translate program instructions"
          ],
          "answer": 1
        },
        {
          "q": "Which structure commonly associates file names with file-system objects?",
          "options": [
            "Directory",
            "CPU register",
            "Cache line",
            "Process scheduler"
          ],
          "answer": 0
        },
        {
          "q": "Which allocation method records a list or tree of a file's data-block locations?",
          "options": [
            "Indexed allocation",
            "Rotational allocation",
            "Register allocation",
            "Thermal allocation"
          ],
          "answer": 0
        },
        {
          "q": "What does journaling primarily help with?",
          "options": [
            "Improving monitor resolution",
            "Recovering consistent metadata after interruption",
            "Encrypting every file automatically",
            "Increasing RAM"
          ],
          "answer": 1
        },
        {
          "q": "Which storage device uses rotating magnetic platters?",
          "options": [
            "SSD",
            "HDD",
            "USB flash drive",
            "NVMe controller"
          ],
          "answer": 1
        },
        {
          "q": "What does RAID 0 provide?",
          "options": [
            "Mirroring",
            "Striping without redundancy",
            "Dual parity",
            "Guaranteed backup"
          ],
          "answer": 1
        },
        {
          "q": "Which metric measures operations per second?",
          "options": [
            "IOPS",
            "RPO",
            "RTO",
            "RPM only"
          ],
          "answer": 0
        },
        {
          "q": "Why is a restore test important?",
          "options": [
            "It proves the backup can actually be recovered",
            "It increases disk capacity",
            "It disables encryption",
            "It prevents all hardware failures"
          ],
          "answer": 0
        }
      ]
    },
    {
      "title": "File Systems and Storage Management — True or False",
      "questions": [
        {
          "q": "A partition and a file system are exactly the same thing",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "An SSD uses flash memory and has no rotating mechanical platters",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "RAID is a complete replacement for an independent backup",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "A symbolic link stores a path reference to another object",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "Journaling guarantees that every recent application write is durable",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "Cloud object storage is accessed through object-oriented APIs rather than necessarily as a traditional local disk",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "2-6": [
    {
      "title": "Device and Input/Output Management — Multiple Choice",
      "questions": [
        {
          "q": "Which statement best describes an input device?",
          "options": [
            "It sends information into the computer",
            "It displays processed information",
            "It stores only permanent files",
            "It controls CPU clock"
          ],
          "answer": 0
        },
        {
          "q": "speed",
          "options": [
            "To translate operating-system requests into device-specific operations",
            "To replace the operating system",
            "To increase the physical size of memory",
            "To supply electrical power to every peripheral"
          ],
          "answer": 0
        },
        {
          "q": "Which I/O technique allows a controller to transfer data directly to memory with limited CPU involvement?",
          "options": [
            "Polling",
            "DMA",
            "Spooling",
            "Caching"
          ],
          "answer": 1
        },
        {
          "q": "What is an interrupt commonly used for?",
          "options": [
            "To notify the processor that an event needs attention",
            "To permanently store a file",
            "To format a printer page",
            "To increase monitor"
          ],
          "answer": 0
        },
        {
          "q": "resolution",
          "options": [
            "It always guarantees the fastest USB speed",
            "It is a connector shape and does not alone guarantee every feature",
            "It is used only for charging",
            "It cannot carry video"
          ],
          "answer": 1
        },
        {
          "q": "What is the primary purpose of a print spooler?",
          "options": [
            "To queue print jobs for later processing",
            "To scan a document",
            "To change screen brightness",
            "To encrypt every file"
          ],
          "answer": 0
        },
        {
          "q": "Which measure describes the time taken for an I/O request to complete?",
          "options": [
            "Latency",
            "Resolution",
            "Color depth",
            "Capacity"
          ],
          "answer": 0
        },
        {
          "q": "Which is the safest source for a device driver?",
          "options": [
            "An unknown file-sharing site",
            "A random pop-up",
            "The operating-system update service or device manufacturer",
            "An unverified"
          ],
          "answer": 2
        }
      ]
    },
    {
      "title": "Device and Input/Output Management — True or False",
      "questions": [
        {
          "q": "An output device sends information from the computer to a user or another system",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A touchscreen can function as both an input and an output device",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "Polling requires the CPU to check device status repeatedly",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "DMA always means that the CPU has no role in setting up a transfer",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "A device driver is hardware installed inside a computer",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "Buffering can help manage differences in the speed of two components",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A USB-C connector guarantees that every connected device supports identical data rates",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "Unknown removable USB devices can create security risks",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "2-7": [
    {
      "title": "Deadlocks and Resource Allocation — Multiple Choice",
      "questions": [
        {
          "q": "Which statement best describes a deadlock?",
          "options": [
            "Processes wait indefinitely for resources held by one another",
            "A process finishes earlier than expected",
            "The CPU executes two instructions at once",
            "A resource is shared safely"
          ],
          "answer": 0
        },
        {
          "q": "Which condition means a process holds one resource while waiting for another?",
          "options": [
            "Mutual exclusion",
            "Hold and wait",
            "No preemption",
            "Circular wait"
          ],
          "answer": 1
        },
        {
          "q": "What does a request edge represent in a resource-allocation graph?",
          "options": [
            "A resource assigned to a process",
            "A process waiting for a resource",
            "A process that has terminated",
            "A resource that has been"
          ],
          "answer": 1
        },
        {
          "q": "deleted",
          "options": [
            "Prevention",
            "Avoidance",
            "Recovery",
            "Timeout"
          ],
          "answer": 1
        },
        {
          "q": "What is the purpose of the Banker’s algorithm?",
          "options": [
            "Deadlock avoidance",
            "Disk formatting",
            "CPU scheduling only",
            "Network encryption"
          ],
          "answer": 0
        },
        {
          "q": "Which statement about a cycle in a resource-allocation graph is correct?",
          "options": [
            "A cycle always proves deadlock for every resource model",
            "A cycle proves deadlock only when all resource types have multiple instances",
            "With one instance per resource type, a cycle indicates deadlock",
            "Cycles are unrelated to deadlock"
          ],
          "answer": 2
        },
        {
          "q": "What is starvation?",
          "options": [
            "Every process is blocked in a circular wait",
            "A process waits indefinitely while others continue to receive resources",
            "Processes repeatedly change state without progress",
            "A resource is removed from the system"
          ],
          "answer": 1
        },
        {
          "q": "Which is a common database deadlock recovery method?",
          "options": [
            "Rollback a selected transaction",
            "Increase monitor brightness",
            "Disable all database indexes",
            "Delete the database log"
          ],
          "answer": 0
        }
      ]
    },
    {
      "title": "Deadlocks and Resource Allocation — True or False",
      "questions": [
        {
          "q": "All four Coffman conditions must hold for a deadlock in the classic model",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A safe state guarantees that a deadlock has already occurred",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "A process can be blocked while waiting for a resource",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A global lock ordering can prevent circular wait when followed consistently",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A cycle always proves deadlock even when resource types have multiple instances",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "A database may roll back one transaction to resolve a deadlock",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "Livelock processes may remain active even though useful progress is not made",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A timeout always proves that a distributed deadlock exists",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        }
      ]
    }
  ],
  "2-8": [
    {
      "title": "Virtualization and Virtual Machines — Multiple Choice",
      "questions": [
        {
          "q": "What component creates and manages virtual machines?",
          "options": [
            "Hypervisor",
            "DNS server",
            "File system",
            "Web browser"
          ],
          "answer": 0
        },
        {
          "q": "What is a guest operating system?",
          "options": [
            "The host's firmware",
            "The OS running inside a VM",
            "The hypervisor management console",
            "A physical switch"
          ],
          "answer": 1
        },
        {
          "q": "Which architecture runs a hypervisor directly on physical hardware?",
          "options": [
            "Type 2",
            "Type 1",
            "Container-only",
            "Emulation-only"
          ],
          "answer": 1
        },
        {
          "q": "Which resource is represented by a vCPU?",
          "options": [
            "Virtual processor execution context",
            "Virtual disk partition",
            "Network address",
            "Backup copy"
          ],
          "answer": 0
        },
        {
          "q": "What is the primary purpose of a virtual switch?",
          "options": [
            "Encrypt guest files",
            "Forward network traffic between virtual and physical interfaces",
            "Install guest updates",
            "Expand RAM"
          ],
          "answer": 1
        },
        {
          "q": "Which statement about snapshots is most accurate?",
          "options": [
            "They replace offsite backups",
            "They are always independent copies",
            "They capture a point-in-time state and are generally for short-term rollback",
            "They guarantee application consistency"
          ],
          "answer": 2
        },
        {
          "q": "What does RPO describe?",
          "options": [
            "Maximum targeted data loss measured in time",
            "Maximum CPU usage",
            "Time to patch a host",
            "Number of VM templates"
          ],
          "answer": 0
        },
        {
          "q": "Which practice best supports isolation?",
          "options": [
            "Flat network for all VMs",
            "Shared administrator password",
            "Least-privilege network rules",
            "Public management interface"
          ],
          "answer": 2
        },
        {
          "q": "What is a common advantage of containers compared with VMs?",
          "options": [
            "They always provide a separate guest kernel",
            "They usually have lower startup and resource overhead",
            "They eliminate security controls",
            "They require a separate physical host"
          ],
          "answer": 1
        },
        {
          "q": "What should guide VM sizing?",
          "options": [
            "Maximum possible allocation",
            "Another server's settings",
            "Measured workload requirements",
            "Random selection"
          ],
          "answer": 2
        }
      ]
    },
    {
      "title": "Virtualization and Virtual Machines — True or False",
      "questions": [
        {
          "q": "A VM normally runs its own guest operating system",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A snapshot is always a complete independent backup",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "A Type 2 hypervisor runs as an application on a host operating system",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "More vCPUs always make a VM faster",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "Virtual networking can be used to isolate workloads",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A host failure can affect every VM running on that host",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "Guest operating systems still require patching",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        },
        {
          "q": "A clone and a template are exactly the same thing",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "Live migration is possible in every configuration regardless of device assignment",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        },
        {
          "q": "Recovery plans should be tested",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0
        }
      ]
    }
  ],
  "2-9": [
    {
      "title": "Command-Line Interfaces and System Utilities — Multiple Choice",
      "questions": [
        {
          "q": "Which component reads the commands you type and asks the operating system to run",
          "options": [
            "Terminal emulator",
            "Shell",
            "Kernel",
            "Display driver"
          ],
          "answer": 1
        },
        {
          "q": "By convention, what exit status does a successful command return?",
          "options": [
            "0",
            "1",
            "-1",
            "255"
          ],
          "answer": 0
        },
        {
          "q": "Which command prints the current working directory?",
          "options": [
            "ls",
            "cd",
            "pwd",
            "dir"
          ],
          "answer": 2
        },
        {
          "q": "What does the command cd - do?",
          "options": [
            "Moves to the home directory",
            "Moves to the parent directory",
            "Returns to the previous directory",
            "Moves to the root directory"
          ],
          "answer": 2
        },
        {
          "q": "Which wildcard matches exactly one character?",
          "options": [
            "*",
            "?",
            "[ ]",
            "{ } 59"
          ],
          "answer": 1
        },
        {
          "q": "Which tar option extracts files from an archive?",
          "options": [
            "-c",
            "-t",
            "-x",
            "-z"
          ],
          "answer": 2
        },
        {
          "q": "Which command displays the first lines of a file?",
          "options": [
            "tail",
            "head",
            "cat",
            "wc"
          ],
          "answer": 1
        },
        {
          "q": "What does grep -v \"debug\" server.log display?",
          "options": [
            "Only lines that contain debug",
            "A count of lines that contain debug",
            "Only lines that do not contain debug",
            "The line numbers of debug lines"
          ],
          "answer": 2
        },
        {
          "q": "Which operator appends standard output to the end of a file?",
          "options": [
            ">",
            ">>",
            "<",
            "2>"
          ],
          "answer": 1
        },
        {
          "q": "Which file descriptor number is standard error?",
          "options": [
            "0",
            "1",
            "2",
            "3"
          ],
          "answer": 2
        },
        {
          "q": "Which permission string corresponds to the octal mode 755?",
          "options": [
            "rwxr-xr-x",
            "rw-r--r--",
            "rwx------",
            "rwxrwxrwx"
          ],
          "answer": 0
        },
        {
          "q": "Which command changes the owner of a file?",
          "options": [
            "chmod",
            "chown",
            "umask",
            "su"
          ],
          "answer": 1
        },
        {
          "q": "Which signal does the kill command send by default?",
          "options": [
            "SIGKILL",
            "SIGHUP",
            "SIGTERM",
            "SIGSTOP"
          ],
          "answer": 2
        },
        {
          "q": "Which command gives a continuously updating view of process activity?",
          "options": [
            "ps",
            "top 60",
            "jobs",
            "df"
          ],
          "answer": 1
        },
        {
          "q": "Which command reports free and used space on mounted file systems?",
          "options": [
            "du",
            "free",
            "df",
            "lsblk"
          ],
          "answer": 2
        },
        {
          "q": "Which utility provides an encrypted connection to a remote machine?",
          "options": [
            "ping",
            "ssh",
            "dig",
            "ss"
          ],
          "answer": 1
        },
        {
          "q": "What does the command sudo apt update do?",
          "options": [
            "Installs newer versions of all packages",
            "Refreshes the list of available packages",
            "Removes unused packages",
            "Installs a specific package"
          ],
          "answer": 1
        },
        {
          "q": "What is the first line of a script, such as #!/bin/bash, called?",
          "options": [
            "Shebang",
            "Comment block",
            "Pragma",
            "Header"
          ],
          "answer": 0
        },
        {
          "q": "When does the crontab schedule 30 2 * * 1 run the job?",
          "options": [
            "Every Monday at 02:30",
            "Every day at 02:30",
            "On the first of each month at 02:30",
            "Every 30 minutes on Mondays"
          ],
          "answer": 0
        },
        {
          "q": "Which naming pattern do PowerShell cmdlets follow?",
          "options": [
            "Noun-Verb",
            "Verb-Noun",
            "Lowercase letters only",
            "Numbers followed by words"
          ],
          "answer": 1
        }
      ]
    }
  ],
  "2-10": [
    {
      "title": "Mobile and Applications Platform — Multiple Choice",
      "questions": [
        {
          "q": "Which statement best defines a mobile platform?",
          "options": [
            "A phone's physical casing and screen",
            "The combination of operating system, APIs, tools, runtime, and distribution services on which mobile software is built",
            "Only the app store of a device manufacturer",
            "A cellular network standard such as 5G"
          ],
          "answer": 1
        },
        {
          "q": "In the general layered model, which layer sits directly above the hardware?",
          "options": [
            "Applications",
            "Application frameworks and SDKs",
            "Operating system kernel and drivers",
            "User documentation"
          ],
          "answer": 2
        },
        {
          "q": "The Android operating system is based on which kernel?",
          "options": [
            "Linux",
            "Darwin",
            "Windows NT",
            "Symbian"
          ],
          "answer": 0
        },
        {
          "q": "Which programming language did Apple introduce in 2014 as a modern successor to Objective-C?",
          "options": [
            "Kotlin",
            "Dart",
            "Swift",
            "C#"
          ],
          "answer": 2
        },
        {
          "q": "Which Android component presents a single screen of user interface?",
          "options": [
            "Service",
            "Activity",
            "Content provider",
            "Broadcast receiver"
          ],
          "answer": 1
        },
        {
          "q": "Which technology draws its own interface using its own rendering engine rather than platform",
          "options": [
            "Flutter",
            "Apache Cordova",
            "A mobile website",
            "Objective-C UIKit 51"
          ],
          "answer": 0
        },
        {
          "q": "A progressive web app depends on which two core technologies?",
          "options": [
            "Bytecode and Dalvik",
            "A web app manifest and a service worker",
            "An APK and an IPA",
            "Bluetooth and NFC"
          ],
          "answer": 1
        },
        {
          "q": "In the MVVM pattern, the ViewModel",
          "options": [
            "draws the interface directly",
            "exposes state that the View observes and does not hold a reference to the View",
            "replaces the database",
            "is created only for tablets"
          ],
          "answer": 1
        },
        {
          "q": "In an offline-first design, which component is the single source of truth?",
          "options": [
            "The remote server only",
            "The local database",
            "The push notification service",
            "The user interface"
          ],
          "answer": 1
        },
        {
          "q": "What minimum touch target size does Material Design recommend?",
          "options": [
            "24 by 24 dp",
            "32 by 32 dp",
            "48 by 48 dp",
            "96 by 96 dp"
          ],
          "answer": 2
        },
        {
          "q": "Which Android lifecycle callback is invoked when an activity becomes visible to the user?",
          "options": [
            "onCreate()",
            "onStart()",
            "onDestroy()",
            "onStop()"
          ],
          "answer": 1
        },
        {
          "q": "A memory leak occurs when",
          "options": [
            "the device battery is depleted",
            "an object that is no longer needed is still referenced and cannot be freed",
            "the screen is rotated",
            "the app is updated"
          ],
          "answer": 1
        },
        {
          "q": "Which approach best lets an app learn about new data while conserving battery?",
          "options": [
            "Polling the server every second",
            "Keeping a custom connection open permanently",
            "Using push notifications through the platform push service",
            "Asking the user to restart the app"
          ],
          "answer": 2
        },
        {
          "q": "Where should an Android app store an authentication token securely?",
          "options": [
            "In a plain text file on shared storage",
            "In the Android Keystore based secure storage",
            "In the app's log output",
            "In a screenshot 52"
          ],
          "answer": 1
        },
        {
          "q": "The main purpose of OAuth 2.0 is to",
          "options": [
            "compress images",
            "delegate limited access to resources without sharing the user's password",
            "render user interfaces",
            "measure battery use"
          ],
          "answer": 1
        },
        {
          "q": "OWASP MASVS is best described as",
          "options": [
            "a verification standard for mobile app security",
            "a mobile processor",
            "a programming language",
            "an app store"
          ],
          "answer": 0
        },
        {
          "q": "Which type of test should typically be the most numerous because it is the fastest and cheapest?",
          "options": [
            "Unit tests",
            "End-to-end tests on real devices",
            "Manual tests",
            "Penetration tests"
          ],
          "answer": 0
        },
        {
          "q": "A staged rollout means",
          "options": [
            "publishing only in one language",
            "releasing a new version gradually to a percentage of users",
            "removing the app from the store",
            "testing only on emulators"
          ],
          "answer": 1
        },
        {
          "q": "Edge computing refers to",
          "options": [
            "processing data closer to the users or devices that produce it",
            "storing all data on the phone screen",
            "a type of phone case",
            "a new programming language"
          ],
          "answer": 0
        },
        {
          "q": "Which Philippine law sets obligations for the processing of personal information?",
          "options": [
            "The Data Privacy Act of 2012 (Republic Act No. 10173)",
            "The Mobile Number Portability Act",
            "The Electronic Banking Act",
            "The Mobile Games Act"
          ],
          "answer": 0
        }
      ]
    }
  ]
});
booksByYear[2] = ["Computer System Platforms and Architecture", "Operating System Concepts and Functions", "Processes, Threads, and Process Scheduling", "Memory Management and Virtual Memory", "File Systems and Storage Management", "Device and Input/Output Management", "Deadlocks and Resource Allocation", "Virtualization and Virtual Machines", "Command-Line Interfaces and System Utilities", "Mobile and Applications Platform"];

/* One mixed-type assessment per 2nd Year book. Keep every original item and answer. */
for (let bookNumber = 1; bookNumber <= 10; bookNumber++) {
  const key = `2-${bookNumber}`;
  const assessments = quizBank[key] || [];
  if (!assessments.length) continue;
  quizBank[key] = [{
    title: `${booksByYear[2][bookNumber - 1]} — Complete Quiz`,
    questions: assessments.flatMap(assessment => assessment.questions)
  }];
}


/* Third Year: 10 lesson-based quizzes (10 multiple choice and 10 true/false each). */
booksByYear[3] = ["Internet and World Wide Web Fundamentals", "Web Browsers, Servers, and HTTP/HTTPS Fundamentals", "HTML Fundamentals and Semantic Elements", "Responsive Web Design Fundamentals", "CSS Styling, Layouts, Flexbox and Grid", "Advanced HTML Forms and Form Validation", "User Interface Design and Accessibility Fundamentals", "JavaScript Fundamentals and DOM Manipulation", "Authentication, Authorization and Web Security", "Website Testing, Hosting, Deployment, and Maintenance"];
Object.assign(quizBank, {
  "3-1": [
    {
      "title": "Internet and World Wide Web Fundamentals — Complete Mixed Quiz",
      "questions": [
        {
          "q": "Which term best matches this description: Global network of interconnected networks?",
          "type": "multiple_choice",
          "options": [
            "World Wide Web",
            "Internet",
            "ISP",
            "DNS"
          ],
          "answer": 1,
          "explanation": "Internet: Global network of interconnected networks."
        },
        {
          "q": "Which term best matches this description: Linked information system accessed over the Internet?",
          "type": "multiple_choice",
          "options": [
            "World Wide Web",
            "ARPANET",
            "Fiber-optic connection",
            "Router"
          ],
          "answer": 0,
          "explanation": "World Wide Web: Linked information system accessed over the Internet."
        },
        {
          "q": "Which term best matches this description: Early research network that began connecting institutions in 1969?",
          "type": "multiple_choice",
          "options": [
            "ISP",
            "Wi-Fi",
            "HTTP",
            "ARPANET"
          ],
          "answer": 3,
          "explanation": "ARPANET: Early research network that began connecting institutions in 1969."
        },
        {
          "q": "Which term best matches this description: Provider that supplies Internet connectivity?",
          "type": "multiple_choice",
          "options": [
            "Fiber-optic connection",
            "DNS",
            "ISP",
            "Phishing"
          ],
          "answer": 2,
          "explanation": "ISP: Provider that supplies Internet connectivity."
        },
        {
          "q": "Which term best matches this description: Wired connection that carries data using light?",
          "type": "multiple_choice",
          "options": [
            "Wi-Fi",
            "Fiber-optic connection",
            "Router",
            "Internet"
          ],
          "answer": 1,
          "explanation": "Fiber-optic connection: Wired connection that carries data using light."
        },
        {
          "q": "Which term best matches this description: Wireless technology connecting devices to a local network?",
          "type": "multiple_choice",
          "options": [
            "Wi-Fi",
            "DNS",
            "HTTP",
            "World Wide Web"
          ],
          "answer": 0,
          "explanation": "Wi-Fi: Wireless technology connecting devices to a local network."
        },
        {
          "q": "Which term best matches this description: System that translates domain names into IP addresses?",
          "type": "multiple_choice",
          "options": [
            "Router",
            "Phishing",
            "ARPANET",
            "DNS"
          ],
          "answer": 3,
          "explanation": "DNS: System that translates domain names into IP addresses."
        },
        {
          "q": "Which term best matches this description: Device that forwards packets between networks?",
          "type": "multiple_choice",
          "options": [
            "HTTP",
            "Internet",
            "Router",
            "ISP"
          ],
          "answer": 2,
          "explanation": "Router: Device that forwards packets between networks."
        },
        {
          "q": "Which term best matches this description: Protocol for requests and responses on the Web?",
          "type": "multiple_choice",
          "options": [
            "Phishing",
            "HTTP",
            "World Wide Web",
            "Fiber-optic connection"
          ],
          "answer": 1,
          "explanation": "HTTP: Protocol for requests and responses on the Web."
        },
        {
          "q": "Which term best matches this description: Deceptive messages intended to trick people into sharing information?",
          "type": "multiple_choice",
          "options": [
            "Phishing",
            "Internet",
            "ARPANET",
            "Wi-Fi"
          ],
          "answer": 0,
          "explanation": "Phishing: Deceptive messages intended to trick people into sharing information."
        },
        {
          "q": "Internet refers to: Global network of interconnected networks.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Internet: Global network of interconnected networks."
        },
        {
          "q": "World Wide Web refers to: System that translates domain names into IP addresses.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "World Wide Web: Linked information system accessed over the Internet."
        },
        {
          "q": "ARPANET refers to: Early research network that began connecting institutions in 1969.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "ARPANET: Early research network that began connecting institutions in 1969."
        },
        {
          "q": "ISP refers to: Protocol for requests and responses on the Web.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "ISP: Provider that supplies Internet connectivity."
        },
        {
          "q": "Fiber-optic connection refers to: Wired connection that carries data using light.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Fiber-optic connection: Wired connection that carries data using light."
        },
        {
          "q": "Wi-Fi refers to: Wireless technology connecting devices to a local network.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Wi-Fi: Wireless technology connecting devices to a local network."
        },
        {
          "q": "Router refers to: System that translates domain names into IP addresses.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "DNS: System that translates domain names into IP addresses."
        },
        {
          "q": "Router refers to: Device that forwards packets between networks.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Router: Device that forwards packets between networks."
        },
        {
          "q": "Phishing refers to: Protocol for requests and responses on the Web.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "HTTP: Protocol for requests and responses on the Web."
        },
        {
          "q": "Phishing refers to: Deceptive messages intended to trick people into sharing information.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Phishing: Deceptive messages intended to trick people into sharing information."
        }
      ]
    }
  ],
  "3-2": [
    {
      "title": "Web Browsers, Servers, and HTTP/HTTPS Fundamentals — Complete Mixed Quiz",
      "questions": [
        {
          "q": "Which term best matches this description: Client software that retrieves and displays web resources?",
          "type": "multiple_choice",
          "options": [
            "Web server",
            "HTML",
            "Web browser",
            "HTTP response"
          ],
          "answer": 2,
          "explanation": "Web browser: Client software that retrieves and displays web resources."
        },
        {
          "q": "Which term best matches this description: System that receives requests and returns web resources?",
          "type": "multiple_choice",
          "options": [
            "Client-server architecture",
            "Web server",
            "CSS",
            "HTTPS"
          ],
          "answer": 1,
          "explanation": "Web server: System that receives requests and returns web resources."
        },
        {
          "q": "Which term best matches this description: Model where clients request services from servers?",
          "type": "multiple_choice",
          "options": [
            "Client-server architecture",
            "HTML",
            "HTTP request",
            "TLS certificate"
          ],
          "answer": 0,
          "explanation": "Client-server architecture: Model where clients request services from servers."
        },
        {
          "q": "Which term best matches this description: Markup used to structure webpage content?",
          "type": "multiple_choice",
          "options": [
            "CSS",
            "HTTP response",
            "Cookie",
            "HTML"
          ],
          "answer": 3,
          "explanation": "HTML: Markup used to structure webpage content."
        },
        {
          "q": "Which term best matches this description: Style rules controlling webpage appearance?",
          "type": "multiple_choice",
          "options": [
            "HTTP request",
            "HTTPS",
            "CSS",
            "Web browser"
          ],
          "answer": 2,
          "explanation": "CSS: Style rules controlling webpage appearance."
        },
        {
          "q": "Which term best matches this description: Message sent by a client to request a web resource?",
          "type": "multiple_choice",
          "options": [
            "HTTP response",
            "HTTP request",
            "TLS certificate",
            "Web server"
          ],
          "answer": 1,
          "explanation": "HTTP request: Message sent by a client to request a web resource."
        },
        {
          "q": "Which term best matches this description: Message returned by a server with status and content?",
          "type": "multiple_choice",
          "options": [
            "HTTP response",
            "HTTPS",
            "Cookie",
            "Client-server architecture"
          ],
          "answer": 0,
          "explanation": "HTTP response: Message returned by a server with status and content."
        },
        {
          "q": "Which term best matches this description: HTTP communication protected with TLS?",
          "type": "multiple_choice",
          "options": [
            "TLS certificate",
            "Web browser",
            "HTML",
            "HTTPS"
          ],
          "answer": 3,
          "explanation": "HTTPS: HTTP communication protected with TLS."
        },
        {
          "q": "Which term best matches this description: Credential used to help authenticate a secure website?",
          "type": "multiple_choice",
          "options": [
            "Cookie",
            "Web server",
            "TLS certificate",
            "CSS"
          ],
          "answer": 2,
          "explanation": "TLS certificate: Credential used to help authenticate a secure website."
        },
        {
          "q": "Which term best matches this description: Small piece of data a site can store in a browser?",
          "type": "multiple_choice",
          "options": [
            "Web browser",
            "Cookie",
            "Client-server architecture",
            "HTTP request"
          ],
          "answer": 1,
          "explanation": "Cookie: Small piece of data a site can store in a browser."
        },
        {
          "q": "Web browser refers to: Client software that retrieves and displays web resources.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Web browser: Client software that retrieves and displays web resources."
        },
        {
          "q": "Web server refers to: Message returned by a server with status and content.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Web server: System that receives requests and returns web resources."
        },
        {
          "q": "Client-server architecture refers to: Model where clients request services from servers.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Client-server architecture: Model where clients request services from servers."
        },
        {
          "q": "HTML refers to: Credential used to help authenticate a secure website.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "HTML: Markup used to structure webpage content."
        },
        {
          "q": "CSS refers to: Style rules controlling webpage appearance.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "CSS: Style rules controlling webpage appearance."
        },
        {
          "q": "HTTP request refers to: Message sent by a client to request a web resource.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "HTTP request: Message sent by a client to request a web resource."
        },
        {
          "q": "HTTPS refers to: Message returned by a server with status and content.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "HTTP response: Message returned by a server with status and content."
        },
        {
          "q": "HTTPS refers to: HTTP communication protected with TLS.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "HTTPS: HTTP communication protected with TLS."
        },
        {
          "q": "Cookie refers to: Credential used to help authenticate a secure website.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "TLS certificate: Credential used to help authenticate a secure website."
        },
        {
          "q": "Cookie refers to: Small piece of data a site can store in a browser.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Cookie: Small piece of data a site can store in a browser."
        }
      ]
    }
  ],
  "3-3": [
    {
      "title": "HTML Fundamentals and Semantic Elements — Complete Mixed Quiz",
      "questions": [
        {
          "q": "Which term best matches this description: Markup language used to structure webpages?",
          "type": "multiple_choice",
          "options": [
            "DOCTYPE",
            "body element",
            "nav element",
            "HTML"
          ],
          "answer": 3,
          "explanation": "HTML: Markup language used to structure webpages."
        },
        {
          "q": "Which term best matches this description: Declaration that identifies the HTML document type?",
          "type": "multiple_choice",
          "options": [
            "head element",
            "anchor element",
            "DOCTYPE",
            "main element"
          ],
          "answer": 2,
          "explanation": "DOCTYPE: Declaration that identifies the HTML document type."
        },
        {
          "q": "Which term best matches this description: Contains page metadata and title?",
          "type": "multiple_choice",
          "options": [
            "body element",
            "head element",
            "img element",
            "article element"
          ],
          "answer": 1,
          "explanation": "head element: Contains page metadata and title."
        },
        {
          "q": "Which term best matches this description: Contains visible page content?",
          "type": "multiple_choice",
          "options": [
            "body element",
            "anchor element",
            "nav element",
            "label element"
          ],
          "answer": 0,
          "explanation": "body element: Contains visible page content."
        },
        {
          "q": "Which term best matches this description: Creates hyperlinks?",
          "type": "multiple_choice",
          "options": [
            "img element",
            "main element",
            "HTML",
            "anchor element"
          ],
          "answer": 3,
          "explanation": "anchor element: Creates hyperlinks."
        },
        {
          "q": "Which term best matches this description: Embeds an image in a webpage?",
          "type": "multiple_choice",
          "options": [
            "nav element",
            "article element",
            "img element",
            "DOCTYPE"
          ],
          "answer": 2,
          "explanation": "img element: Embeds an image in a webpage."
        },
        {
          "q": "Which term best matches this description: Marks a section of navigation links?",
          "type": "multiple_choice",
          "options": [
            "main element",
            "nav element",
            "label element",
            "head element"
          ],
          "answer": 1,
          "explanation": "nav element: Marks a section of navigation links."
        },
        {
          "q": "Which term best matches this description: Marks the main content of a document?",
          "type": "multiple_choice",
          "options": [
            "main element",
            "article element",
            "HTML",
            "body element"
          ],
          "answer": 0,
          "explanation": "main element: Marks the main content of a document."
        },
        {
          "q": "Which term best matches this description: Represents self-contained content?",
          "type": "multiple_choice",
          "options": [
            "label element",
            "DOCTYPE",
            "anchor element",
            "article element"
          ],
          "answer": 3,
          "explanation": "article element: Represents self-contained content."
        },
        {
          "q": "Which term best matches this description: Provides a text label for a form control?",
          "type": "multiple_choice",
          "options": [
            "HTML",
            "head element",
            "label element",
            "img element"
          ],
          "answer": 2,
          "explanation": "label element: Provides a text label for a form control."
        },
        {
          "q": "HTML refers to: Markup language used to structure webpages.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "HTML: Markup language used to structure webpages."
        },
        {
          "q": "DOCTYPE refers to: Marks a section of navigation links.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "DOCTYPE: Declaration that identifies the HTML document type."
        },
        {
          "q": "head element refers to: Contains page metadata and title.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "head element: Contains page metadata and title."
        },
        {
          "q": "body element refers to: Represents self-contained content.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "body element: Contains visible page content."
        },
        {
          "q": "anchor element refers to: Creates hyperlinks.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "anchor element: Creates hyperlinks."
        },
        {
          "q": "img element refers to: Embeds an image in a webpage.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "img element: Embeds an image in a webpage."
        },
        {
          "q": "main element refers to: Marks a section of navigation links.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "nav element: Marks a section of navigation links."
        },
        {
          "q": "main element refers to: Marks the main content of a document.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "main element: Marks the main content of a document."
        },
        {
          "q": "label element refers to: Represents self-contained content.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "article element: Represents self-contained content."
        },
        {
          "q": "label element refers to: Provides a text label for a form control.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "label element: Provides a text label for a form control."
        }
      ]
    }
  ],
  "3-4": [
    {
      "title": "Responsive Web Design Fundamentals — Complete Mixed Quiz",
      "questions": [
        {
          "q": "Which term best matches this description: Approach that adapts layout to different screens and viewports?",
          "type": "multiple_choice",
          "options": [
            "Responsive web design",
            "Viewport",
            "Breakpoint",
            "CSS Grid"
          ],
          "answer": 0,
          "explanation": "Responsive web design: Approach that adapts layout to different screens and viewports."
        },
        {
          "q": "Which term best matches this description: Visible area of a webpage on a device?",
          "type": "multiple_choice",
          "options": [
            "Media query",
            "Container query",
            "Fluid typography",
            "Viewport"
          ],
          "answer": 3,
          "explanation": "Viewport: Visible area of a webpage on a device."
        },
        {
          "q": "Which term best matches this description: CSS condition applying styles for particular environments?",
          "type": "multiple_choice",
          "options": [
            "Breakpoint",
            "Flexbox",
            "Media query",
            "Mobile-first design"
          ],
          "answer": 2,
          "explanation": "Media query: CSS condition applying styles for particular environments."
        },
        {
          "q": "Which term best matches this description: Point where layout changes to suit content or screen size?",
          "type": "multiple_choice",
          "options": [
            "Container query",
            "Breakpoint",
            "CSS Grid",
            "Progressive enhancement"
          ],
          "answer": 1,
          "explanation": "Breakpoint: Point where layout changes to suit content or screen size."
        },
        {
          "q": "Which term best matches this description: CSS rule based on a containing element’s size?",
          "type": "multiple_choice",
          "options": [
            "Container query",
            "Flexbox",
            "Fluid typography",
            "Responsive web design"
          ],
          "answer": 0,
          "explanation": "Container query: CSS rule based on a containing element’s size."
        },
        {
          "q": "Which term best matches this description: CSS layout system for arranging items along one axis?",
          "type": "multiple_choice",
          "options": [
            "CSS Grid",
            "Mobile-first design",
            "Viewport",
            "Flexbox"
          ],
          "answer": 3,
          "explanation": "Flexbox: CSS layout system for arranging items along one axis."
        },
        {
          "q": "Which term best matches this description: CSS layout system for rows and columns?",
          "type": "multiple_choice",
          "options": [
            "Fluid typography",
            "Progressive enhancement",
            "CSS Grid",
            "Media query"
          ],
          "answer": 2,
          "explanation": "CSS Grid: CSS layout system for rows and columns."
        },
        {
          "q": "Which term best matches this description: Text sizing that scales across viewport sizes?",
          "type": "multiple_choice",
          "options": [
            "Mobile-first design",
            "Fluid typography",
            "Responsive web design",
            "Breakpoint"
          ],
          "answer": 1,
          "explanation": "Fluid typography: Text sizing that scales across viewport sizes."
        },
        {
          "q": "Which term best matches this description: Approach starting with small screens before enhancing for larger ones?",
          "type": "multiple_choice",
          "options": [
            "Mobile-first design",
            "Progressive enhancement",
            "Viewport",
            "Container query"
          ],
          "answer": 0,
          "explanation": "Mobile-first design: Approach starting with small screens before enhancing for larger ones."
        },
        {
          "q": "Which term best matches this description: Building a usable foundation before adding advanced features?",
          "type": "multiple_choice",
          "options": [
            "Responsive web design",
            "Media query",
            "Flexbox",
            "Progressive enhancement"
          ],
          "answer": 3,
          "explanation": "Progressive enhancement: Building a usable foundation before adding advanced features."
        },
        {
          "q": "Responsive web design refers to: Approach that adapts layout to different screens and viewports.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Responsive web design: Approach that adapts layout to different screens and viewports."
        },
        {
          "q": "Viewport refers to: CSS layout system for rows and columns.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Viewport: Visible area of a webpage on a device."
        },
        {
          "q": "Media query refers to: CSS condition applying styles for particular environments.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Media query: CSS condition applying styles for particular environments."
        },
        {
          "q": "Breakpoint refers to: Approach starting with small screens before enhancing for larger ones.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Breakpoint: Point where layout changes to suit content or screen size."
        },
        {
          "q": "Container query refers to: CSS rule based on a containing element’s size.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Container query: CSS rule based on a containing element’s size."
        },
        {
          "q": "Flexbox refers to: CSS layout system for arranging items along one axis.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Flexbox: CSS layout system for arranging items along one axis."
        },
        {
          "q": "Fluid typography refers to: CSS layout system for rows and columns.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "CSS Grid: CSS layout system for rows and columns."
        },
        {
          "q": "Fluid typography refers to: Text sizing that scales across viewport sizes.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Fluid typography: Text sizing that scales across viewport sizes."
        },
        {
          "q": "Progressive enhancement refers to: Approach starting with small screens before enhancing for larger ones.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Mobile-first design: Approach starting with small screens before enhancing for larger ones."
        },
        {
          "q": "Progressive enhancement refers to: Building a usable foundation before adding advanced features.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Progressive enhancement: Building a usable foundation before adding advanced features."
        }
      ]
    }
  ],
  "3-5": [
    {
      "title": "CSS Styling, Layouts, Flexbox and Grid — Complete Mixed Quiz",
      "questions": [
        {
          "q": "Which term best matches this description: Stylesheet language controlling webpage presentation?",
          "type": "multiple_choice",
          "options": [
            "Specificity",
            "CSS",
            "display flex",
            "grid-template-columns"
          ],
          "answer": 1,
          "explanation": "CSS: Stylesheet language controlling webpage presentation."
        },
        {
          "q": "Which term best matches this description: Rules used to decide which competing CSS selector wins?",
          "type": "multiple_choice",
          "options": [
            "Specificity",
            "Box model",
            "justify-content",
            "fr unit"
          ],
          "answer": 0,
          "explanation": "Specificity: Rules used to decide which competing CSS selector wins."
        },
        {
          "q": "Which term best matches this description: Content, padding, border, and margin around an element?",
          "type": "multiple_choice",
          "options": [
            "display flex",
            "align-items",
            "Media query",
            "Box model"
          ],
          "answer": 3,
          "explanation": "Box model: Content, padding, border, and margin around an element."
        },
        {
          "q": "Which term best matches this description: CSS declaration creating a flex formatting context?",
          "type": "multiple_choice",
          "options": [
            "justify-content",
            "grid-template-columns",
            "display flex",
            "Subgrid"
          ],
          "answer": 2,
          "explanation": "display flex: CSS declaration creating a flex formatting context."
        },
        {
          "q": "Which term best matches this description: Flexbox property aligning items along the main axis?",
          "type": "multiple_choice",
          "options": [
            "align-items",
            "justify-content",
            "fr unit",
            "CSS"
          ],
          "answer": 1,
          "explanation": "justify-content: Flexbox property aligning items along the main axis."
        },
        {
          "q": "Which term best matches this description: Property aligning flex items along the cross axis?",
          "type": "multiple_choice",
          "options": [
            "align-items",
            "grid-template-columns",
            "Media query",
            "Specificity"
          ],
          "answer": 0,
          "explanation": "align-items: Property aligning flex items along the cross axis."
        },
        {
          "q": "Which term best matches this description: CSS property defining grid column tracks?",
          "type": "multiple_choice",
          "options": [
            "fr unit",
            "Subgrid",
            "Box model",
            "grid-template-columns"
          ],
          "answer": 3,
          "explanation": "grid-template-columns: CSS property defining grid column tracks."
        },
        {
          "q": "Which term best matches this description: Fractional unit for distributing available grid space?",
          "type": "multiple_choice",
          "options": [
            "Media query",
            "CSS",
            "fr unit",
            "display flex"
          ],
          "answer": 2,
          "explanation": "fr unit: Fractional unit for distributing available grid space."
        },
        {
          "q": "Which term best matches this description: Conditional CSS rule for different viewport or device conditions?",
          "type": "multiple_choice",
          "options": [
            "Subgrid",
            "Media query",
            "Specificity",
            "justify-content"
          ],
          "answer": 1,
          "explanation": "Media query: Conditional CSS rule for different viewport or device conditions."
        },
        {
          "q": "Which term best matches this description: Grid feature that reuses tracks from a parent grid?",
          "type": "multiple_choice",
          "options": [
            "Subgrid",
            "CSS",
            "Box model",
            "align-items"
          ],
          "answer": 0,
          "explanation": "Subgrid: Grid feature that reuses tracks from a parent grid."
        },
        {
          "q": "CSS refers to: Stylesheet language controlling webpage presentation.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "CSS: Stylesheet language controlling webpage presentation."
        },
        {
          "q": "Specificity refers to: CSS property defining grid column tracks.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Specificity: Rules used to decide which competing CSS selector wins."
        },
        {
          "q": "Box model refers to: Content, padding, border, and margin around an element.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Box model: Content, padding, border, and margin around an element."
        },
        {
          "q": "display flex refers to: Conditional CSS rule for different viewport or device conditions.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "display flex: CSS declaration creating a flex formatting context."
        },
        {
          "q": "justify-content refers to: Flexbox property aligning items along the main axis.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "justify-content: Flexbox property aligning items along the main axis."
        },
        {
          "q": "align-items refers to: Property aligning flex items along the cross axis.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "align-items: Property aligning flex items along the cross axis."
        },
        {
          "q": "fr unit refers to: CSS property defining grid column tracks.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "grid-template-columns: CSS property defining grid column tracks."
        },
        {
          "q": "fr unit refers to: Fractional unit for distributing available grid space.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "fr unit: Fractional unit for distributing available grid space."
        },
        {
          "q": "Subgrid refers to: Conditional CSS rule for different viewport or device conditions.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Media query: Conditional CSS rule for different viewport or device conditions."
        },
        {
          "q": "Subgrid refers to: Grid feature that reuses tracks from a parent grid.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Subgrid: Grid feature that reuses tracks from a parent grid."
        }
      ]
    }
  ],
  "3-6": [
    {
      "title": "Advanced HTML Forms and Form Validation — Complete Mixed Quiz",
      "questions": [
        {
          "q": "Which term best matches this description: HTML element grouping controls for data submission?",
          "type": "multiple_choice",
          "options": [
            "label",
            "required attribute",
            "form element",
            "Constraint Validation API"
          ],
          "answer": 2,
          "explanation": "form element: HTML element grouping controls for data submission."
        },
        {
          "q": "Which term best matches this description: Text associated with a form control to describe it?",
          "type": "multiple_choice",
          "options": [
            "name attribute",
            "label",
            "pattern attribute",
            "setCustomValidity"
          ],
          "answer": 1,
          "explanation": "label: Text associated with a form control to describe it."
        },
        {
          "q": "Which term best matches this description: Field identifier used when form data is submitted?",
          "type": "multiple_choice",
          "options": [
            "name attribute",
            "required attribute",
            "minlength attribute",
            "Server-side validation"
          ],
          "answer": 0,
          "explanation": "name attribute: Field identifier used when form data is submitted."
        },
        {
          "q": "Which term best matches this description: Constraint indicating a field must be filled in?",
          "type": "multiple_choice",
          "options": [
            "pattern attribute",
            "Constraint Validation API",
            "aria-describedby",
            "required attribute"
          ],
          "answer": 3,
          "explanation": "required attribute: Constraint indicating a field must be filled in."
        },
        {
          "q": "Which term best matches this description: Regular expression used for input validation?",
          "type": "multiple_choice",
          "options": [
            "minlength attribute",
            "setCustomValidity",
            "pattern attribute",
            "form element"
          ],
          "answer": 2,
          "explanation": "pattern attribute: Regular expression used for input validation."
        },
        {
          "q": "Which term best matches this description: Sets the minimum permitted length of text input?",
          "type": "multiple_choice",
          "options": [
            "Constraint Validation API",
            "minlength attribute",
            "Server-side validation",
            "label"
          ],
          "answer": 1,
          "explanation": "minlength attribute: Sets the minimum permitted length of text input."
        },
        {
          "q": "Which term best matches this description: Browser JavaScript interface for checking form validity?",
          "type": "multiple_choice",
          "options": [
            "Constraint Validation API",
            "setCustomValidity",
            "aria-describedby",
            "name attribute"
          ],
          "answer": 0,
          "explanation": "Constraint Validation API: Browser JavaScript interface for checking form validity."
        },
        {
          "q": "Which term best matches this description: Method for setting a custom validation error?",
          "type": "multiple_choice",
          "options": [
            "Server-side validation",
            "form element",
            "required attribute",
            "setCustomValidity"
          ],
          "answer": 3,
          "explanation": "setCustomValidity: Method for setting a custom validation error."
        },
        {
          "q": "Which term best matches this description: Validation performed on the server rather than trusting the browser?",
          "type": "multiple_choice",
          "options": [
            "aria-describedby",
            "label",
            "Server-side validation",
            "pattern attribute"
          ],
          "answer": 2,
          "explanation": "Server-side validation: Validation performed on the server rather than trusting the browser."
        },
        {
          "q": "Which term best matches this description: Attribute connecting a control to descriptive or error text?",
          "type": "multiple_choice",
          "options": [
            "form element",
            "aria-describedby",
            "name attribute",
            "minlength attribute"
          ],
          "answer": 1,
          "explanation": "aria-describedby: Attribute connecting a control to descriptive or error text."
        },
        {
          "q": "form element refers to: HTML element grouping controls for data submission.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "form element: HTML element grouping controls for data submission."
        },
        {
          "q": "label refers to: Browser JavaScript interface for checking form validity.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "label: Text associated with a form control to describe it."
        },
        {
          "q": "name attribute refers to: Field identifier used when form data is submitted.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "name attribute: Field identifier used when form data is submitted."
        },
        {
          "q": "required attribute refers to: Validation performed on the server rather than trusting the browser.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "required attribute: Constraint indicating a field must be filled in."
        },
        {
          "q": "pattern attribute refers to: Regular expression used for input validation.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "pattern attribute: Regular expression used for input validation."
        },
        {
          "q": "minlength attribute refers to: Sets the minimum permitted length of text input.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "minlength attribute: Sets the minimum permitted length of text input."
        },
        {
          "q": "setCustomValidity refers to: Browser JavaScript interface for checking form validity.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Constraint Validation API: Browser JavaScript interface for checking form validity."
        },
        {
          "q": "setCustomValidity refers to: Method for setting a custom validation error.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "setCustomValidity: Method for setting a custom validation error."
        },
        {
          "q": "aria-describedby refers to: Validation performed on the server rather than trusting the browser.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Server-side validation: Validation performed on the server rather than trusting the browser."
        },
        {
          "q": "aria-describedby refers to: Attribute connecting a control to descriptive or error text.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "aria-describedby: Attribute connecting a control to descriptive or error text."
        }
      ]
    }
  ],
  "3-7": [
    {
      "title": "User Interface Design and Accessibility Fundamentals — Complete Mixed Quiz",
      "questions": [
        {
          "q": "Which term best matches this description: Controls and screens through which a person interacts with a system?",
          "type": "multiple_choice",
          "options": [
            "User experience (UX)",
            "Contrast",
            "Keyboard accessibility",
            "User interface (UI)"
          ],
          "answer": 3,
          "explanation": "User interface (UI): Controls and screens through which a person interacts with a system."
        },
        {
          "q": "Which term best matches this description: Overall experience of using a product or service?",
          "type": "multiple_choice",
          "options": [
            "Visual hierarchy",
            "Usability testing",
            "User experience (UX)",
            "Focus management"
          ],
          "answer": 2,
          "explanation": "User experience (UX): Overall experience of using a product or service."
        },
        {
          "q": "Which term best matches this description: Arranging elements to show relative importance?",
          "type": "multiple_choice",
          "options": [
            "Contrast",
            "Visual hierarchy",
            "Accessibility",
            "Wireframe"
          ],
          "answer": 1,
          "explanation": "Visual hierarchy: Arranging elements to show relative importance."
        },
        {
          "q": "Which term best matches this description: Difference that helps users distinguish text and elements?",
          "type": "multiple_choice",
          "options": [
            "Contrast",
            "Usability testing",
            "Keyboard accessibility",
            "Dark pattern"
          ],
          "answer": 0,
          "explanation": "Contrast: Difference that helps users distinguish text and elements."
        },
        {
          "q": "Which term best matches this description: Observing users perform tasks to find interface problems?",
          "type": "multiple_choice",
          "options": [
            "Accessibility",
            "Focus management",
            "User interface (UI)",
            "Usability testing"
          ],
          "answer": 3,
          "explanation": "Usability testing: Observing users perform tasks to find interface problems."
        },
        {
          "q": "Which term best matches this description: Designing interfaces usable by people with different abilities?",
          "type": "multiple_choice",
          "options": [
            "Keyboard accessibility",
            "Wireframe",
            "Accessibility",
            "User experience (UX)"
          ],
          "answer": 2,
          "explanation": "Accessibility: Designing interfaces usable by people with different abilities."
        },
        {
          "q": "Which term best matches this description: Ability to use controls without a mouse?",
          "type": "multiple_choice",
          "options": [
            "Focus management",
            "Keyboard accessibility",
            "Dark pattern",
            "Visual hierarchy"
          ],
          "answer": 1,
          "explanation": "Keyboard accessibility: Ability to use controls without a mouse."
        },
        {
          "q": "Which term best matches this description: Controlling where keyboard focus moves during interaction?",
          "type": "multiple_choice",
          "options": [
            "Focus management",
            "Wireframe",
            "User interface (UI)",
            "Contrast"
          ],
          "answer": 0,
          "explanation": "Focus management: Controlling where keyboard focus moves during interaction."
        },
        {
          "q": "Which term best matches this description: Low-detail plan of a page or interface layout?",
          "type": "multiple_choice",
          "options": [
            "Dark pattern",
            "User experience (UX)",
            "Usability testing",
            "Wireframe"
          ],
          "answer": 3,
          "explanation": "Wireframe: Low-detail plan of a page or interface layout."
        },
        {
          "q": "Which term best matches this description: Manipulative interface design that steers users toward unwanted choices?",
          "type": "multiple_choice",
          "options": [
            "User interface (UI)",
            "Visual hierarchy",
            "Dark pattern",
            "Accessibility"
          ],
          "answer": 2,
          "explanation": "Dark pattern: Manipulative interface design that steers users toward unwanted choices."
        },
        {
          "q": "User interface (UI) refers to: Controls and screens through which a person interacts with a system.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "User interface (UI): Controls and screens through which a person interacts with a system."
        },
        {
          "q": "User experience (UX) refers to: Ability to use controls without a mouse.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "User experience (UX): Overall experience of using a product or service."
        },
        {
          "q": "Visual hierarchy refers to: Arranging elements to show relative importance.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Visual hierarchy: Arranging elements to show relative importance."
        },
        {
          "q": "Contrast refers to: Low-detail plan of a page or interface layout.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Contrast: Difference that helps users distinguish text and elements."
        },
        {
          "q": "Usability testing refers to: Observing users perform tasks to find interface problems.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Usability testing: Observing users perform tasks to find interface problems."
        },
        {
          "q": "Accessibility refers to: Designing interfaces usable by people with different abilities.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Accessibility: Designing interfaces usable by people with different abilities."
        },
        {
          "q": "Focus management refers to: Ability to use controls without a mouse.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Keyboard accessibility: Ability to use controls without a mouse."
        },
        {
          "q": "Focus management refers to: Controlling where keyboard focus moves during interaction.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Focus management: Controlling where keyboard focus moves during interaction."
        },
        {
          "q": "Dark pattern refers to: Low-detail plan of a page or interface layout.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Wireframe: Low-detail plan of a page or interface layout."
        },
        {
          "q": "Dark pattern refers to: Manipulative interface design that steers users toward unwanted choices.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Dark pattern: Manipulative interface design that steers users toward unwanted choices."
        }
      ]
    }
  ],
  "3-8": [
    {
      "title": "JavaScript Fundamentals and DOM Manipulation — Complete Mixed Quiz",
      "questions": [
        {
          "q": "Which term best matches this description: Programming language used to add behavior to webpages?",
          "type": "multiple_choice",
          "options": [
            "JavaScript",
            "let",
            "if statement",
            "array"
          ],
          "answer": 0,
          "explanation": "JavaScript: Programming language used to add behavior to webpages."
        },
        {
          "q": "Which term best matches this description: Keyword declaring a reassignable block-scoped variable?",
          "type": "multiple_choice",
          "options": [
            "const",
            "for loop",
            "DOM",
            "let"
          ],
          "answer": 3,
          "explanation": "let: Keyword declaring a reassignable block-scoped variable."
        },
        {
          "q": "Which term best matches this description: Keyword declaring a block-scoped binding that cannot be reassigned?",
          "type": "multiple_choice",
          "options": [
            "if statement",
            "function",
            "const",
            "querySelector"
          ],
          "answer": 2,
          "explanation": "const: Keyword declaring a block-scoped binding that cannot be reassigned."
        },
        {
          "q": "Which term best matches this description: Conditional structure that runs code when a condition is true?",
          "type": "multiple_choice",
          "options": [
            "for loop",
            "if statement",
            "array",
            "addEventListener"
          ],
          "answer": 1,
          "explanation": "if statement: Conditional structure that runs code when a condition is true."
        },
        {
          "q": "Which term best matches this description: Structure used to repeat code?",
          "type": "multiple_choice",
          "options": [
            "for loop",
            "function",
            "DOM",
            "JavaScript"
          ],
          "answer": 0,
          "explanation": "for loop: Structure used to repeat code."
        },
        {
          "q": "Which term best matches this description: Reusable block of code that can be called?",
          "type": "multiple_choice",
          "options": [
            "array",
            "querySelector",
            "let",
            "function"
          ],
          "answer": 3,
          "explanation": "function: Reusable block of code that can be called."
        },
        {
          "q": "Which term best matches this description: Ordered collection of values?",
          "type": "multiple_choice",
          "options": [
            "DOM",
            "addEventListener",
            "array",
            "const"
          ],
          "answer": 2,
          "explanation": "array: Ordered collection of values."
        },
        {
          "q": "Which term best matches this description: Document Object Model representing a webpage as nodes?",
          "type": "multiple_choice",
          "options": [
            "querySelector",
            "DOM",
            "JavaScript",
            "if statement"
          ],
          "answer": 1,
          "explanation": "DOM: Document Object Model representing a webpage as nodes."
        },
        {
          "q": "Which term best matches this description: DOM method selecting the first matching element?",
          "type": "multiple_choice",
          "options": [
            "querySelector",
            "addEventListener",
            "let",
            "for loop"
          ],
          "answer": 0,
          "explanation": "querySelector: DOM method selecting the first matching element."
        },
        {
          "q": "Which term best matches this description: Method registering a function to handle an event?",
          "type": "multiple_choice",
          "options": [
            "JavaScript",
            "const",
            "function",
            "addEventListener"
          ],
          "answer": 3,
          "explanation": "addEventListener: Method registering a function to handle an event."
        },
        {
          "q": "JavaScript refers to: Programming language used to add behavior to webpages.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "JavaScript: Programming language used to add behavior to webpages."
        },
        {
          "q": "let refers to: Ordered collection of values.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "let: Keyword declaring a reassignable block-scoped variable."
        },
        {
          "q": "const refers to: Keyword declaring a block-scoped binding that cannot be reassigned.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "const: Keyword declaring a block-scoped binding that cannot be reassigned."
        },
        {
          "q": "if statement refers to: DOM method selecting the first matching element.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "if statement: Conditional structure that runs code when a condition is true."
        },
        {
          "q": "for loop refers to: Structure used to repeat code.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "for loop: Structure used to repeat code."
        },
        {
          "q": "function refers to: Reusable block of code that can be called.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "function: Reusable block of code that can be called."
        },
        {
          "q": "DOM refers to: Ordered collection of values.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "array: Ordered collection of values."
        },
        {
          "q": "DOM refers to: Document Object Model representing a webpage as nodes.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "DOM: Document Object Model representing a webpage as nodes."
        },
        {
          "q": "addEventListener refers to: DOM method selecting the first matching element.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "querySelector: DOM method selecting the first matching element."
        },
        {
          "q": "addEventListener refers to: Method registering a function to handle an event.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "addEventListener: Method registering a function to handle an event."
        }
      ]
    }
  ],
  "3-9": [
    {
      "title": "Authentication, Authorization and Web Security — Complete Mixed Quiz",
      "questions": [
        {
          "q": "Which term best matches this description: Process of verifying a user’s identity?",
          "type": "multiple_choice",
          "options": [
            "Authorization",
            "Authentication",
            "Session",
            "Cross-site request forgery (CSRF)"
          ],
          "answer": 1,
          "explanation": "Authentication: Process of verifying a user’s identity."
        },
        {
          "q": "Which term best matches this description: Process of deciding which actions a user is allowed to perform?",
          "type": "multiple_choice",
          "options": [
            "Authorization",
            "Password hashing",
            "Input validation",
            "Least privilege"
          ],
          "answer": 0,
          "explanation": "Authorization: Process of deciding which actions a user is allowed to perform."
        },
        {
          "q": "Which term best matches this description: One-way transformation used to protect stored passwords?",
          "type": "multiple_choice",
          "options": [
            "Session",
            "Cross-site scripting (XSS)",
            "HTTPS",
            "Password hashing"
          ],
          "answer": 3,
          "explanation": "Password hashing: One-way transformation used to protect stored passwords."
        },
        {
          "q": "Which term best matches this description: Server-recognized state that maintains a user’s signed-in context?",
          "type": "multiple_choice",
          "options": [
            "Input validation",
            "Cross-site request forgery (CSRF)",
            "Session",
            "Security updates"
          ],
          "answer": 2,
          "explanation": "Session: Server-recognized state that maintains a user’s signed-in context."
        },
        {
          "q": "Which term best matches this description: Checking that supplied data meets expected rules?",
          "type": "multiple_choice",
          "options": [
            "Cross-site scripting (XSS)",
            "Input validation",
            "Least privilege",
            "Authentication"
          ],
          "answer": 1,
          "explanation": "Input validation: Checking that supplied data meets expected rules."
        },
        {
          "q": "Which term best matches this description: Injection of malicious script into a page viewed by another user?",
          "type": "multiple_choice",
          "options": [
            "Cross-site scripting (XSS)",
            "Cross-site request forgery (CSRF)",
            "HTTPS",
            "Authorization"
          ],
          "answer": 0,
          "explanation": "Cross-site scripting (XSS): Injection of malicious script into a page viewed by another user."
        },
        {
          "q": "Which term best matches this description: Tricking an authenticated browser into sending an unwanted request?",
          "type": "multiple_choice",
          "options": [
            "Least privilege",
            "Security updates",
            "Password hashing",
            "Cross-site request forgery (CSRF)"
          ],
          "answer": 3,
          "explanation": "Cross-site request forgery (CSRF): Tricking an authenticated browser into sending an unwanted request."
        },
        {
          "q": "Which term best matches this description: Giving an account only the permissions it needs?",
          "type": "multiple_choice",
          "options": [
            "HTTPS",
            "Authentication",
            "Least privilege",
            "Session"
          ],
          "answer": 2,
          "explanation": "Least privilege: Giving an account only the permissions it needs."
        },
        {
          "q": "Which term best matches this description: Encrypted transport for web communication?",
          "type": "multiple_choice",
          "options": [
            "Security updates",
            "HTTPS",
            "Authorization",
            "Input validation"
          ],
          "answer": 1,
          "explanation": "HTTPS: Encrypted transport for web communication."
        },
        {
          "q": "Which term best matches this description: Patches that address known software weaknesses?",
          "type": "multiple_choice",
          "options": [
            "Security updates",
            "Authentication",
            "Password hashing",
            "Cross-site scripting (XSS)"
          ],
          "answer": 0,
          "explanation": "Security updates: Patches that address known software weaknesses."
        },
        {
          "q": "Authentication refers to: Process of verifying a user’s identity.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Authentication: Process of verifying a user’s identity."
        },
        {
          "q": "Authorization refers to: Tricking an authenticated browser into sending an unwanted request.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Authorization: Process of deciding which actions a user is allowed to perform."
        },
        {
          "q": "Password hashing refers to: One-way transformation used to protect stored passwords.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Password hashing: One-way transformation used to protect stored passwords."
        },
        {
          "q": "Session refers to: Encrypted transport for web communication.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Session: Server-recognized state that maintains a user’s signed-in context."
        },
        {
          "q": "Input validation refers to: Checking that supplied data meets expected rules.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Input validation: Checking that supplied data meets expected rules."
        },
        {
          "q": "Cross-site scripting (XSS) refers to: Injection of malicious script into a page viewed by another user.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Cross-site scripting (XSS): Injection of malicious script into a page viewed by another user."
        },
        {
          "q": "Least privilege refers to: Tricking an authenticated browser into sending an unwanted request.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Cross-site request forgery (CSRF): Tricking an authenticated browser into sending an unwanted request."
        },
        {
          "q": "Least privilege refers to: Giving an account only the permissions it needs.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Least privilege: Giving an account only the permissions it needs."
        },
        {
          "q": "Security updates refers to: Encrypted transport for web communication.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "HTTPS: Encrypted transport for web communication."
        },
        {
          "q": "Security updates refers to: Patches that address known software weaknesses.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Security updates: Patches that address known software weaknesses."
        }
      ]
    }
  ],
  "3-10": [
    {
      "title": "Website Testing, Hosting, Deployment, and Maintenance — Complete Mixed Quiz",
      "questions": [
        {
          "q": "Which term best matches this description: Stages from planning and building through testing, release, and maintenance?",
          "type": "multiple_choice",
          "options": [
            "Functional testing",
            "Regression testing",
            "Website lifecycle",
            "SFTP"
          ],
          "answer": 2,
          "explanation": "Website lifecycle: Stages from planning and building through testing, release, and maintenance."
        },
        {
          "q": "Which term best matches this description: Checking whether website features behave as expected?",
          "type": "multiple_choice",
          "options": [
            "Accessibility testing",
            "Functional testing",
            "Web hosting",
            "Deployment"
          ],
          "answer": 1,
          "explanation": "Functional testing: Checking whether website features behave as expected."
        },
        {
          "q": "Which term best matches this description: Checking whether people with different abilities can use the site?",
          "type": "multiple_choice",
          "options": [
            "Accessibility testing",
            "Regression testing",
            "DNS",
            "Rollback"
          ],
          "answer": 0,
          "explanation": "Accessibility testing: Checking whether people with different abilities can use the site."
        },
        {
          "q": "Which term best matches this description: Retesting existing features after changes?",
          "type": "multiple_choice",
          "options": [
            "Web hosting",
            "SFTP",
            "Backup",
            "Regression testing"
          ],
          "answer": 3,
          "explanation": "Regression testing: Retesting existing features after changes."
        },
        {
          "q": "Which term best matches this description: Service providing resources that make a website available online?",
          "type": "multiple_choice",
          "options": [
            "DNS",
            "Deployment",
            "Web hosting",
            "Website lifecycle"
          ],
          "answer": 2,
          "explanation": "Web hosting: Service providing resources that make a website available online."
        },
        {
          "q": "Which term best matches this description: System connecting domain names to network addresses?",
          "type": "multiple_choice",
          "options": [
            "SFTP",
            "DNS",
            "Rollback",
            "Functional testing"
          ],
          "answer": 1,
          "explanation": "DNS: System connecting domain names to network addresses."
        },
        {
          "q": "Which term best matches this description: Secure file transfer protocol used to upload site files?",
          "type": "multiple_choice",
          "options": [
            "SFTP",
            "Deployment",
            "Backup",
            "Accessibility testing"
          ],
          "answer": 0,
          "explanation": "SFTP: Secure file transfer protocol used to upload site files."
        },
        {
          "q": "Which term best matches this description: Process of publishing a website or its updates?",
          "type": "multiple_choice",
          "options": [
            "Rollback",
            "Website lifecycle",
            "Regression testing",
            "Deployment"
          ],
          "answer": 3,
          "explanation": "Deployment: Process of publishing a website or its updates."
        },
        {
          "q": "Which term best matches this description: Returning to an earlier working version after a failed release?",
          "type": "multiple_choice",
          "options": [
            "Backup",
            "Functional testing",
            "Rollback",
            "Web hosting"
          ],
          "answer": 2,
          "explanation": "Rollback: Returning to an earlier working version after a failed release."
        },
        {
          "q": "Which term best matches this description: Saved copy of website data or files for recovery?",
          "type": "multiple_choice",
          "options": [
            "Website lifecycle",
            "Backup",
            "Accessibility testing",
            "DNS"
          ],
          "answer": 1,
          "explanation": "Backup: Saved copy of website data or files for recovery."
        },
        {
          "q": "Website lifecycle refers to: Stages from planning and building through testing, release, and maintenance.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Website lifecycle: Stages from planning and building through testing, release, and maintenance."
        },
        {
          "q": "Functional testing refers to: Secure file transfer protocol used to upload site files.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Functional testing: Checking whether website features behave as expected."
        },
        {
          "q": "Accessibility testing refers to: Checking whether people with different abilities can use the site.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Accessibility testing: Checking whether people with different abilities can use the site."
        },
        {
          "q": "Regression testing refers to: Returning to an earlier working version after a failed release.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Regression testing: Retesting existing features after changes."
        },
        {
          "q": "Web hosting refers to: Service providing resources that make a website available online.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Web hosting: Service providing resources that make a website available online."
        },
        {
          "q": "DNS refers to: System connecting domain names to network addresses.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "DNS: System connecting domain names to network addresses."
        },
        {
          "q": "Deployment refers to: Secure file transfer protocol used to upload site files.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "SFTP: Secure file transfer protocol used to upload site files."
        },
        {
          "q": "Deployment refers to: Process of publishing a website or its updates.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Deployment: Process of publishing a website or its updates."
        },
        {
          "q": "Backup refers to: Returning to an earlier working version after a failed release.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Rollback: Returning to an earlier working version after a failed release."
        },
        {
          "q": "Backup refers to: Saved copy of website data or files for recovery.",
          "type": "true_false",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Backup: Saved copy of website data or files for recovery."
        }
      ]
    }
  ]
});

const yearSelect = document.getElementById('year');
const bookSelect = document.getElementById('book');
const quizArea = document.getElementById('quizArea');

function createElement(tag, text, className) {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = text;
  if (className) element.className = className;
  return element;
}
function showMessage(title, message) {
  quizArea.replaceChildren(createElement('h2', title), createElement('p', message));
}

yearSelect.addEventListener('change', () => {
  bookSelect.replaceChildren(new Option('Select a book', ''));
  const books = booksByYear[yearSelect.value];
  bookSelect.disabled = !books;
  if (books) books.forEach((name, index) => {
    bookSelect.add(new Option(`Book ${String(index + 1).padStart(2, '0')} — ${name}`, String(index + 1)));
  });
  showMessage('Choose a book to begin', 'Select a book to see its available quizzes.');
});

bookSelect.addEventListener('change', () => {
  if (!bookSelect.value) {
    showMessage('Choose a book to begin', 'Select a book.');
    return;
  }
  const key = `${yearSelect.value}-${bookSelect.value}`;
  const quizzes = quizBank[key];
  if (!quizzes) {
    showMessage(bookSelect.selectedOptions[0].text, 'Quizzes for this book have not been transferred yet.');
    return;
  }
  const buttons = createElement('div', undefined, 'assessment-list');
  quizzes.forEach((quiz, index) => {
    const button = createElement('button', `${quiz.title} (${quiz.questions.length} questions)`, 'assessment-button');
    button.type = 'button';
    button.addEventListener('click', () => renderQuiz(key, index));
    buttons.append(button);
  });
  quizArea.replaceChildren(createElement('h2', bookSelect.selectedOptions[0].text), createElement('p', 'Choose an assessment:'), buttons);
});

function normalizeAnswer(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ');
}
// Flexible identification checking: equivalent abbreviations, spacing, punctuation,
// and minor spelling errors are accepted; unrelated answers remain incorrect.
function identificationVariants(answer) {
  const raw = String(answer || '');
  const variants = new Set();
  const add = value => { const n = normalizeAnswer(value); if (n) variants.add(n); };
  add(raw);
  const bracket = raw.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (bracket) { add(bracket[1]); add(bracket[2]); }
  const withoutLeadingLetter = raw.replace(/^\s*[A-D]\s*[.\-–—:]\s*/i, '');
  if (withoutLeadingLetter !== raw) add(withoutLeadingLetter);
  const expanded = raw.replace(/\([^)]*\)/g, '').trim();
  if (expanded !== raw) add(expanded);
  return [...variants];
}
function answerDistance(a, b) {
  const previous = Array.from({length:b.length+1},(_,i)=>i);
  for(let i=1;i<=a.length;i++) {
    const current=[i];
    for(let j=1;j<=b.length;j++) {
      current[j]=Math.min(current[j-1]+1,previous[j]+1,previous[j-1]+(a[i-1]===b[j-1]?0:1));
    }
    for(let j=0;j<current.length;j++) previous[j]=current[j];
  }
  return previous[b.length];
}
function isFlexibleIdentificationCorrect(typed, question) {
  const user = normalizeAnswer(typed);
  if (!user) return false;
  const sourceAnswers = [question.answerText, ...(Array.isArray(question.accepted)?question.accepted:[])];
  const variants = [...new Set(sourceAnswers.flatMap(identificationVariants))];
  if (variants.includes(user)) return true;
  // Accept small typos only for longer terms; short acronyms must match exactly.
  return variants.some(expected => {
    if (expected.length < 7 || user.length < 7) return false;
    const gap = Math.abs(expected.length-user.length);
    const maxEdits = expected.length >= 15 && user.length >= 15 ? 2 : 1;
    if (gap > maxEdits) return false;
    // Avoid loose matching for phrases containing multiple words.
    if (expected.split(' ').length !== user.split(' ').length) return false;
    return answerDistance(user,expected) <= maxEdits;
  });
}

function renderQuiz(key, index) {
  const quiz = quizBank[key][index];
  const form = createElement('form');
  form.id = 'assessmentForm';
  form.append(createElement('h2', quiz.title), createElement('p', 'Directions: Answer all questions. Choose an option for multiple choice and true or false; type your answer for identification.'));
  let lastPart = '';
  quiz.questions.forEach((question, i) => {
    const part = question.type === 'multiple_response' ? 'Multiple Response' : question.type === 'true_false' ? 'True or False' : question.type === 'enumeration' ? 'Enumeration' : question.part === 'problem' ? 'Problem Solving' : question.type === 'identification' ? 'Identification' : question.type === 'short_response' ? 'Short Response (manual review)' : 'Multiple Choice';
    if (part !== lastPart) {
      form.append(createElement('h3', part));
      lastPart = part;
    }
    const fieldset = createElement('fieldset', undefined, 'question-card');
    fieldset.append(createElement('legend', `${i + 1}. ${question.q}`));
    if (question.type === 'short_response') {
      const input = createElement('textarea');
      input.name = `q${i}`;
      input.rows = 5;
      input.placeholder = 'Type your response here';
      input.style.cssText = 'width:100%;max-width:680px;padding:12px;border:1px solid #d8b6c9;border-radius:8px;font:inherit;box-sizing:border-box;';
      fieldset.append(input, createElement('p', 'This response is for manual review and is not automatically graded.'));
    } else if (['identification','enumeration'].includes(question.type)) {
      const input = createElement('input');
      input.type = 'text';
      input.name = `q${i}`;
      input.placeholder = 'Type your answer';
      input.autocomplete = 'off';
      input.setAttribute('aria-label', `Answer for question ${i + 1}`);
      input.style.cssText = 'width:100%;max-width:480px;padding:12px;border:1px solid #d8b6c9;border-radius:8px;font:inherit;box-sizing:border-box;';
      fieldset.append(input);
    } else {
      question.options.forEach((option, j) => {
        const label = createElement('label', undefined, 'answer-option');
        const input = createElement('input');
        input.type = question.type === 'multiple_response' ? 'checkbox' : 'radio';
        input.name = `q${i}`;
        input.value = String(j);
        label.append(input, document.createTextNode(` ${String.fromCharCode(65 + j)}. ${option}`));
        fieldset.append(label);
      });
    }
    form.append(fieldset);
  });
  const submit = createElement('button', 'Submit Answers', 'submit-quiz');
  submit.type = 'submit';
  const result = createElement('div');
  result.id = 'quizResult';
  result.setAttribute('aria-live', 'polite');
  form.append(submit, result);
  form.addEventListener('submit', async event => {
    event.preventDefault();
    submit.disabled = true;
    let correct = 0;
    let gradedCount = 0;
    let manualCount = 0;
    const review = createElement('div', undefined, 'answer-review');
    const answerRecords = [];
    quiz.questions.forEach((question, i) => {
      let isCorrect;
      let correctAnswer;
      if (question.type === 'short_response') {
        manualCount++;
        const response = form.elements[`q${i}`].value.trim();
        answerRecords.push({number:i+1,question:question.q,student_answer:response,correct_answer:null,is_correct:null,manual_review:true});
        review.append(createElement('p', `${i + 1}. Manual review — Your response: ${response || '(No response entered)'}. This question is not included in the automatic score.`));
        return;
      }
      gradedCount++;
      if (['identification','enumeration'].includes(question.type)) {
        const typed = form.elements[`q${i}`].value;
        isCorrect = question.type === 'enumeration' ? ['input','processing','output','storage'].every(term => normalizeAnswer(typed).split(' ').includes(term)) : isFlexibleIdentificationCorrect(typed, question);
        correctAnswer = question.answerText;
      } else if (question.type === 'multiple_response') {
        const selected = [...form.querySelectorAll(`input[name="q${i}"]:checked`)].map(el => Number(el.value)).sort();
        isCorrect = JSON.stringify(selected) === JSON.stringify([...question.answers].sort());
        correctAnswer = question.answers.map(j => `${String.fromCharCode(65+j)}. ${question.options[j]}`).join('; ');
      } else {
        const selected = form.querySelector(`input[name="q${i}"]:checked`);
        isCorrect = selected !== null && Number(selected.value) === question.answer;
        correctAnswer = `${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]}`;
      }
      const studentAnswer = ['identification','enumeration'].includes(question.type) ? form.elements[`q${i}`].value.trim() : question.type === 'multiple_response' ? [...form.querySelectorAll(`input[name="q${i}"]:checked`)].map(el=>question.options[Number(el.value)]).join('; ') : (form.querySelector(`input[name="q${i}"]:checked`) ? question.options[Number(form.querySelector(`input[name="q${i}"]:checked`).value)] : '');
      answerRecords.push({number:i+1,question:question.q,student_answer:studentAnswer,correct_answer:correctAnswer,is_correct:isCorrect,manual_review:false});
      if (isCorrect) correct++;
      const explanation = question.explanation ? ` ${question.explanation}` : '';
      review.append(createElement('p', `${i + 1}. ${isCorrect ? 'Correct' : 'Incorrect'} — Correct answer: ${correctAnswer}.${explanation}`));
    });
    const percent = gradedCount ? Math.round(correct / gradedCount * 100) : 0;
    result.replaceChildren(createElement('h3', `Score: ${correct}/${gradedCount} (${percent}%)${manualCount ? ' · ' + manualCount + ' short response pending manual review' : ''}`), review);
    const status = createElement('p', 'Saving your quiz record...');
    result.append(status);
    try {
      const db = window.ITVerseDB;
      if (!db) throw new Error('Online database unavailable. Refresh the page.');
      const {data:{user},error:authError} = await db.auth.getUser();
      if (authError || !user) throw new Error('Please log in again to save your score.');
      const {error:saveError} = await db.from('quiz_attempts').insert({student_id:user.id,book_key:key,year_level:Number(key.split('-')[0]),quiz_title:quiz.title,score:correct,graded_total:gradedCount,manual_total:manualCount,answers:answerRecords});
      if (saveError) throw saveError;
      status.textContent='Saved successfully! Your admin can now view this quiz record.';
    } catch(error) {
      status.textContent='Score displayed, but NOT saved online: '+(error.message||error);
      submit.disabled=false;
    }
    result.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  });
  quizArea.replaceChildren(form);
}
