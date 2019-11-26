(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Stair.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '81446xYxwhEAqgcd2B7xdBg', 'Stair', __filename);
// script/Stair.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var ghostFirst = require("firstGhost");

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        blackShade: {
            default: null,
            type: cc.Node,
            displayName: '黑幕'
        },
        ghost: {
            default: null,
            type: cc.Node,
            displayName: 'Ghost'
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

        var ghostScript = this.ghost.getComponent(ghostFirst);
        var myAnimation = this.blackShade.getComponent(cc.Animation);
        myAnimation.play('TurnBlack');
        ghostScript.ifGhostMove = 0;
        cc.log(this.ghost.ifGhostMove);
        setTimeout(function () {
            cc.director.loadScene('Scene2');
        }, 2000);
    },

    onCollisionStay: function onCollisionStay(other) {
        console.log('on collision stay');
    },

    onCollisionExit: function onCollisionExit() {},

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
        //# sourceMappingURL=Stair.js.map
        