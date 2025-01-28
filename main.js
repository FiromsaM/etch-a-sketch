const container = document.querySelector('#container')

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const divs = document.createElement('div')

    divs.classList.add('divs')
    divs.addEventListener('mouseover', () => {
      divs.style.backgroundColor = 'red'
    })
    container.appendChild(divs)
  }
}

// function backgroundColor() {

//   divs.style.backgroundColor = 'red'
// }
