var c=document.getElementById("mycanvas");
			var ctx=c.getContext("2d");
			var size=15;
			var food=[4,4];
			var snake=[[0,0],[1,0],[2,0]];
			var to="0";
			
			document.onkeydown=function(event){
				keycode(event.keyCode);
			}
            var interval=setInterval(move,300);
            var timer=setInterval(clearfood,1000);
         
			
		function start(){
			    if(to=="0"){
				      to="右";
			    }
				if(interval!=null){
					clearInterval(interval);
				interval=null;
				}
				 interval=setInterval(move,400);	
		}
			
		function zanting(){
				clearInterval(interval);
				interval=null;
		}
		
		function draw(){
			ctx.clearRect(0,0,150,150);
			for(var i=0;i<=size;i++){
				ctx.beginPath();
				ctx.moveTo(i*size,0);
				ctx.lineTo(i*size,150);
				ctx.stroke();
					ctx.beginPath();
				ctx.moveTo(0,i*size);
				ctx.lineTo(150,i*size);
				ctx.stroke();
			}
			for(i=0;i<snake.length;i++){
				
				ctx.fillStyle="aqua";
				ctx.fillRect(snake[i][0]*size+1,snake[i][1]*size+1,size-2,size-2);
			}
			ctx.fillStyle="cadetblue";
			ctx.fillRect(food[0]*size+1,food[1]*size+1,size-2,size-2);
			
		}
		
		function clearfood(){
			ctx.clearRect(food[0]*size+1,food[1]*size+1,size-2,size-2);
			
		}
			
		function move(){
			var nextpoint=snake[snake.length-1];
			switch(to){
				case "0":	return draw();
				case "右":
				nextpoint=[nextpoint[0]+1,nextpoint[1]];break;
				case "下":
				nextpoint=[nextpoint[0],nextpoint[1]+1];break;
				case "左":
				nextpoint=[nextpoint[0]-1,nextpoint[1]];break;
				case "上":
				nextpoint=[nextpoint[0],nextpoint[1]-1];break;
				default:
				break;
			}
			if(nextpoint[0]>9) nextpoint[0]=nextpoint[0]-10;
			if(nextpoint[0]<0) nextpoint[0]=nextpoint[0]+10;
			if(nextpoint[1]>9) nextpoint[1]=nextpoint[1]-10;
			if(nextpoint[1]<0) nextpoint[1]=nextpoint[1]+10;
			snake.push(nextpoint);
			snake.shift();
			failure();
			eat();
			draw();
		}
		
		function keycode(keycode){
			switch(keycode){
				case 37:
				to="左";break;
				case 38:
				to="上";break;
				case 39:
				to="右";break;
				case 40:
				to="下";break;
				default:
				break;
			}
		}

        function eat(){
        	var nextpoint=snake[snake.length-1];
        	if(nextpoint[0]==food[0] &&nextpoint[1]==food[1]){
        		snake.unshift(food);
        		if(snake.length>10){
        			alert("you win");
        		    snake=snake=[[0,0],[1,0],[2,0]];
					food=[4,4];
					to="0";
        		}
        		
        		var x=Math.floor(Math.random()*10);
        		var y=Math.floor(Math.random()*10);
        		for(i=0;i<snake.length;i++){
        			if(x==snake[i][0]&&y==snake[i][1]){
        				x=x+5;
        				y=snake.length-4;
        				break;
        			}
        		}
        		food=[x,y];
        	}
        	
        }
      	function failure(){
				var newpoint=snake[snake.length-1];
				for(i=0;i<snake.length-1;i++){
					if(newpoint[0]==snake[i][0]&&newpoint[1]==snake[i][1]){
						alert("you are lose");
						snake=snake=[[0,0],[1,0],[2,0]];
						food=[4,4];
						to="0";
						break;
					}
				}	
			}
	
