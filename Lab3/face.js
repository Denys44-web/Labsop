const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};
const result = [];
for (x of Object.keys(iface)) {
    result.push([x, iface[x].length]);
}
console.log(result);