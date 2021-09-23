class Ground{
    constructor(x,y,w,l){
       options={
         isStatic:true
       }
      
       this.body = Bodies.rectangle(x, y, w, l, options);
        this.w=w;
        this.l=l;
       
    }
display(){
  var pos=this.body.position ;
  
  rect(pos.x,pos.y,this.w,this.l)
}

}







