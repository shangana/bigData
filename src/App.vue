<template>
  <div id="app">
    <Header></Header>
    <Aside></Aside>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Aside from '@/components/Aside';
export default {
  name: 'App',
  components: {
    Header, Aside,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #666;
}
main {
  float: left;
  padding: 20px;
  width: 85%;
}
.router-link-exact-active {
  color:#eb5055;
}
.clear {
  clear: both;
}
</style>
