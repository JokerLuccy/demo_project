/* eslint-disable no-eval */
// 编辑器自定义事件
const events = {
  redirect(url) {
    if (url) {
      window.location.href = url;
    }
  },

  alert(msg) {
    // eslint-disable-next-line no-eval
    eval(msg);
  },
  click(param) {
    eval(param);
  },
};

const mixins = {
  methods: events,
};

export { mixins, events };
