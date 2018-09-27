<template>
  <div class="container">
    <div class="session">
      <p>来访次数</p>
      <p>{{visiCount}}</p>
    </div>
    <div class="session">
      <p>IP</p>
      <p>{{ip}}</p>
    </div>
    <div class="session">
      <p>站内总浏览数</p>
      <p>{{sumCount}}</p>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  props: {
    visiCount: {
      type: Number,
    },
    ip: {
      type: Number,
    },
    sumCount: {
      type: Number,
    },
  },
  data () {
    return {
    };
  },
  components: {
  },
};
</script>

<style lang="scss" scope>
.container {

  .session {
    float: left;
    width: 30%;
    border: 1px solid #e4e4e4;
    padding: 10px;
    text-align: center;
    line-height: 30px;
  }
}
</style>
