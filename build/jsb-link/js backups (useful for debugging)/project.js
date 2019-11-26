require = function t(i, e, o) {
function n(c, a) {
if (!e[c]) {
if (!i[c]) {
var l = "function" == typeof require && require;
if (!a && l) return l(c, !0);
if (s) return s(c, !0);
var h = new Error("Cannot find module '" + c + "'");
throw h.code = "MODULE_NOT_FOUND", h;
}
var u = e[c] = {
exports: {}
};
i[c][0].call(u.exports, function(t) {
var e = i[c][1][t];
return n(e || t);
}, u, u.exports, t, i, e, o);
}
return e[c].exports;
}
for (var s = "function" == typeof require && require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
Coin: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "06e212TalFFJpxUMQ+UcC/B", "Coin");
cc.Class({
extends: cc.Component,
properties: {
coinGet: {
default: null,
url: cc.AudioClip
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
},
onCollisionEnter: function(t) {
cc.audioEngine.play(this.coinGet, !1);
this.node.destroy();
},
onCollisionStay: function(t) {},
onCollisionExit: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
Downwall: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "fa473O0MDpAEIK8DWtMTxpU", "Downwall");
var o = t("JoystickBG1");
cc.Class({
extends: cc.Component,
properties: {
joystickInfo: {
default: null,
type: o,
displayName: "move from"
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
this.joystickInfo.publicAngle;
},
onCollisionEnter: function(t) {
this.joystickInfo.publicAngle >= -180 && this.joystickInfo.publicAngle <= 0 && (this.joystickInfo.flagy = 0);
},
onCollisionStay: function(t) {
this.joystickInfo.publicAngle <= 180 && this.joystickInfo.publicAngle >= 0 && (this.joystickInfo.flagy = 1);
},
onCollisionExit: function() {
this.touchingNumber--;
this.joystickInfo.flagx = 1;
this.joystickInfo.flagy = 1;
},
start: function() {}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1"
} ],
Empty: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "d9dfagAH0dAsrd+M8LK/HRT", "Empty");
t("JoystickBG1"), new Date().valueOf();
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
},
onCollisionEnter: function(t) {
cc.director.loadScene("GameLose");
},
onCollisionStay: function(t) {
console.log("on collision stay");
},
onCollisionExit: function() {},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1"
} ],
Ghost: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "ded70p8g61CRqgDLmsmH//q", "Ghost");
t("JoystickBG1");
var o, n, s, c, a, l, h = t("animationNotFirst"), u = new Date().valueOf(), r = u;
cc.Class({
extends: cc.Component,
properties: {
_faceAngle: {
default: null,
displayName: "当前面朝方向角度"
},
characterToCal: {
default: null,
type: cc.Node,
displayName: "主角"
},
ghostFindYou: {
default: null,
url: cc.AudioClip
},
dieAudio: {
default: null,
url: cc.AudioClip
},
_ifAudioPlayed: 0,
speedGhost: 1,
speedUpGhost: 4,
ifGhostMove: 1,
_ifDead: 0,
_chaseModeOff: 1
},
onLoad: function() {
this.ifGhostMove = 1;
this._ifDead = 0;
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
this.getComponent(cc.Animation).play("GhostFront");
u = new Date().valueOf();
r = u;
this._faceAngle = 360 * Math.random() - 180;
o = this._faceAngle;
n = this._faceAngle;
n = o = o <= -45 && o >= -135 ? 1 : 0;
},
onCollisionEnter: function(t) {
this.touchingNumber++;
var i = this.getComponent(cc.Animation);
this.ifGhostMove = 0;
r = u;
i.play("Dizzyghostfront");
},
onCollisionStay: function(t) {
console.log("on collision stay");
},
onCollisionExit: function() {
this.touchingNumber--;
0 === this.touchingNumber && (this.node.color = cc.Color.WHITE);
this.getComponent(cc.Animation).play("GhostFront");
this.ifGhostMove = 1;
},
start: function() {},
_allDirectionsMove: function() {
if (this.ifGhostMove) {
this.node.x -= Math.cos(this._faceAngle * (Math.PI / 180)) * this.speedGhost;
this.node.y -= Math.sin(this._faceAngle * (Math.PI / 180)) * this.speedGhost;
}
},
_allDirectionsChasing: function() {
if (this.ifGhostMove) {
this.node.x -= Math.cos(this._faceAngle * (Math.PI / 180)) * this.speedUpGhost;
this.node.y -= Math.sin(this._faceAngle * (Math.PI / 180)) * this.speedUpGhost;
}
},
update: function(t) {
var i = this.characterToCal.getComponent(h), e = this.characterToCal.getComponent(cc.Animation);
s = this.characterToCal.convertToWorldSpaceAR(this.characterToCal.getPosition());
c = this.node.convertToWorldSpaceAR(this.characterToCal.getPosition());
a = Math.atan2(c.y - s.y, c.x - s.x) * (180 / Math.PI);
if ((l = Math.sqrt((c.x - s.x) * (c.x - s.x) + (c.y - s.y) * (c.y - s.y))) < 40 && 0 == this._ifDead) {
e.play("TestDeath");
i.ifDead = 1;
this._ifDead = 1;
cc.audioEngine.play(this.dieAudio, !1);
setTimeout(function() {
cc.director.loadScene("GameLose");
}, 1500);
}
if (l <= 400) {
this._chaseModeOff = 0;
if (0 == this._ifAudioPlayed) {
cc.audioEngine.play(this.ghostFindYou, !1);
this._ifAudioPlayed = 1;
}
} else {
this._chaseModeOff = 1;
this._ifAudioPlayed = 0;
}
if (this.ifGhostMove) {
u = new Date().valueOf();
if (this._chaseModeOff) {
if (u - r >= 1e3) {
this._faceAngle = 360 * Math.random() - 180;
r = u;
}
this._allDirectionsMove();
var d = this.getComponent(cc.Animation);
this._faceAngle <= -45 && this._faceAngle >= -135 ? o = 1 : this._faceAngle <= -135 && this._faceAngle >= -180 || this._faceAngle <= 180 && this._faceAngle >= 135 ? o = 2 : this._faceAngle <= 135 && this._faceAngle >= 45 ? o = 3 : (this._faceAngle >= 0 && this._faceAngle <= 45 || this._faceAngle <= 0 && this._faceAngle >= -45) && (o = 4);
if (o === n) ; else switch (o) {
case 1:
d.play("GhostBack");
n = o;
break;

case 2:
d.play("GhostRight");
n = o;
break;

case 3:
d.play("GhostFront");
n = o;
break;

case 4:
d.play("GhostLeft");
n = o;
}
} else {
this._faceAngle = a;
this._allDirectionsChasing();
d = this.getComponent(cc.Animation);
this._faceAngle <= -45 && this._faceAngle >= -135 ? o = 1 : this._faceAngle <= -135 && this._faceAngle >= -180 || this._faceAngle <= 180 && this._faceAngle >= 135 ? o = 2 : this._faceAngle <= 135 && this._faceAngle >= 45 ? o = 3 : (this._faceAngle >= 0 && this._faceAngle <= 45 || this._faceAngle <= 0 && this._faceAngle >= -45) && (o = 4);
if (o === n) ; else switch (o) {
case 1:
d.play("GhostBack");
n = o;
break;

case 2:
d.play("GhostRight");
n = o;
break;

case 3:
d.play("GhostFront");
n = o;
break;

case 4:
d.play("GhostLeft");
n = o;
}
}
}
}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1",
animationNotFirst: "animationNotFirst"
} ],
Joystick1: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "2ee99VV+tNHUbRkEgdvWxMq", "Joystick1");
var o = t("JoystickCommon"), n = t("JoystickBG1");
cc.Class({
extends: cc.Component,
properties: {
dot: {
default: null,
type: cc.Node,
displayName: "摇杆节点"
},
ring: {
default: null,
type: n,
displayName: "摇杆背景节点"
},
stickX: {
default: 0,
displayName: "摇杆X位置"
},
stickY: {
default: 0,
displayName: "摇杆Y位置"
},
touchType: {
default: o.TouchType.DEFAULT,
type: o.TouchType,
displayName: "触摸类型"
},
directionType: {
default: o.DirectionType.ALL,
type: o.DirectionType,
displayName: "方向类型"
},
sprite: {
default: null,
type: cc.Node,
displayName: "操控的目标"
},
_stickPos: {
default: null,
type: cc.Node,
displayName: "摇杆当前位置"
},
_touchLocation: {
default: null,
type: cc.Node,
displayName: "摇杆当前位置"
}
},
onLoad: function() {
this._createStickSprite();
this.touchType == o.TouchType.FOLLOW && this._initTouchEvent();
},
_createStickSprite: function() {
this.ring.node.setPosition(this.stickX, this.stickY);
this.dot.setPosition(this.stickX, this.stickY);
},
_initTouchEvent: function() {
var t = this;
t.node.on(cc.Node.EventType.TOUCH_START, t._touchStartEvent, t);
t.node.on(cc.Node.EventType.TOUCH_MOVE, t._touchMoveEvent, t);
t.node.on(cc.Node.EventType.TOUCH_END, t._touchEndEvent, t);
t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._touchEndEvent, t);
},
_touchStartEvent: function(t) {
this._touchLocation = t.getLocation();
var i = this.node.convertToNodeSpaceAR(t.getLocation());
this.ring.node.setPosition(i);
this.dot.setPosition(i);
this._stickPos = i;
},
_touchMoveEvent: function(t) {
if (this._touchLocation.x == t.getLocation().x && this._touchLocation.y == t.getLocation().y) return !1;
var i = this.ring.node.convertToNodeSpaceAR(t.getLocation()), e = this.ring._getDistance(i, cc.p(0, 0)), o = this.ring.node.width / 2, n = this._stickPos.x + i.x, s = this._stickPos.y + i.y;
if (o > e) this.dot.setPosition(cc.p(n, s)); else {
var c = this._stickPos.x + Math.cos(this.ring._getRadian(cc.p(n, s))) * o, a = this._stickPos.y + Math.sin(this.ring._getRadian(cc.p(n, s))) * o;
this.dot.setPosition(cc.p(c, a));
}
this.ring._getAngle(cc.p(n, s));
this.ring._setSpeed(cc.p(n, s));
},
_touchEndEvent: function() {
this.dot.setPosition(this.ring.node.getPosition());
this.ring._speed = 0;
}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1",
JoystickCommon: "JoystickCommon"
} ],
Joystick2: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "5d0f9k8BWZETZ5m7rByGiol", "Joystick2");
var o = t("JoystickCommon"), n = t("JoystickBG2");
cc.Class({
extends: cc.Component,
properties: {
dot: {
default: null,
type: cc.Node,
displayName: "摇杆节点"
},
ring: {
default: null,
type: n,
displayName: "摇杆背景节点"
},
stickX: {
default: 0,
displayName: "摇杆X位置"
},
stickY: {
default: 0,
displayName: "摇杆Y位置"
},
touchType: {
default: o.TouchType.DEFAULT,
type: o.TouchType,
displayName: "触摸类型"
},
directionType: {
default: o.DirectionType.ALL,
type: o.DirectionType,
displayName: "方向类型"
},
sprite: {
default: null,
type: cc.Node,
displayName: "操控的目标"
},
_stickPos: {
default: null,
type: cc.Node,
displayName: "摇杆当前位置"
},
_touchLocation: {
default: null,
type: cc.Node,
displayName: "摇杆当前位置"
}
},
onLoad: function() {
this._createStickSprite();
this.touchType == o.TouchType.FOLLOW && this._initTouchEvent();
},
_createStickSprite: function() {
this.ring.node.setPosition(this.stickX, this.stickY);
this.dot.setPosition(this.stickX, this.stickY);
},
_initTouchEvent: function() {
var t = this;
t.node.on(cc.Node.EventType.TOUCH_START, t._touchStartEvent, t);
t.node.on(cc.Node.EventType.TOUCH_MOVE, t._touchMoveEvent, t);
t.node.on(cc.Node.EventType.TOUCH_END, t._touchEndEvent, t);
t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._touchEndEvent, t);
},
_touchStartEvent: function(t) {
this._touchLocation = t.getLocation();
var i = this.node.convertToNodeSpaceAR(t.getLocation());
this.ring.node.setPosition(i);
this.dot.setPosition(i);
this._stickPos = i;
},
_touchMoveEvent: function(t) {
if (this._touchLocation.x == t.getLocation().x && this._touchLocation.y == t.getLocation().y) return !1;
var i = this.ring.node.convertToNodeSpaceAR(t.getLocation()), e = this.ring._getDistance(i, cc.p(0, 0)), o = this.ring.node.width / 2, n = this._stickPos.x + i.x, s = this._stickPos.y + i.y;
if (o > e) this.dot.setPosition(cc.p(n, s)); else {
var c = this._stickPos.x + Math.cos(this.ring._getRadian(cc.p(n, s))) * o, a = this._stickPos.y + Math.sin(this.ring._getRadian(cc.p(n, s))) * o;
this.dot.setPosition(cc.p(c, a));
}
this.ring._getAngle(cc.p(n, s));
this.ring._setSpeed(cc.p(n, s));
},
_touchEndEvent: function() {
this.dot.setPosition(this.ring.node.getPosition());
this.ring._speed = 0;
}
});
cc._RF.pop();
}, {
JoystickBG2: "JoystickBG2",
JoystickCommon: "JoystickCommon"
} ],
JoystickBG1: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "4d2a51fnMNG+5pr7hmohICg", "JoystickBG1");
var o = t("JoystickCommon");
cc.Class({
extends: cc.Component,
properties: {
dot: {
default: null,
type: cc.Node,
displayName: "摇杆节点"
},
publicAngle: {
default: 0,
displayName: "当前角度"
},
flagx: {
default: 1,
displayName: "当前角度"
},
flagy: {
default: 1,
displayName: "当前角度"
},
_joyCom: {
default: null,
displayName: "joy Node"
},
_playerNode: {
default: null,
displayName: "被操作的目标Node"
},
_angle: {
default: null,
displayName: "当前触摸的角度"
},
_radian: {
default: null,
displayName: "弧度"
},
_speed: 0,
_speed1: 1,
_speed2: 2,
_opacity: 0,
_timeStart: 0,
_timeLimit: 0,
_ifMove: 0
},
onLoad: function() {
this._joyCom = this.node.parent.getComponent("Joystick1");
this._playerNode = this._joyCom.sprite;
this._joyCom.touchType == o.TouchType.DEFAULT && this._initTouchEvent();
this._ifMove = 0;
this._timeStart = new Date().valueOf();
this._timeLimit = this._timeStart + 5e3;
},
_initTouchEvent: function() {
var t = this;
t.node.on(cc.Node.EventType.TOUCH_START, this._touchStartEvent, t);
t.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMoveEvent, t);
t.node.on(cc.Node.EventType.TOUCH_END, this._touchEndEvent, t);
t.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEndEvent, t);
},
update: function(t) {
this._timeStart = new Date().valueOf();
switch (this._joyCom.directionType) {
case o.DirectionType.ALL:
this._timeStart >= this._timeLimit && this._allDirectionsMove();
}
},
_allDirectionsMove: function() {
1 == this.flagx && (this._playerNode.x -= Math.cos(this._angle * (Math.PI / 180)) * this._speed * 2);
1 == this.flagy && (this._playerNode.y -= Math.sin(this._angle * (Math.PI / 180)) * this._speed * 2);
},
_getDistance: function(t, i) {
return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
},
_getRadian: function(t) {
this._radian = Math.PI / 180 * this._getAngle(t);
return this._radian;
},
_getAngle: function(t) {
var i = this.node.getPosition();
this._angle = Math.atan2(t.y - i.y, t.x - i.x) * (180 / Math.PI);
this.publicAngle = this._angle;
return this._angle;
},
_setSpeed: function(t) {
this._getDistance(t, this.node.getPosition()) < this._radius ? this._speed = this._speed1 : this._speed = this._speed2;
},
_touchStartEvent: function(t) {
this._ifMove = 1;
var i = this.node.convertToNodeSpaceAR(t.getLocation()), e = this._getDistance(i, cc.p(0, 0)), o = this.node.width / 2;
this._stickPos = i;
var n = this.node.getPosition().x + i.x, s = this.node.getPosition().y + i.y;
if (o > e) {
this.dot.setPosition(cc.p(n, s));
return !0;
}
return !1;
},
_touchMoveEvent: function(t) {
var i = this.node.convertToNodeSpaceAR(t.getLocation()), e = this._getDistance(i, cc.p(0, 0)), o = this.node.width / 2, n = this.node.getPosition().x + i.x, s = this.node.getPosition().y + i.y;
if (o > e) this.dot.setPosition(cc.p(n, s)); else {
var c = this.node.getPosition().x + Math.cos(this._getRadian(cc.p(n, s))) * o, a = this.node.getPosition().y + Math.sin(this._getRadian(cc.p(n, s))) * o;
this.dot.setPosition(cc.p(c, a));
}
this._getAngle(cc.p(n, s));
this._setSpeed(cc.p(n, s));
},
_touchEndEvent: function() {
this.dot.setPosition(this.node.getPosition());
this._speed = 0;
this._ifMove = 0;
}
});
cc._RF.pop();
}, {
JoystickCommon: "JoystickCommon"
} ],
JoystickBG2: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "1de8enjIvVMk5suhC7zNvSi", "JoystickBG2");
var o = t("JoystickCommon");
cc.Class({
extends: cc.Component,
properties: {
dot: {
default: null,
type: cc.Node,
displayName: "摇杆节点"
},
publicAngle: {
default: 0,
displayName: "当前角度"
},
_joyCom: {
default: null,
displayName: "joy Node"
},
_playerNode: {
default: null,
displayName: "被操作的目标Node"
},
_angle: {
default: null,
displayName: "当前触摸的角度"
},
_radian: {
default: null,
displayName: "弧度"
},
_speed: 0,
_speed1: 1,
_speed2: 2,
_opacity: 0,
_timeStart: 0,
_timeLimit: 0
},
onLoad: function() {
this._joyCom = this.node.parent.getComponent("Joystick2");
this._playerNode = this._joyCom.sprite;
this._joyCom.touchType == o.TouchType.DEFAULT && this._initTouchEvent();
this._timeStart = new Date().valueOf();
this._timeLimit = this._timeStart + 5e3;
this._angle = -90;
},
_initTouchEvent: function() {
var t = this;
t.node.on(cc.Node.EventType.TOUCH_START, this._touchStartEvent, t);
t.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMoveEvent, t);
t.node.on(cc.Node.EventType.TOUCH_END, this._touchEndEvent, t);
t.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEndEvent, t);
},
update: function(t) {
this._timeStart = new Date().valueOf();
switch (this._joyCom.directionType) {
case o.DirectionType.ALL:
this._allDirectionsMove();
}
},
_allDirectionsMove: function() {
this._playerNode.rotation = 270 - this._angle;
this.publicAngle = this._angle;
},
_getDistance: function(t, i) {
return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
},
_getRadian: function(t) {
this._radian = Math.PI / 180 * this._getAngle(t);
return this._radian;
},
_getAngle: function(t) {
var i = this.node.getPosition();
this._angle = Math.atan2(t.y - i.y, t.x - i.x) * (180 / Math.PI);
return this._timeStart < this._timeLimit ? 90 : this._angle;
},
_setSpeed: function(t) {
this._getDistance(t, this.node.getPosition()) < this._radius ? this._speed = this._speed1 : this._speed = this._speed2;
},
_touchStartEvent: function(t) {
var i = this.node.convertToNodeSpaceAR(t.getLocation()), e = this._getDistance(i, cc.p(0, 0)), o = this.node.width / 2;
this._stickPos = i;
var n = this.node.getPosition().x + i.x, s = this.node.getPosition().y + i.y;
if (o > e) {
this.dot.setPosition(cc.p(n, s));
return !0;
}
return !1;
},
_touchMoveEvent: function(t) {
var i = this.node.convertToNodeSpaceAR(t.getLocation()), e = this._getDistance(i, cc.p(0, 0)), o = this.node.width / 2, n = this.node.getPosition().x + i.x, s = this.node.getPosition().y + i.y;
if (o > e) this.dot.setPosition(cc.p(n, s)); else {
var c = this.node.getPosition().x + Math.cos(this._getRadian(cc.p(n, s))) * o, a = this.node.getPosition().y + Math.sin(this._getRadian(cc.p(n, s))) * o;
this.dot.setPosition(cc.p(c, a));
}
this._getAngle(cc.p(n, s));
this._setSpeed(cc.p(n, s));
},
_touchEndEvent: function() {
this.dot.setPosition(this.node.getPosition());
this._speed = 0;
}
});
cc._RF.pop();
}, {
JoystickCommon: "JoystickCommon"
} ],
JoystickCommon: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "c1bebBbnuRLd4nH4XkA3sMd", "JoystickCommon");
i.exports = {
TouchType: cc.Enum({
DEFAULT: 0,
FOLLOW: 1
}),
DirectionType: cc.Enum({
FOUR: 4,
EIGHT: 8,
ALL: 0
})
};
cc._RF.pop();
}, {} ],
Key: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "594edaF+z9AHIxhkiVcCQ47", "Key");
var o = t("animationNotFirst");
cc.Class({
extends: cc.Component,
properties: {
ani: {
default: null,
type: o,
displayName: "hero node"
},
keyGet: {
default: null,
url: cc.AudioClip
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
},
onCollisionEnter: function(t) {
0 == this.ani._keyflag && (this.ani._keyflag = 1);
cc.audioEngine.play(this.keyGet, !1);
console.log(this.ani._keyflag);
},
onCollisionStay: function(t) {
this.node.destroy();
},
onCollisionExit: function() {},
start: function() {}
});
cc._RF.pop();
}, {
animationNotFirst: "animationNotFirst"
} ],
Leftwall: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "ea8651noHtDf6URjTwwrpi1", "Leftwall");
var o = t("JoystickBG1");
cc.Class({
extends: cc.Component,
properties: {
joystickInfo: {
default: null,
type: o,
displayName: "move from"
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
this.joystickInfo.publicAngle;
},
onCollisionEnter: function(t) {
(this.joystickInfo.publicAngle >= 90 && this.joystickInfo.publicAngle <= 180 || this.joystickInfo.publicAngle <= -90 && this.joystickInfo.publicAngle >= -180) && (this.joystickInfo.flagx = 0);
},
onCollisionStay: function(t) {
(this.joystickInfo.publicAngle <= 90 && this.joystickInfo.publicAngle >= 0 || this.joystickInfo.publicAngle <= 0 && this.joystickInfo.publicAngle >= -90) && (this.joystickInfo.flagx = 1);
},
onCollisionExit: function() {
this.touchingNumber--;
this.joystickInfo.flagx = 1;
this.joystickInfo.flagy = 1;
},
start: function() {}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1"
} ],
Lock: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "ee8fayzn9ROtZLVnClmfi5J", "Lock");
var o = t("JoystickBG1"), n = t("animationNotFirst");
cc.Class({
extends: cc.Component,
properties: {
joystickInfo: {
default: null,
type: o,
displayName: "move from"
},
ani: {
default: null,
type: n,
displayName: "hero node"
},
unlockAudio: {
default: null,
url: cc.AudioClip
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
},
onCollisionEnter: function(t) {
var i = this, e = this.getComponent(cc.Animation);
if (0 == this.ani._keyflag) this.joystickInfo.publicAngle >= 0 && this.joystickInfo.publicAngle <= 180 && (this.joystickInfo.flagy = 0); else if (1 == this.ani._keyflag) {
e.play("Unlock");
cc.audioEngine.play(this.unlockAudio, !1);
setTimeout(function() {
i.node.destroy();
}, 1e3);
}
},
onCollisionStay: function(t) {
this.joystickInfo.publicAngle <= 0 && this.joystickInfo.publicAngle >= -180 && (this.joystickInfo.flagy = 1);
},
onCollisionExit: function() {
this.touchingNumber--;
this.joystickInfo.flagx = 1;
this.joystickInfo.flagy = 1;
},
start: function() {}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1",
animationNotFirst: "animationNotFirst"
} ],
Restartgamebutton: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "e0357ZxY+lIG5VwUpWUuv/n", "Restartgamebutton");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.on("touchstart", function() {
cc.director.loadScene("TorchBegin");
});
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Rightwall: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "c377diL6G1PN4BnZCGY20Q1", "Rightwall");
var o = t("JoystickBG1");
cc.Class({
extends: cc.Component,
properties: {
joystickInfo: {
default: null,
type: o,
displayName: "move from"
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
this.joystickInfo.publicAngle;
},
onCollisionEnter: function(t) {
(this.joystickInfo.publicAngle >= 0 && this.joystickInfo.publicAngle <= 90 || this.joystickInfo.publicAngle <= 0 && this.joystickInfo.publicAngle >= -90) && (this.joystickInfo.flagx = 0);
},
onCollisionStay: function(t) {
(this.joystickInfo.publicAngle <= 180 && this.joystickInfo.publicAngle >= 90 || this.joystickInfo.publicAngle <= -90 && this.joystickInfo.publicAngle >= -180) && (this.joystickInfo.flagx = 1);
},
onCollisionExit: function() {
this.touchingNumber--;
this.joystickInfo.flagx = 1;
this.joystickInfo.flagy = 1;
},
start: function() {}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1"
} ],
Spine: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "71396/u3G5MtKVxOW8o6HHj", "Spine");
t("JoystickBG1");
cc.Class({
extends: cc.Component,
properties: {
characterToCal: {
default: null,
type: cc.Node,
displayName: "主角"
},
medalAudio: {
default: null,
url: cc.AudioClip
},
_characterWorldPos: 0,
_spineWorldPos: 0,
_stopMove: 0,
_correspondY: 0,
_time1: 0,
_time2: 0
},
onLoad: function() {
this._time1 = new Date().valueOf();
this._time2 = this._time1;
this._characterWorldPos = 0;
this._spineWorldPos = 0;
this._stopMove = 0;
this._correspondY = 0;
cc.log("Successfully load");
},
start: function() {},
update: function(t) {
var i = this.getComponent(cc.Animation);
this._characterWorldPos = this.characterToCal.convertToWorldSpaceAR(this.characterToCal.getPosition());
this._spineWorldPos = this.node.convertToWorldSpaceAR(this.characterToCal.getPosition());
if (Math.abs(this._characterWorldPos.y - this._spineWorldPos.y) < 40 || 1 == this._correspondY) {
0 == this._correspondY && (this._time1 = new Date().valueOf());
this._correspondY = 1;
this._time2 = new Date().valueOf();
if (this._time2 - this._time1 >= 500 && 0 == this._stopMove) {
cc.audioEngine.play(this.medalAudio, !1);
i.play("spine");
this._stopMove = 1;
}
} else this._correspondY = 0;
}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1"
} ],
Stair: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "81446xYxwhEAqgcd2B7xdBg", "Stair");
var o = t("firstGhost");
cc.Class({
extends: cc.Component,
properties: {
blackShade: {
default: null,
type: cc.Node,
displayName: "黑幕"
},
ghost: {
default: null,
type: cc.Node,
displayName: "Ghost"
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
},
onCollisionEnter: function(t) {
var i = this.ghost.getComponent(o);
this.blackShade.getComponent(cc.Animation).play("TurnBlack");
i.ifGhostMove = 0;
cc.log(this.ghost.ifGhostMove);
setTimeout(function() {
cc.director.loadScene("Scene2");
}, 2e3);
},
onCollisionStay: function(t) {
console.log("on collision stay");
},
onCollisionExit: function() {},
start: function() {}
});
cc._RF.pop();
}, {
firstGhost: "firstGhost"
} ],
Startbackground: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "52ba43XtsJEAaQ1yzwX5Knz", "Startbackground");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.getComponent(cc.Animation).play("Startgame");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Startgamebutton: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "0f86d6EKL9FAqYz8W5MJchW", "Startgamebutton");
cc.Class({
extends: cc.Component,
properties: {
BgmOne: {
default: null,
url: cc.AudioClip
}
},
onLoad: function() {
this.node.on("touchstart", function() {
this.getComponent(cc.Animation).play("TurnBlack");
cc.audioEngine.play(this.BgmOne, !0);
setTimeout(function() {
cc.director.loadScene("TorchBegin");
}, 2e3);
}, this);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Trap: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "a99ea04pgFEqbotA/ssjS+h", "Trap");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
},
onCollisionEnter: function(t) {
cc.director.loadScene("GameLose");
},
onCollisionStay: function(t) {},
onCollisionExit: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
Upwall: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "1536c1Dhm9DPqB7IU3LQPQ9", "Upwall");
var o = t("JoystickBG1");
cc.Class({
extends: cc.Component,
properties: {
joystickInfo: {
default: null,
type: o,
displayName: "move from"
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
this.joystickInfo.publicAngle;
},
onCollisionEnter: function(t) {
this.joystickInfo.publicAngle >= 0 && this.joystickInfo.publicAngle <= 180 && (this.joystickInfo.flagy = 0);
},
onCollisionStay: function(t) {
this.joystickInfo.publicAngle <= 0 && this.joystickInfo.publicAngle >= -180 && (this.joystickInfo.flagy = 1);
},
onCollisionExit: function() {
this.touchingNumber--;
this.joystickInfo.flagx = 1;
this.joystickInfo.flagy = 1;
},
start: function() {}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1"
} ],
animationNotFirst: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "73cc0vLvKNJwqyaa/fA8dHK", "animationNotFirst");
var o = t("JoystickBG1"), n = t("JoystickBG2");
cc.Class({
extends: cc.Component,
properties: {
joystickInfo1: {
default: null,
type: o,
displayName: "移动信息来源"
},
joystickInfo2: {
default: null,
type: n,
displayName: "方向信息来源"
},
_keyflag: 0,
walkingAudio: {
default: null,
url: cc.AudioClip
},
_timeStart: 0,
_timeLimit: 0,
_havePlayed: 0,
_tempAngle1: 1,
_tempAngle2: 1,
ifDead: 0
},
onLoad: function() {
this._tempAngle1 = 1;
this._tempAngle2 = this._tempAngle1;
this._timeStart = new Date().valueOf();
this._timeLimit = this._timeStart + 2100;
this._havePlayed = 0;
this.ifDead = 0;
},
update: function(t) {
var i = this.getComponent(cc.Animation);
this._timeStart = new Date().valueOf();
if (this._timeStart < this._timeLimit && 0 == this._havePlayed) {
i.play("TestBack");
i.playAdditive("FirstIn");
cc.audioEngine.play(this.walkingAudio, !1);
this._havePlayed = 1;
} else if (this._timeStart > this._timeLimit && 0 == this.ifDead) {
if (0 == this.joystickInfo1._ifMove) {
this.joystickInfo2.publicAngle <= -45 && this.joystickInfo2.publicAngle >= -135 ? this._tempAngle1 = 1 : this.joystickInfo2.publicAngle <= -135 && this.joystickInfo2.publicAngle >= -180 || this.joystickInfo2.publicAngle <= 180 && this.joystickInfo2.publicAngle >= 135 ? this._tempAngle1 = 2 : this.joystickInfo2.publicAngle <= 135 && this.joystickInfo2.publicAngle >= 45 ? this._tempAngle1 = 3 : (this.joystickInfo2.publicAngle >= 0 && this.joystickInfo2.publicAngle <= 45 || this.joystickInfo2.publicAngle <= 0 && this.joystickInfo2.publicAngle >= -45) && (this._tempAngle1 = 4);
switch (this._tempAngle1) {
case 1:
i.play("TestBack");
cc.log("turnBackOK");
break;

case 2:
i.play("TestRight");
cc.log("turnRightOK");
break;

case 3:
i.play("TestFront");
cc.log("turnFrontOK");
break;

case 4:
i.play("TestLeft");
cc.log("turnLeftOK");
}
} else if (1 == this.joystickInfo1._ifMove) {
this.joystickInfo2.publicAngle <= -45 && this.joystickInfo2.publicAngle >= -135 ? this._tempAngle1 = 1 : this.joystickInfo2.publicAngle <= -135 && this.joystickInfo2.publicAngle >= -180 || this.joystickInfo2.publicAngle <= 180 && this.joystickInfo2.publicAngle >= 135 ? this._tempAngle1 = 2 : this.joystickInfo2.publicAngle <= 135 && this.joystickInfo2.publicAngle >= 45 ? this._tempAngle1 = 3 : (this.joystickInfo2.publicAngle >= 0 && this.joystickInfo2.publicAngle <= 45 || this.joystickInfo2.publicAngle <= 0 && this.joystickInfo2.publicAngle >= -45) && (this._tempAngle1 = 4);
if (this._tempAngle1 === this._tempAngle2) ; else switch (this._tempAngle1) {
case 1:
i.play("TestBack");
this._tempAngle2 = this._tempAngle1;
break;

case 2:
i.play("TestRight");
this._tempAngle2 = this._tempAngle1;
break;

case 3:
i.play("TestFront");
this._tempAngle2 = this._tempAngle1;
break;

case 4:
i.play("TestLeft");
this._tempAngle2 = this._tempAngle1;
}
}
} else cc.log("dfgdsdf");
}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1",
JoystickBG2: "JoystickBG2"
} ],
animation: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "a37a8zqOShNIaXdtPetDO+a", "animation");
var o = t("JoystickBG1"), n = t("JoystickBG2");
cc.Class({
extends: cc.Component,
properties: {
joystickInfo1: {
default: null,
type: o,
displayName: "移动信息来源"
},
joystickInfo2: {
default: null,
type: n,
displayName: "方向信息来源"
},
finalLight: {
default: null,
type: cc.Node,
displayName: "灯光"
},
blackShade: {
default: null,
type: cc.Node,
displayName: "黑幕"
},
guide3: {
default: null,
type: cc.Node,
displayName: "guide3"
},
guide4: {
default: null,
type: cc.Node,
displayName: "guide4"
},
turnHead: {
default: null,
url: cc.AudioClip
},
walkingAudio: {
default: null,
url: cc.AudioClip
},
torchSwitch: {
default: null,
url: cc.AudioClip
},
_timeStart: 0,
_timeLimit: 0,
_havePlayed: 0,
_tempAngle1: 1,
_tempAngle2: 1,
ifDead: 0,
_ifPlayedMusic1: 0,
_ifPlayedMusic2: 0,
_ifPlayedMusic3: 0,
_ifPlayedMusic4: 0,
_ifPlayedMusic5: 0
},
onLoad: function() {
this._tempAngle1 = 1;
this._tempAngle2 = this._tempAngle1;
this._timeStart = new Date().valueOf();
this._timeLimit = this._timeStart + 6e3;
this._havePlayed = 0;
this.blackShade.opacity = 0;
this.finalLight.opacity = 0;
this.guide3.opacity = 0;
this.guide4.opacity = 0;
this.ifDead = 0;
this._ifPlayedMusic1 = 0;
this._ifPlayedMusic2 = 0;
this._ifPlayedMusic3 = 0;
this._ifPlayedMusic4 = 0;
this._ifPlayedMusic5 = 0;
},
update: function(t) {
var i = this.getComponent(cc.Animation);
this._timeStart = new Date().valueOf();
if (this._timeStart < this._timeLimit - 3900 && 0 == this._havePlayed) {
i.play("TestBack");
i.playAdditive("FirstIn");
cc.audioEngine.play(this.walkingAudio, !1);
this._havePlayed = 1;
} else if (this._timeStart > this._timeLimit - 3900 && this._timeStart < this._timeLimit - 2800) {
this.blackShade.opacity = 200;
i.stop();
} else if (this._timeStart > this._timeLimit - 2800 && this._timeStart < this._timeLimit - 2550) {
if (0 == this._ifPlayedMusic1) {
cc.audioEngine.play(this.turnHead, !1);
this._ifPlayedMusic1 = 1;
}
i.play("TestLeft");
} else if (this._timeStart > this._timeLimit - 2550 && this._timeStart < this._timeLimit - 2300) {
if (0 == this._ifPlayedMusic2) {
cc.audioEngine.play(this.turnHead, !1);
this._ifPlayedMusic2 = 1;
}
i.play("TestRight");
} else if (this._timeStart > this._timeLimit - 2300 && this._timeStart < this._timeLimit - 2050) {
if (0 == this._ifPlayedMusic3) {
cc.audioEngine.play(this.turnHead, !1);
this._ifPlayedMusic3 = 1;
}
i.play("TestLeft");
} else if (this._timeStart > this._timeLimit - 2050 && this._timeStart < this._timeLimit - 1600) {
if (0 == this._ifPlayedMusic4) {
cc.audioEngine.play(this.turnHead, !1);
this._ifPlayedMusic4 = 1;
}
i.play("TestRight");
} else if (this._timeStart > this._timeLimit - 1600 && this._timeStart < this._timeLimit - 300) i.play("TestBack"); else if (this._timeStart > this._timeLimit - 300 && this._timeStart < this._timeLimit) {
if (0 == this._ifPlayedMusic5) {
cc.audioEngine.play(this.torchSwitch, !1);
this.blackShade.opacity = 0;
this.finalLight.opacity = 200;
this._ifPlayedMusic5 = 1;
}
} else if (this._timeStart > this._timeLimit && this._timeStart < this._timeLimit + 5e3) {
i.stop();
this.guide3.opacity = 255;
this.guide4.opacity = 255;
} else if (this._timeStart > this._timeLimit + 5e3 && 0 == this.ifDead) {
if (255 == this.guide3.opacity) {
this.guide3.opacity = 0;
this.guide4.opacity = 0;
}
if (0 == this.joystickInfo1._ifMove) {
this.joystickInfo2.publicAngle <= -45 && this.joystickInfo2.publicAngle >= -135 ? this._tempAngle1 = 1 : this.joystickInfo2.publicAngle <= -135 && this.joystickInfo2.publicAngle >= -180 || this.joystickInfo2.publicAngle <= 180 && this.joystickInfo2.publicAngle >= 135 ? this._tempAngle1 = 2 : this.joystickInfo2.publicAngle <= 135 && this.joystickInfo2.publicAngle >= 45 ? this._tempAngle1 = 3 : (this.joystickInfo2.publicAngle >= 0 && this.joystickInfo2.publicAngle <= 45 || this.joystickInfo2.publicAngle <= 0 && this.joystickInfo2.publicAngle >= -45) && (this._tempAngle1 = 4);
switch (this._tempAngle1) {
case 1:
i.play("TestBack");
cc.log("turnBackOK");
break;

case 2:
i.play("TestRight");
cc.log("turnRightOK");
break;

case 3:
i.play("TestFront");
cc.log("turnFrontOK");
break;

case 4:
i.play("TestLeft");
cc.log("turnLeftOK");
}
} else if (1 == this.joystickInfo1._ifMove) {
this.joystickInfo2.publicAngle <= -45 && this.joystickInfo2.publicAngle >= -135 ? this._tempAngle1 = 1 : this.joystickInfo2.publicAngle <= -135 && this.joystickInfo2.publicAngle >= -180 || this.joystickInfo2.publicAngle <= 180 && this.joystickInfo2.publicAngle >= 135 ? this._tempAngle1 = 2 : this.joystickInfo2.publicAngle <= 135 && this.joystickInfo2.publicAngle >= 45 ? this._tempAngle1 = 3 : (this.joystickInfo2.publicAngle >= 0 && this.joystickInfo2.publicAngle <= 45 || this.joystickInfo2.publicAngle <= 0 && this.joystickInfo2.publicAngle >= -45) && (this._tempAngle1 = 4);
if (this._tempAngle1 === this._tempAngle2) ; else switch (this._tempAngle1) {
case 1:
i.play("TestBack");
this._tempAngle2 = this._tempAngle1;
break;

case 2:
i.play("TestRight");
this._tempAngle2 = this._tempAngle1;
break;

case 3:
i.play("TestFront");
this._tempAngle2 = this._tempAngle1;
break;

case 4:
i.play("TestLeft");
this._tempAngle2 = this._tempAngle1;
}
}
}
}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1",
JoystickBG2: "JoystickBG2"
} ],
background2: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "5833cCuJZdJaoJEKp7xuAQo", "background2");
var o, n = t("JoystickBG1");
cc.Class({
extends: cc.Component,
properties: {
joystickInfo: {
default: null,
type: n,
displayName: "move from"
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
this.joystickInfo.publicAngle;
},
onCollisionEnter: function(t) {
this.touchingNumber++;
if (this.joystickInfo.publicAngle <= -45 && this.joystickInfo.publicAngle >= -135) {
this.joystickInfo.flagy = 0;
o = 1;
} else if (this.joystickInfo.publicAngle <= -135 && this.joystickInfo.publicAngle >= -180 || this.joystickInfo.publicAngle <= 180 && this.joystickInfo.publicAngle >= 135) {
this.joystickInfo.flagx = 0;
o = 2;
} else if (this.joystickInfo.publicAngle <= 135 && this.joystickInfo.publicAngle >= 45) {
this.joystickInfo.flagy = 0;
o = 3;
} else if (this.joystickInfo.publicAngle >= 0 && this.joystickInfo.publicAngle <= 45 || this.joystickInfo.publicAngle <= 0 && this.joystickInfo.publicAngle >= -45) {
this.joystickInfo.flagx = 0;
o = 4;
}
},
onCollisionStay: function(t) {
1 == o ? this.joystickInfo.publicAngle <= 135 && this.joystickInfo.publicAngle >= 45 && (this.joystickInfo.flagy = 1) : 2 == o ? (this.joystickInfo.publicAngle >= 0 && this.joystickInfo.publicAngle <= 45 || this.joystickInfo.publicAngle <= 0 && this.joystickInfo.publicAngle >= -45) && (this.joystickInfo.flagx = 1) : 3 == o ? this.joystickInfo.publicAngle <= -45 && this.joystickInfo.publicAngle >= -135 && (this.joystickInfo.flagy = 1) : 4 == o && (this.joystickInfo.publicAngle <= -135 && this.joystickInfo.publicAngle >= -180 || this.joystickInfo.publicAngle <= 180 && this.joystickInfo.publicAngle >= 135) && (this.joystickInfo.flagx = 1);
},
onCollisionExit: function() {
this.touchingNumber--;
this.joystickInfo.flagx = 1;
this.joystickInfo.flagy = 1;
},
start: function() {}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1"
} ],
background: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "4a263Ho1ApAFp/y2MEl3354", "background");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
update: function(t) {
this.node.y > 1500 ? this.node.y = 1500 : this.node.y < -1500 && (this.node.y = -1500);
this.node.y <= 1109 && this.node.y >= -1500 && (this.node.x > 275 ? this.node.x = 275 : this.node.x < -285 && (this.node.x = -285));
if (this.node.y > 1109 && this.node.y <= 1500) {
this.node.x > 400 && (this.node.x = 400);
this.node.x < -411 && (this.node.x = -411);
this.node.x <= -285 && this.node.x >= -411 && this.node.y < 1109 && (this.node.y = 1109);
this.node.x >= 275 && this.node.x <= 400 && this.node.y < 1109 && (this.node.y = 1109);
}
}
});
cc._RF.pop();
}, {} ],
firstGhost: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "2a342jIqnxGgoAMl8SFw7Cx", "firstGhost");
t("JoystickBG1");
var o, n, s, c, a, l, h = t("animation"), u = new Date().valueOf(), r = u, d = 1;
cc.Class({
extends: cc.Component,
properties: {
_faceAngle: {
default: null,
displayName: "当前面朝方向角度"
},
characterToCal: {
default: null,
type: cc.Node,
displayName: "主角"
},
dieAudio: {
default: null,
url: cc.AudioClip
},
ghostFindYou: {
default: null,
url: cc.AudioClip
},
_ifAudioPlayed: 0,
speedGhost: 1,
speedUpGhost: 4,
ifGhostMove: 0,
_ifDead: 0
},
onLoad: function() {
this.ifGhostMove = 0;
this._ifDead = 0;
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
this.getComponent(cc.Animation).play("GhostFront");
u = new Date().valueOf();
r = u;
this._faceAngle = 360 * Math.random() - 180;
o = this._faceAngle;
n = this._faceAngle;
n = o = o <= -45 && o >= -135 ? 1 : 0;
},
onCollisionEnter: function(t) {
this.touchingNumber++;
var i = this.getComponent(cc.Animation);
this.ifGhostMove = 0;
r = u;
i.play("Dizzyghostfront");
},
onCollisionStay: function(t) {
console.log("on collision stay");
},
onCollisionExit: function() {
this.touchingNumber--;
0 === this.touchingNumber && (this.node.color = cc.Color.WHITE);
this.getComponent(cc.Animation).play("GhostFront");
this.ifGhostMove = 1;
},
start: function() {},
_allDirectionsMove: function() {
if (this.ifGhostMove) {
this.node.x -= Math.cos(this._faceAngle * (Math.PI / 180)) * this.speedGhost;
this.node.y -= Math.sin(this._faceAngle * (Math.PI / 180)) * this.speedGhost;
}
},
_allDirectionsChasing: function() {
if (this.ifGhostMove) {
this.node.x -= Math.cos(this._faceAngle * (Math.PI / 180)) * this.speedUpGhost;
this.node.y -= Math.sin(this._faceAngle * (Math.PI / 180)) * this.speedUpGhost;
}
},
update: function(t) {
var i = this.characterToCal.getComponent(cc.Animation), e = this.characterToCal.getComponent(h);
cc.log(this.ifGhostMove);
s = this.characterToCal.convertToWorldSpaceAR(this.characterToCal.getPosition());
c = this.node.convertToWorldSpaceAR(this.characterToCal.getPosition());
a = Math.atan2(c.y - s.y, c.x - s.x) * (180 / Math.PI);
if ((l = Math.sqrt((c.x - s.x) * (c.x - s.x) + (c.y - s.y) * (c.y - s.y))) < 40 && 0 == this._ifDead) {
i.play("TestDeath");
e.ifDead = 1;
this._ifDead = 1;
cc.audioEngine.play(this.dieAudio, !1);
setTimeout(function() {
cc.director.loadScene("GameLose");
}, 1500);
}
if (l <= 400) {
d = 0;
if (0 == this._ifAudioPlayed) {
cc.audioEngine.play(this.ghostFindYou, !1);
this._ifAudioPlayed = 1;
}
} else {
d = 1;
this._ifAudioPlayed = 0;
}
if (this.ifGhostMove) {
u = new Date().valueOf();
if (d) {
if (u - r >= 1e3) {
this._faceAngle = 360 * Math.random() - 180;
r = u;
}
this._allDirectionsMove();
var p = this.getComponent(cc.Animation);
this._faceAngle <= -45 && this._faceAngle >= -135 ? o = 1 : this._faceAngle <= -135 && this._faceAngle >= -180 || this._faceAngle <= 180 && this._faceAngle >= 135 ? o = 2 : this._faceAngle <= 135 && this._faceAngle >= 45 ? o = 3 : (this._faceAngle >= 0 && this._faceAngle <= 45 || this._faceAngle <= 0 && this._faceAngle >= -45) && (o = 4);
if (o === n) ; else switch (o) {
case 1:
p.play("GhostBack");
n = o;
break;

case 2:
p.play("GhostRight");
n = o;
break;

case 3:
p.play("GhostFront");
n = o;
break;

case 4:
p.play("GhostLeft");
n = o;
}
} else {
this._faceAngle = a;
this._allDirectionsChasing();
p = this.getComponent(cc.Animation);
this._faceAngle <= -45 && this._faceAngle >= -135 ? o = 1 : this._faceAngle <= -135 && this._faceAngle >= -180 || this._faceAngle <= 180 && this._faceAngle >= 135 ? o = 2 : this._faceAngle <= 135 && this._faceAngle >= 45 ? o = 3 : (this._faceAngle >= 0 && this._faceAngle <= 45 || this._faceAngle <= 0 && this._faceAngle >= -45) && (o = 4);
if (o === n) ; else switch (o) {
case 1:
p.play("GhostBack");
n = o;
break;

case 2:
p.play("GhostRight");
n = o;
break;

case 3:
p.play("GhostFront");
n = o;
break;

case 4:
p.play("GhostLeft");
n = o;
}
}
}
}
});
cc._RF.pop();
}, {
JoystickBG1: "JoystickBG1",
animation: "animation"
} ],
gameWin: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "ae6bbBSGuNBrr+RZxfvxN3C", "gameWin");
cc.Class({
extends: cc.Component,
properties: {
blackShade: {
default: null,
type: cc.Node,
displayName: "黑幕"
},
BgmWin: {
default: null,
url: cc.AudioClip
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
cc.director.getCollisionManager().enabledDrawBoundingBox = !1;
this.touchingNumber = 0;
},
onCollisionEnter: function(t) {
this.blackShade.getComponent(cc.Animation).play("TurnBlack");
cc.audioEngine.play(this.BgmWin, !1);
setTimeout(function() {
cc.director.loadScene("GameWin");
}, 2e3);
},
onCollisionStay: function(t) {
console.log("on collision stay");
},
onCollisionExit: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Coin", "Downwall", "Empty", "Ghost", "Joystick1", "Joystick2", "JoystickBG1", "JoystickBG2", "JoystickCommon", "Key", "Leftwall", "Lock", "Restartgamebutton", "Rightwall", "Spine", "Stair", "Startbackground", "Startgamebutton", "Trap", "Upwall", "animation", "animationNotFirst", "background", "background2", "firstGhost", "gameWin" ]);