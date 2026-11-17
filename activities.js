// Activities & Quizzes: separate from lesson content.

// Book titles are placeholders until matched to the actual Library catalog.

const booksByYear = {

  1: ['History and Evolution of Computers', ...Array.from({length:9},(_,i)=>`Book ${String(i+2).padStart(2,'0')}`)],

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
function renderQuiz(key, index) {
  const quiz = quizBank[key][index];
  const form = createElement('form');
  form.id = 'assessmentForm';
  form.append(createElement('h2', quiz.title), createElement('p', 'Directions: Choose the best answer in Part A and type your answer in Part B.'));
  let lastPart = '';
  quiz.questions.forEach((question, i) => {
    const part = question.type === 'identification' ? 'Identification' : question.type === 'short_response' ? 'Short Response (manual review)' : (key === '2-2' && i >= 8 ? 'Final Assessment — Part B' : 'Part A: Multiple Choice');
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
    } else if (question.type === 'identification') {
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
        input.type = 'radio';
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
  form.addEventListener('submit', event => {
    event.preventDefault();
    let correct = 0;
    let gradedCount = 0;
    let manualCount = 0;
    const review = createElement('div', undefined, 'answer-review');
    quiz.questions.forEach((question, i) => {
      let isCorrect;
      let correctAnswer;
      if (question.type === 'short_response') {
        manualCount++;
        const response = form.elements[`q${i}`].value.trim();
        review.append(createElement('p', `${i + 1}. Manual review — Your response: ${response || '(No response entered)'}. This question is not included in the automatic score.`));
        return;
      }
      gradedCount++;
      if (question.type === 'identification') {
        const typed = form.elements[`q${i}`].value;
        isCorrect = question.accepted.some(answer => normalizeAnswer(answer) === normalizeAnswer(typed)) && normalizeAnswer(typed) !== '';
        correctAnswer = question.answerText;
      } else {
        const selected = form.querySelector(`input[name="q${i}"]:checked`);
        isCorrect = selected !== null && Number(selected.value) === question.answer;
        correctAnswer = `${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]}`;
      }
      if (isCorrect) correct++;
      const explanation = question.explanation ? ` ${question.explanation}` : '';
      review.append(createElement('p', `${i + 1}. ${isCorrect ? 'Correct' : 'Incorrect'} — Correct answer: ${correctAnswer}.${explanation}`));
    });
    const percent = gradedCount ? Math.round(correct / gradedCount * 100) : 0;
    result.replaceChildren(createElement('h3', `Score: ${correct}/${gradedCount} (${percent}%)${manualCount ? ' · ' + manualCount + ' short response pending manual review' : ''}`), review);
    result.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  });
  quizArea.replaceChildren(form);
}
