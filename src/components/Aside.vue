<template>
  <aside>
    <ul>
      <li><router-link to="/">访问明细</router-link></li>
      <li><router-link to="/classify">来源分类</router-link></li>
      <li><router-link to="/domino">来路域名</router-link></li>
      <li><router-link to="/page">来路页面</router-link></li>
      <li><router-link to="/district">地区分布</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  components: {
  },
};
</script>

<style lang='scss' scoped>
aside {
  float: left;
  height: 600px;
  border: 1px solid #e4e4e4;
  width: 10%;

  ul li {
    line-height: 60px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;
  }
}
</style>
