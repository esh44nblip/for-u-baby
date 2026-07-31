// =====================================
// FOR MY BABY ❤️
// Script Part 1
// =====================================

const intro = document.getElementById("intro");
const beginBtn = document.getElementById("beginBtn");

const envelopeSection = document.getElementById("envelopeSection");
const popupSection = document.getElementById("popupSection");
const letterSection = document.getElementById("letterSection");
const ending = document.getElementById("ending");

const popupText = document.getElementById("popupText");
const nextPopup = document.getElementById("nextPopup");

const music = document.getElementById("music");

const envelope = document.querySelector(".envelope");
const paper = document.querySelector(".paper");

const letterContent = document.getElementById("letterContent");

const messages = [

"Happy Girlfriend's Day ❤️",

"Thank you for choosing me.",

"You unknowingly became my favourite person.",

"I made something from my heart...",

"Ready?"

];

let popupIndex = 0;


// --------------------
// Letter
// --------------------

letterContent.innerHTML = `

<p>

baby,happyyy girlfrndssss dayyyyyyyyy ❤️

its aug 1st and this is the first time im celebrating girlfriend's day and im sooo sooo lucky that ur my girlfriend (to be wife 😤❤️)

i get to celebrate this day because of u my love.

im sooo sooo happy right now.

i honestly cant explain it.

every time i think about you i smile without even realizing it.

i seriously don't know what i did to deserve someone as amazing as you.

thank you for choosing me.

thank you for staying.

thank you for loving me.

</p>

<br>

<p>

i promise i'd choose you in every universe.

if life gave me a million chances,

i'd still fall in love with you every single time.

you complete me baby.

you are my safe place.

my happiness.

my peace.

my home.

</p>

<br>

<p>

every time i look into your eyes,

everything bothering me disappears.

all that matters is you.

i love how you laugh.

i love how you smile.

i love every tiny thing about you.

</p>

<br>

<p>

i wanna marry you one day.

grow old with you.

travel with you.

laugh with you.

annoy you.

love you forever.

</p>

<br>

<p>

i know we have had our ups and downs.

but i wouldn't trade our story for anything.

because every chapter led me to you.

</p>

<br>

<p>

you are my everything.

and you'll always be.

</p>

<br>

<p>

i love you.

infinite times.

forever & always.

❤️

</p>

`;


// --------------------
// Begin Button
// --------------------

beginBtn.addEventListener("click",()=>{

music.play().catch(()=>{});

intro.classList.add("hidden");

setTimeout(()=>{

envelopeSection.classList.remove("hidden");

},500);

});


// --------------------
// Envelope
// --------------------

envelope.addEventListener("click",()=>{

envelope.style.transform="scale(1.1)";

setTimeout(()=>{

envelopeSection.classList.add("hidden");

popupSection.classList.remove("hidden");

popupText.innerText=messages[0];

},700);

});


// --------------------
// Popups
// --------------------

nextPopup.addEventListener("click",()=>{

popupIndex++;

if(popupIndex<messages.length){

popupText.innerText=messages[popupIndex];

}

else{

popupSection.classList.add("hidden");

letterSection.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});
