const calc = gpu.createKernel(function (a) {
    let neighbours = 0;
    for (let y = -1; y <= 1; y++) {
        for (let x = -1; x <= 1; x++) {
            neighbours = a[this.thread.y + y][this.thread.x + x] == 1 ? neighbours + 1 : neighbours;
        }
    }
    neighbours -= a[this.thread.y][this.thread.x];
    if (neighbours == 2 && a[this.thread.y][this.thread.x] == 1)
        return 1;
    else if (neighbours == 3)
        return 1;
    else if (neighbours > 3 || neighbours <= 2)
        return 0;
}).setOutput([HEIGHT, WIDTH]);

const getImg = gpu.createKernel(function (a) {
    if (a[this.thread.y][this.thread.x] == 0)
        this.color(1, 1, 1, 1);
    else
        this.color(0, 0, 0, 1);
}).setOutput([HEIGHT, WIDTH]).setGraphical(true);

const randomMap = gpu.createKernel(function () {
    return Math.round(Math.random());
}).setOutput([HEIGHT, WIDTH]);

function iterate(j) {
    while (j) {
        map = calc(map);
        j--
    }
}

init();