const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let scale = 1;
let depth = 5;
const speed = 1.006;

function drawLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(scale, scale);
    drawSierpinski(0, 0, canvas.width, depth);
    ctx.restore();
    scale *= speed;
    if (scale >= 3) {
        scale = 1;
    }
    requestAnimationFrame(drawLoop);
}

drawLoop();

function drawSierpinski(x, y, size, iteration) {
    if (iteration == 0) return;
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (i == 1 && j == 1) {
                ctx.fillRect(
                    x + size / 3,
                    y + size / 3,
                    size / 3,
                    size / 3
                );
            } else {
                drawSierpinski(
                    x + (i * size) / 3,
                    y + (j * size) / 3,
                    size / 3,
                    iteration - 1
                );
            }
        }
    }
}
