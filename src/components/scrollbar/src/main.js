import scrollbarWidth from '@/utils/scrollbar-width.js'
const Bar = {
  render(h) {
    return h('div')
  }
}
export default {
  name: 'EpScroll',
  components: { Bar },
  props: {
    wrapStyle: {},
    wrapClass: {},
    viewStyle: {},
    viewClass: {},
    tag: {
      type: String,
      default: 'div'
    }
  },

  data () {
    return {
      sizeWidth: 0,
      sizeHeight: 0,
      moveX: 0,
      moveY: 0
    }
  },
  computed: {},

  render(h) {
    let style = this.wrapStyle
    let gutter = scrollbarWidth()
    if (gutter) {
      // 有间隙时候，调整margin，隐藏默认的滚动条样式
      const gutterWidth = `-${gutter}px`
      const gutterStyle = `margin-bottom: ${gutterWidth}; margin-right: ${gutterWidth};`
      if (typeof this.wrapStyle === 'string') {
        style += gutterStyle
      } else {
        style = gutterStyle
      }
    }
    let view = h(this.tag, {
      class: [this.viewClass, 'ep-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default)

    const wrap = (
      <div
        ref="wrap"
        style={style}
        class={ [this.wrapClass, 'ep-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap-hidden'] }>
        {view}
      </div>
    )

    let nodes = (
      [
        wrap,
        <Bar move={ this.moveX } size={ this.sizeWidth }></Bar>,
        <Bar vertical move={ this.moveY } size={ this.sizeHeight}></Bar>
      ]
    )

    return (
      <div ref="wrap" class="ep-scrollbar">{nodes}</div>
    )
  }
}
