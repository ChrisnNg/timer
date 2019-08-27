const timer = function() {
  const getArgv = process.argv.splice(2);
  for (let param of getArgv) {
    if (param > 0) {
      setTimeout(() => {
        process.stdout.write('beep \n');// \x07 to perform system sound. writing beep because no sound.
      }, param * 1000);
    }
  }
};

timer();