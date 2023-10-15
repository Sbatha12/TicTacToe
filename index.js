console.log("Welcome to Tic Tac Toe");
let turn = "X";
let isgameover = false;

//function to change the turn
const changeTurn = ()=> {
    return turn ==="X"?"0": "X";
};

//function to check for a win
const checkWin = ()=> {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach (e => {
        if(boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML && 
            boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML && 
            boxtext[e[0]].innerHTML !== "") {
                setTimeout ( () => {
                    document.querySelector('.info').innerText = " Congratulations! '" + boxtext[e[0]].innerText + "' have Won the match";
                }, 100)
            
            isgameover = true;
        }
})
}

// maine game login
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element => {
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click', () => {
        if(boxtext.innerHTML === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
            }
            
        }
    })
})


// add on click lister to reset button
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element => {
        Element.innerText = ""
    })
    turn = "X"
   isgameover = false
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
})
