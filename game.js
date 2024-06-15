document.addEventListener("DOMContentLoaded", function () {

    let gamebox = document.getElementsByClassName("gamebox");
    let box0 = document.getElementById("box0");
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let btn = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let line = document.getElementById("line");
    let winbox = document.getElementById("winbox");
    let wintext = document.getElementById("wintext1");
    let wintext2 = document.getElementById("wintext2");

    let player = "player1";
    let winner;
    let win = [
        [box0, box1, box2], // First row
        [box3, box4, box5], // Second row
        [box6, box7, box8], // Third row
        [box0, box3, box6], // First column
        [box1, box4, box7], // Second column
        [box2, box5, box8], // Third column
        [box0, box4, box8], // First diagonal
        [box2, box4, box6]  // Second diagonal
    ];

    btn.addEventListener("click", btnclk);
    btn2.addEventListener("click", resetGame);


    function btnclk() {
        if (this.innerHTML === "START") {
            start();
            this.innerHTML = "RESET";
        } else {
            resetGame();
        }
    }

    function start() {
        player = "player1";
        add();
        if (window.innerWidth < 950) {
            document.body.style.background = "linear-gradient(to bottom, red ,white)";
        } else {
            document.body.style.background = "linear-gradient(to right, red ,white)";
        }
    }

    function resetGame() {
        for (let i = 0; i < gamebox.length; i++) {
            gamebox[i].innerHTML = "";
        }
        document.body.style.background = "white";
        rem();
        btn.innerHTML = "START";

        line.style.transition = "ALL 0.01s";
        line.style.height = "0"; // Reset the line
        line.style.width = "0";
        line.style.transform = "none";
        wincan();
    }

    function play() {
        if (this.innerHTML === "") { // Prevent overwriting
            if (player === "player1") {
                winner = "PLAYER 1"
                this.innerHTML = "<h1>X</h1>";
                player = "player2";
                if (window.innerWidth < 950) {
                    document.body.style.background = "linear-gradient(to bottom, blue ,white)";
                } else {
                    document.body.style.background = "linear-gradient(to left, blue ,white)";
                }
            } else if (player === "player2") {
                winner = "PLAYER 2";
                this.innerHTML = "<h1>O</h1>";
                player = "player1";
                if (window.innerWidth < 950) {
                    document.body.style.background = "linear-gradient(to bottom, red ,white)";
                } else {
                    document.body.style.background = "linear-gradient(to right, red ,white)";
                }
            }
            checkWinner();
        }
    }

    function checkWinner() {
        for (let i = 0; i < win.length; i++) {
            let [a, b, c] = win[i];
            if (a.innerHTML !== "" && a.innerHTML === b.innerHTML && a.innerHTML === c.innerHTML) {
                rem();
                drawLine(i);
                winact();
                console.log(winner + " won");


                return;
            }
        }
        Tie();

    }

    function Tie() {
        let isTie = true;
        for (let i = 0; i < gamebox.length; i++) {
            if (gamebox[i].innerHTML === "") {
                isTie = false;
                break;
            }
        }
        if (isTie) {
            console.log("tie");
            winner = "TIE"
            winact();
            rem();
        }
    }

    function drawLine(index) {
        line.style.transition = "ALL 1s";

        if (window.innerWidth < 950) {
            switch (index) {
                case 0: // First row
                    line.style.height = "5px";
                    line.style.width = "350px";
                    line.style.top = "15%";
                    line.style.left = "9%";
                    line.style.transform = "none";
                    break;
                case 1: // Second row
                    line.style.height = "5px";
                    line.style.width = "350px";
                    line.style.top = "50%";
                    line.style.left = "9%";
                    line.style.transform = "none";
                    break;
                case 2: // Third row
                    line.style.height = "5px";
                    line.style.width = "350px";
                    line.style.top = "83%";
                    line.style.left = "9%";
                    line.style.transform = "none";
                    break;
                case 3: // First column
                    line.style.width = "5px";
                    line.style.height = "350px";
                    line.style.left = "16%";
                    line.style.top = "9%";
                    line.style.transform = "none";
                    break;
                case 4: // Second column
                    line.style.width = "5px";
                    line.style.height = "350px";
                    line.style.left = "calc(50% - 2px)";
                    line.style.top = "9%";
                    line.style.transform = "none";
                    break;
                case 5: // Third column
                    line.style.width = "5px";
                    line.style.height = "350px";
                    line.style.left = "83%";
                    line.style.top = "9%";
                    line.style.transform = "none";
                    break;
                case 6: // First diagonal
                    line.style.height = "450px";
                    line.style.width = "5px";
                    line.style.top = "-5%";
                    line.style.left = "50%";
                    line.style.transform = "rotate(-45deg)";
                    break;
                case 7: // Second diagonal
                    line.style.height = "450px";
                    line.style.width = "5px";
                    line.style.top = "-6%";
                    line.style.left = "50%";
                    line.style.transform = "rotate(45deg)";
                    break;
            }

        }
        else {
            switch (index) {
                case 0: // First row
                    line.style.height = "5px";
                    line.style.width = "350px";
                    line.style.top = "26%";
                    line.style.left = "38%";
                    line.style.transform = "none";
                    break;
                case 1: // Second row
                    line.style.height = "5px";
                    line.style.width = "350px";
                    line.style.top = "46%";
                    line.style.left = "38%";
                    line.style.transform = "none";
                    break;
                case 2: // Third row
                    line.style.height = "5px";
                    line.style.width = "350px";
                    line.style.top = "67%";
                    line.style.left = "38%";
                    line.style.transform = "none";
                    break;
                case 3: // First column
                    line.style.width = "5px";
                    line.style.height = "350px";
                    line.style.left = "41%";
                    line.style.top = "20%";
                    line.style.transform = "none";
                    break;
                case 4: // Second column
                    line.style.width = "5px";
                    line.style.height = "350px";
                    line.style.left = "calc(50% - 2px)";
                    line.style.top = "20%";
                    line.style.transform = "none";
                    break;
                case 5: // Third column
                    line.style.width = "5px";
                    line.style.height = "350px";
                    line.style.left = "calc(59% - 8px)";
                    line.style.top = "20%";
                    line.style.transform = "none";
                    break;
                case 6: // First diagonal
                    line.style.height = "450px";
                    line.style.width = "5px";
                    line.style.top = "13%";
                    line.style.left = "50%";
                    line.style.transform = "rotate(-45deg)";
                    break;
                case 7: // Second diagonal
                    line.style.height = "450px";
                    line.style.width = "5px";
                    line.style.top = "13%";
                    line.style.left = "50%";
                    line.style.transform = "rotate(45deg)";
                    break;
            }
        }
    }

    function add() {
        for (let i = 0; i < gamebox.length; i++) {
            gamebox[i].addEventListener("click", play);
        }
    }
    function rem() {
        for (let i = 0; i < gamebox.length; i++) {
            gamebox[i].removeEventListener("click", play);
        }
    }
    function winact() {
        winbox.style.visibility = "visible";
        wintext.innerHTML = winner;
        winbox.style.opacity = "1";
        winbox.style.scale = "1";

        if (winner === "PLAYER 1") {
            wintext.style.color = "red";

        }
        else if (winner === "PLAYER 2") {
            wintext.style.color = "blue";

        }
        else if (winner === "TIE") {
            wintext.style.color = "yellow";
            wintext2.style.visibility = "hidden";

        }
    };
    function wincan() {
        winbox.style.visibility = "visible";
        wintext.innerHTML = winner;
        winbox.style.opacity = "0";
        winbox.style.scale = "0.01";

    }
});
