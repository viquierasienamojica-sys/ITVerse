// Activities & Quizzes: separate from lesson content.
// Book titles are placeholders until matched to the actual Library catalog.
const booksByYear = {
  1: ['History and Evolution of Computers', ...Array.from({length:9},(_,i)=>`Book ${String(i+2).padStart(2,'0')}`)],
  2: Array.from({length:10},(_,i)=>`Book ${String(i+1).padStart(2,'0')}`),
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
};

const yearSelect=document.getElementById('year');
const bookSelect=document.getElementById('book');
const quizArea=document.getElementById('quizArea');
let activeQuiz=null;

function showMessage(heading,message){
  const h=document.createElement('h2');h.textContent=heading;
  const p=document.createElement('p');p.textContent=message;
  quizArea.replaceChildren(h,p);
}
function createElement(tag,text,className){
  const el=document.createElement(tag);if(text!==undefined)el.textContent=text;
  if(className)el.className=className;return el;
}
yearSelect.addEventListener('change',()=>{
  bookSelect.replaceChildren(new Option('Select a book',''));
  const books=booksByYear[yearSelect.value];bookSelect.disabled=!books;
  if(books)books.forEach((name,i)=>bookSelect.add(new Option(`Book ${String(i+1).padStart(2,'0')} — ${name}`,String(i+1))));
  activeQuiz=null;showMessage('Choose a book to begin','Select a book to see its available quizzes.');
});
bookSelect.addEventListener('change',()=>{
  activeQuiz=null;
  if(!bookSelect.value){showMessage('Choose a book to begin','Select a book.');return;}
  const key=`${yearSelect.value}-${bookSelect.value}`;
  const quizzes=quizBank[key];
  if(!quizzes){showMessage(bookSelect.selectedOptions[0].text,'Quizzes for this book have not been transferred yet.');return;}
  const title=createElement('h2',bookSelect.selectedOptions[0].text);
  const prompt=createElement('p','Choose an assessment:');
  const options=createElement('div',undefined,'assessment-list');
  quizzes.forEach((quiz,i)=>{
    const btn=createElement('button',`${quiz.title} (${quiz.questions.length} questions)`,'assessment-button');
    btn.type='button';btn.addEventListener('click',()=>renderQuiz(key,i));options.append(btn);
  });
  quizArea.replaceChildren(title,prompt,options);
});
function renderQuiz(key,index){
  const quiz=quizBank[key][index];activeQuiz={key,index};
  const form=createElement('form');form.id='assessmentForm';
  form.append(createElement('h2',quiz.title),createElement('p','Directions: Choose the correct answer for each question.'));
  quiz.questions.forEach((question,i)=>{
    const fieldset=createElement('fieldset',undefined,'question-card');
    const legend=createElement('legend',`${i+1}. ${question.q}`);fieldset.append(legend);
    question.options.forEach((option,j)=>{
      const label=createElement('label',undefined,'answer-option');
      const input=document.createElement('input');input.type='radio';input.name=`q${i}`;input.value=String(j);
      label.append(input,document.createTextNode(` ${String.fromCharCode(65+j)}. ${option}`));fieldset.append(label);
    });form.append(fieldset);
  });
  const submit=createElement('button','Submit Answers','submit-quiz');submit.type='submit';form.append(submit);
  const result=createElement('div');result.id='quizResult';result.setAttribute('aria-live','polite');form.append(result);
  form.addEventListener('submit',event=>{
    event.preventDefault();let correct=0;
    const review=createElement('div',undefined,'answer-review');
    quiz.questions.forEach((question,i)=>{
      const selected=form.querySelector(`input[name="q${i}"]:checked`);
      const value=selected?Number(selected.value):-1;
      if(value===question.answer)correct++;
      const item=createElement('p',`${i+1}. ${value===question.answer?'Correct':'Incorrect'} — Correct answer: ${String.fromCharCode(65+question.answer)}. ${question.options[question.answer]}. ${question.explanation}`);
      review.append(item);
    });
    const heading=createElement('h3',`Score: ${correct}/${quiz.questions.length} (${Math.round(correct/quiz.questions.length*100)}%)`);
    result.replaceChildren(heading,review);result.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
  quizArea.replaceChildren(form);
}
