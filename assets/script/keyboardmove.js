
cc.Class({
    extends: cc.Component,
 
    properties: {
        speed:0
    },
 
    onLoad () {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        //注册按钮事件
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
     },
    start () {
    },
 
     update (dt) {
         if(this.right)
         {
            this.node.scaleX = 1;
            this.node.x += this.speed*dt;
         }
         else if(this.left)
         {
            this.node.scaleX = -1;
            this.node.x-=this.speed*dt;
         }
        if(this.up)
        {
            this.node.y+=this.speed*dt;
        }
        else if(this.down)
        {
            this.node.y-=this.speed*dt
        }
     },
 
     onKeyDown(event)
     {
        switch(event.keyCode) 
        {      
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
 
     onKeyUp(event)
     {
        switch(event.keyCode)
        {
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