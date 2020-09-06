
class Player {
	constructor(i,j,arr){
		this.sprite =createSprite((i+1)*gb,(j+1)*gb,gb*0.5,gb*0.5); 
		this.sprite.shapeColor = "green"
		this.sprite.setCollider("rectangle",0,0,gb/6,gb/4)
		this.image_idle=loadImage("Images/player/manBlue_stand.png")
        this.image_moving =loadImage("Images/player/manBlue_hold.png")
		this.sprite.addImage("idle",this.image_idle)
		this.sprite.addImage("move",this.image_moving)
        this.sprite.mass=2
		this.sprite.scale=1
		if(window.innerWidth<window.innerHeight)this.sprite.scale=1.75

		this.target={x:this.sprite.x,y:this.sprite.y,r:this.sprite.rotation}
		this.arr=arr
		this.idx=0
		this.health=10
		this.i=int((1/gb)*this.sprite.y -1)
		this.j=int((1/gb)*this.sprite.x -1)
		this.pth=[[1,14],[1,13],[1,12],
				 [1,11],[2,11],[3,11],
				 [3,10],[3,9],[3,8],
				 [3,7],[4,7],[5,7],
				 [6,7],[6,8],[6,9],[5,9],
				 [5,10],[5,11],[4,11],
				 [4,12],[4,13],[5,13],
				 [5,14],[5,15],

				]
			console.log(this.i,this.j)
				//this.pth=level.path(this.arr,{i:this.i,j:this.j},{i:9,j:5})
				this.pth=[]
				console.log(this.pth)
		this.lockedTarget;
		this.lastFound={time:0,i:this.i,j:this.j}
	}
	display(){
		//drawSprites();
		this.i=int((1/gb)*this.sprite.y -1)
		this.j=int((1/gb)*this.sprite.x -1)
		this.sprite.tint= rgb(255,map(this.health,0,10,0,255,true),map(this.health,0,10,0,255,true))
	//	this.sprite.tint= rgb(255,256,256)
        
		 this.move()
		// console.log(this.sprite.x)
		 this.sprite.x=int(this.sprite.x)
		 this.sprite.y=int(this.sprite.y)
		//console.log(this.i,this.j)
		//replace pth with pathfinder result
		 this.drawPath()
		 if(this.lockedTarget!=null){
			 var lt=this.lockedTarget
			 if(this.pth.length>1){
			 if(this.pth[this.pth.length-1][0]!=lt.i&&this.pth[this.pth.length-1][1]!=lt.j){
				 console.log("add")
				 this.pth=level.path(this.arr,{i:this.i,j:this.j},{i:lt.i,j:lt.j})
				 click.i=lt.i;click.j=lt.j
			 }
		 }
		 }
		// click.i=0
	}
	move(){
		var pth=this.pth,idx=this.idx
		if(pth){
			if(idx<pth.length){
				this.moveTo(pth[0][0],pth[0][1])
		   }
		   else{this.idx;}
		   }
	   
		   var t=this.target;var s =this.sprite;var speed=int(gb/4)
	   //console.log(gi(s.x,s.y),gi(t.x,t.y))
	   //var gs=gi(s.x,s.y),gt=gi(t.x,t.y)
	  // this.cone(s.x,s.y,s.rotation)
		   s.setVelocity(0,0)
		   if(t.x>s.x){s.velocity.x=speed;}
		   else if(t.x<s.x){s.velocity.x=-speed;}
		   else if(t.y>s.y){s.velocity.y=speed;}
		   else if(t.y<s.y){s.velocity.y=-speed;}
		   if(t.x==s.x&&t.y==s.y&&idx<pth.length){this.pth.shift();}
		   s.changeImage("move")
		   var h=s.velocity.heading();
		   if(s.velocity.x==0&&s.velocity.y==0){
			  // s.scale=map(noise(frameCount%200),0,1,1.5,2);
			   h-=90
			   s.changeImage("idle")
			}
		   if(s.rotation-h>180)h=360+h
		   if(s.rotation>h){
		  s.rotation-=10
		}   else if(s.rotation<h){
		   s.rotation+=10
		}
		if(s.rotation==360)s.rotation=0
		//console.log("rotation: "+s.rotation,"heading: "+s.velocity.heading(),"idx:"+this.idx)
		   this.sprite=s;
		 
	}
	cone(x,y,a){		
		//var gs={x:int(((1/gb)*x)-1),
		//		y:int(((1/gb)*y)-1)}
		//console.log("gs: ",gs)
		//var result=getNeighbor(this.arr,gs.x-1,gs.y-1)
		//console.log(result) 
		push()
		translate(x,y)
		rotate(a)
		//console.log(get(x+gb, y))
		fill(255,100)
		noStroke();
		arc(0, 0, gb*4, gb*3, -45,45, PIE);
		pop()
	}
	moveTo(i,j){
	  this.target.x=(i+1)*gb
	  this.target.y=(j+1)*gb
	}
	drawPath(){
		push()
		stroke(255,223,0)
		scale(gb)
		strokeWeight(0.1)
		noFill();
		if(this.pth.length>1)
		{beginShape()
		
        // this.pth.forEach(e=>{
        //    curveVertex(e[0]+1, e[1]+1)
		// })
		curveVertex(this.pth[0][0], this.pth[0][1])

		for (let i = 0; i < this.pth.length; i++) {
			const e = this.pth[i];
			curveVertex(e[0]+1, e[1]+1)
		}
		curveVertex(this.pth[this.pth.length-1][0], this.pth[this.pth.length-1][1])
		endShape()
		if(this.pth.length<2)return
		   var a={x:this.pth[this.pth.length-1][0],y: this.pth[this.pth.length-1][1]}
		   var b={x:this.pth[this.pth.length-2][0],y: this.pth[this.pth.length-2][1]}
		   if(this.lockedTarget!=null){
			   b.x=this.lockedTarget.i;b.y=this.lockedTarget.j
		   }
		  
	
		 pop()}
	}
	moveToPos(x=camera.mouseX,y=camera.mouseY){
		x=(camera.x-width/2)+mouseX
		y=(camera.y-height/2)+mouseY
	    x+=gb/2;y+=gb/2
		var i=int((1/gb)*y -1)
	
		var j=int((1/gb)*x -1)
		if(i>this.arr.length)return
		if(j>this.arr[0].length)return
		this.pth=level.path(this.arr,{i:this.i,j:this.j},{i:i,j:j})
	   this.idx=0
	   console.log(i,j)
	   fill(255)
	   click.i=i;click.j=j
	   this.lockedTarget=null
	   for (let p = 0; p < parr.length; p++) {
	   if( parr[p].i== i&&parr[p].j== j){
		player.setTarget(parr[p])
		console.log("target Locked")
	   }
	  
	 }
	}
	setTarget(sprite){
		//x+=gb/2;y+=gb/2
		this.lockedTarget=sprite
		var i=sprite.i
	
		var j=sprite.j
		if(i>this.arr.length)return
		if(j>this.arr[0].length)return
		this.pth=level.path(this.arr,{i:this.i,j:this.j},{i:i,j:j})
	   this.idx=0
	   console.log(i,j)
	   fill(255)
	   click.i=i;click.j=j
	}
	found(){
		this.lastFound.time=frameCount
		this.lastFound.i=this.i
		this.lastFound.j=this.j
	}
}

function drawArrow(base, vec, myColor=rgb(255,223,0)) {
	push();
	stroke(myColor);
	strokeWeight(gb);
	fill(myColor);
	scale(1/gb)
	translate(base.x, base.y);
	line(0, 0, vec.x, vec.y);
	rotate(vec.heading());
	let arrowSize = 1;
	translate(vec.mag() - arrowSize, 0);
	triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
	pop();
  }

