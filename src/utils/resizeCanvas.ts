export default function resizeCanvas(
  canvas: HTMLCanvasElement,
  draw: Function
) {
  // innerWidth and Height cause problems on mobile need to find a fix
  // canvas.width = window.screen.width;
  canvas.width = window.innerWidth;

  // alert(getComputedStyle(document.documentElement).getPropertyValue("--sat"));

  canvas.height = window.innerHeight;

  // canvas.height = window.screen.height;

  draw();
}
