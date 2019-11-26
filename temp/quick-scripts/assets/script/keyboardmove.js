(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/keyboardmove.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8e4ba+apdtH8qD9gSWYPgZh', 'keyboardmove', __filename);
// script/keyboardmove.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0
    },

    onLoad: function onLoad() {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        //注册按钮事件
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
    start: function start() {},
    update: function update(dt) {
        if (this.right) {
            this.node.scaleX = 1;
            this.node.x += this.speed * dt;
        } else if (this.left) {
            this.node.scaleX = -1;
            this.node.x -= this.speed * dt;
        }
        if (this.up) {
            this.node.y += this.speed * dt;
        } else if (this.down) {
            this.node.y -= this.speed * dt;
        }
    },
    onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.right = true;
                break;

            case cc.macro.KEY.d:
                this.left = true;
                break;

            case cc.macro.KEY.s:
                this.up = true;
                break;

            case cc.macro.KEY.w:
                this.down = true;
                break;
        }
    },
    onKeyUp: function onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.right = false;
                break;

            case cc.macro.KEY.d:
                this.left = false;
                break;

            case cc.macro.KEY.s:
                this.up = false;
                break;

            case cc.macro.KEY.w:
                this.down = false;
                break;
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=keyboardmove.js.map
        