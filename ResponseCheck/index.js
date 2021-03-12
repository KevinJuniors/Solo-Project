// Vue를 import(불러옴(load))
import Vue from "vue";
// "ResponseCheck.vue" 파일을 import
import ResponseCheck from "./ResponseCheck";

// DOM Element 상의 #root 이라는 아이디를 가진 Element에 출력(output)
new Vue(ResponseCheck).$mount("#root");