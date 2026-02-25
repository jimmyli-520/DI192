const form = document.getElementById('libform');
const shuffleBtn = document.getElementById('shuffle-button');
const storyBox = document.getElementById('story-box');
const storyEl = document.getElementById('story');

// Holds the current user values
let currentValues = {};
// Track which story index was last shown to avoid immediate repeats
let lastStoryIndex = -1;

// ── Story templates ────────────────────────────────────────────────────────────
// Each template is a function that receives the user's words and returns an HTML string.
// Highlighted words use <span class="highlight">word</span>.

function h(word) {
  return `<span class="highlight">${word}</span>`;
}

const stories = [
  ({ noun, adjective, person, verb, place }) =>
    `One ${h('Tuesday')} morning, ${h(person)} woke up and decided to ${h(verb)} all the way to ${h(place)}.
     Along the way, they stumbled upon a ${h(adjective)} ${h(noun)} just sitting in the middle of the road.
     "How peculiar," said ${h(person)}, tucking the ${h(noun)} under one arm and continuing the journey.
     Nobody at ${h(place)} could stop talking about it for weeks.`,

  ({ noun, adjective, person, verb, place }) =>
    `The annual championship of ${h(verb)}-ing was held this year in the heart of ${h(place)}.
     ${h(person)}, the reigning champion, arrived carrying a ${h(adjective)} ${h(noun)} as their lucky charm.
     The crowd went absolutely wild when ${h(person)} performed the most ${h(adjective)} routine anyone had ever seen.
     They went home that night with a trophy shaped like a golden ${h(noun)}.`,

  ({ noun, adjective, person, verb, place }) =>
    `Scientists at ${h(place)} announced a groundbreaking discovery today:
     a ${h(adjective)} ${h(noun)} has been found that allows anyone who touches it to ${h(verb)} at superhuman speed.
     Lead researcher ${h(person)} told reporters, "We had no idea a ${h(noun)} could do this."
     World governments are already arguing over who gets to keep it.`,

  ({ noun, adjective, person, verb, place }) =>
    `Dear diary, today ${h(person)} invited me to ${h(place)} for what they called a "perfectly normal afternoon."
     It turned out to involve a ${h(adjective)} ${h(noun)}, three llamas, and an urgent need to ${h(verb)} before sunset.
     I am tired. I am ${h(adjective)}. And somehow I still have the ${h(noun)}.
     I will never trust ${h(person)} again — at least not until next weekend.`,

  ({ noun, adjective, person, verb, place }) =>
    `The recipe called for one ${h(adjective)} ${h(noun)}, a pinch of courage, and the will to ${h(verb)}.
     ${h(person)} followed the instructions carefully in the kitchen at ${h(place)}.
     When the timer went off, what emerged was unlike anything the world had tasted before —
     a dish so ${h(adjective)} that ${h(place)} declared it a national treasure on the spot.`,
];

// ── Helpers ────────────────────────────────────────────────────────────────────

function getRandomStoryIndex() {
  if (stories.length === 1) return 0;
  let index;
  do {
    index = Math.floor(Math.random() * stories.length);
  } while (index === lastStoryIndex);
  return index;
}

function displayStory() {
  const index = getRandomStoryIndex();
  lastStoryIndex = index;
  storyEl.innerHTML = stories[index](currentValues);

  // Animate the box each time a new story appears
  storyBox.classList.remove('hidden');
  storyBox.style.animation = 'none';
  // Force reflow to restart the animation
  void storyBox.offsetWidth;
  storyBox.style.animation = '';
}

function validateInputs(noun, adjective, person, verb, place) {
  // Remove any old error messages
  document.querySelectorAll('.error-msg').forEach(el => el.remove());
  document.querySelectorAll('input.error').forEach(el => el.classList.remove('error'));

  const fields = [
    { el: document.getElementById('noun'),      value: noun,      label: 'Noun' },
    { el: document.getElementById('adjective'), value: adjective, label: 'Adjective' },
    { el: document.getElementById('person'),    value: person,    label: "Someone's name" },
    { el: document.getElementById('verb'),      value: verb,      label: 'Verb' },
    { el: document.getElementById('place'),     value: place,     label: 'Place' },
  ];

  let valid = true;

  fields.forEach(({ el, value, label }) => {
    if (!value) {
      valid = false;
      el.classList.add('error');
      const msg = document.createElement('div');
      msg.classList.add('error-msg');
      msg.textContent = `${label} cannot be empty.`;
      el.parentNode.insertBefore(msg, el.nextSibling);
    }
  });

  return valid;
}

// ── Event listeners ────────────────────────────────────────────────────────────

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const noun      = document.getElementById('noun').value.trim();
  const adjective = document.getElementById('adjective').value.trim();
  const person    = document.getElementById('person').value.trim();
  const verb      = document.getElementById('verb').value.trim();
  const place     = document.getElementById('place').value.trim();

  if (!validateInputs(noun, adjective, person, verb, place)) return;

  currentValues = { noun, adjective, person, verb, place };
  lastStoryIndex = -1; // reset so the first story can be anything
  displayStory();

  shuffleBtn.disabled = false;
});

shuffleBtn.addEventListener('click', function () {
  displayStory();
});
