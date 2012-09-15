/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'kia_ora',
            type:'image',
            rect:['-7px','-5px','547px','410px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"kia_ora.png",'0px','0px'],
            transform:[[],['180deg']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '220px'],
            ["style", "width", '260px']
         ],
         "${_kia_ora}": [
            ["style", "top", '34.73px'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '721deg'],
            ["style", "height", '150px'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '30.29px'],
            ["style", "width", '200px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3825,
         autoPlay: true,
         timeline: [
            { id: "eid78", tween: [ "style", "${_kia_ora}", "height", '150px', { fromValue: '150px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid16", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid12", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2042, duration: 0, easing: "swing" },
            { id: "eid23", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2083, duration: 0, easing: "swing" },
            { id: "eid24", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2125, duration: 0, easing: "swing" },
            { id: "eid31", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2166, duration: 0, easing: "swing" },
            { id: "eid32", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2208, duration: 0, easing: "swing" },
            { id: "eid33", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2249, duration: 0, easing: "swing" },
            { id: "eid34", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2291, duration: 0, easing: "swing" },
            { id: "eid41", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2332, duration: 0, easing: "swing" },
            { id: "eid42", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2374, duration: 0, easing: "swing" },
            { id: "eid43", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2415, duration: 0, easing: "swing" },
            { id: "eid44", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2457, duration: 0, easing: "swing" },
            { id: "eid59", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2498, duration: 0, easing: "swing" },
            { id: "eid60", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2540, duration: 0, easing: "swing" },
            { id: "eid61", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2581, duration: 0, easing: "swing" },
            { id: "eid62", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2623, duration: 0, easing: "swing" },
            { id: "eid63", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2664, duration: 0, easing: "swing" },
            { id: "eid64", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2706, duration: 0, easing: "swing" },
            { id: "eid65", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2747, duration: 0, easing: "swing" },
            { id: "eid66", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2789, duration: 0, easing: "swing" },
            { id: "eid67", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2830, duration: 0, easing: "swing" },
            { id: "eid68", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2872, duration: 0, easing: "swing" },
            { id: "eid69", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 2913, duration: 0, easing: "swing" },
            { id: "eid70", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '0deg'}], position: 2955, duration: 0, easing: "swing" },
            { id: "eid71", tween: [ "transform", "${_kia_ora}", "skewX", '6deg', { fromValue: '6deg'}], position: 2996, duration: 0, easing: "swing" },
            { id: "eid73", tween: [ "transform", "${_kia_ora}", "skewX", '0deg', { fromValue: '6deg'}], position: 3825, duration: 0, easing: "swing" },
            { id: "eid75", tween: [ "style", "${_kia_ora}", "top", '34.73px', { fromValue: '34.73px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid80", tween: [ "style", "${_kia_ora}", "top", '35px', { fromValue: '34.73px'}], position: 3825, duration: 0, easing: "swing" },
            { id: "eid77", tween: [ "style", "${_kia_ora}", "width", '200px', { fromValue: '200px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid6", tween: [ "transform", "${_kia_ora}", "rotateZ", '1080deg', { fromValue: '721deg'}], position: 0, duration: 1000 },
            { id: "eid7", tween: [ "transform", "${_kia_ora}", "rotateZ", '1080deg', { fromValue: '721deg'}], position: 1000, duration: 1000 },
            { id: "eid8", tween: [ "transform", "${_kia_ora}", "rotateZ", '720deg', { fromValue: '1080deg'}], position: 2910, duration: 305, easing: "swing" },
            { id: "eid10", tween: [ "transform", "${_kia_ora}", "rotateZ", '720deg', { fromValue: '1080deg'}], position: 3215, duration: 305, easing: "swing" },
            { id: "eid11", tween: [ "transform", "${_kia_ora}", "rotateZ", '720deg', { fromValue: '1080deg'}], position: 3520, duration: 305, easing: "swing" },
            { id: "eid76", tween: [ "style", "${_kia_ora}", "left", '30.29px', { fromValue: '30.29px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid79", tween: [ "style", "${_kia_ora}", "left", '30px', { fromValue: '30.29px'}], position: 3825, duration: 0, easing: "swing" },
            { id: "eid17", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid15", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2042, duration: 0, easing: "swing" },
            { id: "eid20", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2083, duration: 0, easing: "swing" },
            { id: "eid21", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2125, duration: 0, easing: "swing" },
            { id: "eid26", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2166, duration: 0, easing: "swing" },
            { id: "eid27", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2208, duration: 0, easing: "swing" },
            { id: "eid28", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2249, duration: 0, easing: "swing" },
            { id: "eid29", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2291, duration: 0, easing: "swing" },
            { id: "eid36", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2332, duration: 0, easing: "swing" },
            { id: "eid37", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2374, duration: 0, easing: "swing" },
            { id: "eid38", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2415, duration: 0, easing: "swing" },
            { id: "eid39", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2457, duration: 0, easing: "swing" },
            { id: "eid46", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2498, duration: 0, easing: "swing" },
            { id: "eid47", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2540, duration: 0, easing: "swing" },
            { id: "eid48", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2581, duration: 0, easing: "swing" },
            { id: "eid49", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2623, duration: 0, easing: "swing" },
            { id: "eid50", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2664, duration: 0, easing: "swing" },
            { id: "eid51", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2706, duration: 0, easing: "swing" },
            { id: "eid52", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2747, duration: 0, easing: "swing" },
            { id: "eid53", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2789, duration: 0, easing: "swing" },
            { id: "eid54", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2830, duration: 0, easing: "swing" },
            { id: "eid55", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2872, duration: 0, easing: "swing" },
            { id: "eid56", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 2913, duration: 0, easing: "swing" },
            { id: "eid57", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '0deg'}], position: 2955, duration: 0, easing: "swing" },
            { id: "eid58", tween: [ "transform", "${_kia_ora}", "skewY", '6deg', { fromValue: '6deg'}], position: 2996, duration: 0, easing: "swing" },
            { id: "eid74", tween: [ "transform", "${_kia_ora}", "skewY", '0deg', { fromValue: '6deg'}], position: 3825, duration: 0, easing: "swing" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-399912802");
