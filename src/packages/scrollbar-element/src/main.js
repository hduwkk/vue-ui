import {addResizeListener, removeResizeListener} from '@/utils/resize-event';
import scrollbarWidth from '@/utils/scrollbar-width';
import {toObject} from '@/utils/util';
import Bar from './bar'

export default {
  name: 'EpScroll2',
  components: {Bar},
  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果container尺寸不发生变化，最好设置它以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },
  data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    }
  },
  computed: {
    wrap() {
      return this.$refs.wrap;
    }
  },
  render(h) {
    let gutter = scrollbarWidth();
    let style = this.wrapStyle;
    // console.log(gutter, style, '... ...', this.native)
    if (gutter) {
      const gutterWidth = `-${gutter}px`;
      const gutterStyle = `margin-bottom: ${gutterWidth}; margin-right: ${gutterWidth};`;
      if (Array.isArray(this.wrapStyle)) {
        style = toObject(this.wrapStyle);
        // console.log('wrapstyle -> style', style)
        style.marginRight = style.marginBottom = gutterWidth;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle
      } else {
        style = gutterStyle
      }
    }
    const view = h(this.tag, {
      class: ['ep-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    const wrap = (
      <div
        ref="wrap"
        style={ style }
        onScroll={ this.handleScroll }
        class={ [this.wrapClass, 'ep-scrollbar__wrap', gutter ? '' : 'ep-scrollbar__wrap--hidden-default'] }>
        { [view] }
      </div>
    );
    let nodes;
    if (!this.native) {
      nodes = ([
        wrap,
        <Bar
          move={ this.moveX }
          size= { this.sizeWidth }
        ></Bar>,
        <Bar
          vertical
          move={ this.moveY }
          size={ this.sizeHeight }
        ></Bar>
      ])
    } else {
      nodes = ([
        <div
          ref="wrap"
          class={ [this.wrapClass, 'ep-scrollbar__wrap'] }
          style={ style }
        ></div>
      ]);
    }
    return h('div', {class: 'ep-scrollbar'}, nodes);
  },
  methods: {
    handleScroll() {
      const wrap = this.wrap;
      let moveX
      let moveY
      moveY = (wrap.scrollTop * 100) / wrap.clientHeight;
      moveX = (wrap.scrollLeft * 100) / wrap.clientWidth;
      this.moveX = moveX
      this.moveY = moveY
    },

    update() {
      let heightPercentage, widthPercentage;
      const wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight);
      widthPercentage = (wrap.clientWidth * 100 / wrap.scrollbarWidth);

      this.sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
      this.sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';
    }
  },
  mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    // !this.noresize && addResizeListener(this.$refs.resize, this.update);
  },

  beforeDestroy () {
    if (this.native) return;
    // !this.noresize && removeEventListener(this.$refs.resize, this.update);
  }
}