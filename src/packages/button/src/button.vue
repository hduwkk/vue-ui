<template>
<button
  class="ep-button"
  @click="handleClick"
  :disabled="buttonDisabled || loading"
  :autofocus="autofocus"
  :type="nativeType"
  :class="[
    type ? 'ep-button--' + type : '',
    buttonSize ? 'ep-button--' + buttonSize : '',
    icon,
    {
      'is-disabled': buttonDisabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle
    }
  ]">
    <i class="fa fa-spinner" v-if="loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
</button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  computed: {
    buttonSize() {
      return this.size || this._elFormItemSize
    },
    buttonDisabled() {
      return this.disabled
    }
  }
}
</script>
