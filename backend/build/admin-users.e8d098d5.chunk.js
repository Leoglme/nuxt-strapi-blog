(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5199],{78086:function(e,t,a){var r;e.exports=(r=a(67294),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=67)}({0:function(e,t){e.exports=r},67:function(e,t,a){"use strict";a.r(t);var r=a(0);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}t.default=function(e){return r.createElement("svg",n({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),r.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),r.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}}))},35470:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67154)),l=r(a(59713)),o=r(a(6479)),i=r(a(67294)),u=r(a(45697)),s=a(59522),d=a(5493),c=a(30741),f=a(67826),p=a(49425),m=a(41798),g=r(a(19352)),v=r(a(18568)),y=a(39711),b=a(97132),h=a(68547),E=a(26595),w=["key","cellFormatter","name"];function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var M=function(e){var t=e.canDelete,a=e.headers,r=e.entriesToDelete,u=e.onClickDelete,M=e.onSelectRow,k=e.withMainAction,j=e.withBulkActions,P=e.rows,S=(0,y.useHistory)(),C=S.push,x=S.location.pathname,T=(0,b.useIntl)().formatMessage;return i.default.createElement(m.Tbody,null,P.map((function(e){var y=-1!==r.findIndex((function(t){return t===e.id}));return i.default.createElement(m.Tr,(0,n.default)({key:e.id},(0,h.onRowClick)({fn:function(){return C("".concat(x,"/").concat(e.id))},condition:j})),k&&i.default.createElement(m.Td,h.stopPropagation,i.default.createElement(s.BaseCheckbox,{"aria-label":T({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,E.getFullName)(e.firstname,e.lastname)}),checked:y,onChange:function(){M({name:e.id,value:!y})}})),a.map((function(t){var a=t.key,r=t.cellFormatter,n=t.name,u=(0,o.default)(t,w);return i.default.createElement(m.Td,{key:a},"function"===typeof r?r(e,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){(0,l.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({key:a,name:n},u)):i.default.createElement(p.Typography,{textColor:"neutral800"},e[n]||"-"))})),j&&i.default.createElement(m.Td,null,i.default.createElement(f.Flex,{justifyContent:"end"},i.default.createElement(c.IconButton,{onClick:function(){return C("".concat(x,"/").concat(e.id))},label:T({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,E.getFullName)(e.firstname,e.lastname)}),noBorder:!0,icon:i.default.createElement(g.default,null)}),t&&i.default.createElement(d.Box,(0,n.default)({paddingLeft:1},h.stopPropagation),i.default.createElement(c.IconButton,{onClick:function(){return u(e.id)},label:T({id:"app.component.table.delete",defaultMessage:"Delete {target}"},{target:(0,E.getFullName)(e.firstname,e.lastname)}),noBorder:!0,icon:i.default.createElement(v.default,null)})))))})))};M.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete:function(){},onSelectRow:function(){},rows:[],withBulkActions:!1,withMainAction:!1},M.propTypes={canDelete:u.default.bool,entriesToDelete:u.default.array,headers:u.default.array.isRequired,onClickDelete:u.default.func,onSelectRow:u.default.func,rows:u.default.array,withBulkActions:u.default.bool,withMainAction:u.default.bool};var k=M;t.default=k},19703:(e,t,a)=>{"use strict";var r=a(95318),n=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(63038)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(67294)),i=r(a(45697)),u=a(97132),s=a(19408),d=a(5493),c=r(a(23980)),f=a(68547);function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var m=function(e){var t=e.displayedFilters,a=(0,o.useState)(!1),r=(0,l.default)(a,2),n=r[0],i=r[1],p=(0,u.useIntl)().formatMessage,m=(0,o.useRef)(),g=function(){i((function(e){return!e}))};return o.default.createElement(o.default.Fragment,null,o.default.createElement(d.Box,{paddingTop:1,paddingBottom:1},o.default.createElement(s.Button,{variant:"tertiary",ref:m,startIcon:o.default.createElement(c.default,null),onClick:g,size:"S"},p({id:"app.utils.filters",defaultMessage:"Filters"})),n&&o.default.createElement(f.FilterPopoverURLQuery,{displayedFilters:t,isVisible:n,onToggle:g,source:m})),o.default.createElement(f.FilterListURLQuery,{filtersSchema:t}))};m.propTypes={displayedFilters:i.default.arrayOf(i.default.shape({name:i.default.string.isRequired,metadatas:i.default.shape({label:i.default.string}),fieldSchema:i.default.shape({type:i.default.string})})).isRequired};var g=m;t.default=g},19891:(e,t,a)=>{"use strict";var r=a(95318),n=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(87757)),o=r(a(67154)),i=r(a(48926)),u=r(a(63038)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=S(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(67294)),d=r(a(45697)),c=a(97132),f=a(75146),p=a(34626),m=a(68115),g=a(5493),v=a(19408),y=a(9008),b=a(49425),h=a(80831),E=a(68547),w=a(23724),O=a(53777),M=r(a(22849)),k=r(a(59127)),j=r(a(36031)),P=r(a(63875));function S(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(S=function(e){return e?a:t})(e)}var C=window&&window.strapi&&window.strapi.isEE?a(2008).Z:a(42072).default,x=window&&window.strapi&&window.strapi.isEE?a(656).Z:a(99852).Z,T=window&&window.strapi&&window.strapi.isEE?a(43685).Z:a(84768).Z,A=function(e){var t=e.queryName,a=e.onToggle,r=(0,s.useState)("create"),n=(0,u.default)(r,2),d=n[0],S=n[1],A=(0,s.useState)(!1),D=(0,u.default)(A,2),_=D[0],B=D[1],F=(0,s.useState)(null),I=(0,u.default)(F,2),L=I[0],R=I[1],q=(0,w.useQueryClient)(),U=(0,c.useIntl)().formatMessage,z=(0,E.useNotification)(),W=(0,E.useOverlayBlocker)(),Z=W.lockApp,N=W.unlockApp,Q=(0,w.useMutation)((function(e){return O.axiosInstance.post("/admin/users",e)}),{onSuccess:function(){var e=(0,i.default)(l.default.mark((function e(a){var r;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.data,R(r.data.registrationToken),e.next=4,q.invalidateQueries(t);case 4:V(),B(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onError:function(e){throw B(!1),z({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),e},onSettled:function(){N()}}),G=U({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),H=function(){var e=(0,i.default)(l.default.mark((function e(t,a){var r,n;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.setErrors,Z(),B(!0),e.prev=3,e.next=6,Q.mutateAsync(t);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),N(),"Email already taken"===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.data.message)&&r({email:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t,a){return e.apply(this,arguments)}}(),V=function(){Y?S(Y):a()},K=P.default[d],J=K.buttonSubmitLabel,X=K.isDisabled,Y=K.next,$="create"===d?s.default.createElement(v.Button,{type:"submit",loading:_},U(J)):s.default.createElement(v.Button,{type:"button",loading:_,onClick:a},U(J));return s.default.createElement(f.ModalLayout,{onClose:a,labelledBy:"title"},s.default.createElement(f.ModalHeader,null,s.default.createElement(m.Breadcrumbs,{label:G},s.default.createElement(m.Crumb,null,G))),s.default.createElement(h.Formik,{initialValues:C,onSubmit:H,validationSchema:j.default,validateOnChange:!1},(function(e){var t=e.errors,r=e.handleChange,n=e.values;return s.default.createElement(E.Form,null,s.default.createElement(f.ModalBody,null,s.default.createElement(y.Stack,{size:6},"create"!==d&&s.default.createElement(T,{registrationToken:L}),s.default.createElement(g.Box,null,s.default.createElement(b.Typography,{variant:"beta",as:"h2"},U({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),s.default.createElement(g.Box,{paddingTop:4},s.default.createElement(y.Stack,{size:1},s.default.createElement(p.Grid,{gap:5},k.default.map((function(e){return e.map((function(e){return s.default.createElement(p.GridItem,(0,o.default)({key:e.name},e.size),s.default.createElement(E.GenericInput,(0,o.default)({},e,{disabled:X,error:t[e.name],onChange:r,value:n[e.name]})))}))})))))),s.default.createElement(g.Box,null,s.default.createElement(b.Typography,{variant:"beta",as:"h2"},U({id:"app.components.Users.ModalCreateBody.block-title.login",defaultMessage:"User's role"})),s.default.createElement(g.Box,{paddingTop:4},s.default.createElement(p.Grid,{gap:5},s.default.createElement(p.GridItem,{col:6,xs:12},s.default.createElement(M.default,{disabled:X,error:t.roles,onChange:r,value:n.roles})),x.map((function(e){return e.map((function(e){return s.default.createElement(p.GridItem,(0,o.default)({key:e.name},e.size),s.default.createElement(E.GenericInput,(0,o.default)({},e,{disabled:X,onChange:r,value:n[e.name]})))}))}))))))),s.default.createElement(f.ModalFooter,{startActions:s.default.createElement(v.Button,{variant:"tertiary",onClick:a,type:"button"},U({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:$}))})))};A.propTypes={onToggle:d.default.func.isRequired,queryName:d.default.array.isRequired};var D=A;t.default=D},42072:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={firstname:"",lastname:"",email:"",roles:[]};t.default=a},59127:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];t.default=a},99852:(e,t)=>{"use strict";t.Z=void 0;var a=[];t.Z=a},36031:(e,t,a)=>{"use strict";var r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=l?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(53209)),l=a(68547);function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}var i=n.object().shape({firstname:n.string().required(l.translatedErrors.required),lastname:n.string(),email:n.string().email(l.translatedErrors.email).required(l.translatedErrors.required),roles:n.array().min(1,l.translatedErrors.required).required(l.translatedErrors.required)});t.default=i},63875:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"form.button.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};t.default=a},42902:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(45697)),o=a(5493),i=a(67826),u=a(68547),s=function(e){var t=e.pagination;return n.default.createElement(o.Box,{paddingTop:4},n.default.createElement(i.Flex,{alignItems:"flex-end",justifyContent:"space-between"},n.default.createElement(u.PageSizeURLQuery,null),n.default.createElement(u.PaginationURLQuery,{pagination:t})))};s.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},s.propTypes={pagination:l.default.shape({page:l.default.number,pageCount:l.default.number,pageSize:l.default.number,total:l.default.number})};var d=s;t.default=d},69515:(e,t,a)=>{"use strict";var r=a(95318),n=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(87757)),o=r(a(48926)),i=r(a(63038)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=P(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(67294)),s=a(68547),d=a(78862),c=a(19408),f=a(62031),p=a(84686),m=r(a(78086)),g=a(39711),v=a(97132),y=a(23724),b=r(a(13240)),h=r(a(35470)),E=r(a(19703)),w=r(a(19891)),O=r(a(42902)),M=a(25594),k=r(a(27433)),j=r(a(20920));function P(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(P=function(e){return e?a:t})(e)}var S=function(){var e=(0,u.useState)(!1),t=(0,i.default)(e,2),a=t[0],r=t[1],n=(0,s.useRBAC)(b.default.settings.users).allowedActions,P=n.canCreate,S=n.canDelete,C=n.canRead,x=(0,y.useQueryClient)(),T=(0,s.useNotification)(),A=(0,v.useIntl)().formatMessage,D=(0,g.useLocation)().search;(0,s.useFocusWhenNavigate)();var _=(0,p.useNotifyAT)().notifyStatus,B=["users",D],F=A({id:"Settings.permissions.users.listview.header.title",defaultMessage:"Users"}),I=function(){_(A({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:F}))},L=(0,y.useQuery)(B,(function(){return(0,M.fetchData)(D,I)}),{enabled:C,keepPreviousData:!0,retry:!1,staleTime:2e4,onError:function(){T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),R=L.status,q=L.data,U=L.isFetching,z=function(){r((function(e){return!e}))},W=(0,y.useMutation)((function(e){return(0,M.deleteData)(e)}),{onSuccess:function(){var e=(0,o.default)(l.default.mark((function e(){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.invalidateQueries(B);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onError:function(e){var t,a;null!==e&&void 0!==e&&null!==(t=e.response)&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.data?T({type:"warning",message:e.response.data.data}):T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Z="success"!==R&&"error"!==R||"success"===R&&U,N=P?u.default.createElement(c.Button,{"data-testid":"create-user-button",onClick:z,startIcon:u.default.createElement(m.default,null),size:"L"},A({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})):void 0;return u.default.createElement(f.Main,{"aria-busy":Z},u.default.createElement(s.SettingsPageTitle,{name:"Users"}),u.default.createElement(d.HeaderLayout,{primaryAction:N,title:F,subtitle:A({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),C&&u.default.createElement(d.ActionLayout,{startActions:u.default.createElement(u.default.Fragment,null,u.default.createElement(s.SearchURLQuery,{label:A({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:F})}),u.default.createElement(E.default,{displayedFilters:k.default}))}),u.default.createElement(d.ContentLayout,{canRead:C},!C&&u.default.createElement(s.NoPermissions,null),"error"===R&&u.default.createElement("div",null,"TODO: An error occurred"),C&&u.default.createElement(u.default.Fragment,null,u.default.createElement(s.DynamicTable,{contentType:"Users",isLoading:Z,onConfirmDeleteAll:W.mutateAsync,onConfirmDelete:function(e){return W.mutateAsync([e])},headers:j.default,rows:null===q||void 0===q?void 0:q.results,withBulkActions:!0,withMainAction:S},u.default.createElement(h.default,{canDelete:S,headers:j.default,rows:(null===q||void 0===q?void 0:q.results)||[],withBulkActions:!0,withMainAction:S})),u.default.createElement(O.default,{pagination:null===q||void 0===q?void 0:q.pagination}))),a&&u.default.createElement(w.default,{onToggle:z,queryName:B}))};t.default=S},25594:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchData=t.deleteData=void 0;var n=r(a(87757)),l=r(a(48926)),o=a(53777),i=function(){var e=(0,l.default)(n.default.mark((function e(t,a){var r,l;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.axiosInstance.get("/admin/users".concat(t));case 2:return r=e.sent,l=r.data.data,a(),e.abrupt("return",l);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();t.fetchData=i;var u=function(){var e=(0,l.default)(n.default.mark((function e(t){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.axiosInstance.post("/admin/users/batch-delete",{ids:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.deleteData=u},27433:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}];t.default=a},20920:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=a(67826),o=a(49425),i=a(68547),u=[{name:"firstname",key:"firstname",metadatas:{label:"Firstname",sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:"Lastname",sortable:!0}},{key:"email",name:"email",metadatas:{label:"Email",sortable:!0}},{key:"roles",name:"roles",metadatas:{label:"Roles",sortable:!1},cellFormatter:function(e){var t=e.roles;return n.default.createElement(o.Typography,{textColor:"neutral800"},t.map((function(e){return e.name})).join(",\n"))}},{key:"username",name:"username",metadatas:{label:"Username",sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:"User status",sortable:!1},cellFormatter:function(e){var t=e.isActive;return n.default.createElement(l.Flex,null,n.default.createElement(i.Status,{isActive:t,variant:t?"success":"danger"}),n.default.createElement(o.Typography,{textColor:"neutral800"},t?"Active":"Inactive"))}}];t.default=u},42222:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=a(68547),o=r(a(13240)),i=r(a(69515)),u=function(){return n.default.createElement(l.CheckPagePermissions,{permissions:o.default.settings.users.main},n.default.createElement(i.default,null))};t.default=u},38059:(e,t,a)=>{"use strict";var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(45697)),o=a(30741),i=a(68547),u=r(a(67483)),s=a(74855),d=a(97132),c=function(){return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},n.default.createElement("tspan",{x:"23",y:"36"},"\u2709\ufe0f")))},f=function(e){var t=e.children,a=e.target,r=(0,i.useNotification)(),l=(0,(0,d.useIntl)().formatMessage)({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return n.default.createElement(i.ContentBox,{endAction:n.default.createElement(s.CopyToClipboard,{onCopy:function(){r({type:"info",message:{id:"notification.link-copied"}})},text:a},n.default.createElement(o.IconButton,{label:l,noBorder:!0,icon:n.default.createElement(u.default,null)})),title:a,titleEllipsis:!0,subtitle:t,icon:n.default.createElement(c,null),iconBackground:"neutral100"})};f.propTypes={children:l.default.oneOfType([l.default.element,l.default.string]).isRequired,target:l.default.string.isRequired};var p=f;t.default=p},84768:(e,t,a)=>{"use strict";var r=a(95318);t.Z=void 0;var n=r(a(67294)),l=a(97132),o=r(a(45697)),i=r(a(92424)),u=r(a(38059)),s=function(e){var t=e.registrationToken,a=(0,l.useIntl)().formatMessage,r="".concat(window.location.origin).concat(i.default,"auth/register?registrationToken=").concat(t);return n.default.createElement(u.default,{target:r},a({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:o.default.string};var d=s;t.Z=d},22849:(e,t,a)=>{"use strict";var r=a(95318),n=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(87757)),o=r(a(48926)),i=r(a(67294)),u=r(a(45697)),s=a(97132),d=a(43808),c=a(23724),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=g(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(78384)),p=r(a(57572)),m=a(53777);function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(g=function(e){return e?a:t})(e)}var v=(0,f.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(359deg);}"]),y=f.default.div.withConfig({displayName:"SelectRoles__LoadingWrapper",componentId:"sc-1z5s3s-0"})(["animation:"," 2s infinite linear;"],v),b=function(){return i.default.createElement(y,null,i.default.createElement(p.default,null))},h=function(){var e=(0,o.default)(l.default.mark((function e(){var t,a;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.axiosInstance.get("/admin/roles");case 2:return t=e.sent,a=t.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.disabled,a=e.error,r=e.onChange,n=e.value,l=(0,c.useQuery)(["roles"],h,{staleTime:5e4}),o=l.status,u=l.data,f=(0,s.useIntl)().formatMessage,p=a?f({id:a,defaultMessage:a}):"",m=f({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),g=f({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),v=f({id:"app.components.Select.placeholder",defaultMessage:"Select"}),y="loading"===o?i.default.createElement(b,null):void 0;return i.default.createElement(d.Select,{id:"roles",disabled:t,error:p,hint:g,label:m,name:"roles",onChange:function(e){r({target:{name:"roles",value:e}})},placeholder:v,multi:!0,startIcon:y,value:n,withTags:!0,required:!0},(u||[]).map((function(e){return i.default.createElement(d.Option,{key:e.id,value:e.id},e.name)})))};E.defaultProps={disabled:!1,error:void 0},E.propTypes={disabled:u.default.bool,error:u.default.string,onChange:u.default.func.isRequired,value:u.default.array.isRequired};var w=E;t.default=w},2008:(e,t,a)=>{"use strict";var r=a(95318);t.Z=void 0;var n=r(a(59713)),l=r(a(42072));function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){(0,n.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},s=i(i({},l.default),u);t.Z=s},656:(e,t)=>{"use strict";t.Z=void 0;var a=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[];t.Z=a},43685:(e,t,a)=>{"use strict";var r=a(95318);t.Z=void 0;var n=r(a(67294)),l=a(97132),o=r(a(45697)),i=r(a(92424)),u=r(a(38059)),s=function(e){var t=e.registrationToken,a=(0,l.useIntl)().formatMessage;return t?n.default.createElement(u.default,{target:"".concat(window.location.origin).concat(i.default,"auth/register?registrationToken=").concat(t)},a({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):n.default.createElement(u.default,{target:"".concat(window.location.origin).concat(i.default,"auth/login")},a({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:o.default.string};var d=s;t.Z=d}}]);