// Vue를 import(불러옴(load))
import Vue from "vue";
// "NumberBaseball.vue" 파일을 import
import NumberBaseball from "./NumberBaseball";

// DOM Element 상의 #root 이라는 아이디를 가진 Element에 output
new Vue(NumberBaseball).$mount("#root");