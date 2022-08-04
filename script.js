let letters = document.querySelectorAll('body div.title-container div.title-character')
let currentIndex = 0

let animate = setInterval(function() {
    let fromDegree = letters[currentIndex].style.transform.substr(8)
    let degree = Number(fromDegree.substr(0, fromDegree.length - 4))
    if(degree == 270)
      changeColor(currentIndex)
    if(degree < 360) {
      newDegree = degree + 1
      letters[currentIndex].style.transform = 'rotateY(' + newDegree + 'deg)'
    } else {
      newDegree = 0
      letters[currentIndex].style.transform = 'rotateY(' + newDegree + 'deg)'
      if(currentIndex == letters.length-1)
        currentIndex = 0
      else
        currentIndex++
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