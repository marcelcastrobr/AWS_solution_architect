/*! For license information please see chunk.ffd4209a7a890c42b797.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[89],{273:function(e,t,i){"use strict";var r=i(1),o=i(0),a=i(115),n=i(52);class c extends o.a{constructor(){super(...arguments),this.mini=!1,this.exited=!1,this.disabled=!1,this.extended=!1,this.showIconAtEnd=!1,this.icon="",this.label=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}render(){const e={"mdc-fab--mini":this.mini,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended,"icon-end":this.showIconAtEnd},t=""!==this.label&&this.extended;let i="";this.icon&&(i=o.f`
        <span class="material-icons mdc-fab__icon">${this.icon}</span>`);let r=o.f``;return t&&(r=o.f`<span class="mdc-fab__label">${this.label}</span>`),o.f`
      <button
          class="mdc-fab ${Object(n.a)(e)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          .ripple="${Object(a.a)()}">
        <div class="mdc-fab__ripple"></div>
        ${this.showIconAtEnd?r:""}
        <slot name="icon">
          ${i}
        </slot>
        ${this.showIconAtEnd?"":r}
      </button>`}}Object(r.b)([Object(o.h)({type:Boolean})],c.prototype,"mini",void 0),Object(r.b)([Object(o.h)({type:Boolean})],c.prototype,"exited",void 0),Object(r.b)([Object(o.h)({type:Boolean})],c.prototype,"disabled",void 0),Object(r.b)([Object(o.h)({type:Boolean})],c.prototype,"extended",void 0),Object(r.b)([Object(o.h)({type:Boolean})],c.prototype,"showIconAtEnd",void 0),Object(r.b)([Object(o.h)()],c.prototype,"icon",void 0),Object(r.b)([Object(o.h)()],c.prototype,"label",void 0);const d=o.c`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-fab{position:relative;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12);display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover,.mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding:0 20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:-8px}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:-8px}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:-8px;margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;right:0;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:""}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-fab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-fab .mdc-fab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded .mdc-fab__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation .mdc-fab__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation .mdc-fab__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab:hover .mdc-fab__ripple::before{opacity:.08}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__ripple::before,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__ripple::before{transition-duration:75ms;opacity:.24}.mdc-fab:not(.mdc-ripple-upgraded) .mdc-fab__ripple::after{transition:opacity 150ms linear}.mdc-fab:not(.mdc-ripple-upgraded):active .mdc-fab__ripple::after{transition-duration:75ms;opacity:.24}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-fab .mdc-fab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}:host{outline:none}.mdc-fab{box-shadow:var(--mdc-fab-box-shadow, 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12))}.mdc-fab:hover,.mdc-fab:focus{box-shadow:var(--mdc-fab-box-shadow-hover, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-fab:active{box-shadow:var(--mdc-fab-box-shadow-active, 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12))}.mdc-fab ::slotted([slot=icon]){transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform;display:inline-flex;align-items:center;justify-content:center}.mdc-fab ::slotted([slot=icon]) .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab.mdc-fab--extended ::slotted([slot=icon]){margin-left:-8px;margin-right:12px}[dir=rtl] .mdc-fab.mdc-fab--extended ::slotted([slot=icon]),.mdc-fab.mdc-fab--extended ::slotted([slot=icon])[dir=rtl]{margin-left:12px;margin-right:-8px}.mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon,.mdc-fab.mdc-fab--extended.icon-end ::slotted([slot=icon]){margin-left:12px;margin-right:-8px}[dir=rtl] .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon,.mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon[dir=rtl],[dir=rtl] .mdc-fab.mdc-fab--extended.icon-end ::slotted([slot=icon]),.mdc-fab.mdc-fab--extended.icon-end ::slotted([slot=icon])[dir=rtl]{margin-left:-8px;margin-right:12px}.mdc-fab.mdc-fab--exited ::slotted([slot=icon]){transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}`;let s=class extends c{};s.styles=d,s=Object(r.b)([Object(o.d)("mwc-fab")],s)},823:function(e,t,i){"use strict";i.r(t);i(273),i(103),i(135),i(136),i(151);var r=i(0),o=i(445),a=i(12);let n=!1;const c=(e,t)=>{n||(n=!0,(e=>Object(a.a)(e,"register-dialog",{dialogShowEvent:"show-move-card-view",dialogTag:"hui-dialog-move-card-view",dialogImport:()=>Promise.all([i.e(20),i.e(66)]).then(i.bind(null,805))}))(e)),Object(a.a)(e,"show-move-card-view",t)};var d=i(362),s=i(217),l=i(56);const p=(e,t,i)=>{const r={message:t.localize("ui.common.successfully_deleted")};i&&(r.action={action:i,text:t.localize("ui.common.undo")}),Object(l.a)(e,r)},f=()=>i.e(62).then(i.bind(null,806)),m=(e,t)=>{Object(a.a)(e,"show-dialog",{dialogTag:"hui-dialog-delete-card",dialogImport:f,dialogParams:t})};var b=i(353);function h(e){var t,i=y(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function u(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function g(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function x(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var o=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(r){t.forEach(function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var a="static"===o?e:i;this.defineClassElement(a,t)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,o)},this),e.forEach(function(e){if(!g(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)},this),!t)return{elements:i,finishers:r};var a=this.decorateConstructor(i,t);return r.push.apply(r,a.finishers),a.finishers=r,a},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,a=o.length-1;a>=0;a--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var c=this.fromElementDescriptor(e),d=this.toElementFinisherExtras((0,o[a])(c)||c);e=d.element,this.addElementPlacement(e,t),d.finisher&&r.push(d.finisher);var s=d.extras;if(s){for(var l=0;l<s.length;l++)this.addElementPlacement(s[l],t);i.push.apply(i,s)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==a.finisher&&i.push(a.finisher),void 0!==a.elements){e=a.elements;for(var n=0;n<e.length-1;n++)for(var c=n+1;c<e.length;c++)if(e[n].key===e[c].key&&e[n].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?w(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=y(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=x(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=x(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(r)for(var a=0;a<r.length;a++)o=r[a](o);var n=t(function(e){o.initializeInstanceElements(e,c.elements)},i),c=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},r=0;r<e.length;r++){var o,a=e[r];if("method"===a.kind&&(o=t.find(i)))if(v(a.descriptor)||v(o.descriptor)){if(g(a)||g(o))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");o.descriptor=a.descriptor}else{if(g(a)){if(g(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");o.decorators=a.decorators}u(a,o)}else t.push(a)}return t}(n.d.map(h)),e);o.initializeClassElements(n.F,c.elements),o.runClassFinishers(n.F,c.finishers)}([Object(r.d)("hui-card-options")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(r.h)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(r.h)()],key:"lovelace",value:void 0},{kind:"field",decorators:[Object(r.h)()],key:"path",value:void 0},{kind:"field",decorators:[Object(r.k)()],key:"_assignedNodes",value:void 0},{kind:"method",key:"getCardSize",value:function(){return this._assignedNodes?Object(b.a)(this._assignedNodes[0]):1}},{kind:"method",key:"render",value:function(){return r.f`
      <slot></slot>
      <ha-card>
        <div class="options">
          <div class="primary-actions">
            <mwc-button @click=${this._editCard}
              >${this.hass.localize("ui.panel.lovelace.editor.edit_card.edit")}</mwc-button
            >
          </div>
          <div class="secondary-actions">
            <ha-icon-button
              title="Move card down"
              class="move-arrow"
              icon="hass:arrow-down"
              @click=${this._cardDown}
              ?disabled=${this.lovelace.config.views[this.path[0]].cards.length===this.path[1]+1}
            ></ha-icon-button>
            <ha-icon-button
              title="Move card up"
              class="move-arrow"
              icon="hass:arrow-up"
              @click=${this._cardUp}
              ?disabled=${0===this.path[1]}
            ></ha-icon-button>
            <paper-menu-button
              horizontal-align="right"
              vertical-align="bottom"
              vertical-offset="40"
              close-on-activate
            >
              <ha-icon-button
                icon="hass:dots-vertical"
                slot="dropdown-trigger"
                aria-label=${this.hass.localize("ui.panel.lovelace.editor.edit_card.options")}
              ></ha-icon-button>
              <paper-listbox slot="dropdown-content">
                <paper-item @tap=${this._moveCard}>
                  ${this.hass.localize("ui.panel.lovelace.editor.edit_card.move")}</paper-item
                >
                <paper-item @tap=${this._duplicateCard}
                  >${this.hass.localize("ui.panel.lovelace.editor.edit_card.duplicate")}</paper-item
                >
                <paper-item class="delete-item" @tap=${this._deleteCard}>
                  ${this.hass.localize("ui.panel.lovelace.editor.edit_card.delete")}</paper-item
                >
              </paper-listbox>
            </paper-menu-button>
          </div>
        </div>
      </ha-card>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return r.c`
      :host(:hover) {
        overflow: hidden;
        outline: 2px solid var(--primary-color);
      }

      ha-card {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 5px -4px,
          rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
      }

      div.options {
        border-top: 1px solid #e8e8e8;
        padding: 5px 8px;
        display: flex;
        margin-top: -1px;
      }

      div.options .primary-actions {
        flex: 1;
        margin: auto;
      }

      div.options .secondary-actions {
        flex: 4;
        text-align: right;
      }

      ha-icon-button {
        color: var(--primary-text-color);
      }

      ha-icon-button.move-arrow[disabled] {
        color: var(--disabled-text-color);
      }

      paper-menu-button {
        color: var(--secondary-text-color);
        padding: 0;
      }

      paper-listbox {
        padding: 0;
      }

      paper-item.header {
        color: var(--primary-text-color);
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
      }

      paper-item {
        cursor: pointer;
        white-space: nowrap;
      }

      paper-item.delete-item {
        color: var(--error-color);
      }
    `}},{kind:"method",key:"_duplicateCard",value:function(){const e=this.path,t=this.lovelace.config.views[e[0]].cards[e[1]];Object(o.a)(this,{lovelaceConfig:this.lovelace.config,cardConfig:t,saveConfig:this.lovelace.saveConfig,path:[e[0]]})}},{kind:"method",key:"_editCard",value:function(){Object(o.a)(this,{lovelaceConfig:this.lovelace.config,saveConfig:this.lovelace.saveConfig,path:this.path})}},{kind:"method",key:"_cardUp",value:function(){const e=this.lovelace,t=this.path;e.saveConfig(Object(d.j)(e.config,t,[t[0],t[1]-1]))}},{kind:"method",key:"_cardDown",value:function(){const e=this.lovelace,t=this.path;e.saveConfig(Object(d.j)(e.config,t,[t[0],t[1]+1]))}},{kind:"method",key:"_moveCard",value:function(){c(this,{path:this.path,lovelace:this.lovelace})}},{kind:"method",key:"_deleteCard",value:function(){!async function(e,t,i,r){const o=i.config.views[r[0]].cards[r[1]];m(e,{cardConfig:o,deleteCard:async()=>{try{const n=Object(d.d)(i.config,r);await i.saveConfig(n),p(e,t,async()=>{await i.saveConfig(Object(d.f)(n,r,o))})}catch(a){Object(s.a)(e,{text:`Deleting failed: ${a.message}`})}}})}(this,this.hass,this.lovelace,this.path)}}]}},r.a)}}]);
//# sourceMappingURL=chunk.ffd4209a7a890c42b797.js.map