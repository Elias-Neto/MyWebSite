function selectedProjectTag(projectTag) {
  const projectTagA = document.querySelector('#projectsMain .projectTagA')
  const projectTagB = document.querySelector('#projectsMain .projectTagB')
  const projectTagC = document.querySelector('#projectsMain .projectTagC')
  const projectTagD = document.querySelector('#projectsMain .projectTagD')

  let selectedA
  let selectedB
  let selectedC
  let selectedD

  switch (projectTag) {
    case 'a':
      selectedA = true
      selectedB = false
      selectedC = false
      selectedD = false
      break
    case 'b':
      selectedA = false
      selectedB = true
      selectedC = false
      selectedD = false
      break
    case 'c':
      selectedA = false
      selectedB = false
      selectedC = true
      selectedD = false
      break
    case 'd':
      selectedA = false
      selectedB = false
      selectedC = false
      selectedD = true
      break
    default:
      break
  }

  let selected = [selectedA, selectedB, selectedC, selectedD]

  let elements = [projectTagA, projectTagB, projectTagC, projectTagD]

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
    case 'c':
      selectedProjectTag('c')
      break
    case 'd':
      selectedProjectTag('d')
      break
    default:
      break
  }

  scrollTo(0, 0)
}