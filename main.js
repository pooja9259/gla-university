// Technical: OOP Based Digital Clock - C logic ported from Q10
class DigitalClock{
 constructor(id){ this.el=document.getElementById(id); setInterval(()=>this.update(),1000); this.update(); }
 update(){ this.el.innerText = "SYSTEM TIME: " + new Date().toLocaleTimeString(); }
}