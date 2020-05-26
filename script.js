
function eyeball(){
    var eye=document.querySelectorAll('.eye');
    // eye[0] -> div1, eye[1] -> div2, ...
    console.log(eye);
    eye.forEach(function(eyes){
        let x=(eyes.getBoundingClientRect().left)+(eyes.clientWidth /2);
        let y=(eyes.getBoundingClientRect().top)+(eyes.clientHeight /2);
        let radian =Math.atan2(event.pageX - x,event.pageY - y);
        let rot=(radian*(180/Math.PI)*-1)+270;
        eyes.style.transform="rotate("+ rot+"deg)";
    })
}
// console.log(document.querySelector('body'));
document.querySelector('body').addEventListener('mousemove',eyeball);