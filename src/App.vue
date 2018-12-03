<template>
  <div id="app">
    <div>
      <intro id="intro"></intro>
    </div>
    <div>
      <about id="about"></about>
    </div>
    <div>
      <skill id="skill"></skill>
    </div>
    <div>
      <edu id="edu"></edu>
    </div>
    <div>
      <exp id="exp"></exp>
    </div>
  </div>
</template>

<script>
import Intro from './Intro'
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';

export default {
  data(){
    return{
    }
  },
  components:{
    'intro' : Intro,
    'about' : About,
    'edu': Education,
    'exp' : Experience,
    'skill' : Skill
  }  
}
</script>

<style scoped>
  @import './assets/css/main.css';
</style>


