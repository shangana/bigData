<template>
  <aside>
    <ul>
      <li><router-link to="/">访问明细</router-link></li>
      <li><router-link to="/">来源分类</router-link></li>
      <li><router-link to="/">来路域名</router-link></li>
      <li><router-link to="/">来路页面</router-link></li>
      <li><router-link to="/">地区分布</router-link></li>
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
  border: 1px solid #666;

  ul li {
    line-height: 60px;
    width: 120px;
    text-align: center;
    border-bottom: 1px solid #666;
  }
}
</style>
