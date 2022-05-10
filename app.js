class Keyboard {

    constructor(output, theme = 'dark') {
        this.theme = theme
        this.mouseClickedButton = null
        this.output = output
        this.lang
        this.buttons = {
            q: {
                eng: {
                    name: 'q',
                    altName: null,
                    type: 'q',
                    special: '81'
                },
                rus: {
                    name: 'й',
                    altName: null,
                    type: 'q',
                    special: '81'
                }
            },
            w: {
                eng: {
                    name: 'w',
                    altName: null,
                    type: 'w',
                    special: '87'
                },
                rus: {
                    name: 'ц',
                    altName: null,
                    type: 'w',
                    special: '87'
                }
            },
            e: {
                eng: {
                    name: 'e',
                    altName: null,
                    type: 'e',
                    special: '69'
                },
                rus: {
                    name: 'у',
                    altName: null,
                    type: 'e',
                    special: '69'
                }
            },
            r: {
                eng: {
                    name: 'r',
                    altName: null,
                    type: 'r',
                    special: '82'
                },
                rus: {
                    name: 'к',
                    altName: null,
                    type: 'r',
                    special: '82'
                }
            },
            t: {
                eng: {
                    name: 't',
                    altName: null,
                    type: 't',
                    special: '84'
                },
                rus: {
                    name: 'е',
                    altName: null,
                    type: 't',
                    special: '84'
                }
            },
            y: {
                eng: {
                    name: 'y',
                    altName: null,
                    type: 'y',
                    special: '89'
                },
                rus: {
                    name: 'н',
                    altName: null,
                    type: 'y',
                    special: '89'
                }
            },
            u: {
                eng: {
                    name: 'u',
                    altName: null,
                    type: 'u',
                    special: '85'
                },
                rus: {
                    name: 'г',
                    altName: null,
                    type: 'u',
                    special: '85'
                }
            },
            i: {
                eng: {
                    name: 'i',
                    altName: null,
                    type: 'i',
                    special: '73'
                },
                rus: {
                    name: 'ш',
                    altName: null,
                    type: 'i',
                    special: '73'
                }
            },
            o: {
                eng: {
                    name: 'o',
                    altName: null,
                    type: 'o',
                    special: '79'
                },
                rus: {
                    name: 'щ',
                    altName: null,
                    type: 'o',
                    special: '79'
                }
            },
            p: {
                eng: {
                    name: 'p',
                    altName: null,
                    type: 'з',
                    special: '80'
                },
                rus: {
                    name: 'й',
                    altName: null,
                    type: 'p',
                    special: '80'
                }
            },
            a: {
                eng: {
                    name: 'a',
                    altName: null,
                    type: 'a',
                    special: '65'
                },
                rus: {
                    name: 'ф',
                    altName: null,
                    type: 'a',
                    special: '65'
                }
            },
            s: {
                eng: {
                    name: 's',
                    altName: null,
                    type: 's',
                    special: '83'
                },
                rus: {
                    name: 'ы',
                    altName: null,
                    type: 's',
                    special: '83'
                }
            },
            d: {
                eng: {
                    name: 'd',
                    altName: null,
                    type: 'd',
                    special: '68'
                },
                rus: {
                    name: 'в',
                    altName: null,
                    type: 'd',
                    special: '68'
                }
            },
            f: {
                eng: {
                    name: 'f',
                    altName: null,
                    type: 'f',
                    special: '70'
                },
                rus: {
                    name: 'а',
                    altName: null,
                    type: 'f',
                    special: '70'
                }
            },
            g: {
                eng: {
                    name: 'g',
                    altName: null,
                    type: 'g',
                    special: '71'
                },
                rus: {
                    name: 'п',
                    altName: null,
                    type: 'g',
                    special: '71'
                }
            },
            h: {
                eng: {
                    name: 'h',
                    altName: null,
                    type: 'h',
                    special: '72'
                },
                rus: {
                    name: 'р',
                    altName: null,
                    type: 'h',
                    special: '72'
                }
            },
            j: {
                eng: {
                    name: 'j',
                    altName: null,
                    type: 'j',
                    special: '74'
                },
                rus: {
                    name: 'о',
                    altName: null,
                    type: 'j',
                    special: '74'
                }
            },
            k: {
                eng: {
                    name: 'k',
                    altName: null,
                    type: 'k',
                    special: '75'
                },
                rus: {
                    name: 'л',
                    altName: null,
                    type: 'k',
                    special: '75'
                }
            },
            l: {
                eng: {
                    name: 'l',
                    altName: null,
                    type: 'l',
                    special: '76'
                },
                rus: {
                    name: 'д',
                    altName: null,
                    type: 'l',
                    special: '76'
                }
            },
            z: {
                eng: {
                    name: 'z',
                    altName: null,
                    type: 'z',
                    special: '90'
                },
                rus: {
                    name: 'я',
                    altName: null,
                    type: 'z',
                    special: '90'
                }
            },
            x: {
                eng: {
                    name: 'x',
                    altName: null,
                    type: 'x',
                    special: '88'
                },
                rus: {
                    name: 'ч',
                    altName: null,
                    type: 'x',
                    special: '88'
                }
            },
            c: {
                eng: {
                    name: 'c',
                    altName: null,
                    type: 'c',
                    special: '67'
                },
                rus: {
                    name: 'с',
                    altName: null,
                    type: 'c',
                    special: '67'
                }
            },
            v: {
                eng: {
                    name: 'v',
                    altName: null,
                    type: 'v',
                    special: '86'
                },
                rus: {
                    name: 'м',
                    altName: null,
                    type: 'v',
                    special: '86'
                }
            },
            b: {
                eng: {
                    name: 'b',
                    altName: null,
                    type: 'b',
                    special: '66'
                },
                rus: {
                    name: 'и',
                    altName: null,
                    type: 'b',
                    special: '66'
                }
            },
            n: {
                eng: {
                    name: 'n',
                    altName: null,
                    type: 'n',
                    special: '78'
                },
                rus: {
                    name: 'т',
                    altName: null,
                    type: 'n',
                    special: '78'
                }
            },
            m: {
                eng: {
                    name: 'm',
                    altName: null,
                    type: 'm',
                    special: '77'
                },
                rus: {
                    name: 'ь',
                    altName: null,
                    type: 'm',
                    special: '77'
                }
            },
            one: {
                eng: {
                    name: '1',
                    altName: '!',
                    type: '1',
                    special: '49'
                },
                rus: {
                    name: '1',
                    altName: '!',
                    type: '1',
                    special: '49'
                }
            },
            two: {
                eng: {
                    name: '2',
                    altName: '@',
                    type: '2',
                    special: '50'
                },
                rus: {
                    name: '2',
                    altName: '@',
                    type: '2',
                    special: '50'
                }
            },
            three: {
                eng: {
                    name: '3',
                    altName: '#',
                    type: '3',
                    special: '51'
                },
                rus: {
                    name: '3',
                    altName: '#',
                    type: '3',
                    special: '51'
                }
            },
            four: {
                eng: {
                    name: '4',
                    altName: '$',
                    type: '4',
                    special: '52'
                },
                rus: {
                    name: '4',
                    altName: '$',
                    type: '4',
                    special: '52'
                }
            },
            five: {
                eng: {
                    name: '5',
                    altName: '%',
                    type: '5',
                    special: '53'
                },
                rus: {
                    name: '5',
                    altName: '%',
                    type: '5',
                    special: '53'
                }
            },
            six: {
                eng: {
                    name: '6',
                    altName: '^',
                    type: '6',
                    special: '54'
                }
                , rus: {
                    name: '6',
                    altName: '^',
                    type: '6',
                    special: '54'
                }
            },
            seven: {
                eng: {
                    name: '7',
                    altName: '&',
                    type: '7',
                    special: '55'
                },
                rus: {
                    name: '7',
                    altName: '&',
                    type: '7',
                    special: '55'
                }
            },
            eigth: {
                eng: {
                    name: '8',
                    altName: '*',
                    type: '8',
                    special: '56'
                },
                rus: {
                    name: '8',
                    altName: '*',
                    type: '8',
                    special: '56'
                }
            },
            nine: {
                eng: {
                    name: '9',
                    altName: '(',
                    type: '9',
                    special: '57'
                },
                rus: {
                    name: '9',
                    altName: '(',
                    type: '9',
                    special: '57'
                }
            },
            zero: {
                eng: {
                    name: '0',
                    altName: ')',
                    type: '0',
                    special: '48'
                },
                rus: {
                    name: '0',
                    altName: ')',
                    type: '0',
                    special: '48'
                }
            },
            openSquareBracket: {
                eng: {
                    name: '[',
                    altName: '{',
                    type: '[',
                    special: '219'
                },
                rus: {
                    name: 'х',
                    altName: null,
                    type: '[',
                    special: '219'
                }
            },
            closeSquareBracket: {
                eng: {
                    name: ']',
                    altName: '}',
                    type: ']',
                    special: '221'
                },
                rus: {
                    name: 'ъ',
                    altName: null,
                    type: ']',
                    special: '221'
                }
            },
            semicolon: {
                eng: {
                    name: ';',
                    altName: ':',
                    type: ';',
                    special: '186'
                },
                rus: {
                    name: 'ж',
                    altName: null,
                    type: ';',
                    special: '186'
                }
            },
            quotes: {
                eng: {
                    name: `'`,
                    altName: '"',
                    type: `'`,
                    special: '222'
                },
                rus: {
                    name: 'э',
                    altName: null,
                    type: `'`,
                    special: '222'
                }
            },
            backSlash: {
                eng: {
                    name: `\\`,
                    altName: '|',
                    type: `\\`,
                    special: '220'
                },
                rus: {
                    name: `\\`,
                    altName: '|',
                    type: `\\`,
                    special: '220'
                }
            },
            comma: {
                eng: {
                    name: `,`,
                    altName: '<',
                    type: `,`,
                    special: '188'
                },
                rus: {
                    name: `б`,
                    altName: '<',
                    type: `,`,
                    special: '188'
                }
            },
            dot: {
                eng: {
                    name: `.`,
                    altName: '>',
                    type: `.`,
                    special: '190'
                },
                rus: {
                    name: `ю`,
                    altName: '>',
                    type: `.`,
                    special: '190'
                }
            },
            Slash: {
                eng: {
                    name: `/`,
                    altName: '?',
                    type: `/`,
                    special: '191'
                },
                rus: {
                    name: `/`,
                    altName: '?',
                    type: `/`,
                    special: '191'
                }
            },
            tilda: {
                eng: {
                    name: '`',
                    altName: '~',
                    type: '`',
                    special: '192'
                },
                rus: {
                    name: 'ё',
                    altName: '~',
                    type: '`',
                    special: '192'
                }
            },
            minus: {
                eng: {
                    name: '-',
                    altName: '_',
                    type: '-',
                    special: '189'
                },
                rus: {
                    name: '-',
                    altName: '_',
                    type: '-',
                    special: '189'
                }
            },
            equal: {
                eng: {
                    name: '=',
                    altName: '+',
                    type: '=',
                    special: '187'
                },
                rus: {
                    name: '=',
                    altName: '+',
                    type: '=',
                    special: '187'
                }
            },
            backspace: {
                eng: {
                    name: 'Backspace',
                    altName: null,
                    type: null,
                    special: '8'
                },
                rus: {
                    name: 'Backspace',
                    altName: null,
                    type: null,
                    special: '8'
                }
            },
            Tab: {
                eng: {
                    name: 'Tab',
                    altName: null,
                    type: null,
                    special: '9'
                },
                rus: {
                    name: 'Tab',
                    altName: null,
                    type: null,
                    special: '9'
                }
            },
            CapsLock: {
                eng: {
                    name: 'Caps Lock',
                    altName: null,
                    type: null,
                    special: '20'
                },
                rus: {
                    name: 'Caps Lock',
                    altName: null,
                    type: null,
                    special: '20'
                }
            },
            Shift: {
                eng: {
                    name: 'Shift',
                    altName: null,
                    type: null,
                    special: '16'
                },
                rus: {
                    name: 'Shift',
                    altName: null,
                    type: null,
                    special: '16'
                }
            },
            Ctrl: {
                eng: {
                    name: 'Ctrl',
                    altName: null,
                    type: null,
                    special: '17'
                },
                rus: {
                    name: 'Ctrl',
                    altName: null,
                    type: null,
                    special: '17'
                }
            },
            Alt: {
                eng: {
                    name: 'Alt',
                    altName: null,
                    type: null,
                    special: '18'
                },
                rus: {
                    name: 'Alt',
                    altName: null,
                    type: null,
                    special: '18'
                }
            },
            win: {
                eng: {
                    name: 'Win',
                    altName: null,
                    type: null,
                    special: '91'
                },
                rus: {
                    name: 'Win',
                    altName: null,
                    type: null,
                    special: '91'
                }
            },
            spaceBar: {
                eng: {
                    name: '',
                    altName: null,
                    type: null,
                    special: '32'
                },
                rus: {
                    name: '',
                    altName: null,
                    type: null,
                    special: '32'
                }
            },
            upArrow: {
                eng: {
                    name: '⬆️',
                    altName: null,
                    type: null,
                    special: '38'
                },
                rus: {
                    name: '⬆️',
                    altName: null,
                    type: null,
                    special: '38'
                }
            },
            rightArrow: {
                eng: {
                    name: '➡️',
                    altName: null,
                    type: null,
                    special: '39'
                },
                rus: {
                    name: '➡️',
                    altName: null,
                    type: null,
                    special: '39'
                }
            },
            downArrow: {
                eng: {
                    name: '⬇️',
                    altName: null,
                    type: null,
                    special: '40'
                },
                rus: {
                    name: '⬇️',
                    altName: null,
                    type: null,
                    special: '40'
                }
            },
            leftArrow: {
                eng: {
                    name: '⬅️',
                    altName: null,
                    type: null,
                    special: '37'
                },
                rus: {
                    name: '⬅️',
                    altName: null,
                    type: null,
                    special: '37'
                }
            },
            enter: {
                eng: {
                    name: 'Enter',
                    altName: null,
                    type: null,
                    special: '13'
                },
                rus: {
                    name: 'Enter',
                    altName: null,
                    type: null,
                    special: '13'
                }
            },
            del: {
                eng: {
                    name: 'DEL',
                    altName: null,
                    type: null,
                    special: '46'
                },
                rus: {
                    name: 'DEL',
                    altName: null,
                    type: null,
                    special: '46'
                }
            },
        }
        this.cursorPosition = 0
        this.caps = false
    }

    createButton(text, cls, key, extraText = '') {
        let button = this.generateNode(text, extraText)
        button.classList.add('button')
        button.classList.add(this.theme)
        button.classList.add(cls)
        button.classList.add(key)
        button.style.gridArea = cls
        return button
    }

    appendNode(node) {
        let body = document.querySelector('body')
        body.append(node)
    }

    changeLanguage(lang) {
        let keyboard = document.querySelector('.keyboard')
        keyboard.remove()
        this.recreate(lang)
    }

    generateNode(text, extraText = '') {
        let node = document.createElement('div')
        if (extraText !== '') {
            let extra = document.createElement('span')
            extra.textContent = extraText
            extra.classList.add('extra-text')
            node.append(extra)
        }
        let main = document.createElement('span')
        main.classList.add('main-text')
        main.textContent = text
        node.classList.add('button')
        node.append(main)
        return node
    }

    recreate(lang) {
        let keyboard = document.createElement('div')
        let body = document.querySelector('body')
        let infoNode = document.querySelector('.info')
        this.lang = lang
        keyboard.classList.add('keyboard')
        for (const key in this.buttons) {
            keyboard.append(this.createButton(this.buttons[key][lang].name, 'b' + this.buttons[key][lang].special, key, this.buttons[key][lang].altName))
        }
        keyboard.addEventListener('mousedown', this.clickDispatcher(this))
        body.addEventListener('mouseup', this.clickDispatcher(this))
        this.appendNode(keyboard)
        infoNode.textContent = this.lang
    }

    create(lang) {
        let keyboard = document.createElement('div')
        let body = document.querySelector('body')
        this.lang = lang
        keyboard.classList.add('keyboard')
        for (const key in this.buttons) {
            keyboard.append(this.createButton(this.buttons[key][lang].name, 'b' + this.buttons[key][lang].special, key, this.buttons[key][lang].altName))
        }
        keyboard.addEventListener('mousedown', this.clickDispatcher(this))
        body.addEventListener('mouseup', this.clickDispatcher(this))
        this.output.display.addEventListener('click', this.displayDispatcher(this))
        window.addEventListener('keydown', this.clickDispatcher(this))
        window.addEventListener('keyup', this.clickDispatcher(this))
        this.appendNode(keyboard)
        this.output.display.style.width = keyboard.offsetWidth + 'px'
        let infoNode = document.createElement('span')
        infoNode.classList.add('info')
        infoNode.textContent = this.lang
        body.insertBefore(infoNode, keyboard)
        let infoText = document.createElement('div')
        infoText.classList.add('info-text')
        infoText.textContent = 'Переключить язык левые shift+alt'
        body.insertBefore(infoText, keyboard)
    }

    displayDispatcher(context) {
        function wrapper() {
            context.cursorPosition = context.output.display.selectionStart
        }
        return wrapper
    }

    clickDispatcher(context) {
        function wrapper(event) {
            let t = event.target
            let result
            if (!t.classList.contains('keyboard')) {
                result = context.parseButton(t)
            }
            if (result) {
                let element = result[0]
                let nameEl = result[1]
                if (event.type === 'mousedown') {
                    context.mouseButtonPress(element, nameEl)
                }
                if (event.type === 'mouseup') {
                    context.mouseButtonUp(element, nameEl)
                }
                if (event.type === 'keydown') {
                    context.keyButtonDown(event, event.keyCode)
                }
                if (event.type === 'keyup') {
                    context.keyButtonUp(event, event.keyCode)
                }
            }
        }
        return wrapper
    }

    keyButtonDown(e, k) {
        e.preventDefault()
        let el = document.querySelector('.b' + k)
        el.classList.add('clicked')
        this.displayInput(el)
        let shift = document.querySelector('.Shift')
        let alt = document.querySelector('.Alt')
        let shiftStatus = shift.classList.contains('clicked')
        let altStatus = alt.classList.contains('clicked')
        if (shiftStatus && altStatus) {
            if (this.lang === 'rus') {
                this.lang = 'eng'
                this.changeLanguage('eng')
                localStorage.setItem('lang', 'eng');
            } else {
                this.lang = 'rus'
                this.changeLanguage('rus')
                localStorage.setItem('lang', 'rus');
            }
        }
    }
    keyButtonUp(e, k) {
        e.preventDefault()
        let el = document.querySelector('.b' + k)
        if (el.classList.contains('clicked')) {
            el.classList.remove('clicked')
        }
    }
    parseButton(el) {
        if (el.classList.contains('extra-text') || el.classList.contains('main-text')) {
            return [el.parentElement, el.parentElement.classList[3]]
        }
        return [el, el.classList[3]]
    }

    mouseButtonPress(el) {
        el.classList.add('clicked')
        this.mouseClickedButton = el
    }

    mouseButtonUp() {
        if (this.mouseClickedButton) {
            if (this.mouseClickedButton.classList.contains('clicked')) {
                this.mouseClickedButton.classList.remove('clicked')
            }
            this.displayInput(this.mouseClickedButton)
            this.mouseClickedButton = null
        }
    }

    displayInput(el) {
        let buttonName = this.parseButton(el)[1];
        let type = this.buttons[buttonName][this.lang].type
        let text = this.buttons[buttonName][this.lang].name
        let shift = document.querySelector('.Shift')
        let shiftStatus = shift.classList.contains('clicked')
        if (type) {
            if (this.caps || shiftStatus) {
                text = text.toUpperCase()
            }
            if (shiftStatus && this.buttons[buttonName][this.lang].altName) {
                text = this.buttons[buttonName][this.lang].altName
            }

            this.output.display.value = this.output.display.value.slice(0, this.cursorPosition) + text + this.output.display.value.slice(this.cursorPosition)
            this.cursorPosition++
        } else {
            let command = this.buttons[buttonName][this.lang].special
            if (command === '8' && this.cursorPosition > 0) {
                this.output.display.value = this.output.display.value.slice(0, this.cursorPosition - 1) + this.output.display.value.slice(this.cursorPosition)
                this.cursorPosition--
            }
            if (command === '46') {
                if (this.cursorPosition === 0) {
                    this.output.display.value = this.output.display.value.slice(1)
                } else {
                    this.output.display.value = this.output.display.value.slice(0, this.cursorPosition) + this.output.display.value.slice(this.cursorPosition + 1)
                }
            }
            if (command === '20') {
                if (this.caps) {
                    el.classList.remove('active')
                    this.caps = false
                } else {
                    el.classList.add('active')
                    this.caps = true
                }
            }
            if (command === '13') {
                this.output.display.value = this.output.display.value.slice(0, this.cursorPosition) + '\n' + this.output.display.value.slice(this.cursorPosition)
                this.cursorPosition++
            }
            if (command === '9') {
                this.output.display.value = this.output.display.value.slice(0, this.cursorPosition) + '    ' + this.output.display.value.slice(this.cursorPosition)

                this.cursorPosition += 4
            }
            if (command === '37' || command === '38' || command === '39' || command === '40') {
                this.output.display.value = this.output.display.value.slice(0, this.cursorPosition) + this.buttons[buttonName][this.lang].name + this.output.display.value.slice(this.cursorPosition)
                this.cursorPosition++
            }
            if (command === '32') {
                this.output.display.value += ' '
                this.cursorPosition++
            }
        }
        this.output.display.focus();
        this.output.display.selectionEnd = this.cursorPosition;
    }
}

class Output {
    constructor() {
        this.body = document.querySelector('body')
        this.display
        this.create()
    }
    create() {
        let output = document.createElement('textarea')
        output.classList.add('output')
        this.display = output
        this.body.append(output)
    }
}

let o = new Output()
let k = new Keyboard(o)
const currentLang = localStorage.getItem('lang');

if (!currentLang) {
    localStorage.setItem('lang', 'eng');
}
k.create(localStorage.getItem('lang'))





