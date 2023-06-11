function showQuote(){
    var facts=[
        'When the full moon rises, I turn into a spider.',
        'My summoning circle is BlueTooth compatible.',
        'My face is green and serpentine.',
        'I conclude!',
        'My favorite tea is chamomile.',
        'M0re 2 come',
        'There are always rooms in the Magpie\'s Knapsack.',
        'HARK!'
    ]
    var pick=Math.floor(Math.random() * (facts.length));
    document.getElementById('fact').innerHTML = 'Fun Fact: ' + facts[pick]
}

window.onload = function() {
    showQuote();
};