require=function e(r,t,o){function n(u,i){if(!t[u]){if(!r[u]){var c="function"==typeof require&&require;if(!i&&c)return c(u,!0);if(l)return l(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var s=t[u]={exports:{}};r[u][0].call(s.exports,function(e){var t=r[u][1][e];return n(t||e)},s,s.exports,e,r,t,o)}return t[u].exports}for(var l="function"==typeof require&&require,u=0;u<o.length;u++)n(o[u]);return n}({HelloWorld:[function(e,r,t){"use strict";cc._RF.push(r,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},text:"Hello, World!"},onLoad:function(){this.label.string=this.text},update:function(e){}}),cc._RF.pop()},{}]},{},["HelloWorld"]);