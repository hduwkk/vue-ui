<template>
  <div class="popper">
    <div class="wrap">
      <ep-scroll wrapStyle="max-height: 274px;">
        <ul>
          <li v-for="i in 10" :key="i">{{i}}</li>
        </ul>
      </ep-scroll>
    </div>
    <div class="wrap">
      <ep-scroll2 wrapStyle="max-height: 274px;">
        <ul>
          <li v-for="i in 10" :key="i">{{i}}</li>
        </ul>
      </ep-scroll2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
ul, li {
  margin: 0;
  font-size: 16px;
  text-align: center;
  border: 1px dashed #aaa;
  padding: 4px;
}
li {
  list-style: none;
}
.wrap {
  border: 3px solid skyblue;
  margin-bottom: 2px;
}
</style>
