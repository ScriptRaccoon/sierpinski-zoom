// canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function adjustCanvas() {
    canvas.width = canvas.height =
        0.8 * Math.min(window.innerWidth, window.innerHeight);
}

adjustCanvas();

window.addEventListener("resize", adjustCanvas);

// global variables

let scale = 1;
let depth = 5;
const speed = 1.006;

// draw loop

function drawLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSierpinski(0, 0, canvas.width * scale, depth);
    scale *= speed;
    if (scale >= 3) {
        scale = 1;
    }
    requestAnimationFrame(drawLoop);
}

drawLoop();

// draw sierpinski carpet

function drawSierpinski(x, y, size, iteration) {
    if (iteration == 0) return;
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (i == 1 && j == 1) {
                if (iteration == 1) {
                    ctx.globalAlpha = Math.min(0.5 * (scale - 1), 1);
                }
                ctx.fillRect(
                    x + size / 3,
                    y + size / 3,
                    size / 3,
                    size / 3
                );
                ctx.globalAlpha = 1;
            } else {
                drawSierpinski(
                    x + (i / 3) * size,
                    y + (j / 3) * size,
                    size / 3,
                    iteration - 1
                );
            }
        }
    }
}
