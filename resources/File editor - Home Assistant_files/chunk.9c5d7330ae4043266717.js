/*! For license information please see chunk.9c5d7330ae4043266717.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[2],{136:function(t,n,e){"use strict";e(5),e(53);var i=e(162),o=e(6),a=e(4);Object(o.a)({_template:a.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[i.a],hostAttributes:{role:"listbox"}})},151:function(t,n,e){"use strict";e(5);var i=e(43),o=e(46),a=e(106),r=e(150),s=e(6),l=e(3),c=e(4);Object(s.a)({_template:c.a`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[o.a,i.a,a.a,r.a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=Object(l.a)(this.$.content).getDistributedNodes(),n=0,e=t.length;n<e;n++)if(t[n].nodeType===Node.ELEMENT_NODE)return t[n]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),a.b._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):a.b._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):a.b._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,n=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),e=0;e<n.length;e++)n[e].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():a.b._applyFocus.apply(this,arguments)}});const p={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var n in t.timing)this.animationTiming[n]=t.timing[n];return this.animationTiming},setPrefixedProperty:function(t,n,e){for(var i,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[n],a=0;i=o[a];a++)t.style[i]=e;t.style[n]=e},complete:function(t){}};Object(s.a)({is:"fade-in-animation",behaviors:[p],configure:function(t){var n=t.node;return this._effect=new KeyframeEffect(n,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}}),Object(s.a)({is:"fade-out-animation",behaviors:[p],configure:function(t){var n=t.node;return this._effect=new KeyframeEffect(n,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}});e(53),e(105);Object(s.a)({is:"paper-menu-grow-height-animation",behaviors:[p],configure:function(t){var n=t.node,e=n.getBoundingClientRect().height;return this._effect=new KeyframeEffect(n,[{height:e/2+"px"},{height:e+"px"}],this.timingFromConfig(t)),this._effect}}),Object(s.a)({is:"paper-menu-grow-width-animation",behaviors:[p],configure:function(t){var n=t.node,e=n.getBoundingClientRect().width;return this._effect=new KeyframeEffect(n,[{width:e/2+"px"},{width:e+"px"}],this.timingFromConfig(t)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-width-animation",behaviors:[p],configure:function(t){var n=t.node,e=n.getBoundingClientRect().width;return this._effect=new KeyframeEffect(n,[{width:e+"px"},{width:e-e/20+"px"}],this.timingFromConfig(t)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-height-animation",behaviors:[p],configure:function(t){var n=t.node,e=n.getBoundingClientRect().height;return this.setPrefixedProperty(n,"transformOrigin","0 0"),this._effect=new KeyframeEffect(n,[{height:e+"px",transform:"translateY(0)"},{height:e/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});var d={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const f=Object(s.a)({_template:c.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[i.a,o.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:d.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:d.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:d.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=Object(l.a)(this.$.content).getDistributedNodes(),n=0,e=t.length;n<e;n++)if(t[n].nodeType===Node.ELEMENT_NODE)return t[n]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,n){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=n&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){o.a._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var n=t.detail,e=this.$.trigger;Object(l.a)(n).path.indexOf(e)>-1&&t.preventDefault()}});Object.keys(d).forEach(function(t){f[t]=d[t]})}}]);
//# sourceMappingURL=chunk.9c5d7330ae4043266717.js.map