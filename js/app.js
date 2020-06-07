function main() {

    const screnn = $("main");
    let lines = [];
    let ids = [];

    for (let index = 0; index < 40; index++) {
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
        this.newChar = this.changeChar();
        this.size = this.random(40, 10);
        this.HTMLString = this.generateHTMLtxt();

        screen.append(this.HTMLString);
        this.htmlElement = document.getElementById(this.id);
        $('#' + this.id).css("animation-duration", this.random(20, 5) + 's')
    }

    generateHTMLtxt() {
        let divString = '';
        let newString = this.generateNewString();
        divString = '<div id=' + this.id + ' class="char-vector">' + newString + '</div>';
        return divString;
    }

    random(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    generateNewString(size) {
        let string = '';
        let white = '<a class="white-text">' + this.generateNewChar() + '</a>';
        for (let ultimo = 0; ultimo < size; ultimo++) {
            string += this.generateNewChar();
        }
        if (this.random(1, 3) === 2)
            return string + white;
        return string;
    }

    generateNewChar() {
        let newChar = this.changeChar();
        return newChar;
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