function fn() {
    log('Hoisting de funcao');

    function log(value) {
        console.log(value);
    }
}

fn();