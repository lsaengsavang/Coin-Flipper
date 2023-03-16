document.addEventListener('DOMContentLoaded', function () {
    let total = 0;
    let numberOfHeads = 0;
    let numberOfTails = 0;
    let percentageOfHeads = 0;
    let percentageOfTails = 0;

    const flipButton = document.querySelector('#flip');
    const clearButton = document.querySelector('#clear');
    const statusMessage = document.querySelector('#statusMessage');
    const pennyImage = document.querySelector('img');
    const numberHeadsCell = document.querySelector('#heads');
    const numberTailsCell = document.querySelector('#tails');
    const percentageHeadsCell = document.querySelector('#heads-percent');
    const percentageTailsCell = document.querySelector('#tails-percent');

    flipButton.addEventListener('click', function(e){
        total += 1;
        const result = Math.round(Math.random () * 100);

        if (result > 50) {
            numberOfHeads += 1;
            statusMessage.textContent = 'You flipped Heads!';
            pennyImage.src = 'assets/images/penny-heads.jpg';
        } else {
            numberOfTails += 1;
            statusMessage.textContent = 'You flipped Tails!';
            pennyImage.src = 'assets/images/penny-tails.jpg';
        }
        percentageOfHeads = Math.round(numberOfHeads / total * 100);
        percentageOfTails = Math.round(numberOfTails / total * 100);
        numberHeadsCell.textContent = `${numberOfHeads}`;
        numberTailsCell.textContent = `${numberOfTails}`;
        percentageHeadsCell.textContent = `${percentageOfHeads}`
        percentageTailsCell.textContent = `${percentageOfTails}`
    })
    clearButton.addEventListener('click', function(e){
        total = 0;
        numberOfHeads = 0;
        numberOfTails = 0;
        percentageOfHeads = 0;
        percentageOfTails = 0;

        numberHeadsCell.textContent = `${numberOfHeads}`;
        numberTailsCell.textContent = `${numberOfTails}`;
        percentageHeadsCell.textContent = `${percentageOfHeads}%`
        percentageTailsCell.textContent = `${percentageOfTails}%`
        statusMessage.textContent = "Let's Get Rolling!";
        pennyImage.src = 'assets/images/penny-heads.jpg';
    })

})