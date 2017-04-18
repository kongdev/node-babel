 'use strict';

    export default class Calc {
        constructor (x, y) {
            this.x = x;
            this.y = y;
        }

        add () {
            return this.x + this.y;
        }

        subtract () {
            return this.x - this.y;
        }

        multiple () {
            return this.x * this.y;
        }

        divide () {
            return this.x / this.y;
        }
    }