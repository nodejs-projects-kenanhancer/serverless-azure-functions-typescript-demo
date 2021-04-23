const handle = function (context, timerObj) {
    console.log('Timer ran', timerObj);
    context.done();
};

export { handle };