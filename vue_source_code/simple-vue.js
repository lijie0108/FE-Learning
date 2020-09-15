class Compiler {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    let fragment = this.compilerFragment(this.el);

    
    // this.el.appendChild(fragment);
  }
  compilerFragment(el) {
    const f = document.createDocumentFragment();
    let firstChild;
    while(firstChild = el.firstChild) {
      f.appendChild(firstChild)
    }
    console.dir(f)
    return f;
  }
  isElementNode(el) {
    return el.nodeType === 1
  }
}

class Observer {
  constructor(data) {
    this.observe(data);
  }
  observe(data) {
    if(data && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key])
      })
    }
  }
  defineReactive(obj, key, value) {
    this.observe(value)
    Object.defineProperty(obj, key, {
      get () {
        console.log("$data get", key, value)
        return value
      },
      set: (newVal) => {
        console.log("$data set", key, newVal)
        if(value === newVal) return ;
        this.observe(newVal)
        value = newVal;
      }
    })
  }
}
class Vue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;
    // 触发 this.$data.xx和模板的绑定
    new Observer(this.$data)
    // 处理模板部分，将模板中使用的data部分的变量和模板绑定起来
    new Compiler(this.$el, this);
    this.proxyData(this.$data)
  }
  proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return data[key]
        },
        set(newVal) {
          data[key] = newVal
        }
      })
    })
  }
}