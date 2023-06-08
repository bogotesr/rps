let results = document.getElementById("result")
let choices = {
    'rock' : {
        'rock' : 'draw',
        'paper' : 'lose',
        'scissor': 'win'
    },    
    'paper' : {
        'rock' : 'win',
        'paper' : 'draw',
        'scissor': 'lose'
    },    
    'scissor' : {
        'rock' : 'lose',
        'paper' : 'win',
        'scissor': 'draw'
    }
}

function cpuChoice(input) {
    var cpuChoices = ["rock", "paper", "scissor"]
    var num = Math.floor(Math.random()*3)

    document.getElementById("cpuChoice").innerHTML = `CPU played ${cpuChoices[num]}`
    let cpuChoice = cpuChoices[num]

    switch(choices[input][cpuChoice]){
        case 'win':
            results.style.cssText = "background-color: #58d154"
            results.innerHTML = "You win!"
            break
        case 'lose':
            results.style.cssText = "background-color: #d15454"
            results.innerHTML = "You lose!"
            break
        default:
            results.style.cssText = "background-color: #b1adad"
            results.innerHTML = "Draw!"
            break  
    }

}