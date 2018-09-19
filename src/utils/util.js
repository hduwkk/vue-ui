
function extend(to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to;
}

export function toObject(arr) {
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

export const getValueByPath = function(object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  console.log(paths, 'paths ...')
}