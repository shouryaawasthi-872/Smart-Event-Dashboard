const eventForm = document.getElementById('event-form');
const eventList = document.getElementById('event-list');
const keyDisplay = document.getElementById('key-display');
const clearBtn = document.getElementById('clear-all');


eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const desc = document.getElementById('description').value;

    createEventCard(title, date, category, desc);
    eventForm.reset();
});


function createEventCard(title, date, category, desc) {
    const card = document.createElement('div');
    card.className = 'event-item';
    
    card.innerHTML = `
        <button class="delete-btn">×</button>
        <h3>${title}</h3>
        <p> ${date}</p>
        <span class="badge">${category}</span>
        <p>${desc}</p>
    `;

    
    
    card.querySelector('.delete-btn').addEventListener('click', () => {
        card.remove();
    });

    eventList.appendChild(card);
}


clearBtn.addEventListener('click', () => {
    eventList.innerHTML = '';
});


document.addEventListener('keydown', (e) => {
    keyDisplay.textContent = e.key;
});