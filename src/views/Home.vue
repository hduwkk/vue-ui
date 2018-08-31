<template>
  <div class="home">
    <img src="../assets/logo.png">
    <h3>颜色</h3>
    <Button>按钮123</Button>
    <Button type="primary">按钮123</Button>
    <Button type="success">按钮123</Button>
    <Button type="info">按钮123</Button>
    <Button type="danger">按钮123</Button>

    <h3>朴素</h3>
    <Button plain>按钮123</Button>
    <Button type="primary" plain>按钮123</Button>
    <Button type="success" plain>按钮123</Button>
    <Button type="info" plain>按钮123</Button>
    <Button type="danger" plain>按钮123</Button>

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
    <Button circle>默认按钮</Button>
    <Button size="medium" circle>中等按钮</Button>
    <Button size="small" circle>小型按钮</Button>
    <Button size="mini" circle>迷你按钮</Button>
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
