<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Press F12 to open the console</p>
    <h3>
      if you see "successful websocket connection" , congratulations your plugin
      has run successfully
    </h3>

    <h3>plugin repository address</h3>
    <ul>
      <li>
        <a
          href="https://github.com/likaia/vue-native-websocket-vue3"
          target="_blank"
          rel="noopener"
          >vue-native-websocket-vue3（GitHub）</a
        >
      </li>
      <li>
        <a
          href="https://www.npmjs.com/package/vue-native-websocket-vue3"
          target="_blank"
          rel="noopener"
          >vue-native-websocket-vue3（npm）</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCurrentInstance, ComponentInternalInstance } from "vue";
//  Module '"vue"' has no exported member 'ComponentInternalInstance'.
export default defineComponent({
  name: "HelloWorld",
  mounted() {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;
    setTimeout(() => {
      if (proxy == null) return;
      proxy.$connect();
    }, 100);
  },
  props: {
    msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
