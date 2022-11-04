// UPPDRAG 1

document.body.style.padding = '16px';

for(let i=0; i<5; i++){
    const rad = document.createElement(`h${5-i}`);
    document.body.appendChild(rad);
    rad.innerText = `Rad ${1 + i}`;
    rad.style.color = 'hsl(240, 88%, 70%)';
    rad.style.textAlign = 'center';
    rad.style.backgroundColor = `hsl(${120+(i*20)}, 90%, 85%)`;
    rad.style.marginBottom = `${10 + (i*10)}px`;
}

// UPPDRAG 2

const container = document.createElement('section')
document.body.appendChild(container);
container.style.border = '2px solid black'
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.justifyContent = 'space-evenly';
container.style.alignItems = 'center';

const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for(let i=0; i<3; i++){
    const column = document.createElement('article');
    container.appendChild(column);
    column.style.backgroundColor = 'hsl(240, 71%, 80%)';
    column.style.margin = '50px 0px';
    column.style.padding = '8px';
    //column.innerText = `column ${1 + i}`;
    if(i == 0){
        for(let x=0; x<10; x++){
            const numContainer = document.createElement('div');
            column.appendChild(numContainer);
            numContainer.style.width = '48px'
            numContainer.style.display = 'flex';
            const pElement = document.createElement('p');
            numContainer.appendChild(pElement)
            pElement.innerText = `${x}`;
            if(x == 4){
                numContainer.style.backgroundColor = 'transparent';
                pElement.style.color = 'white'
            }
            else if(x%2 == 0){
                numContainer.style.backgroundColor = 'black'
                pElement.style.color = 'white'
            }
            else if(x%2 == 1){
                numContainer.style.backgroundColor = 'white'
                pElement.style.color = 'black'
            }
        }
    }
    else if(i == 1){
        for(let x=0; x<10; x++){
            const numContainer = document.createElement('div');
            column.appendChild(numContainer);
            numContainer.style.width = '48px'
            numContainer.style.display = 'flex';
            numContainer.style.justifyContent = 'center';
            const pElement = document.createElement('p');
            numContainer.appendChild(pElement)
            pElement.innerText = `${9 - x}`;
            if(x == 1){
                numContainer.style.backgroundColor = 'transparent';
                pElement.style.color = 'white'
            }
            else if(x%2 == 0){
                numContainer.style.backgroundColor = 'white';
                pElement.style.color = 'black';
            }
            else if (x%2 == 1){
                numContainer.style.backgroundColor = 'black';
                pElement.style.color = 'white';
            }
        }
    }
    else{
        for(let x=0; x<10; x++){
            const numContainer = document.createElement('div');
            column.appendChild(numContainer);
            numContainer.style.width = '48px';
            numContainer.style.display = 'flex';
            numContainer.style.justifyContent = 'flex-end';
            const pElement = document.createElement('p');
            numContainer.appendChild(pElement);
            pElement.innerText = `${numbers[x]}`;
            if(x == 5){
                numContainer.style.backgroundColor = 'transparent';
                
            }
            else if(x%2 == 0){
                numContainer.style.backgroundColor = 'black';
                pElement.style.color = 'white';
            }
            else if(x%2 == 1){
                numContainer.style.backgroundColor = 'white';
                pElement.style.color = 'black';
            }
        }
    }
}
