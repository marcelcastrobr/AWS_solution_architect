(self.webpackJsonp=self.webpackJsonp||[]).push([[55],{229:function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return o});const i=(e,t)=>e<t?-1:e>t?1:0,o=(e,t)=>i(e.toLowerCase(),t.toLowerCase())},466:function(e,t,r){"use strict";var i=r(0),o=r(165);function n(e){var t,r=d(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function d(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function u(e,t,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const h=e=>e?e.trim().split(" ").slice(0,3).map(e=>e.substr(0,1)).join(""):"user";!function(e,t,r,i){var o=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var o=t.placement;if(t.kind===i&&("static"===o||"prototype"===o)){var n="static"===o?e:r;this.defineClassElement(n,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,o)},this),e.forEach(function(e){if(!s(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:r,finishers:i};var n=this.decorateConstructor(r,t);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[i])(o)||o);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=d(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:i,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=c(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=c(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var u=0;u<i.length;u++)o=i[u](o);var f=t(function(e){o.initializeInstanceElements(e,h.elements)},r),h=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=t.find(r)))if(l(n.descriptor)||l(o.descriptor)){if(s(n)||s(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(s(n)){if(s(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}a(n,o)}else t.push(n)}return t}(f.d.map(n)),e);o.initializeClassElements(f.F,h.elements),o.runClassFinishers(f.F,h.finishers)}([Object(i.d)("ha-user-badge")],function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[Object(i.h)()],key:"user",value:void 0},{kind:"method",key:"render",value:function(){const e=this.user,t=e?h(e.name):"?";return i.f` ${t} `}},{kind:"method",key:"updated",value:function(e){u(f(r.prototype),"updated",this).call(this,e),Object(o.a)(this,"long",(this.user?h(this.user.name):"?").length>2)}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        background-color: var(--light-primary-color);
        text-decoration: none;
        color: var(--primary-text-color);
        overflow: hidden;
      }

      :host([long]) {
        font-size: 80%;
      }
    `}}]}},i.a)},843:function(e,t,r){"use strict";r.r(t);var i=r(104),o=(r(179),r(135),r(174),r(145),r(136),r(0)),n=r(52),a=r(12),s=r(146),l=r(229),c=r(118),d=r(72),p=r(169);r(129),r(128),r(156),r(466);function u(e){var t,r=y(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function f(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function h(e){return e.decorators&&e.decorators.length}function m(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function v(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function g(e,t,r){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const w=["config","developer-tools","hassio"],x="scrollIntoViewIfNeeded"in document.body,E={map:1,logbook:2,history:3,"developer-tools":9,hassio:10,config:11},_=(e,t)=>{const r="lovelace"===e.component_name,i="lovelace"===t.component_name;if(r&&i)return Object(l.b)(e.title,t.title);if(r&&!i)return-1;if(i)return 1;const o=e.url_path in E,n=t.url_path in E;return o&&n?E[e.url_path]-E[t.url_path]:o?-1:n?1:Object(l.b)(e.title,t.title)};let T=function(e,t,r,i){var o=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var o=t.placement;if(t.kind===i&&("static"===o||"prototype"===o)){var n="static"===o?e:r;this.defineClassElement(n,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,o)},this),e.forEach(function(e){if(!h(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:r,finishers:i};var n=this.decorateConstructor(r,t);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[i])(o)||o);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=y(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:i,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=v(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=v(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var n=0;n<i.length;n++)o=i[n](o);var a=t(function(e){o.initializeInstanceElements(e,s.elements)},r),s=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=t.find(r)))if(m(n.descriptor)||m(o.descriptor)){if(h(n)||h(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(h(n)){if(h(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}f(n,o)}else t.push(n)}return t}(a.d.map(u)),e);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}(null,function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[Object(o.h)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(o.h)()],key:"narrow",value:void 0},{kind:"field",decorators:[Object(o.h)({type:Boolean})],key:"alwaysExpand",value:()=>!1},{kind:"field",decorators:[Object(o.h)({type:Boolean,reflect:!0})],key:"expanded",value:()=>!1},{kind:"field",decorators:[Object(o.h)()],key:"_externalConfig",value:void 0},{kind:"field",decorators:[Object(o.h)()],key:"_notifications",value:void 0},{kind:"field",decorators:[Object(o.h)({type:Boolean,reflect:!0})],key:"_rtl",value:()=>!1},{kind:"field",key:"_mouseLeaveTimeout",value:void 0},{kind:"field",key:"_tooltipHideTimeout",value:void 0},{kind:"field",key:"_recentKeydownActiveUntil",value:()=>0},{kind:"method",key:"render",value:function(){const e=this.hass;if(!e)return o.f``;const[t,r]=(e=>{const t=e.panels;if(!t)return[[],[]];const r=[],i=[];return Object.values(t).forEach(t=>{t.title&&t.url_path!==e.defaultPanel&&(w.includes(t.url_path)?i:r).push(t)}),r.sort(_),i.sort(_),[r,i]})(e);let a=this._notifications?this._notifications.length:0;for(const i in e.states)"configurator"===Object(s.a)(i)&&a++;const l=Object(d.b)(e);return o.f`
      <div class="menu">
        ${this.narrow?"":o.f`
              <ha-icon-button
                aria-label=${e.localize("ui.sidebar.sidebar_toggle")}
                .icon=${"docked"===e.dockedSidebar?"hass:menu-open":"hass:menu"}
                @click=${this._toggleSidebar}
              ></ha-icon-button>
            `}
        <span class="title">Home Assistant</span>
      </div>
      <paper-listbox
        attr-for-selected="data-panel"
        .selected=${e.panelUrl}
        @focusin=${this._listboxFocusIn}
        @focusout=${this._listboxFocusOut}
        @scroll=${this._listboxScroll}
        @keydown=${this._listboxKeydown}
      >
        ${this._renderPanel(l.url_path,l.icon||"hass:view-dashboard",l.title||e.localize("panel.states"))}
        ${t.map(t=>this._renderPanel(t.url_path,t.icon,e.localize(`panel.${t.title}`)||t.title))}
        <div class="spacer" disabled></div>

        ${r.map(t=>this._renderPanel(t.url_path,t.icon,e.localize(`panel.${t.title}`)||t.title))}
        ${this._externalConfig&&this._externalConfig.hasSettingsScreen?o.f`
              <a
                aria-role="option"
                aria-label=${e.localize("ui.sidebar.external_app_configuration")}
                href="#external-app-configuration"
                tabindex="-1"
                @click=${this._handleExternalAppConfiguration}
                @mouseenter=${this._itemMouseEnter}
                @mouseleave=${this._itemMouseLeave}
              >
                <paper-icon-item>
                  <ha-svg-icon
                    slot="item-icon"
                    .path=${i.d}
                  ></ha-svg-icon>
                  <span class="item-text">
                    ${e.localize("ui.sidebar.external_app_configuration")}
                  </span>
                </paper-icon-item>
              </a>
            `:""}
      </paper-listbox>

      <div class="divider"></div>

      <div
        class="notifications-container"
        @mouseenter=${this._itemMouseEnter}
        @mouseleave=${this._itemMouseLeave}
      >
        <paper-icon-item
          class="notifications"
          aria-role="option"
          @click=${this._handleShowNotificationDrawer}
        >
          <ha-svg-icon slot="item-icon" .path=${i.c}></ha-svg-icon>
          ${!this.expanded&&a>0?o.f`
                <span class="notification-badge" slot="item-icon">
                  ${a}
                </span>
              `:""}
          <span class="item-text">
            ${e.localize("ui.notification_drawer.title")}
          </span>
          ${this.expanded&&a>0?o.f`
                <span class="notification-badge">${a}</span>
              `:""}
        </paper-icon-item>
      </div>

      <a
        class=${Object(n.a)({profile:!0,"iron-selected":"profile"===e.panelUrl})}
        href="/profile"
        data-panel="panel"
        tabindex="-1"
        aria-role="option"
        aria-label=${e.localize("panel.profile")}
        @mouseenter=${this._itemMouseEnter}
        @mouseleave=${this._itemMouseLeave}
      >
        <paper-icon-item>
          <ha-user-badge slot="item-icon" .user=${e.user}></ha-user-badge>

          <span class="item-text">
            ${e.user?e.user.name:""}
          </span>
        </paper-icon-item>
      </a>
      <div disabled class="bottom-spacer"></div>
      <div class="tooltip"></div>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("expanded")||e.has("narrow")||e.has("alwaysExpand")||e.has("_externalConfig")||e.has("_notifications"))return!0;if(!this.hass||!e.has("hass"))return!1;const t=e.get("hass");if(!t)return!0;const r=this.hass;return r.panels!==t.panels||r.panelUrl!==t.panelUrl||r.user!==t.user||r.localize!==t.localize||r.states!==t.states||r.defaultPanel!==t.defaultPanel}},{kind:"method",key:"firstUpdated",value:function(e){g(k(r.prototype),"firstUpdated",this).call(this,e),this.hass&&this.hass.auth.external&&(e=>(e.cache.cfg||(e.cache.cfg=e.sendMessage({type:"config/get"})),e.cache.cfg))(this.hass.auth.external).then(e=>{this._externalConfig=e}),Object(p.a)(this.hass.connection,e=>{this._notifications=e})}},{kind:"method",key:"updated",value:function(e){if(g(k(r.prototype),"updated",this).call(this,e),e.has("alwaysExpand")&&(this.expanded=this.alwaysExpand),!e.has("hass"))return;if(this._rtl=Object(c.a)(this.hass),!x)return;const t=e.get("hass");if(!t||t.panelUrl!==this.hass.panelUrl){const e=this.shadowRoot.querySelector(".iron-selected");e&&e.scrollIntoViewIfNeeded()}}},{kind:"get",key:"_tooltip",value:function(){return this.shadowRoot.querySelector(".tooltip")}},{kind:"method",key:"_itemMouseEnter",value:function(e){this.expanded||(new Date).getTime()<this._recentKeydownActiveUntil||(this._mouseLeaveTimeout&&(clearTimeout(this._mouseLeaveTimeout),this._mouseLeaveTimeout=void 0),this._showTooltip(e.currentTarget))}},{kind:"method",key:"_itemMouseLeave",value:function(){this._mouseLeaveTimeout&&clearTimeout(this._mouseLeaveTimeout),this._mouseLeaveTimeout=window.setTimeout(()=>{this._hideTooltip()},500)}},{kind:"method",key:"_listboxFocusIn",value:function(e){this.expanded||"A"!==e.target.nodeName||this._showTooltip(e.target.querySelector("paper-icon-item"))}},{kind:"method",key:"_listboxFocusOut",value:function(){this._hideTooltip()}},{kind:"method",decorators:[Object(o.e)({passive:!0})],key:"_listboxScroll",value:function(){(new Date).getTime()<this._recentKeydownActiveUntil||this._hideTooltip()}},{kind:"method",key:"_listboxKeydown",value:function(){this._recentKeydownActiveUntil=(new Date).getTime()+100}},{kind:"method",key:"_showTooltip",value:function(e){this._tooltipHideTimeout&&(clearTimeout(this._tooltipHideTimeout),this._tooltipHideTimeout=void 0);const t=this._tooltip,r=this.shadowRoot.querySelector("paper-listbox");let i=e.offsetTop+11;r.contains(e)&&(i-=r.scrollTop),t.innerHTML=e.querySelector(".item-text").innerHTML,t.style.display="block",t.style.top=`${i}px`,t.style.left=`${e.offsetLeft+e.clientWidth+4}px`}},{kind:"method",key:"_hideTooltip",value:function(){this._tooltipHideTimeout||(this._tooltipHideTimeout=window.setTimeout(()=>{this._tooltipHideTimeout=void 0,this._tooltip.style.display="none"},10))}},{kind:"method",key:"_handleShowNotificationDrawer",value:function(){Object(a.a)(this,"hass-show-notifications")}},{kind:"method",key:"_handleExternalAppConfiguration",value:function(e){e.preventDefault(),this.hass.auth.external.fireMessage({type:"config_screen/show"})}},{kind:"method",key:"_toggleSidebar",value:function(){Object(a.a)(this,"hass-toggle-menu")}},{kind:"method",key:"_renderPanel",value:function(e,t,r){return o.f`
      <a
        aria-role="option"
        href="${`/${e}`}"
        data-panel="${e}"
        tabindex="-1"
        @mouseenter=${this._itemMouseEnter}
        @mouseleave=${this._itemMouseLeave}
      >
        <paper-icon-item>
          <ha-icon slot="item-icon" .icon="${t}"></ha-icon>
          <span class="item-text">${r}</span>
        </paper-icon-item>
      </a>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return o.c`
      :host {
        height: 100%;
        display: block;
        overflow: hidden;
        -ms-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        border-right: 1px solid var(--divider-color);
        background-color: var(--sidebar-background-color);
        width: 64px;
      }
      :host([expanded]) {
        width: 256px;
      }

      .menu {
        box-sizing: border-box;
        height: 65px;
        display: flex;
        padding: 0 8.5px;
        border-bottom: 1px solid transparent;
        white-space: nowrap;
        font-weight: 400;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
        font-size: 20px;
        align-items: center;
      }
      :host([expanded]) .menu {
        width: 256px;
      }

      .menu ha-icon-button {
        color: var(--sidebar-icon-color);
      }
      :host([expanded]) .menu ha-icon-button {
        margin-right: 23px;
      }
      :host([expanded][_rtl]) .menu ha-icon-button {
        margin-right: 0px;
        margin-left: 23px;
      }

      .title {
        display: none;
      }
      :host([expanded]) .title {
        display: initial;
      }

      paper-listbox::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
      }

      paper-listbox::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: var(--scrollbar-thumb-color);
      }

      paper-listbox {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: calc(100% - 196px);
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-color: var(--scrollbar-thumb-color) transparent;
        scrollbar-width: thin;
        background: none;
      }

      a {
        text-decoration: none;
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        position: relative;
        display: block;
        outline: 0;
      }

      paper-icon-item {
        box-sizing: border-box;
        margin: 4px 8px;
        padding-left: 12px;
        border-radius: 4px;
        --paper-item-min-height: 40px;
        width: 48px;
      }
      :host([expanded]) paper-icon-item {
        width: 240px;
      }
      :host([_rtl]) paper-icon-item {
        padding-left: auto;
        padding-right: 12px;
      }

      ha-icon[slot="item-icon"],
      ha-svg-icon[slot="item-icon"] {
        color: var(--sidebar-icon-color);
      }

      .iron-selected paper-icon-item::before,
      a:not(.iron-selected):focus::before {
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: "";
        transition: opacity 15ms linear;
        will-change: opacity;
      }
      .iron-selected paper-icon-item::before {
        background-color: var(--sidebar-selected-icon-color);
        opacity: 0.12;
      }
      a:not(.iron-selected):focus::before {
        background-color: currentColor;
        opacity: var(--dark-divider-opacity);
        margin: 4px 8px;
      }
      .iron-selected paper-icon-item:focus::before,
      .iron-selected:focus paper-icon-item::before {
        opacity: 0.2;
      }

      .iron-selected paper-icon-item[pressed]:before {
        opacity: 0.37;
      }

      paper-icon-item span {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
      }

      a.iron-selected paper-icon-item ha-icon,
      a.iron-selected paper-icon-item ha-svg-icon {
        color: var(--sidebar-selected-icon-color);
      }

      a.iron-selected .item-text {
        color: var(--sidebar-selected-text-color);
      }

      paper-icon-item .item-text {
        display: none;
        max-width: calc(100% - 56px);
      }
      :host([expanded]) paper-icon-item .item-text {
        display: block;
      }

      .divider {
        bottom: 112px;
        padding: 10px 0;
      }
      .divider::before {
        content: " ";
        display: block;
        height: 1px;
        background-color: var(--divider-color);
      }
      .notifications-container {
        display: flex;
      }
      .notifications {
        cursor: pointer;
      }
      .notifications .item-text {
        flex: 1;
      }
      .profile {
      }
      .profile paper-icon-item {
        padding-left: 4px;
      }
      :host([_rtl]) .profile paper-icon-item {
        padding-left: auto;
        padding-right: 4px;
      }
      .profile .item-text {
        margin-left: 8px;
      }
      :host([_rtl]) .profile .item-text {
        margin-right: 8px;
      }

      .notification-badge {
        min-width: 20px;
        box-sizing: border-box;
        border-radius: 50%;
        font-weight: 400;
        background-color: var(--accent-color);
        line-height: 20px;
        text-align: center;
        padding: 0px 6px;
        color: var(--text-primary-color);
      }
      ha-svg-icon + .notification-badge {
        position: absolute;
        bottom: 14px;
        left: 26px;
        font-size: 0.65em;
      }

      .spacer {
        flex: 1;
        pointer-events: none;
      }

      .subheader {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        padding: 16px;
        white-space: nowrap;
      }

      .dev-tools {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 8px;
        width: 256px;
        box-sizing: border-box;
      }

      .dev-tools a {
        color: var(--sidebar-icon-color);
      }

      .tooltip {
        display: none;
        position: absolute;
        opacity: 0.9;
        border-radius: 2px;
        white-space: nowrap;
        color: var(--sidebar-background-color);
        background-color: var(--sidebar-text-color);
        padding: 4px;
        font-weight: 500;
      }

      :host([_rtl]) .menu ha-icon-button {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
    `}}]}},o.a);customElements.define("ha-sidebar",T)}}]);
//# sourceMappingURL=chunk.2f428a66a4b0a73f3945.js.map