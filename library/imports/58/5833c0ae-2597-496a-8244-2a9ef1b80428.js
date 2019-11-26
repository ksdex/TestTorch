"use strict";
cc._RF.push(module, '5833cCuJZdJaoJEKp7xuAQo', 'background2');
// script/background2.js

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
var JoystickInfo = require('JoystickBG1');
var tempAngle1;
var operatetype;
cc.Class({
    extends: cc.Component,

    properties: {
        speed: 200,
        joystickInfo: {

            default: null,
            type: JoystickInfo,
            displayName: 'move from'
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabledDrawBoundingBox = false;
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        //注册按钮事件
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.touchingNumber = 0;
        tempAngle1 = this.joystickInfo.publicAngle;
    },

    onCollisionEnter: function onCollisionEnter(other) {
        //var world = self.world;
        // ��ײ����� aabb ��ײ��
        //var aabb = world.aabb;

        // ��һ�μ������ײ����� aabb ��ײ��
        //var preAabb = world.preAabb;
        //var r = world.radius;
        //var point = cc.p(preAabb.x, preAabb.y)
        //cc.log(aabb.x ,aabb.y,preAabb.x,preAabb.y)
        //var offsetX = aabb.x - preAabb.x
        //var offsetY = aabb.y - preAabb.y
        //console.log('y='+offsetY);
        //console.log('y='+offsetX);
        this.touchingNumber++;
        if (this.joystickInfo.publicAngle <= -45 && this.joystickInfo.publicAngle >= -135) {
            this.joystickInfo.flagy = 0; //back
            operatetype = 1;
        } else if (this.joystickInfo.publicAngle <= -135 && this.joystickInfo.publicAngle >= -180 || this.joystickInfo.publicAngle <= 180 && this.joystickInfo.publicAngle >= 135) {
            this.joystickInfo.flagx = 0; //right
            operatetype = 2;
        } else if (this.joystickInfo.publicAngle <= 135 && this.joystickInfo.publicAngle >= 45) {
            this.joystickInfo.flagy = 0; //front
            operatetype = 3;
        } else if (this.joystickInfo.publicAngle >= 0 && this.joystickInfo.publicAngle <= 45 || this.joystickInfo.publicAngle <= 0 && this.joystickInfo.publicAngle >= -45) {
            this.joystickInfo.flagx = 0; //left
            operatetype = 4;
        }
    },

    onCollisionStay: function onCollisionStay(other) {
        if (operatetype == 1) {
            if (this.joystickInfo.publicAngle <= 135 && this.joystickInfo.publicAngle >= 45) this.joystickInfo.flagy = 1;
        } else if (operatetype == 2) {
            if (this.joystickInfo.publicAngle >= 0 && this.joystickInfo.publicAngle <= 45 || this.joystickInfo.publicAngle <= 0 && this.joystickInfo.publicAngle >= -45) this.joystickInfo.flagx = 1;
        } else if (operatetype == 3) {
            if (this.joystickInfo.publicAngle <= -45 && this.joystickInfo.publicAngle >= -135) this.joystickInfo.flagy = 1;
        } else if (operatetype == 4) {
            if (this.joystickInfo.publicAngle <= -135 && this.joystickInfo.publicAngle >= -180 || this.joystickInfo.publicAngle <= 180 && this.joystickInfo.publicAngle >= 135) this.joystickInfo.flagx = 1;
        }
    },

    onCollisionExit: function onCollisionExit() {
        this.touchingNumber--;
        this.joystickInfo.flagx = 1;
        this.joystickInfo.flagy = 1;
    },

    start: function start() {},
    update: function update(dt) {
        if (this.right) {
            this.node.x += this.speed * dt;
        } else if (this.left) {
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