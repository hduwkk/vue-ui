<template>
  <div>1</div>
</template>
<script>
// <el-popover
//     placement="top-start"
//     title="标题"
//     width="200"
//     trigger="hover"
//     content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
//     <el-button slot="reference">hover 激活</el-button>
//   </el-popover>
import Popper from '../popper.js'
export default {
  name: 'popper',
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    title: String,
    width: [String, Number],
    content: String,
    popperOptions: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      showPopper: false
    }
  },
  methods: {
    createPopper() {
      this.currentPlacement = this.placement
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) return 1
      const options = this.popperOptions
      const popper = this.popperElm = this.popperElm || this.$refs.popper
      let reference = this.referenceElm = this.referenceElm || this.$refs.reference
    },
    updatePopper() {}
  },
  watch: {
    showPopper(val) {
      val ? this.createPopper() : this.updatePopper()
      this.$emit('input', val)
    }
  }
}
</script>
