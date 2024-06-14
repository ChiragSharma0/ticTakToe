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
    let line = document.getElementById("line");
    let player = "player1";

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

    function btnclk() {
        if (this.innerHTML === "START") {
            start();
            this.innerHTML = "RESET";
        } else {
            resetGame();
            this.innerHTML = "START";
        }
    }

    function start() {
        player = "player1";
        for (let i = 0; i < gamebox.length; i++) {
            gamebox[i].addEventListener("click", play);
        }
        document.body.style.background = "linear-gradient(to right, red ,white)";
    }

    function resetGame() {
        for (let i = 0; i < gamebox.length; i++) {
            gamebox[i].innerHTML = "";
        }
        document.body.style.background = "white";
        for (let i = 0; i < gamebox.length; i++) {
            gamebox[i].removeEventListener("click", play);
        }
        line.style.transition = "ALL 0.01s";

        line.style.height = "0"; // Reset the line
        line.style.width = "0";
        line.style.transform = "none";
    }

    function play() {
        if (this.innerHTML === "") { // Prevent overwriting
            if (player === "player1") {
                this.innerHTML = "<h1>X</h1>";
                player = "player2";
                document.body.style.background = "linear-gradient(to left, blue ,white)";
            } else if (player === "player2") {
                this.innerHTML = "<h1>O</h1>";
                player = "player1";
                document.body.style.background = "linear-gradient(to right, red ,white)";
            }
            checkWinner();
        }
    }

    function checkWinner() {
        for (let i = 0; i < win.length; i++) {
            let [a, b, c] = win[i];
            if (a.innerHTML !== "" && a.innerHTML === b.innerHTML && a.innerHTML === c.innerHTML) {
                drawLine(i);
                console.log(player + "won");
                for (let i = 0; i < gamebox.length; i++) {
                    gamebox[i].removeEventListener("click", play);
                };
                return;
            }
        }
    }

    function drawLine(index) {
        line.style.transition = "ALL 1s";
        switch (index) {
            case 0: // First row
                line.style.height = "5px";
                line.style.width = "390px";
                line.style.top = "32%";
                line.style.left = "38%";
                line.style.transform = "none";
                break;
            case 1: // Second row
                line.style.height = "5px";
                line.style.width = "390px";
                line.style.top = "50%";
                line.style.left = "38%";
                line.style.transform = "none";
                break;
            case 2: // Third row
                line.style.height = "5px";
                line.style.width = "390px";
                line.style.top = "68%";
                line.style.left = "38%";
                line.style.transform = "none";
                break;
            case 3: // First column
                line.style.width = "5px";
                line.style.height = "390px";
                line.style.left = "41%";
                line.style.top = "23%";
                line.style.transform = "none";
                break;
            case 4: // Second column
                line.style.width = "5px";
                line.style.height = "390px";
                line.style.left = "calc(50% - 2px)";
                line.style.top = "23%";
                line.style.transform = "none";
                break;
            case 5: // Third column
                line.style.width = "5px";
                line.style.height = "390px";
                line.style.left = "calc(59% - 5px)";
                line.style.top = "23%";
                line.style.transform = "none";
                break;
            case 6: // First diagonal
                line.style.height = "450px";
                line.style.width = "5px";
                line.style.top = "20%";
                line.style.left = "50%";
                line.style.transform = "rotate(-45deg)";
                break;
            case 7: // Second diagonal
                line.style.height = "450px";
                line.style.width = "5px";
                line.style.top = "19%";
                line.style.left = "50%";
                line.style.transform = "rotate(45deg)";
                break;
        }
    }
});
