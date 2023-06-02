const mainContainer = document.querySelector('.mainContainer')
function generateDivs (num)  {
    for (let i = 0; i<num; i++) {
      const genDiv = document.createElement('div');
      genDiv.classList.add('divClass');
      const square = document.querySelector('.divClass');
      
        genDiv.addEventListener('mouseover', (event) => {
            genDiv.classList.add('activated');
            console.log("GRID hover confirmed!")
                })
            
                mainContainer.appendChild(genDiv)
            }
    }
  

generateDivs(2108)

const refreshButton = document.querySelector('.refreshButton')

refreshButton.addEventListener('click', () => {location.reload()})

// need to figure out how to dynamically generate sufficient number of grid items
// need to create function that changes style on hover (checkout JavaScript 30)





