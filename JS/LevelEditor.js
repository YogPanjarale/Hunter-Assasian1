var edit=false;

  function levelEditorRun(){
    var i=gi(mouseX, mouseY)
    if(i) level.highlight(i.x, i.y) 
      var pos={x:800,y:200}
      var s={t:0,b:0,r:0,l:0}
      switch (activeBlock) {
          case 10:
            level.t.wall1(pos.x,pos.y,s)
              break;
          case 11: 
            level.t.wall2(pos.x,pos.y,s)
            break;
          case 12: 
            level.t.wall3(pos.x,pos.y,s)
            break;
          case 13:
              level.t.wall4(pos.x,pos.y,s)
              break;
          case 1: 
            noFill()
            ellipse(pos.x,pos.y-gb,20,40)
            level.t.ground1(pos.x,pos.y,s)
            break;
        case 2: 
            noFill()
            ellipse(pos.x,pos.y-gb,20,40)
            level.t.ground2(pos.x,pos.y,s)
            break;
          default:
              break;
      }
      
  }
  
  function keyPressed(){
      if(edit)
     { switch (keyCode) {
          case 49:
              activeBlock=1
              break;
          case 50:
              activeBlock=2
              break;
          case 51:
              activeBlock=10
              break;
          case 52:
              activeBlock=11
              break;
          case 53:
              activeBlock=12
              break;
          case 54:
              activeBlock=13
              break;
          default:
              break;
      }}
  }
function createEditor(){
    edit=true
    saveButton=createButton('Save');
    newColumn =createButton("Add Column")
    newRow =createButton("Add Row")
    removeCol =createButton("Remove Column")
    removeRow =createButton("Remove Row")

}
var savingPath='Levels'
var saveButton,newColumn,newRow,removeCol,removeRow;
  function saveLevel(name){
      database.ref(savingPath+'/'+name).update({
          data:level.data
      })
  }
 function showButtons(){
     var xpos=500
    saveButton.style('width', '200px');
    saveButton.style('height', '40px');
    saveButton.style('background', 'lightblue');
    saveButton.position(xpos,400)
    saveButton.mousePressed(()=>{
        var name=prompt("Name The Level")
        saveLevel(name)
    })
    if(true){
    newColumn.style('width', '100px');
    newColumn.style('height', '40px');
    newColumn.style('background', 'lightblue');
    newColumn.position(xpos,500)
    newColumn.mousePressed(()=>{
       addColumn()
    })
    }
    if(true){
        newRow.style('width', '100px');
        newRow.style('height', '40px');
        newRow.style('background', 'lightblue');
        newRow.position(xpos,550)
        newRow.mousePressed(()=>{
           addRow()
        })
        }
    if(true){
        removeRow.style('width', '100px');
        removeRow.style('height', '40px');
        removeRow.style('background', 'lightblue');
        removeRow.position(xpos,600)
        removeRow.mousePressed(()=>{
           subractRow()
        })
        }
    if(true){
        removeCol.style('width', '100px');
        removeCol.style('height', '40px');
        removeCol.style('background', 'lightblue');
        removeCol.position(xpos,450)
        removeCol.mousePressed(()=>{
           subtractColumn()
        })
        }
}
function addRow(){
    level.data.push(level.data[1])
}
function subractRow(){ 
    level.data.pop()
}
function addColumn(){ 
   for(var i=0; i<level.data.length; i++){
       level.data[i].push(10)
   }
}
function subtractColumn(){
    for(var i=0; i<level.data.length; i++){
        level.data[i].pop()
    }
}