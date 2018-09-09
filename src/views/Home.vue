<template>
  <div class="home">
    <div class="button-group">
      <Button>默认按钮</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="info">info</Button>
      <Button type="warning">warning</Button>
      <Button type="danger">danger</Button>
    </div>
    <div class="button-group">
      <Button plain>plain按钮</Button>
      <Button type="primary" plain>primary</Button>
      <Button type="success" plain>success</Button>
      <Button type="info" plain>info</Button>
      <Button type="warning" plain>warning</Button>
      <Button type="danger" plain>danger</Button>
    </div>
    <div class="button-group">
      <Button round>圆角按钮</Button>
      <Button type="primary" round>primary</Button>
      <Button type="success" round>success</Button>
      <Button type="info" round>info</Button>
      <Button type="warning" round>warning</Button>
      <Button type="danger" round>danger</Button>
    </div>
    <div class="button-group">
      <Button icon="fa-heart-o" circle></Button>
    </div>
    <h3>大小</h3>
    <Button>默认按钮</Button>
    <Button size="medium">中等按钮</Button>
    <Button size="small">小型按钮</Button>
    <Button size="mini">迷你按钮</Button>
    <div style="margin: 5px 0;"></div>
    <Button round>默认按钮</Button>
    <Button size="medium" round>中等按钮</Button>
    <Button size="small" round>小型按钮</Button>
    <Button size="mini" round>迷你按钮</Button>
    <div style="margin: 5px 0;"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/packages/button/src/button.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Button
  }
}
</script>
<style>
.button-group {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 4px;
  border-bottom: 1px dashed #aaa;
}
</style>
