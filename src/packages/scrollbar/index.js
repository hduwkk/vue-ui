import Scrollbar from './src/main.js';
console.log(Scrollbar.name, '13579');
Scrollbar.install = function(Vue) {
  Vue.component(Scrollbar.name, Scrollbar)
}

export default Scrollbar;
