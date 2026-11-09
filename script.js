const workloads = {
  notes: ['Summarize a short set of notes', 'A smaller local model may be suitable if it fits your device and produces a reliable summary. Check the result against the original notes.', 'Output quality, memory needs, time to finish and electricity for the same task. Confirm that the app actually processes locally.'],
  audio: ['Transcribe an audio recording', 'On-device speech recognition may suit a supported language and recording. Check names, accents and difficult audio against the original.', 'Accuracy, processing time and device power for the same recording. Offline processing still uses energy, and some apps send audio to a server.'],
  large: ['Run a large, demanding model', 'A demanding model may exceed your device’s memory or take too long. Consider whether a smaller model can meet the task before buying equipment.', 'Equivalent output quality, hardware requirements and total runtime energy. Include manufacturing impacts if new equipment is needed; shared servers may use hardware more efficiently.']
};
const workload = document.querySelector('#workload');
workload.hidden = false;
workload.addEventListener('change', () => {
  const [title, explanation, comparison] = workloads[workload.value];
  const result = document.querySelector('#workload-result');
  const heading = document.createElement('h4');
  heading.textContent = title;
  const description = document.createElement('p');
  description.textContent = explanation;
  const detail = document.createElement('p');
  const label = document.createElement('strong');
  label.textContent = 'What to compare: ';
  detail.append(label, comparison);
  result.replaceChildren(heading, description, detail);
});

const power = document.querySelector('#power');
const minutes = document.querySelector('#minutes');
document.querySelector('#energy-controls').hidden = false;
function updateEnergy() {
  const watts = Number(power.value);
  const duration = Number(minutes.value);
  document.querySelector('#power-value').textContent = `${watts} W`;
  document.querySelector('#minutes-value').textContent = `${duration} minutes`;
  document.querySelector('#energy').textContent = `${(watts * duration / 60 / 1000).toFixed(4).replace(/0+$/, '').replace(/\.$/, '')} kWh`;
  document.querySelector('#energy-formula').textContent = `${watts} W × (${duration} ÷ 60 hours) ÷ 1,000`;
}
power.addEventListener('input', updateEnergy);
minutes.addEventListener('input', updateEnergy);
updateEnergy();
