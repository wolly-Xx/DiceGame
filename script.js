const playBtn = document.getElementById("play-btn")

// добавляем слушатель событий
playBtn.addEventListener("click", function () {
    // создаем 2 случайных числа
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);

    let src1 = `img/dice${randomNumber1}.png`;
    let src2 = `img/dice${randomNumber2}.png`;

    console.log(src1, src2);

    document.querySelector('.img1').src = src1;
    document.querySelector('.img2').src = src2;

    let result = '';
    if (randomNumber1 > randomNumber2) {
        result = "🚩 Player 1 Wins!"
    }
    else if (randomNumber2 > randomNumber1) {
        result = "Player 2 Wins! 🚩"
    }
    else {
        result = "Draw!"
    }

    document.querySelector("h1").innerText = result;
})

