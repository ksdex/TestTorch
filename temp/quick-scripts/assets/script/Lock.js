(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Lock.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ee8fayzn9ROtZLVnClmfi5J', 'Lock', __filename);
// script/Lock.js

'use strict';

var JoystickInfo = require('JoystickBG1');
var tempAngle1;
var Ani = require('animationNotFirst');
cc.Class({
    extends: cc.Component,

    properties: {
        joystickInfo: {

            default: null,
            type: JoystickInfo,
            displayName: 'move from'
        },

        ani: {

            default: null,
            type: Ani,
            displayName: 'hero node'
        },

        unlockAudio: {
            default: null,
            url: cc.AudioClip
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabledDrawBoundingBox = false;
        this.touchingNumber = 0;
    },

    onCollisionEnter: function onCollisionEnter(other) {
        var _this = this;

        var myAnimation = this.getComponent(cc.Animation);
        if (this.ani._keyflag == 0) {
            if (this.joystickInfo.publicAngle >= 0 && this.joystickInfo.publicAngle <= 180) {
                this.joystickInfo.flagy = 0; //left
            }
        } else if (this.ani._keyflag == 1) {
            myAnimation.play('Unlock');
            cc.audioEngine.play(this.unlockAudio, false);
            setTimeout(function () {
                _this.node.destroy();
            }, 1000);
        }
    },

    onCollisionStay: function onCollisionStay(other) {
        if (this.joystickInfo.publicAngle <= 0 && this.joystickInfo.publicAngle >= -180) this.joystickInfo.flagy = 1;
    },

    onCollisionExit: function onCollisionExit() {
        this.touchingNumber--;
        this.joystickInfo.flagx = 1;
        this.joystickInfo.flagy = 1;
    },

    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=Lock.js.map
        