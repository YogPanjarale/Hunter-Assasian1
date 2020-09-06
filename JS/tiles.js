class tiles { 
    constructor(){ 
        this.gapBetween=gb;
        this.brick_img=loadImage("Images/brick.png")
        this.brick2_img=loadImage("Images/brick2.png")
        this.dirt_img=loadImage("Images/6152.png")
        this.wood_img=loadImage("Images/wood.png")
        this.stone_img=loadImage("Images/stone.png")

    }
    ground1(x,y,n){
        push()
        fill("#C2C2C270")
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.dirt_img,x, y,this.gapBetween*1,this.gapBetween*1)

        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.05)
        stroke(100,200)
        translate(x,y)
        scale(0.75)
        strokeWeight(int(gb/20))
      // rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
      if(n){
          var gap=2
        if(n.t==0)line(-gb/gap, -gb/gap,gb/gap ,-gb/gap)
        if(n.b==0)line(-gb/gap, gb/gap,gb/gap ,gb/gap)
        if(n.l==0)line(-gb/gap, -gb/gap,-gb/gap ,gb/gap)
        if(n.r==0)line(gb/gap, -gb/gap,gb/gap ,gb/gap)
      }
        pop()
    }
    ground2(x,y,n){
        push()
        fill("#E6822260")
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.dirt_img,x, y,this.gapBetween*1,this.gapBetween*1)

        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.05)
        stroke("#636350")
        translate(x,y)
        scale(0.83)
        strokeWeight(int(gb/20))
      // rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
      if(n){
          var gap=2
        if(n.t==0)line(-gb/gap, -gb/gap,gb/gap ,-gb/gap)
        if(n.b==0)line(-gb/gap, gb/gap,gb/gap ,gb/gap)
        if(n.l==0)line(-gb/gap, -gb/gap,-gb/gap ,gb/gap)
        if(n.r==0)line(gb/gap, -gb/gap,gb/gap ,gb/gap)
      }
        pop()
    }
    wall1(x,y,n,noi=false){
        push()
        fill("#9D9D9D30")
        rectMode(CENTER);
        imageMode(CENTER)
        image(this.brick2_img,x, y,this.gapBetween*1,this.gapBetween*1)

        //image(this.stone_img,x, y,this.gapBetween*1,this.gapBetween*1)
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        translate(x,y)
      //  rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
        if(n){
          if(n.t==0)line(-gb/2, -gb/2,gb/2 ,-gb/2)
          if(n.b==0)line(-gb/2, gb/2,gb/2 ,gb/2)
          if(n.l==0)line(-gb/2, -gb/2,-gb/2 ,gb/2)
          if(n.r==0)line(gb/2, -gb/2,gb/2 ,gb/2)
        }
        if(noi){ 
            stroke(0,100)
            strokeWeight(3)
            for (let i = 0; i <10;i++){
          //  point(gb*0.2+1*gb, gb*0.3)
            }
        }
        pop()
    }
    wall2(x,y,n){
        push()
        fill("#915C1650")
        rectMode(CENTER);
        imageMode(CENTER)
        image(this.wood_img,x, y,this.gapBetween*1,this.gapBetween*1)
       
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        translate(x,y)
        //  rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
          if(n){
            if(n.t==0)line(-gb/2, -gb/2,gb/2 ,-gb/2)
            if(n.b==0)line(-gb/2, gb/2,gb/2 ,gb/2)
            if(n.l==0)line(-gb/2, -gb/2,-gb/2 ,gb/2)
            if(n.r==0)line(gb/2, -gb/2,gb/2 ,gb/2)
          }        pop()
    }
    wall3(x,y,n){
        push()
        fill("#F54F0A90")
        rectMode(CENTER);
        imageMode(CENTER)
        image(this.wood_img,x, y,this.gapBetween*1,this.gapBetween*1)
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        translate(x,y)
        //  rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
          if(n){
            if(n.t==0)line(-gb/2, -gb/2,gb/2 ,-gb/2)
            if(n.b==0)line(-gb/2, gb/2,gb/2 ,gb/2)
            if(n.l==0)line(-gb/2, -gb/2,-gb/2 ,gb/2)
            if(n.r==0)line(gb/2, -gb/2,gb/2 ,gb/2)
          }        pop()
    }
    wall4(x,y,n){
        push()
        fill("#6C688E90")
        rectMode(CENTER);
        imageMode(CENTER)
        image(this.brick_img,x, y,this.gapBetween*1,this.gapBetween*1)
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        translate(x,y)
        //  rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
          if(n){
            if(n.t==0)line(-gb/2, -gb/2,gb/2 ,-gb/2)
            if(n.b==0)line(-gb/2, gb/2,gb/2 ,gb/2)
            if(n.l==0)line(-gb/2, -gb/2,-gb/2 ,gb/2)
            if(n.r==0)line(gb/2, -gb/2,gb/2 ,gb/2)
          }        pop()
    }
}