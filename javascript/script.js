const canvas=document.querySelector(".canvas")
const ctx=canvas.getContext("2d")
console.log(ctx)

// lets divides our canvas into 10 by 10 small scale
const scale=20;
const row =canvas.height/scale;
const columns=canvas.width/scale;


let snake=[];

snake[0] = {
  x: math.floor(math.random() * columns) * scale,
  y: math.floor(math.random() * columns) * scale,
};
ctx.fillStyle="#fff";
ctx.strokeStyle="pink"
ctx.fillReact(snake[0].x,snake[0].y,scale,scale)
ctx.strokeReact(snake[0].x, snake[0].y, scale, scale);