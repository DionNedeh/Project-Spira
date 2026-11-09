// All content is static and authored here; values are written with textContent only.

// Hero spiral: CSS runs the motion (only when the visitor has not asked for reduced
// motion). The button pauses and resumes it; it is hidden whenever motion is off.
const art = document.querySelector('.art');
const motionToggle = art.querySelector('.motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function syncMotionToggle() {
  motionToggle.hidden = reducedMotion.matches;
}
motionToggle.addEventListener('click', () => {
  const paused = art.classList.toggle('is-paused');
  motionToggle.textContent = paused ? 'Play spiral' : 'Pause spiral';
});
if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', syncMotionToggle);
syncMotionToggle();
// Stop animating while the hero is scrolled out of view.
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    art.classList.toggle('is-offscreen', !entry.isIntersecting);
  }).observe(art);
}

const numberFormat = new Intl.NumberFormat('en', { maximumSignificantDigits: 3 });
const fmt = value => numberFormat.format(value);

// Withdrawal vs. consumption: a concept illustration with a visitor-chosen split.
const evaporated = document.querySelector('#evaporated');
document.querySelector('#water-split').hidden = false;
function updateSplit() {
  const share = Number(evaporated.value);
  document.querySelector('#evaporated-value').textContent = `${share}%`;
  document.querySelector('#consumed-units').textContent = share;
  document.querySelector('#returned-units').textContent = 100 - share;
  document.querySelector('#split-consumed').style.width = `${share}%`;
}
evaporated.addEventListener('input', updateSplit);
updateSplit();

// Where does the computing happen? Qualitative roles for each part of the system.
const roles = {
  main: 'Main computing',
  support: 'Supporting role',
  occasional: 'Occasional',
  depends: 'Depends on the app',
  none: 'Not used for this task',
  always: 'Always part of the picture'
};
const behindTheScenes = 'The model was trained on remote infrastructure, and using it locally does not undo that. Buying new hardware to run models adds manufacturing impacts; keeping capable equipment in use avoids them.';
const traces = {
  cloud: {
    stages: [
      ['support', 'Sends your request and shows the result. It uses some electricity, but the model runs elsewhere.'],
      ['support', 'Carries the request and response. Network equipment uses electricity to move data.'],
      ['main', 'Servers run the model. The facility uses electricity for computing and cooling and may consume water on site and through electricity generation. Well-utilized shared servers can be efficient.'],
      ['always', 'The model was trained on remote infrastructure. Servers, network equipment and your device all have manufacturing footprints.']
    ],
    summary: ['Centralized.', 'The heavy computing happens in shared data centers. Their efficiency, electricity supply, cooling design and local water conditions shape the impact.']
  },
  hybrid: {
    stages: [
      ['main', 'Runs the requests it can handle, drawing power from its battery or outlet.'],
      ['occasional', 'Carries requests the app sends out, plus model and app updates.'],
      ['depends', 'Handles requests the device cannot, or optional features. The app’s settings or documentation should say which.'],
      ['always', behindTheScenes]
    ],
    summary: ['Mixed.', 'Some work moves to your device and some still relies on centralized infrastructure. How much depends on the app and the tasks you give it.']
  },
  local: {
    stages: [
      ['main', 'Does all the computing for this task, using electricity from its battery or outlet. That electricity has its own sources, emissions and indirect water use. Slower hardware may take longer for the same result.'],
      ['occasional', 'Delivers the model and updates, though not each request.'],
      ['none', 'If processing truly stays on the device, this task does not rely on data-center servers or their cooling.'],
      ['always', behindTheScenes]
    ],
    summary: ['Local.', 'A suitable task can run without relying on centralized AI infrastructure for each request. The device still uses electricity, and training, downloads and hardware remain part of the footprint. Whether the total impact is lower depends on the hardware, the workload’s efficiency and the electricity supply on each side.']
  }
};
const traceStages = document.querySelectorAll('#trace-path li');
const traceSummary = document.querySelector('#trace-summary');
const traceOptions = document.querySelector('#trace-options');
traceOptions.hidden = false;
traceOptions.addEventListener('change', event => {
  const trace = traces[event.target.value];
  if (!trace) return;
  trace.stages.forEach(([level, text], index) => {
    const stage = traceStages[index];
    stage.dataset.level = level;
    stage.querySelector('.trace-role').textContent = roles[level];
    stage.querySelector('.trace-text').textContent = text;
  });
  const label = document.createElement('strong');
  label.textContent = trace.summary[0];
  traceSummary.replaceChildren(label, ` ${trace.summary[1]}`);
});

// Could this work locally? Qualitative prompts, not recommendations or rankings.
const workloads = {
  notes: ['Summarize a short set of notes', 'A smaller local model may be suitable if it fits your device and produces a reliable summary. Check the result against the original notes.', 'Output quality, memory needs, time to finish and electricity for the same task. Confirm that the app actually processes locally.'],
  audio: ['Transcribe an audio recording', 'On-device speech recognition may suit a supported language and recording. Check names, accents and difficult audio against the original.', 'Accuracy, processing time and device power for the same recording. Offline processing still uses energy, and some apps send audio to a server.'],
  large: ['Run a large, demanding model', 'A demanding model may exceed your device’s memory or take too long. Consider whether a smaller model can meet the task before buying equipment.', 'Equivalent output quality, hardware requirements and total runtime energy. Include manufacturing impacts if new equipment is needed; shared servers may use hardware more efficiently.'],
  current: ['Answer questions about recent events', 'A local model only knows what was in its training data. Answering about recent events usually means searching the web or calling a remote service, so the task may not stay local.', 'Whether the app retrieves information remotely, the reliability of its sources, and electricity on both sides. A local model can still help with the parts that do not need fresh information.']
};
const workload = document.querySelector('#workload');
const workloadResult = document.querySelector('#workload-result');
workload.hidden = false;
workload.addEventListener('change', () => {
  const entry = workloads[workload.value];
  if (!entry) return;
  const [title, explanation, comparison] = entry;
  const heading = document.createElement('h4');
  heading.textContent = title;
  const description = document.createElement('p');
  description.textContent = explanation;
  const detail = document.createElement('p');
  const label = document.createElement('strong');
  label.textContent = 'What to compare: ';
  detail.append(label, comparison);
  workloadResult.replaceChildren(heading, description, detail);
});

// Electricity illustration: kWh = watts × hours ÷ 1,000. No device data is implied.
const energyInputs = ['power', 'minutes', 'baseline', 'sessions'].map(id => document.querySelector(`#${id}`));
const [power, minutes, baseline, sessions] = energyInputs;
const energyOut = {
  power: document.querySelector('#power-value'),
  minutes: document.querySelector('#minutes-value'),
  baseline: document.querySelector('#baseline-value'),
  sessions: document.querySelector('#sessions-value'),
  total: document.querySelector('#energy'),
  formula: document.querySelector('#energy-formula'),
  extra: document.querySelector('#energy-extra'),
  extraFormula: document.querySelector('#energy-extra-formula'),
  year: document.querySelector('#energy-year'),
  yearFormula: document.querySelector('#energy-year-formula'),
  warning: document.querySelector('#energy-warning')
};
document.querySelector('#energy-controls').hidden = false;
document.querySelector('#energy-breakdown').hidden = false;
function updateEnergy() {
  const watts = Number(power.value);
  const duration = Number(minutes.value);
  const idle = Number(baseline.value);
  const perWeek = Number(sessions.value);
  const hours = duration / 60;
  const total = watts * hours / 1000;
  const extra = Math.max(watts - idle, 0) * hours / 1000;
  energyOut.power.textContent = `${watts} W`;
  energyOut.minutes.textContent = `${duration} minutes`;
  energyOut.baseline.textContent = `${idle} W`;
  energyOut.sessions.textContent = perWeek;
  energyOut.total.textContent = `${fmt(total)} kWh`;
  energyOut.formula.textContent = `${watts} W × (${duration} ÷ 60 hours) ÷ 1,000 per session`;
  energyOut.extra.textContent = `${fmt(extra)} kWh`;
  energyOut.extraFormula.textContent = `(${watts} W − ${idle} W) × (${duration} ÷ 60 hours) ÷ 1,000`;
  energyOut.year.textContent = `${fmt(extra * perWeek * 52)} kWh`;
  energyOut.yearFormula.textContent = `Per-session value above × ${perWeek} session${perWeek === 1 ? '' : 's'} a week × 52 weeks`;
  energyOut.warning.hidden = idle < watts;
}
energyInputs.forEach(input => input.addEventListener('input', updateEnergy));
updateEnergy();
