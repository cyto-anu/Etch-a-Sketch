const container = document.querySelector('.container');

//returns grid size length desired and ^2's it to return total divs required
const gridSizeLength = window.prompt("What length would you like your grid ser?");
const gridTotal = gridSizeLength*gridSizeLength;


//creates total grids needed, appends to contaier div in html, and adds a 'div' class to each div
for (i=1;i <= gridTotal; i++ ) {

    const grid = document.createElement('div');
    container.appendChild(grid);
    grid.classList.add('grid');
    grid.setAttribute('style', `flex-basis:${(1/gridSizeLength)*100}%`);
    //the above formula sets a flex-basis for each div according to the user's grid size
    //this is so the flex wrap formula can form a perfect square

}

const allGrids = document.querySelectorAll('.grid');

allGrids.forEach(grid => {
    
    grid.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    })
    
});

