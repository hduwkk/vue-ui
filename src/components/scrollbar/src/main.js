import Bar from './bar.js'
import scrollbarWidth from '@/utils/scrollbar-width.js';
export default {
  name: 'EpScroll',
  components: {Bar},
  props: {
    wrapStyle: {},
    wrapClass: {},
    viewStyle: {},
    viewClass: {},
    native: Boolean,
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
    let style = this.wrapStyle;
    let gutter = scrollbarWidth();
    console.log(gutter, 'gutter...');
    if (gutter) {
      const gutterWidth = `-${gutter}px`;
      const gutterStyle = `margin-bottom: ${gutterWidth}; margin-right: ${gutterWidth};`;

      if (Array.isArray(this.wrapStyle)) {
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle
      }
    }
    let view = h(this.tag, {
      class: [this.viewClass, 'ep-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);

    const wrap = (
      <div
        ref="wrap"
        style={style}
        class={ [this.wrapClass, 'ep-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap-hidden-default'] }>
        {view}
      </div>
    );
    let nodes;
    if (!this.native) { // 是否使用浏览器默认的滚动条
      nodes = (
        [
          wrap,
          <Bar move={ this.moveX } size={ this.sizeWidth }></Bar>,
          <Bar vertical move={ this.moveY } size={ this.sizeHeight}></Bar>
        ]
      );
    } else {
      nodes = (
        <div
          ref="wrap"
          class={ [this.wrapClass, 'ep-scrollbar__wrap'] }
          style={ this.style }
        >{view}</div>
      );
    }

    return (
      <div ref="wrap" class="ep-scrollbar">{nodes}</div>
    )
  }
}
