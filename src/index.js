import HighchartsVue from 'highcharts-vue';

const plugin = {
  install
};

(function (plugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(plugin);
  }
})(plugin);

export function install(Vue, options) {
  Vue.use(HighchartsVue, {tagName: 'ui-highcharts'});
}

export default plugin;
