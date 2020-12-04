const goal = 25;
document.getElementById('target').innerText = goal;
let entries = [];
let entriesWrapper = document.querySelector('#entries');
function addNewEntry(newEntry) {
    //remove the fist li from ul
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);

    let listItem = document.createElement('li');
    let listValue = document.createTextNode(newEntry + " km");

    //create and add value to li
    listItem.appendChild(listValue);

    //add the li to the last ul
    entriesWrapper.appendChild(listItem);

} 

function reducer(total, currentValue) {
    return total + currentValue;
}

function calTotal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total-id').innerText = totalValue + " km";
    document.getElementById('progress-total').innerText = totalValue + " km";
}
function calAverage() {
    const averageValue = entries.reduce(reducer).toFixed(1);
    const averageTotal = (averageValue/entries.length).toFixed(1);
    document.getElementById('average-distance-id').innerText = averageTotal + " km";
}
function weekHigh() {
    const high = Math.max(...entries);
    document.getElementById('this-week-high-id').innerText = high + " km";
    
}
function calGoal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completedPercent = totalValue / (goal / 100)
    const progressCircle = document.querySelector('#progress-circle');
    if(completedPercent > 100) completedPercent === 100;
    progressCircle.style.background = `conic-gradient( #70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
        
}
function handleSubmit(event) {

    event.preventDefault();//we don't want to refresh browse

    const entry = Number(document.querySelector('#entry').value);
    if(!entry) return;

    document.querySelector('form').reset();//clear all of our form inputs

    entries.push(entry);
    addNewEntry(entry);
    calTotal();
    calAverage();
    weekHigh();
    calGoal();
}


const form = document
    .querySelector('form')
    .addEventListener('submit', handleSubmit)