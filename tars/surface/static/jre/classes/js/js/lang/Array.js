Class.forName({name:"class Array",alias:"js.lang.Array",Array:function(){},clear:function(){this.splice(0,this.length)},contains:function(t){return this.indexOf(t)!==-1},remove:function(t){var r=this.indexOf(t);return r>-1&&(this.splice(r,1),!0)},peek:function(){return this.slice(-1)[0]},last:function(){return this[this.length-1]},first:function(){return this[0]},indexOf:function(t,r,i){for(var n=r||0,e=Math.min(i||this.length,this.length);n<e;n++)if(this[n]===t)return n;return-1},append:function(t,r,i){if(!Object.isEmpty(t)&&Object.isArray(t)&&(r=r||0,i=Math.min(i||t.length,t.length),i>r)){var n=Array.prototype.slice.call(t,r,i);Array.prototype.splice.call(n,0,0,this.length,0),Array.prototype.splice.apply(this,n)}return this},insert:function(t,r,i){if(!Object.isEmpty(t)&&Object.isArray(t)&&(r=r||0,i=Math.min(i||t.length,t.length),i>r)){var n=Array.prototype.slice.call(t,r,i);Array.prototype.splice.call(n,0,0,0,0),Array.prototype.splice.apply(this,n)}return this},getLength:function(){return this.length}});