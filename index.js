module.exports = function (flip) {
    var num = Math.round(Math.random() * 1);
    return flip === 'num' ? num : flip === 'bool' ? !!num : (num ? 'heads' : 'tails');
}