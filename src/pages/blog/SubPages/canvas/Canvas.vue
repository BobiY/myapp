<template>
  <div class="canvas">
      <h1>Canvas</h1>
      <div class="aa">
        dsfsdfdfs
      </div>
      <el-switch
        v-model="value1"
        on-text=""
        off-text="">
      </el-switch>
      <el-switch
        v-model="value2"
        on-color="#13ce66"
        off-color="#ff4949">
      </el-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    },
    methods:{

    },
    mounted:function(){
      this.$ajax("aa/bb").then( (data) => {
        console.log(data);
      } )
    }
  };
</script>

<style lang="less" scoped>
  .canvas{
      background: #333;
      .aa{
        background: #000;
      }
    }
</style>

