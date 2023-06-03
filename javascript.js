const drawingContainer = document.querySelector('.drawingContainer')
function generateDivs (num)  {
    for (let i = 0; i<num; i++) {
      const genDiv = document.createElement('div');
      genDiv.classList.add('divClass');
      const square = document.querySelector('.divClass');
      
        genDiv.addEventListener('mouseover', (event) => {
            genDiv.classList.add('activated');
            console.log("GRID hover confirmed!")
                })
            
                drawingContainer.appendChild(genDiv)
            }
    }
  

generateDivs(2800)

// Refresh button:
const refreshButton = document.querySelector('.refreshButton')
refreshButton.addEventListener('click', () => {location.reload()})

// need to figure out how to dynamically generate sufficient number of grid items
// TRY THIS: https://stackoverflow.com/questions/33223511/how-can-i-make-a-40x40-grid-using-divs





