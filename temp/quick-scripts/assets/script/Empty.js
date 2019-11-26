(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Empty.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd9dfagAH0dAsrd+M8LK/HRT', 'Empty', __filename);
// script/Empty.js

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
var JoystickBG = require('JoystickBG1');

var time1 = new Date().valueOf();
var time2 = time1;
var stopMove = 0;

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
        // characterToCal: {
        //     default: null,
        //     type: cc.Node,
        //     displayName: '主角', //use to calculate the distance
        // },
        // _characterWorldPos: 0,
        // _spineWorldPos: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {

        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabledDrawBoundingBox = false;
        this.touchingNumber = 0;
    },

    onCollisionEnter: function onCollisionEnter(other) {
        cc.director.loadScene('GameLose');
    },

    onCollisionStay: function onCollisionStay(other) {
        console.log('on collision stay');
    },

    onCollisionExit: function onCollisionExit() {},

    start: function start() {},
    update: function update(dt) {
        // var myAnimation = this.getComponent(cc.Animation);
        // this._characterWorldPos = this.characterToCal.convertToWorldSpaceAR(this.node.getPosition());
        // this._spineWorldPos = this.node.convertToWorldSpaceAR(this.node.getPosition());
        // cc.log(this._characterWorldPos.y);
        // cc.log('----test----');
        // cc.log(this._spineWorldPos.y);

        // if (Math.abs(this._characterWorldPos.y - this._spineWorldPos.y) < 50) {
        //     time1 = (new Date()).valueOf();
        //     time2 = time1;
        //     while (stopMove == 0) {
        //         time2 = (new Date()).valueOf();
        //         if (time2 - time1 >= 1500) {

        //             myAnimation.play('move');
        //             time1 = (new Date()).valueOf();// animation lasts for 1.5s
        //             time2 = time1;
        //             while (1) {

        //                 time2 = (new Date()).valueOf();
        //                 if (time2 - time1 > 1500) {
        //                     stopMove = 0;
        //                     break;
        //                 }
        //             }
        //         }
        //         else {
        //             time1 = (new Date()).valueOf();
        //         }

        //     }

        // }
        // else {
        //     ;
        // }

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
        //# sourceMappingURL=Empty.js.map
        