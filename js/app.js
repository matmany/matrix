function main() {

    const screnn = $("main");
    let lines = [];
    let ids = [];

    for (let index = 0; index < 80; index++) {
        let time = Math.floor(Math.random()* (300 - 150)) + 150;
        lines.push(new Line(index, screnn));
        ids[index] = window.setInterval(lines[index].UpDateChar.bind(lines[index]), time);
    }

};
//.fadeOut()
class Line {
    constructor(id, screen) {
        this.id = id;
        this.fallTime = this.generateFallTime();
        this.currentChar = this.changeChar();
        this.HTMLString = this.generateHTMLtxt();
        this.trailSize = this.generateTrailSize();

        screen.append(this.HTMLString);
        this.htmlElement = document.getElementById(this.id);
    }

    generateHTMLtxt() {
        return '<a id=' + this.id + ' class="char-vector time'+this.fallTime+'">' + this.currentChar + '</a>';
    }

    generateFallTime() {
        return Math.floor(Math.random()*(18 - 2)) + 2;
    }

    generateTrailSize() {
        return Math.floor(Math.random()*(40-20)) + 20;
    }

    UpDateChar() {
        let oldchar = this.currentChar
        let newChar = this.changeChar();
        //this.htmlElement.innerHTML = '<a id='++'>'+K+'</a>'+ this.currentChar;
        this.htmlElement.innerHTML = newChar;

    }

    UpdateFallTime() {
        let newFallTime = this.generateFallTime();
        let myHTMLID = "#"+this.id;
        $(myHTMLID).removeClass("time"+this.fallTime);
        $(myHTMLID).addClass("time"+newFallTime);
        this.fallTime = newFallTime;


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