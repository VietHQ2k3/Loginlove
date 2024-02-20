function changeValue(cell) {
    var currentValue = parseInt(cell.innerText);
    
    if (currentValue === 9) {
        cell.innerText = 0;
    } else {
        cell.innerText = currentValue + 1;
    }
}

