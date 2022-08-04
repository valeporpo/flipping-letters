let letters = document.querySelectorAll('body div.title-container div.title-character')
let currentIndex = 0

let animate = setInterval(function() {
    let fromDegree = letters[currentIndex].style.transform.substr(8)
    let degree = Number(fromDegree.substr(0, fromDegree.length - 4))
    if(degree == 270)
      changeColor(currentIndex)
    if(degree < 360) {
      newDegree = degree + 1
      changeRotation(currentIndex, newDegree)
    } else {
      newDegree = 0
      changeRotation(currentIndex, newDegree)
      currentIndex = changeLetter(currentIndex)
    }
    
}, 1)

function changeColor(index) {
  let currentColor = letters[index].style.color
  if(currentColor == 'black')
    letters[index].style.color = 'blue'
  else if(currentColor == 'blue')
    letters[index].style.color = 'red'
  else
    letters[index].style.color = 'black' 
}

function changeRotation(letterIndex, degree) {
  letters[letterIndex].style.transform = 'rotateY(' + degree + 'deg)'
}

function changeLetter(index) {
  newIndex = (index == letters.length-1) ? 0 : index + 1
  return newIndex
}