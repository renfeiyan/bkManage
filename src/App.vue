<<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view style="height: 100%"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html, body, #app {
    width: 100%;
    height: 100%;
  }
  html, body{
    padding:0;
    margin:0;
  }
</style>
