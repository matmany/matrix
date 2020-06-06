function main() {

    const screnn = $("main");
    let lines = [];
    let ids = [];

    for (let index = 0; index < 60; index++) {
        let time = Math.floor(Math.random() * (700 - 300)) + 300;
        lines.push(new Line(index, screnn));
        ids[index] = window.setInterval(lines[index].UpdateRandomChar.bind(lines[index]), time);
    }

};
//.fadeOut()
//.animate()
class Line {
    constructor(id, screen) {
        this.id = id;
        this.fallTime = this.random(20, 4);
        this.newChar = this.changeChar();
        this.size = this.random(70, 30);
        this.HTMLString = this.generateHTMLtxt();

        screen.append(this.HTMLString);
        this.htmlElement = document.getElementById(this.id);
        $('#'+this.id).css("animation-duration",this.random(40,5)+'s')
        //this.UpdateRandomChar()
    }

    generateHTMLtxt() {
        let anchors = '';
        let divString = '';
        for (let index = 0; index < this.size; index++) {
            anchors += this.generateNewChar();
        }
        //divString = '<div id=' + this.id + ' class="char-vector time'+this.fallTime+'">'+anchors+'</div>';
        divString = '<div id=' + this.id + ' class="char-vector">'+anchors+'</div>';
        return divString;
    }

    random(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    generateNewString(size){
        let string = '';
        for (let index = 0; index < size; index++) {
            string += this.generateNewChar();
        }
        return string;
    }

    generateNewChar() {
        let newChar = this.changeChar();
        return newChar;
    }

    UpdateFallTime() {
        let newFallTime = this.generateFallTime();
        let myHTMLID = "#" + this.id;
        $(myHTMLID).removeClass("time" + this.fallTime);
        $(myHTMLID).addClass("time" + newFallTime);
        this.fallTime = newFallTime;
    }

    UpdateRandomChar() {
        
        let news = this.generateNewString(this.size);
        this.htmlElement.innerHTML = news;

    }

    changeChar() {
        const characteres = [{ min: 12352, max: 12439 },
        { min: 12448, max: 12542 },
        { min: 19968, max: 20992 }];

        const type = Math.floor(Math.random() * 2);
        const elementUniCode = Math.floor(Math.random() * (characteres[type].max - characteres[type].min + 1)) + characteres[type].min;
        return String.fromCharCode(parseInt(elementUniCode, 10));
    }

};

$(main);