const container = document.querySelector('#container')
const selectedUserGrid = document.querySelector('#selectedUserGrid')
const reset = document.querySelector('#reset')

selectedUserGrid.addEventListener('click', gridCount)

function gridCount() {
  const gridCount = prompt('Enter the number of grid you want: ')

  if (isNaN(gridCount) || gridCount < 0) {
    alert('Not a valid entry, enter positive number')
    gridCount()
  } else if (gridCount > 100) {
    alert('The maximum number of grid count is 100')
    gridCount()
  }
  let width = (1 / gridCount) * 100
  let height = (1 / gridCount) * 100

  container.textContent = ''
  for (let i = 0; i < gridCount; i++) {
    for (let j = 0; j < gridCount; j++) {
      const divs = document.createElement('div')

      divs.style.width = `${width}%`
      divs.style.height = `${height}%`
      divs.style.border = '1px solid black'

      divs.addEventListener('mouseover', backgroundColor)
      reset.addEventListener('click', () => {
        divs.style.backgroundColor = ''
      })

      container.appendChild(divs)
    }
  }
}

function gridGenerator() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const divs = document.createElement('div')

      divs.classList.add('divs')

      divs.addEventListener('mouseover', backgroundColor)
      reset.addEventListener('click', () => {
        divs.style.backgroundColor = ''
      })

      container.appendChild(divs)
    }
  }
}

function backgroundColor(event) {
  console.log(event.target)
  event.target.style.backgroundColor = 'red'
}

gridGenerator()
