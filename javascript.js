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
  

// Refresh button:
const refreshButton = document.querySelector('.refreshButton')
refreshButton.addEventListener('click', () => {location.reload()})

// need to figure out how to dynamically generate sufficient number of grid items
// TRY THIS: https://stackoverflow.com/questions/33223511/how-can-i-make-a-40x40-grid-using-divs



let slider = document.getElementById("myRange");
let sliderValue = slider.value;

slider.addEventListener("input", function() {
  sliderValue = slider.value;
  
});

generateDivs(100)

// PSEUDOCODE FOR NEXT ITERATION:

// Function that takes the slider input, e.g. a 50x50 grid
// The actual slider value is only 50
// This input is multipled by itself (to get 50x50)
// the resuling value is put into the generateDivs function
// The size of the divs also has to change accordlingly: 
// Total area is 500x500 = 250 000 px
// MINIMUM SIZE: 5px size, i.e. 100x100 grid size, generateDivs(10000)
// One size above: For 6x6 pixel grid (each square has area of 36), the big square fits:
// 250 000 / 36 = ~6944 (~83x83 sized grid)
// For a 100x100 sized grid: 100x * 100x = 250000; 
// MAX SIZE: 50x50 size; generateDivs(100)



