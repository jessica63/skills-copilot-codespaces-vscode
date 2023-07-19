function skillsMember() {
  const skills = document.querySelectorAll(".skills");
  skills.forEach((skill) => {
    const skillValue = skill.dataset.value;
    skill.style.width = `${skillValue}%`;
  });
}