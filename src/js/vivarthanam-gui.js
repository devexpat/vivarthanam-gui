import {asciiToUnicode as a2u} from 'vivarthanam-converter';
import * as maps from 'vivarthanam-unicode-conversion-maps';
import Vue from 'vue/dist/vue.min.js';

var app = new Vue({
  el: '#app',
  data: {
    inputText: '',
    outputText: '',
    map: 'haritha_bold'
  },
  methods: {
    convert: function(event) {
      this.outputText = a2u(this.inputText, maps[this.map], {});
    }
  }
})