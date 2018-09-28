<template>
  <aside>
    <ul>
      <router-link to="/"><li>访问明细</li></router-link>
      <router-link to="/classify"><li>来源分类</li></router-link>
      <router-link to="/domino"><li>来路域名</li></router-link>
      <router-link to="/page"><li>来路页面</li></router-link>
      <router-link to="/district"><li>地区分布</li></router-link>
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
