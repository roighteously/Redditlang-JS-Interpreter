module.exports = () => {
    const today = new Date().getDay();
    if (today == 1) {
        // It's monday.
        // Because this is JavaScript, I'm not too sure how to segfault it intentionally.
        // Simulation inbound.
        num = Math.random()
        if (num > 0.5) {
            console.log('Segmentation fault (core dumped)');
            process.exit(1);
        } else {
            return;
        }
    }
    if(today == 0) {
        // It's sunday.
        // Because this is JavaScript, I'm not too sure how to segfault it intentionally.
        // Simulation inbound.
        num = Math.random()
        if (num > 0.25) {
            console.log('Segmentation fault (core dumped)');
            process.exit(1);
        } else {
            return;
        }
    }
}
