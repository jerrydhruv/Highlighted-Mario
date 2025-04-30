function startGame() {
    score = 0;
    document.getElementById('score').textContent = 'Score: ' + score;
    clearHighlight();

    const boxes = document.querySelectorAll('.box');

    if (boxes.length === 0) {
        alert("No .box elements found on the page!");
        return;
    }

    boxes.forEach(box => {
        box.onclick = () => {
            if (box === currentBox) {
                score++;
                document.getElementById('score').textContent = 'Score: ' + score;
                clearHighlight();
                highlightBox(getRandomBox());
            }
        };
    });

    highlightBox(getRandomBox());
}
