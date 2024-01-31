
    function rollowansko(){
        modifiers = +document.getElementById('modifiers').value;
        ileD4 = +document.getElementById('d4-count').value;
        ileD6 = +document.getElementById('d6-count').value;
        ileD8 = +document.getElementById('d8-count').value;
        ileD10 = +document.getElementById('d10-count').value;
        ileD12 = +document.getElementById('d12-count').value;
        ileD20 = +document.getElementById('d20-count').value;
        const wartosciD4 = [];
        const wartosciD6 = [];
        const wartosciD8 = [];
        const wartosciD10 = [];
        const wartosciD12 = [];
        const wartosciD20 = [];
        
        for (let i = 0; i < ileD4; i++){
            randomD4 = Math.floor(Math.random() * 4) + 1;
            wartosciD4.push(randomD4);
        }

        for (let i = 0; i < ileD6; i++){
            randomD6 = Math.floor(Math.random() * 6) + 1;
            wartosciD6.push(randomD6);
        }

        for (let i = 0; i < ileD8; i++){
            randomD8 = Math.floor(Math.random() * 8) + 1;
            wartosciD8.push(randomD8);
        }

        for (let i = 0; i < ileD10; i++){
            randomD10 = Math.floor(Math.random() * 10) + 1;
            wartosciD10.push(randomD10);
        }

        for (let i = 0; i < ileD12; i++){
            randomD12 = Math.floor(Math.random() * 12) + 1;
            wartosciD12.push(randomD12);
        }

        for (let i = 0; i < ileD20; i++){
            randomD20 = Math.floor(Math.random() * 20) + 1;
            wartosciD20.push(randomD20);
        }

        const sumD4 = wartosciD4.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const sumD6 = wartosciD6.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const sumD8 = wartosciD8.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const sumD10 = wartosciD10.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const sumD12 = wartosciD12.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const sumD20 = wartosciD20.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        
        wynik = document.getElementById('placeholder');
        wynik.textContent = 
        `Dice: [ ${wartosciD4.join(', ')},
                 ${wartosciD6.join(', ')},
                 ${wartosciD8.join(', ')},
                 ${wartosciD10.join(', ')},
                 ${wartosciD12.join(', ')},
                 ${wartosciD20.join(', ')} ]
                 Sum: ${sumD4+sumD6+sumD8+sumD10+sumD12+sumD20+modifiers}`;
    }

    //One issue is that empty/unused dice will still appear in the results as empty fields separated by ", "





    /*
    Some of the previous attempts and references

    var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
        }
    }


    /*
    function printNumber(number) {
        var placeholder = document.getElementById('placeholder');
        placeholder.innerHTML = number;
    }
    */