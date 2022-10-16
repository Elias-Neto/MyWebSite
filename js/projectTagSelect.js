function selectedProjectTag(projectTag) {
  const projectTagA = document.querySelector('#projectsMain .projectTagA')
  const projectTagB = document.querySelector('#projectsMain .projectTagB')

  let selectedA
  let selectedB

  switch (projectTag) {
    case 'a':
      selectedA = true
      selectedB = false
      break
    case 'b':
      selectedA = false
      selectedB = true
      break
    default:
      break
  }

  let selected = [selectedA, selectedB]

  let elements = [projectTagA, projectTagB]

  for (const index in selected) {
    if (selected[index]) {
      elements[index].style.display = 'inherit'
    } else {
      elements[index].style.display = 'none'
    }
  }
}

function projectTagSelect() {
  const projectsTags = document.querySelector('#projectsMain .projectsTags select')
  let tagSelected = projectsTags.options[projectsTags.selectedIndex].value

  switch (tagSelected) {
    case 'a':
      selectedProjectTag('a')
      break
    case 'b':
      selectedProjectTag('b')
      break
    default:
      break
  }

  scrollTo(0, 0)
}