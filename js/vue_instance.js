/*
 * vue_instance.js
 * Copyright (C) 2019 Martin Užák martin.uzak@gmail.com
 *
 * Distributed under terms of the MIT license.
 */

'use strict';


// root instance
var  vm = new Vue({
   el: '#vue_det', // connect with html
   data: {
      firstname : "Ria",
      lastname  : "Singh",
      address    : "Mumbai"
   },
   methods: {
      mydetails : function() {
         return "I am "+this.firstname +" "+ this.lastname;
      }
   }
});

console.log(vm.$data);


// must use function when in Vue.extend()
var Component = Vue.extend({
  data: function () {
     return {"name" : "martin", "age" : 15}
  }
});
var myComponentInstance = new Component();
console.log(myComponentInstance.$data);
console.log(myComponentInstance.age);

var Comp = Vue.extend({
   props: ['msg'],
   template: '<div>{{ msg }}</div>'
})
var vm = new Comp({
   propsData: {
      msg: 'hello'
   }
})
