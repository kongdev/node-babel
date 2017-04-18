'use strict';

    import Calc from './calc';

    const x = 3;
    const y = 5;
    const calc = new Calc(x, y);

    const result_add = calc.add();
    console.log(`${x} + ${y} = ${result_add}`);

    const result_subtract = calc.subtract();
    console.log(`${x} - ${y} = ${result_subtract}`);

    const result_mutiple = calc.multiple();
    console.log(`${x} * ${y} = ${result_mutiple}`);

    const result_divide = calc.divide();
    console.log(`${x} / ${y} = ${result_divide}`);