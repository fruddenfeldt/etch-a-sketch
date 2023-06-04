// 5x5 --> 10 000 divs --> 100 x 100
// 6x6 --> 7142 -- > ~84x84
// 7x7 --> 5102 --> ~71x71
// 8x8 --> 3900 --> ~62x62
// 9x9 --> 3086 --> ~55x55
// 10x10 --> 2500 --> 50x50


drawingContainer.style.gridTemplateColumns = 'repeat(auto-fill, 10px)';
drawingContainer.style.gridTemplateRows = 'repeat(auto-fill, 8px)';