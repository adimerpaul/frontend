(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a2f3c0e"],{"0c18":function(t,e,r){},1681:function(t,e,r){},6604:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{outlined:""}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.save(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card-title",[r("h3",[t._v(" "+t._s(t.isNew?"Nuevo":"Editar")+" producto")]),r("v-spacer"),r("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.$router.back()}}},[t._v(" Volver ")])],1),r("v-divider"),r("v-card-text",[null!==t.errores?r("errores",{attrs:{errores:t.errores}}):t._e(),r("v-text-field",{attrs:{label:"Código *",required:"",type:"number",outlined:"",rules:[function(t){return!!t||"Codigo es requerido"},function(t){return t&&t.length>=3&&t.length<=5||"Codigo debe tener entre 3 y 5 digitos"}]},model:{value:t.producto.codigo,callback:function(e){t.$set(t.producto,"codigo",e)},expression:"producto.codigo"}}),r("v-text-field",{attrs:{label:"Nombre *",rules:[function(t){return!!t||"Nombre es requerido"},function(t){return t&&t.length>=3&&t.length<=20||"Nombre debe tener entre 3 y 5 digitos"}],required:""},model:{value:t.producto.nombre,callback:function(e){t.$set(t.producto,"nombre",e)},expression:"producto.nombre"}}),r("v-textarea",{attrs:{label:"Descripción *",rules:[function(t){return!!t||"Descripcion es requerido"}],required:""},model:{value:t.producto.descripcion,callback:function(e){t.$set(t.producto,"descripcion",e)},expression:"producto.descripcion"}}),r("v-text-field",{attrs:{label:"Precio *",required:"",type:"number",rules:[function(t){return!!t||"Precio es requerido"}]},model:{value:t.producto.precio,callback:function(e){t.$set(t.producto,"precio",e)},expression:"producto.precio"}})],1),r("v-card-actions",[r("v-btn",{attrs:{type:"submit",color:"green",outlined:"",loading:t.loading}},[t._v(" Guardar ")])],1),r("pre",[t._v("    "+t._s(t.errores)+"\n  ")])],1)],1)},s=[],i=r("2f62"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},t._l(t.errores,(function(e,o){return r("div",{key:o},t._l(e,(function(e){return r("p",{key:e,staticClass:"text-sm"},[t._v(" - "+t._s(e)+" ")])})),0)})),0)},n=[],l={name:"errores",props:["errores"]},c=l,d=r("2877"),u=r("6544"),h=r.n(u),p=(r("0c18"),r("10d2")),m=r("afdd"),v=r("9d26"),g=r("f2e7"),f=r("7560"),b=r("2b0e"),_=b["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),x=r("58df"),y=r("d9bd"),w=Object(x["a"])(p["a"],g["a"],_).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(m["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(v["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(v["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...p["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||f["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(y["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),$=Object(d["a"])(c,a,n,!1,null,"360ef27a",null),C=$.exports;h()($,{VAlert:w});var B={name:"producto-form",components:{Errores:C},data:()=>({isNew:!0,valid:!1,producto:{user:{}},errores:null,loading:!1}),computed:{...Object(i["c"])(["url"])},created(){this.isNew=!this.$route.params.id},mounted(){this.isNew||this.getProducto()},methods:{getProducto(){const t=this.url+"productos/"+this.$route.params.id;this.axios.get(t).then(t=>{this.producto=t.data})},save(){if(!this.$refs.form.validate())return;let t="";t=this.isNew?this.url+"productos/":this.url+"productos/"+this.$route.params.id,this.loading=!0,this.axios({method:this.isNew?"POST":"PUT",url:t,data:this.producto}).then(t=>{!0===t.data.res?this.$toastr.success(t.data.message):this.$toastr.error(t.data.message)}).catch(t=>{console.log(t.response.data.errors),this.errores=t.response.data.errors}).finally(()=>{this.loading=!1})}}},k=B,I=r("8336"),N=r("b0af"),S=r("99d9"),T=r("ce7e"),V=r("4bd4"),E=r("2fa4"),H=r("8654");r("1681");const D=Object(x["a"])(H["a"]);var q=D.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...H["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,r=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(r,e)+"px"},genInput(){const t=H["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){H["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),A=Object(d["a"])(k,o,s,!1,null,"265eebd1",null);e["default"]=A.exports;h()(A,{VBtn:I["a"],VCard:N["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDivider:T["a"],VForm:V["a"],VSpacer:E["a"],VTextField:H["a"],VTextarea:q})},afdd:function(t,e,r){"use strict";var o=r("8336");e["a"]=o["a"]}}]);
//# sourceMappingURL=chunk-3a2f3c0e.5ac4877f.js.map