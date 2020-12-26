function getName() {
    return 'Renan de Jesus Santana';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);