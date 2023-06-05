const drawingContainer = document.querySelector('.drawingContainer')
const greenButton = document.getElementById('greenButton');
const refreshButton = document.querySelector('.refreshButton')

let slider = document.getElementById("myRange");
let sliderValue = slider.value;


slider.addEventListener("input", function() {
  sliderValue = slider.value
  console.log(sliderValue)
  sliderSize(sliderValue)
});

function sliderSize (sliderValue) {
  
  if (sliderValue == 50) 
    {generateDivs(2500); 
      drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 10px)';
      drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 10px)';
     }
  if (sliderValue == 55) 
    {generateDivs(3025); 
      drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 9px)';
      drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 9px)';
    }
  if (sliderValue == 60) 
  {generateDivs(3600); 
    drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 8.3px)';
    drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 8.3px)';
  }
  if (sliderValue == 65) 
  {generateDivs(4225); 
    drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 7.7px)';
    drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 7.7px)';
  }
  if (sliderValue == 70) 
  {generateDivs(4900); 
    drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 7.14px)';
    drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 7.14px)';
  }
  if (sliderValue == 75) 
  {generateDivs(5625); 
    drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 6.6px)';
    drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 6.6px)';
  }
  if (sliderValue == 80) 
  {generateDivs(6400); 
    drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 6.25px)';
    drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 6.25px)';
  }
  if (sliderValue == 85) 
  {generateDivs(7225); 
    drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 5.88px)';
    drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 5.88px)';
  }
  if (sliderValue == 90) 
  {generateDivs(8100); 
    drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 5.55px)';
    drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 5.55px)';
  }
  if (sliderValue == 95) 
  {generateDivs(9025); 
    drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 5.26px)';
    drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 5.26px)';
  }
  if (sliderValue == 100) 
  {generateDivs(10000); 
    drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 5px)';
    drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 5px)';
  }
  }


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

// On page load, default grid size: 
generateDivs(7200)

// Refresh button:



function eraseAll () {
  location.reload()
}

// Green button:



function changeColor(event) { 
  switch (activated.style.backgroundColor) {
    case 'green':
      backgroundColor: 'green';
  }

}

// Event listeners:
refreshButton.addEventListener('click', eraseAll)