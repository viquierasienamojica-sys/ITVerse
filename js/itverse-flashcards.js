/* ITVerse interactive flashcards: derived from the current book quiz bank. */
(() => {
  'use strict';
  const year = document.getElementById('year');
  const book = document.getElementById('book');
  const quizTab = document.getElementById('it-quiz-tab');
  const flashTab = document.getElementById('it-flash-tab');
  const area = document.getElementById('it-flashcards');
  const quizArea = document.getElementById('quizArea');
  if (!year || !book || !quizTab || !flashTab || !area || !quizArea) return;
  let cards = [], position = 0, flipped = false, shuffle = false;
  const el = (tag, cls, txt) => { const n = document.createElement(tag); if(cls)n.className=cls; if(txt!==undefined)n.textContent=txt; return n; };
  const answerFor = q => {
    if (q.type === 'short_response') return null;
    if (q.type === 'multiple_response') return Array.isArray(q.answers) ? q.answers.map(i=>q.options?.[i]).filter(Boolean).join('; ') : null;
    if (q.answerText) return q.answerText;
    if (Array.isArray(q.options) && Number.isInteger(q.answer)) return q.options[q.answer];
    return null;
  };
  function loadCards() {
    const key = `${year.value}-${book.value}`;
    const quizzes = typeof quizBank !== 'undefined' ? quizBank[key] || [] : [];
    const seen = new Set();
    cards = [];
    for (const quiz of quizzes) for (const q of quiz.questions || []) {
      const answer = answerFor(q);
      if (!q.q || !answer) continue;
      const question = q.q.trim();
      const fingerprint = question.toLowerCase().replace(/\s+/g,' ');
      if (seen.has(fingerprint)) continue;
      seen.add(fingerprint);
      cards.push({front:question, back:answer, explanation:q.explanation || ''});
    }
    position = 0; flipped = false;
    if (shuffle) cards.sort(()=>Math.random()-.5);
    render();
  }
  function render() {
    area.replaceChildren();
    if (!year.value || !book.value) {
      area.append(el('h2', '', 'Choose a book to begin'), el('p', '', 'Select a year level and book to study flashcards.'));
      return;
    }
    if (!cards.length) {
      area.append(el('h2', '', 'Flashcards are not available yet'), el('p', '', 'No answer-key flashcards were found for this book.'));
      return;
    }
    area.append(el('h2', '', book.selectedOptions[0]?.text || 'Flashcards'));
    const counter = el('p', 'it-flash-counter', `Card ${position+1} of ${cards.length}`);
    const card = el('button', 'it-flash-card'); card.type = 'button';
    card.setAttribute('aria-label', 'Flip flashcard to reveal the answer');
    card.append(el('span','it-flash-hint', flipped ? 'ANSWER' : 'QUESTION'), el('span','it-flash-main',flipped ? cards[position].back : cards[position].front));
    if (flipped && cards[position].explanation) card.append(el('span','it-flash-explanation',cards[position].explanation));
    card.addEventListener('click',()=>{flipped=!flipped;render();});
    const hint = el('p','it-flash-instruction','Click the card to flip and see the answer.');
    const controls = el('div','it-flash-controls');
    const prev=el('button','','← Previous'); prev.type='button'; prev.disabled=position===0;
    prev.addEventListener('click',()=>{position--;flipped=false;render();});
    const flip=el('button','','Flip Card'); flip.type='button'; flip.addEventListener('click',()=>{flipped=!flipped;render();});
    const next=el('button','','Next →'); next.type='button'; next.disabled=position===cards.length-1;
    next.addEventListener('click',()=>{position++;flipped=false;render();});
    const random=el('button','it-flash-shuffle','Shuffle'); random.type='button'; random.addEventListener('click',()=>{shuffle=true;cards=[...cards].sort(()=>Math.random()-.5);position=0;flipped=false;render();});
    controls.append(prev,flip,next,random);
    area.append(counter,card,hint,controls);
  }
  function setTab(tab) {
    const isFlash=tab==='flash';
    quizArea.hidden=isFlash; area.hidden=!isFlash;
    flashTab.classList.toggle('active',isFlash); quizTab.classList.toggle('active',!isFlash);
    flashTab.setAttribute('aria-selected',String(isFlash)); quizTab.setAttribute('aria-selected',String(!isFlash));
    if (isFlash) loadCards();
  }
  quizTab.addEventListener('click',()=>setTab('quiz'));
  flashTab.addEventListener('click',()=>setTab('flash'));
  year.addEventListener('change',()=>{if(!area.hidden)loadCards();});
  book.addEventListener('change',()=>{if(!area.hidden)loadCards();});
  setTab('quiz');
})();
