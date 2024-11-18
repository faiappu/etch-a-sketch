const container = document.querySelector(".container");
let gridSize;

function gridBuilder(size) {
    size = Number(size);
    gridSize = size * size;

    container.innerHTML = '';

    for (let i = 0; i< gridSize; i++) {
        const item = document.createElement("div");
        item.style.height = `calc(100% / ${size})`;
        item.style.width = `calc(100% / ${size})`;
        item.classList.add('item');
        container.appendChild(item);
    }

        
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('mouseover', function(e) {
            item.classList.add('hover');
        });
    });
    console.log(size);
}

gridBuilder(16);

const button = document.querySelector('button');
button.addEventListener('click', function(e){
    let size = prompt('Enter new grid dimensions');
    size = Number(size);
    if (isNaN(size) || size < 0) {
        throw new TypeError('not a Number');
    }
    else if ( size > 100 ){
        throw new Error('Too big');
    }
    gridBuilder(size);
});