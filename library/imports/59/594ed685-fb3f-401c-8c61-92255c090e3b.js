"use strict";
cc._RF.push(module, '594edaF+z9AHIxhkiVcCQ47', 'Key');
// script/Key.js

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
var Ani = require('animationNotFirst');
cc.Class({
    extends: cc.Component,

    properties: {
        ani: {

            default: null,
            type: Ani,
            displayName: 'hero node'
        },
        keyGet: {
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
        if (this.ani._keyflag == 0) this.ani._keyflag = 1;

        cc.audioEngine.play(this.keyGet, false);
        console.log(this.ani._keyflag);
    },

    onCollisionStay: function onCollisionStay(other) {
        this.node.destroy();
    },

    onCollisionExit: function onCollisionExit() {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();