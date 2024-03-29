		var c=document.getElementById("mycanvas");
		var ctx=c.getContext("2d");
		var size=15;
		var player="black";
		
		var boardstate= new Array();//定义二维数组
		
		setboardstate(-1);
		
		
		draw();
		mycanvas.onclick=function(event){
		        var x=Math.floor(event.offsetX/size);
				var y= Math.floor(event.offsetY/size);
				if(boardstate[x+4][y+4]!=-1) return ;
				drawChess(x,y,player);
				if(player=="black"){
					boardstate[x+4][y+4]=1;
				}
				else{
					boardstate[x+4][y+4]=0;
				}
				winplayer(x,y,player);
				player=player=="black"?"white":"black";
				
			}
	
		function draw(){
			for(var i=0;i<=size;i++){
				ctx.beginPath();
				ctx.moveTo(i*size,0);
				ctx.lineTo(i*size,150);
				ctx.strokeStyle="#111"
				ctx.stroke();
				ctx.beginPath();
				ctx.moveTo(0,i*size);
				ctx.lineTo(150,i*size);
				ctx.stroke();
			}
			
		}
			
		function drawChess(x,y,player){
			x=x*size;
			y=y*size;
				if(player=="black"){
					ctx.beginPath();
					ctx.arc(x,y,size/2-2,0,2*Math.PI);
					ctx.strokeStyle="#ccc";
					ctx.stroke();
					var grd=ctx.createRadialGradient(x,y,size/2-2,x,y,2);
					grd.addColorStop(0,"#000");
					grd.addColorStop(1,"#aaa");
					ctx.fillStyle=grd;
					ctx.fill();
					document.getElementById("tip").innerHTML="轮到白方："
				}
				
				else{   
					ctx.beginPath();
					ctx.arc(x,y,size/2-2,0,2*Math.PI);
					ctx.strokeStyle="#ccc";
					ctx.stroke();
					var grd=ctx.createRadialGradient(x,y,size/2-2,x,y,2);
					grd.addColorStop(0,"#777");
					grd.addColorStop(1,"#fff");
					ctx.fillStyle=grd;
					ctx.fill();	
					document.getElementById("tip").innerHTML="轮到黑方："
			  }		  
	   }
		function winplayer(x,y,player){
			x1=x+4;y1=y+4;
			var temp1=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
			var temp2=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
			var temp3=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
			var temp4=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
			
			for(i=0;i<9;i++){
				temp1[i]=boardstate[x1-4+i][y1];//获取横向信息
				temp2[i]=boardstate[x1][y1-4+i];//获取纵向信息
				temp3[i]=boardstate[x1-4+i][y1-4+i];//获取左斜向下信息
				temp4[i]=boardstate[x1-4+i][y1+4-i];//获取右斜向下信息
			}
					
			if(player=="white"){   //弹出白方获胜的信息
				for(i=0;i<5;i++){
					
			       if(temp1[i]==0&&temp1[i+1]==0&&temp1[i+2]==0&&temp1[i+3]==0&&temp1[i+4]==0){
			       	 for(j=0;j<5;j++){
			       	 x=x1-8+i+j;
			       	 y=y1-4; 
			        drawborder(x,y); 
			       	 }
			       	setboardstate(1);
			       	 return alert("white wins"); 
			       }
				   if(temp2[i]==0&&temp2[i+1]==0&&temp2[i+2]==0&&temp2[i+3]==0&&temp2[i+4]==0){
				   	  for(j=0;j<5;j++){
				   	  x=x1-4;
				   	  y=y1-8+i+j;
                      drawborder(x,y);
                    }
				   	  setboardstate(1);
			       	 return alert("white wins"); 
				   }
				   
				       
				   if(temp3[i]==0&&temp3[i+1]==0&&temp3[i+2]==0&&temp3[i+3]==0&&temp3[i+4]==0){
				   	 for(j=0;j<5;j++){
				   	    x=x1-8+j+i;
				   	    y=y1-8+j+i;
				   	    drawborder(x,y);
                     } 
                     setboardstate(1);
			       	 return alert("white wins"); 
				   }
				       
				   if(temp4[i]==0&&temp4[i+1]==0&&temp4[i+2]==0&&temp4[i+3]==0&&temp4[i+4]==0){
				   	
				   	for(j=0;j<5;j++){
				   	x=x1-8+j+i;
				   	y=y1-j-i;
				   	drawborder(x,y);		       	 
				    }
				   	setboardstate(1);
				     return alert("white wins");
				   }
			   }
			}
			else{  //弹出黑方获胜的信息
					for(i=0;i<5;i++){
					
			       if(temp1[i]==1&&temp1[i+1]==1&&temp1[i+2]==1&&temp1[i+3]==1&&temp1[i+4]==1){
			        for(j=0;j<5;j++){
			       	 x=x1-8+j+i;
			       	 y=y1-4; 
			        drawborder(x,y);
			       	 }
			        setboardstate(1);
				      return alert("black wins");
			       }
			
				   if(temp2[i]==1&&temp2[i+1]==1&&temp2[i+2]==1&&temp2[i+3]==1&&temp2[i+4]==1){
				   		    for(j=0;j<5;j++){
				   	  x=x1-4;
				   	  y=y1-8+j+i;
				   	 
                      drawborder(x,y);
                    } 
                    setboardstate(1);
				       return alert("black wins");
				   }
				      
				   if(temp3[i]==1&&temp3[i+1]==1&&temp3[i+2]==1&&temp3[i+3]==1&&temp3[i+4]==1){
				   	for(j=0;j<5;j++){
				   	    x=x1-8+j+i;
				   	    y=y1-8+j+i;
				   	    drawborder(x,y);
                     } 
                     setboardstate(1);
				       return alert("black wins");
				   }
				       
				   if(temp4[i]==1&&temp4[i+1]==1&&temp4[i+2]==1&&temp4[i+3]==1&&temp4[i+4]==1){
				    	
				   	for(j=0;j<5;j++){
				   	x=x1-8+j+i;
				   	y=y1-j-i;
				   	drawborder(x,y);		       	 
				    }
				   	setboardstate(1);
				       return alert("black wins");
				    }
			     }	
		     }
		}
		function drawborder(x,y){
			   
			       	ctx.beginPath();
					ctx.arc(x*size,y*size,size/2-1,0,2*Math.PI);
					ctx.strokeStyle="red";
					ctx.stroke();
			       	       	
		}
		function setboardstate(x){
			for( i=0;i<size+8;i++){
			  boardstate[i]=new Array(i);
		       for( j=0;j<size+8;j++){
			    boardstate[i][j]=x;
		       }
		   }
		}
		function restart(){
			ctx.clearRect(0,0,150,150);
			draw();
			player="black";
			document.getElementById("tip").innerHTML="请黑方先走："
			setboardstate(-1);
			
		}
