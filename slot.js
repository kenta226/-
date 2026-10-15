const REEL_PATTERN = {0,1,2,3,4,5,6,7,8,9};
const SPIN_INTERVAL_MS = 80;

class Reel {
    constructor(element,pattern){
        this.element = element;
        this.pattern = pattern;
        this.position = 0;
        this.timerId = null;
        this.draw();
    }
    draw(){
        this.element.textContent = String(this.pattern[this.position]);
    }
    start(){
        if(this.timerId !== null) return;
        this.timerId = setInterval(() => {
            this.position = (this.position + 1) % this.pattern.length;
            this.draw();
        }, SPIN_INTERVAL_MS);
    }
    stop(){
        if(this.timerId === null) return;
        clearInterval(this.timerId);
        this.timerId = null;
    }
    isSpinning(){
        return this.timerId !== null;
    }
}