import {on, off} from '@/utils/dom';
import {renderTumbStyle, BAR_MAP, renderThumbStyle} from './util'

export default {
  name: 'Bar',
  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },
  computed: {
    bar() {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap() {
      return this.$parent.wrap;
    }
  },

  render(h) {
    const {size, move, bar} = this;
    // console.log(this.bar, 'bar');
    return (
      <div
        class={ ['ep-scrollbar__bar', 'is-' + bar.key] }
        onMouseDown={ this.cliskTrackHandler }>
        <div
          ref="thumb"
          class="ep-scrollbar__thumb"
          onMousedown={ this.clickThumbHandler }
          style={renderThumbStyle({ size, move, bar })}>
        </div>
      </div>
    );
  },

  methods: {
    clickThumbHandler(e) {
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },

    cliskTrackHandler(e) {
      const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      const thumbHalf = (this.$refs.thumb[this.bar.offset] / 2);
      const thumbPositionPercentage = ((offset - thumbHalf) * 100 / this.$el[this.bar.offset]);

      this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
    },

    startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;

      on(document, 'mousemove', this.mouseMoveDocumentHandler);
      on(document, 'mouseup', this.mouseUpDocumentHandler);
      document.onselectstart = () => false;
    },

    mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      const prevPage = this[this.bar.axis];

      if (!prevPage) return;

      const offset = ((this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1);
      const thumbClickPosition = (this.$refs.thumb[this.bar.offset] - prevPage);
      const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.$el[this.bar.offset]);

      this.wrap[this.bar.scroll] = (thumbPositionPercentage - this.wrap[this.bar.scrollSize] / 100);
    },

    mouseUpDocumentHandler(e) {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      off(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null
    }
  },

  // created() {
  //   console.log(`vertical: ${this.vertical}, size: ${this.size}, move: ${this.move}.`)
  // },

  destroyed() {
    off(document, 'mouseup', this.mouseUpDocumentHandler)
  }
}
