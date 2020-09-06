var player;
var spawnPoints=[[1,1],[5,2],[2,2],[3,2],[4,2]]
var finalLevels=[levels.Levels.base1,
  levels.Levels.base2,
      levels.Levels.base3, 
      levels.Levels.perfect1
]
var activeLevel=0
var deadEnimiesCount=0
class Game {
     constructor(){
         allSprites.destroyEach();
      parr = new Array(spawnPoints.length)
      console.log(levels)
      data = finalLevels[activeLevel]
      if(!data.spawnPoints)data.spawnPoints =spawnPoints
      console.log(data.data)
      level = new Level(data.data,data.spawnPoints)
      player =new Player(1,level.data.length-2,level.data)
      parr=[]
      for(let i = 0; i < level.spawnPoints.length; i++){
          parr[i]=new Enemy(level.spawnPoints[i][1],level.spawnPoints[i][0],level.data)
          
      }
        this.ui=createCanvas(width,height)
        this.win_sound=loadSound("win.wav")
     }
     play(){
        var l=level.data.length
        var centery=gb*l/2
        var mappedValue=map(player.sprite.y,gb,gb*l,gb*5,gb*(l-5),true)
      
        camera.position.y =mappedValue
        
        var centerx=gb*level.data[0].length/2
        camera.x=map(player.sprite.x,gb,centerx*2,centerx/2,centerx*1.5)
        //showButtons();
        //console.log(frameRate())
          background(230,250,250)
            level.display()
         
          level.drawground()
          //e1.display();
          for (let i = 0; i < parr.length; i++) {
            parr[i].display()
        }
         
          level.drawWalls()
          fill(255,250)
          strokeWeight(1)
          stroke(50,50,0)
           textSize(gb)
           
       text("🎯"+deadEnimiesCount+"/"+parr.length,camera.x,camera.y-height/3)
          player.display()
         // drawSprites()
        // clear();
       
          if(player.health<=0)this.resetGame(0)
          
		strokeWeight(gb/10)
		stroke(255,250,0,200);
		noFill();
    ellipse((click.j+1)*gb,(click.i+1)*gb,gb/2,gb/2);
    

    if(deadEnimiesCount==parr.length){activeLevel++
    this.resetGame(1)}
     }
  resetGame(state){
      game=null 
      form =null
      form =new Form()
    //   push()
    //   textSize(gb)
    //   fill("#ffe8e5")
    // text("You Lose" ,(width/3)+(camera.x-(width/2)),camera.y-gb*1)
    // pop()
    if(state==0){
        form.startButton.html("𝕽𝖊𝖘𝖙𝖆𝖗𝖙 𝕲𝖆𝖒𝖊")
       form.Heading=" You lose\n"+form.Heading
      }
      else if(state==1&&finalLevels.length>activeLevel){  
        form.startButton.html("𝕹𝖊𝖝𝖙 𝐋𝐞𝐯𝐞𝐥")
      this.win_sound.play()
       form.Heading=" 𝓨𝓸𝓾 𝓦𝓲𝓷\n"+"𝐋𝐞𝐯𝐞𝐥 " +(activeLevel)
       deadEnimiesCount=0
      }
      else if(state==1&&finalLevels.length==activeLevel){ 
         form.startButton.html("ℜ𝔢𝔰𝔱𝔞𝔯𝔱 𝔉𝔯𝔬𝔪 𝔅𝔢𝔤𝔦𝔫𝔦𝔫𝔤")
      this.win_sound.play()
      win_sound.play()
       form.Heading=" 𝓨𝓸𝓾 𝓦𝓲𝓷\n"+"𝐋𝐞𝐯𝐞𝐥 " +(activeLevel)+"\nGᗩᗰE \nᑕOᗰᑭᒪETE"
       deadEnimiesCount=0
      }
     }
     
    
}