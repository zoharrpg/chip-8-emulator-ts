import Monitor from "./Monitor";

const monitor:Monitor = new Monitor(<HTMLCanvasElement>document.getElementById('screen'));

monitor.testRender();