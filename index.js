function mooncakeSays(message) {
  let mooncake = '(0.o)';

  if ( !message ) {
    return `${mooncake} banana?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;