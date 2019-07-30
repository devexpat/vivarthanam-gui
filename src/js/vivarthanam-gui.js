import {asciiToUnicode as a2u} from 'devexpat/vivarthanam-converter';
import * as maps from 'devexpat/vivarthanam-unicode-conversion-maps';
import Vue from 'vue/dist/vue.min.js';

var app = new Vue({
  el: '#app',
  data: {
    inputText: '',
    outputText: '',
    map: 'ambili'
  },
  methods: {
    convert: function(event) {
      this.outputText = a2u(this.inputText, maps[this.map], {});
    }
  }
})