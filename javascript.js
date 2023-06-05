const drawingContainer = document.querySelector('.drawingContainer')
const refreshButton = document.querySelector('.refreshButton')
const colorButtons = document.querySelectorAll('.color-choice')

let slider = document.getElementById("myRange");
let sliderValue = slider.value;
var color = 'white'

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
    drawingContainer.appendChild(genDiv);
  }
      var pixels = drawingContainer.querySelectorAll('div')
      pixels.forEach(pixels => pixels.addEventListener('mouseover', colorGrid))
  }


// New change color function:

function colorGrid() {
  switch (color) {
      case 'rainbow':
          this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
          this.classList.remove('gray');
          break;  
      case 'gray':
          if (this.style.backgroundColor.match(/rgba/)) {
              let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
              if (currentOpacity <= 0.9) {
                  this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                  this.classList.add('gray');
              }
          } else if (this.classList == 'gray' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
              return;
          } else {
              this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
          }
          break;
      case 'eraser':
          this.style.backgroundColor = '#274c43';
          this.classList.remove('gray');
          break;
      case 'black':
          this.style.backgroundColor = '#000000';
          this.classList.remove('gray');
          console.log('BLACK selected')
          break;
        case 'white':
          this.style.backgroundColor = 'white';
          break;
      default:
          this.style.backgroundColor = color;
          this.classList.remove('gray');
          break;
  } 
}

function changeColor(event) {
  switch (event.target.dataset.color) { 
      case 'rainbow':
          color = 'rainbow';
          console.log(`${color} selected` )
          break;  
      case 'gray':
          color = 'gray';
          console.log(`${color} selected` )
          break;
      case 'eraser':
          color = 'eraser';
          console.log(`${color} selected` )
          break;
      default:
          color = 'black';
          console.log(`${color} selected` )
          break;
  } 
}

// On page load, default grid size: 
generateDivs(7200)

// Refresh button:
function eraseAll () {
  location.reload()
}


// Event listeners:
refreshButton.addEventListener('click', eraseAll)
colorButtons.forEach(colorButtons => colorButtons.addEventListener('click', changeColor));