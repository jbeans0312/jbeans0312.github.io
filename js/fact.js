function showQuote(){
    var facts=[
        'I grew up in Connecticut',
        'Long sandwiches are called grinders, not hoagies',
        'My top strength is Harmony',
    ]
    var pick=Math.floor(Math.random() * (facts.length));
    document.getElementById('fact').innerHTML = 'Fun Fact: ' + facts[pick]
}

window.onload = function() {
    showQuote();
};