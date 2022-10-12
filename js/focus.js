function focusNavigation(focusElement) {
  let about = document.getElementById('about')
  let education = document.getElementById('education')
  let projects = document.getElementById('projects')

  let aboutMain = document.getElementById('aboutMain')
  let educationMain = document.getElementById('educationMain')
  let projectsMain = document.getElementById('projectsMain')

  let focusAbout
  let focusEducation
  let focusProjects

  switch (focusElement) {
    case 1:
      focusAbout = true
      focusEducation = false
      focusProjects = false
      break
    case 2:
      focusAbout = false
      focusEducation = true
      focusProjects = false
      break
    case 3:
      focusAbout = false
      focusEducation = false
      focusProjects = true
      break
  }

  let focus = [focusAbout, focusEducation, focusProjects]

  let elements = [about, education, projects]

  let main = [aboutMain, educationMain, projectsMain]

  for (const index in focus) {
    if (focus[index]) {
      elements[index].classList.add('focus')
      main[index].style.display = 'flex'
    } else {
      elements[index].classList.remove('focus')
      main[index].style.display = 'none'
    }
  }
}