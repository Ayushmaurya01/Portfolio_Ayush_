// ================= LOAD SKILLS =================
fetch("data/skills.json")
  .then(res => res.json())
  .then(skills => {
    const grid = document.getElementById("skillsGrid");

    skills.forEach(skill => {
      const div = document.createElement("div");
      div.className = "card skill-item reveal";
      div.innerText = skill;
      grid.appendChild(div);
    });
  });

// ================= LOAD PROJECTS =================
fetch("data/projects.json")
  .then(res => res.json())
  .then(projects => {
    const grid = document.getElementById("projectsGrid");

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "card reveal";

      card.innerHTML = `
        <h3 class="project-title">${project.name}</h3>
        <p class="project-tech">${project.tech}</p>
        <div class="project-links">
          <a href="${project.github}" target="_blank">GitHub →</a>
        </div>
      `;

      grid.appendChild(card);
    });
  });

// ================= LOAD EXPERIENCE =================
fetch("data/experience.json")
  .then(res => res.json())
  .then(items => {
    const timeline = document.getElementById("experienceTimeline");

    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "timeline-item reveal";

      div.innerHTML = `
        <h3>${item.role}</h3>
        <p><strong>${item.org}</strong></p>
        <p>${item.duration}</p>
      `;

      timeline.appendChild(div);
    });
  });
