window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ? 
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' :
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});

// Assignment 4
const developerName = "Nurkelddiiiiiiii";
let visitorCount = 0;
const isAvailableForHire = true;

function greetUser(name) {
    return "Hello, " + name + "! Welcome to my portfolio.";
}




window.addEventListener('DOMContentLoaded', function() {
    alert("Welcome to my interactive portfolio!");
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    displaySkills();
    displayProjects();
    
    document.getElementById('randomBtn').addEventListener('click', function() {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        alert(`Your random number is: ${randomNum}`);
    });
});

document.getElementById('welcomeBtn').addEventListener('click', function() {
    const userName = prompt("What's your name?");
    if (userName) {
        alert(greetUser(userName));
    }
});

document.getElementById('counterBtn').addEventListener('click', function() {
    visitorCount++;
    document.getElementById('counterValue').textContent = visitorCount;
    if (visitorCount % 5 === 0) {
        alert(`You've clicked the counter ${visitorCount} times!`);
    }
});




document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        displayProjects(this.dataset.filter);
    });
});

// Assignment 5
// 1. Random Number Generation and Conditionals
const randomNumberBtn = document.getElementById('randomNumberBtn');
const numberDisplay = document.getElementById('numberDisplay');
const numberInfo = document.getElementById('numberInfo');

randomNumberBtn.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  numberDisplay.textContent = randomNum;

  let info = '';
  if (randomNum % 2 === 0) {
    info += 'The number is even. ';
  } else {
    info += 'The number is odd. ';
  }

  if (randomNum > 50) {
    info += "It's greater than 50.";
  } else {
    info += "It's 50 or less.";
  }

  numberInfo.textContent = info;
});

// 2. Comparatorrr..
const compareBtn = document.getElementById('compareBtn');
const value1Input = document.getElementById('value1');
const value2Input = document.getElementById('value2');
const comparisonResult = document.getElementById('comparisonResult');

compareBtn.addEventListener('click', () => {
  const val1 = parseFloat(value1Input.value);
  const val2 = parseFloat(value2Input.value);

  if (isNaN(val1) || isNaN(val2)) {
    comparisonResult.textContent = 'Please enter valid numbers';
    return;
  }

  if (val1 > val2) {
    comparisonResult.textContent = `Value A (${val1}) is greater than Value B (${val2})`;
  } else if (val1 < val2) {
    comparisonResult.textContent = `Value A (${val1}) is less than Value B (${val2})`;
  } else {
    comparisonResult.textContent = `Both values are equal (${val1})`;
  }
});
const projects = [
    { id: 1, name: "E-Commerce Website", type: "frontend", tech: ["HTML", "CSS", "JavaScript"] },
    { id: 2, name: "REST API Service", type: "backend", tech: ["Node.js", "Express"] },
    { id: 3, name: "Portfolio Design", type: "frontend", tech: ["HTML", "CSS", "Bootstrap"] },
    { id: 4, name: "Database System", type: "backend", tech: ["MongoDB", "Mongoose"] }
];

function displayProjects(filter = 'all') {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.type === filter);

    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${index % 2 === 0 ? 'even' : 'odd'}`;
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>Type: ${project.type}</p>
            <p>Technologies: ${project.tech.join(', ')}</p>
            <button class="delete-btn" data-id="${project.id}">Delete</button>
        `;
        projectsContainer.appendChild(projectCard);
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-id'));
            deleteProject(projectId);
        });
    });
}

// Массив проектов
let projects = [
    {
        id: 1,
        name: "Formula 1",
        type: "frontend",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "img/Снимок экрана 2025-04-02 085922.png",
        description: "Informational Website about Formula 1."
    },
    {
        id: 2,
        name: "To-Do List",
        type: "frontend",
        tech: ["React", "JavaScript"],
        image: "img/photo_2025-04-17_20-16-36.jpg",
        description: "A React-powered To-Do List featuring drag-and-drop sorting."
    }
];

// Функция отображения проектов
function displayProjects(filter = 'all') {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.type === filter);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-4 mb-4';
        projectCard.innerHTML = `
            <div class="card h-100">
                <img src="${project.image || 'img/default-project.png'}" class="card-img-top" alt="${project.name}">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <p><strong>Type:</strong> <span class="project-type">${project.type}</span></p>
                    <p><strong>Technologies:</strong> ${project.tech.join(', ')}</p>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-outline-primary edit-btn" data-id="${project.id}">Edit</button>
                        <button class="btn btn-outline-danger delete-btn" data-id="${project.id}">Delete</button>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-id'));
            editProject(projectId);
        });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-id'));
            deleteProject(projectId);
        });
    });
}
let projects = [
    {
        id: 1,
        name: "Formula 1",
        type: "frontend",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "img/Снимок экрана 2025-04-02 085922.png",
        description: "Informational Website about Formula 1."
    },
    {
        id: 2,
        name: "To-Do List",
        type: "frontend",
        tech: ["React", "JavaScript"],
        image: "img/photo_2025-04-17_20-16-36.jpg",
        description: "A React-powered To-Do List featuring drag-and-drop sorting."
    }
];


function addProject(name, type, tech, description) {
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    projects.push({
        id: newId,
        name: name,
        type: type,
        tech: tech.split(',').map(item => item.trim()),
        description: description,
    });
    displayProjects();
}

function deleteProject(id) {
    projects = projects.filter(project => project.id !== id);
    displayProjects();
}

function editProject(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const modal = document.createElement('div');
    modal.className = 'modal fade show d-block';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Project</h5>
                    <button type="button" class="btn-close close-modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Project Name</label>
                        <input type="text" class="form-control project-name" value="${project.name}">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Project Type</label>
                        <select class="form-select project-type">
                            <option value="frontend" ${project.type === 'frontend' ? 'selected' : ''}>Frontend</option>
                            <option value="backend" ${project.type === 'backend' ? 'selected' : ''}>Backend</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Technologies (comma separated)</label>
                        <input type="text" class="form-control project-tech" value="${project.tech.join(', ')}">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea class="form-control project-description">${project.description}</textarea>
                    </div>
                  
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary close-modal">Cancel</button>
                    <button type="button" class="btn btn-primary save-changes">Save Changes</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.remove();
            document.body.style.overflow = 'auto';
        });
    });

    document.querySelector('.save-changes').addEventListener('click', () => {
        project.name = document.querySelector('.project-name').value;
        project.type = document.querySelector('.project-type').value;
        project.tech = document.querySelector('.project-tech').value.split(',').map(item => item.trim());
        project.description = document.querySelector('.project-description').value;
        project.image = document.querySelector('.project-image').value;
        
        modal.remove();
        document.body.style.overflow = 'auto';
        displayProjects();
    });
}

document.getElementById('projectForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('projectName').value;
    const type = document.getElementById('projectType').value;
    const tech = document.getElementById('projectTech').value;
    const description = document.getElementById('projectDescription').value;
    const image = document.getElementById('projectImage').value || 'img/default-project.png';
    
    if (name && type && tech && description) {
        addProject(name, type, tech, description, image);
        this.reset();
    } else {
        alert('Please fill all required fields');
    }
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        displayProjects(this.dataset.filter);
    });
});

window.addEventListener('DOMContentLoaded', displayProjects);
// 4. Adding Interactivity with Loops
const dynamicContainer = document.getElementById('dynamicContainer');

for (let i = 1; i <= 10; i++) {
  const div = document.createElement('div');
  div.textContent = `Featured project ${i}`;
  div.style.padding = '10px';
  div.style.marginBottom = '5px';
  div.style.color = 'white';
  div.style.backgroundColor = i % 2 === 0 ? 'green' : 'blue';
  dynamicContainer.appendChild(div);
}
//assignment 6
document.getElementById('contactBtn').addEventListener('click', function() {
    const audio = document.getElementById('clickAudio');
    
    audio.currentTime = 0;
    audio.play().catch(e => console.error("Audio play failed:", e));
    
    setTimeout(() => {
        window.location.href = "contact.html";
    }, 2000);
});
function playSound() { 
    const audio = new Audio('sound/project (2).mp3');
    audio.play().catch(e => {
        console.error("Audio playback failed:", e);
    });
}