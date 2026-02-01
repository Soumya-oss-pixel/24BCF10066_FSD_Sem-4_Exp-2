/* Navigation Tabs */
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

/* Experiment 1.2.1 – Character Counter */
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', () => {
    charCount.textContent = textInput.value.length;
});

/* Experiment 1.2.2 – Product Filter */
const filter = document.getElementById('filter');
const cards = document.querySelectorAll('.card');

filter.addEventListener('change', () => {
    const value = filter.value;

    cards.forEach(card => {
        card.style.display =
            value === 'all' || card.classList.contains(value)
                ? 'block'
                : 'none';
    });
});

/* Experiment 1.2.3 – SVG Drawing Tool */
const svg = document.getElementById('canvas');
const colorPicker = document.getElementById('colorPicker');
const undoBtn = document.getElementById('undo');

let shapes = [];

svg.addEventListener('click', (e) => {
    const rect = svg.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", 8);
    circle.setAttribute("fill", colorPicker.value);

    svg.appendChild(circle);
    shapes.push(circle);
});

undoBtn.addEventListener('click', () => {
    const last = shapes.pop();
    if (last) svg.removeChild(last);
});
