(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{AWfW:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(s("gDS+")),n=o(s("4gYi")),r=o(s("kAKY"));function o(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{groupsList:[],options:[{value:0,label:"单行文本框"},{value:1,label:"多行文本框"},{value:2,label:"单选"},{value:3,label:"复选"},{value:4,label:"图片上传"},{value:5,label:"附件上传"}],value:"",textarea:"",arr:[],stry:"",visible:!1,dataList:[],arrsLiist:[]}},created:function(){this.extendedFields()},methods:{extendedFields:function(){var e=this;this.appFetch({url:"signinfields_get_v3",method:"get",data:{}}).then((function(t){0===t.Code?e.informationList(t.Data):e.$message.error(t.Message)}))},informationList:function(e){this.groupsList=[];for(var t=0;t<e.length;t++){var s={name:e[t].name,id:e[t].id,content:"",description:e[t].type,sort:e[t].sort,introduce:e[t].fieldsDesc,enable:1===e[t].status,required:1===e[t].required},i="";if(e[t].fieldsExt&&(i=JSON.parse(e[t].fieldsExt)),i.options){for(var n=i.options,r=0;r<n.length;r++)s.content+=n[r].value+"\n";this.groupsList.push(s)}else s.content="",this.groupsList.push(s)}this.orderList()},orderList:function(){this.groupsList.sort(this.soreoder("sort"))},soreoder:function(e){return function(t,s){return t[e]-s[e]}},changInput:function(e){""===e||this.isNumber(e)||this.$message.error("请输入整数")},isNumber:function(e){return null!=/^(-)?\d+(\.\d+)?$/.exec(e)},obtainValue:function(e){this.value=e},handleSelectionChange:function(e){var t=this;this.arrsLiist=[],e.forEach((function(e,s){var i={status:0};if(e.newly){[].push(e)}else i.id=e.id,t.arrsLiist.push(i)}))},deleteList:function(){var e=this;this.appFetch({url:"signinfields_post_v3",method:"post",data:{data:this.arrsLiist}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.$message({message:"删除成功",type:"success"}),e.extendedFields()}}))},deleteField:function(e){var t=this;this.appFetch({url:"signinfields_post_v3",method:"post",data:{data:[{id:e.row.id,status:0}]}}).then((function(e){if(e.errors)t.$message.error(e.errors[0].code);else{if(0!==e.Code)return void t.$message.error(e.Message);t.$message({message:"删除成功",type:"success"}),t.extendedFields()}}))},operationDelete:function(e){var t=this;this.$confirm("删除后，则此字段及其历史用户信息，将从系统中彻底删除，且无法恢复，请谨慎操作，点击确认删除，则删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.row.newly?t.groupsList.splice(e.$index,1):(t.groupsList.splice(e.$index,1),t.deleteField(e))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},increaseList:function(){this.groupsList.push({name:"",id:"",content:"",description:"",sort:"",introduce:"",enable:!1,required:!1,newly:1})},submitClick:function(){this.dataList=[];for(var e=0;e<this.groupsList.length;e++){var t={name:this.groupsList[e].name,type:this.groupsList[e].description,fieldsDesc:this.groupsList[e].introduce,sort:this.groupsList[e].sort,status:this.groupsList[e].enable?1:-1,required:this.groupsList[e].required?1:0};if(this.groupsList[e].id&&(t.id=this.groupsList[e].id),this.groupsList[e].content){for(var s=this.groupsList[e].content.split(/\n/),n=0;n<s.length;n++)""!==s[n].trim()&&this.arr.push({value:s[n].trim(),checked:!1});var r={options:this.arr};t.fieldsExt=(0,i.default)(r),this.dataList.push(t)}else t.fieldsExt="",this.dataList.push(t);this.arr=[]}this.addRegistration(this.dataList)},testDataRun:function(){var e=this,t=!0;return this.groupsList.forEach((function(s){return""===s.name?(e.$message.error("字段名称未填写"),void(t=!1)):""===s.description?(e.$message.error("字段类型未填写"),void(t=!1)):2!==s.description&&3!==s.description||""!==s.content?""===s.sort?(e.$message.error("字段排序未填写"),void(t=!1)):void 0:(e.$message.error("字段选项未填写"),void(t=!1))})),t},addRegistration:function(e){var t=this;this.testDataRun()&&this.appFetch({url:"signinfields_post_v3",method:"post",data:{data:e}}).then((function(e){if(e.errors)t.$message.error(e.errors[0].code);else{if(0!==e.Code)return void t.$message.error(e.Message);t.$message({message:"操作成功",type:"success"}),t.extendedFields()}}))},submitDetele:function(){var e=this;this.arrsLiist.length>0?this.$confirm("删除后，则此字段及其历史用户信息，将从系统中彻底删除，且无法恢复，请谨慎操作，点击确认删除，则删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.deleteList()})).catch((function(){e.$message({type:"info",message:"已取消删除"})})):this.$message.warning("请选择需要删除的字段")},channelInputLimit:function(e){var t=e.key;return"e"!==t&&"."!==t||(e.returnValue=!1,!1)}},components:{Card:n.default,TableContAdd:r.default}}},DOZk:function(e,t,s){"use strict";s.r(t);var i=s("SSzs"),n=s("eodn");for(var r in n)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(r);var o=s("KHd+"),a=Object(o.a)(n.default,i.a,i.b,!1,null,null,null);t.default=a.exports},SSzs:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return n}));var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register-option-box"},[s("Card",{staticStyle:{"border-bottom":"none"},attrs:{header:"配置注册扩展信息"}}),e._v(" "),s("div",{staticClass:"register-option-table"},[s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.groupsList,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),s("el-table-column",{attrs:{label:"字段名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{attrs:{clearable:""},model:{value:t.row.name,callback:function(s){e.$set(t.row,"name",s)},expression:"scope.row.name"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"字段类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-select",{staticClass:"register-option-table__choice",attrs:{placeholder:"请选择"},on:{change:e.obtainValue},model:{value:t.row.description,callback:function(s){e.$set(t.row,"description",s)},expression:"scope.row.description"}},e._l(e.options,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),2===t.row.description||3===t.row.description?s("div",{staticClass:"register-option-table__type"},[s("el-input",{staticClass:"register-option-table__son",attrs:{type:"textarea",rows:2,placeholder:"输入值，每行一个选项值"},model:{value:t.row.content,callback:function(s){e.$set(t.row,"content",s)},expression:"scope.row.content"}})],1):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"字段排序"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{attrs:{type:"number",clearable:""},on:{input:e.changInput},nativeOn:{keydown:function(t){return e.channelInputLimit.apply(null,arguments)}},model:{value:t.row.sort,callback:function(s){e.$set(t.row,"sort",s)},expression:"scope.row.sort"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"字段介绍"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{attrs:{clearable:""},model:{value:t.row.introduce,callback:function(s){e.$set(t.row,"introduce",s)},expression:"scope.row.introduce"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"是否启用"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"register-option-table__enable"},[s("el-checkbox",{staticClass:"register-option-table__field",model:{value:t.row.enable,callback:function(s){e.$set(t.row,"enable",s)},expression:"scope.row.enable"}})],1)]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"是否必填"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"register-option-table__enable"},[s("el-checkbox",{staticClass:"register-option-table__field",model:{value:t.row.required,callback:function(s){e.$set(t.row,"required",s)},expression:"scope.row.required"}})],1)]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"register-option-table__detele"},[s("el-button",{attrs:{type:"text"},on:{click:function(s){return e.operationDelete(t)}}},[e._v("删除")])],1)]}}])})],1),e._v(" "),s("Card",[s("div",{staticClass:"egister-option-btn",on:{click:e.increaseList}},[s("i",{staticClass:"el-icon-circle-plus-outline"}),e._v(" "),s("span",{staticClass:"egister-option-increase"},[e._v("新增字段")])])]),e._v(" "),s("Card",{staticClass:"register-option-btn"},[s("el-button",{attrs:{type:"primary",loading:e.subLoading,size:"medium"},on:{click:e.submitClick}},[e._v("提交")]),e._v(" "),s("el-button",{staticClass:"register-option__button",attrs:{type:"primary",loading:e.subLoading,size:"medium"},on:{click:e.submitDetele}},[e._v("删除")])],1)],1)],1)},n=[]},eodn:function(e,t,s){"use strict";s.r(t);var i=s("g7Zn"),n=s.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){s.d(t,e,(function(){return i[e]}))}(r);t.default=n.a},g7Zn:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(s("QbLZ"));s("lpfh");var n=r(s("AWfW"));function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)({name:"registration-btn"},n.default)}}]);