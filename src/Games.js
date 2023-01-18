
        const game = [
            [{selected:false,type:"none",id:1,color:"white", last:""},{selected:false,type:"none",id:2, color:"blue", last:""},
            {selected:false,type:"none",id:3,color:"white", last:""},{selected:false,type:"none",id:4, color:"blue", last:""},
            {selected:false,type:"none",id:5, color:"blue", last:""},{selected:false,type:"none",id:6,color:"white", last:""},
            {selected:false,type:"none",id:7, color:"blue", last:""},{selected:false,type:"none",id:8,color:"white", last:""},
            {selected:false,type:"none",id:9,color:"white", last:""},{selected:false,type:"none",id:10, color:"blue", last:""},
            {selected:false,type:"none",id:11,color:"white", last:""},{selected:false,type:"none",id:12, color:"blue", last:""},
            {selected:false,type:"none",id:13, color:"blue", last:""},{selected:false,type:"none",id:14,color:"white", last:""},
            {selected:false,type:"none",id:15, color:"blue", last:""},{selected:false,type:"none",id:16,color:"white", last:""}],



        [{selected:false,type:"none",id:1,color:"white", last:"bishop",x:1,y:4,position:[1,4]},{selected:false,type:"horse",id:2, color:"blue", last:"",x:2,y:4,position:[2,4]},
        {selected:false,type:"pawn",id:3,color:"white", last:"",x:3,y:4,position:[3,4]},{selected:false,type:"none",id:4, color:"blue", last:"",x:4,y:4,position:[4,4]},
        {selected:false,type:"none",id:5, color:"blue", last:"",x:1,y:3,position:[1,3]},{selected:false,type:"rook",id:6,color:"white", last:"",x:2,y:3,position:[2,3]},
        {selected:false,type:"pawn",id:7, color:"blue", last:"",x:3,y:3,position:[3,3]},{selected:false,type:"horse",id:8,color:"white", last:"",x:4,y:3,position:[4,3]},
        {selected:false,type:"king",id:9,color:"white", last:"bishop",x:1,y:2,position:[1,2]},{selected:false,type:"none",id:10, color:"blue", last:"",x:2,y:2,position:[2,2]},
        {selected:false,type:"rook",id:11,color:"white", last:"",x:3,y:2,position:[3,2]},{selected:false,type:"none",id:12, color:"blue", last:"",x:4,y:2,position:[4,2]},
        {selected:false,type:"none",id:13, color:"blue", last:"",x:1,y:1,position:[1,1]},{selected:false,type:"pawn",id:14,color:"white",last:"",x:2,y:1,position:[2,1]},
        {selected:false,type:"rook",id:15, color:"blue",last:"",x:3,y:1,position:[3,1]},{selected:false,type:"bishop",id:16,color:"white",last:"",x:4,y:1,position:[4,1]}],
        //horse in1,4 takes took takes pawn in 2,1 and then takes king
        [{selected:false,type:"horse",id:1,color:"white",x:1,y:4,position:[1,4]},{selected:false,type:"none",id:2, color:"blue",x:2,y:4,position:[2,4]},
        {selected:false,type:"none",id:3,color:"white",x:3,y:4,position:[3,4]},{selected:false,type:"none",id:4, color:"blue",x:4,y:4,position:[4,4]},
        {selected:false,type:"king",id:5, color:"blue",x:1,y:3,position:[1,3]},{selected:false,type:"none",id:6,color:"white",x:2,y:3,position:[2,3]},
        {selected:false,type:"rook",id:7, color:"blue",x:3,y:3,position:[3,3]},{selected:false,type:"bishop",id:8,color:"white",x:4,y:3,position:[4,3]},
        {selected:false,type:"none",id:9,color:"white",x:1,y:2,position:[1,2]},{selected:false,type:"pawn",id:10, color:"blue",x:2,y:2,position:[2,2]},
        {selected:false,type:"horse",id:11,color:"white",x:3,y:2,position:[3,2]},{selected:false,type:"none",id:12, color:"blue",x:4,y:2,position:[4,2]},
        {selected:false,type:"none",id:13, color:"blue",x:1,y:1,position:[1,1]},{selected:false,type:"pawn",id:14,color:"white",x:2,y:1,position:[2,1]},
        {selected:false,type:"none",id:15, color:"blue",x:3,y:1,position:[3,1]},{selected:false,type:"none",id:16,color:"white",x:4,y:1,position:[4,1]}],
        //king moves to 4,2 and horse in 1,4 takes bishop takes pawn and kills king
        [{selected:false,type:"horse",id:1,color:"white",x:1,y:4,position:[1,4]},{selected:false,type:"none",id:2, color:"blue",x:2,y:4,position:[2,4]},
        {selected:false,type:"pawn",id:3,color:"white",x:3,y:4,position:[3,4]},{selected:false,type:"none",id:4, color:"blue",x:4,y:4,position:[4,4]},
        {selected:false,type:"none",id:5, color:"blue",x:1,y:3,position:[1,3]},{selected:false,type:"horse",id:6,color:"white",x:2,y:3,position:[2,3]},
        {selected:false,type:"king",id:7, color:"blue",x:3,y:3,position:[3,3]},{selected:false,type:"rook",id:8,color:"white",x:4,y:3,position:[4,3]},
        {selected:false,type:"none",id:9,color:"white",x:1,y:2,position:[1,2]},{selected:false,type:"bishop",id:10, color:"blue",x:2,y:2,position:[2,2]},
        {selected:false,type:"none",id:11,color:"white",x:3,y:2,position:[3,2]},{selected:false,type:"rook",id:12, color:"blue",x:4,y:2,position:[4,2]},
        {selected:false,type:"none",id:13, color:"blue",x:1,y:1,position:[1,1]},{selected:false,type:"none",id:14,color:"white",x:2,y:1,position:[2,1]},
        {selected:false,type:"none",id:15, color:"blue",x:3,y:1,position:[3,1]},{selected:false,type:"none",id:16,color:"white",x:4,y:1,position:[4,1]}],
        //rook at 1,1 takes pawn at 4,1 takes rook at 4,4 takes king
        [{selected:false,type:"none",id:1,color:"white",x:1,y:4,position:[1,4]},{selected:false,type:"king",id:2, color:"blue",x:2,y:4,position:[2,4]},
        {selected:false,type:"none",id:3,color:"white",x:3,y:4,position:[3,4]},{selected:false,type:"rook",id:4, color:"blue",x:4,y:4,position:[4,4]},
        {selected:false,type:"none",id:5, color:"blue",x:1,y:3,position:[1,3]},{selected:false,type:"none",id:6,color:"white",x:2,y:3,position:[2,3]},
        {selected:false,type:"bishop",id:7, color:"blue",x:3,y:3,position:[3,3]},{selected:false,type:"none",id:8,color:"white",x:4,y:3,position:[4,3]},
        {selected:false,type:"none",id:9,color:"white",x:1,y:2,position:[1,2]},{selected:false,type:"horse",id:10, color:"blue",x:2,y:2,position:[2,2]},
        {selected:false,type:"none",id:11,color:"white",x:3,y:2,position:[3,2]},{selected:false,type:"none",id:12, color:"blue",x:4,y:2,position:[4,2]},
        {selected:false,type:"rook",id:13, color:"blue",x:1,y:1,position:[1,1]},{selected:false,type:"none",id:14,color:"white",x:2,y:1,position:[2,1]},
        {selected:false,type:"pawn",id:15, color:"blue",x:3,y:1,position:[3,1]},{selected:false,type:"pawn",id:16,color:"white",x:4,y:1,position:[4,1]}],
        //horse at 4,2 takes 3,4 takes 2,2 takes king
        [{selected:false,type:"king",id:1,color:"white",x:1,y:4,position:[1,4]},{selected:false,type:"none",id:2, color:"blue",x:2,y:4,position:[2,4]},
        {selected:false,type:"rook",id:3,color:"white",x:3,y:4,position:[3,4]},{selected:false,type:"rook",id:4, color:"blue",x:4,y:4,position:[4,4]},
        {selected:false,type:"none",id:5, color:"blue",x:1,y:3,position:[1,3]},{selected:false,type:"pawn",id:6,color:"white",x:2,y:3,position:[2,3]},
        {selected:false,type:"none",id:7, color:"blue",x:3,y:3,position:[3,3]},{selected:false,type:"none",id:8,color:"white",x:4,y:3,position:[4,3]},
        {selected:false,type:"none",id:9,color:"white",x:1,y:2,position:[1,2]},{selected:false,type:"horse",id:10, color:"blue",x:2,y:2,position:[2,2]},
        {selected:false,type:"none",id:11,color:"white",x:3,y:2,position:[3,2]},{selected:false,type:"horse",id:12, color:"blue",x:4,y:2,position:[4,2]},
        {selected:false,type:"bishop",id:13, color:"blue",x:1,y:1,position:[1,1]},{selected:false,type:"none",id:14,color:"white",x:2,y:1,position:[2,1]},
        {selected:false,type:"none",id:15, color:"blue",x:3,y:1,position:[3,1]},{selected:false,type:"none",id:16,color:"white",x:4,y:1,position:[4,1]}],
        //king toakes rook at 3,3 bishop at 2,1 takes other bishop rook at 4,1 
        //takes everything else including king 
        [{selected:false,type:"horse",id:1,color:"white",x:1,y:4,position:[1,4]},{selected:false,type:"none",id:2, color:"blue",x:2,y:4,position:[2,4]},
        {selected:false,type:"horse",id:3,color:"white",x:3,y:4,position:[3,4]},{selected:false,type:"pawn",id:4, color:"blue",x:4,y:4,position:[4,4]},
        {selected:false,type:"pawn",id:5, color:"blue",x:1,y:3,position:[1,3]},{selected:false,type:"none",id:6,color:"white",x:2,y:3,position:[2,3]},
        {selected:false,type:"rook",id:7, color:"blue",x:3,y:3,position:[3,3]},{selected:false,type:"bishop",id:8,color:"white",x:4,y:3,position:[4,3]},
        {selected:false,type:"none",id:9,color:"white",x:1,y:2,position:[1,2]},{selected:false,type:"none",id:10, color:"blue",x:2,y:2,position:[2,2]},
        {selected:false,type:"king",id:11,color:"white",x:3,y:2,position:[3,2]},{selected:false,type:"none",id:12, color:"blue",x:4,y:2,position:[4,2]},
        {selected:false,type:"none",id:13, color:"blue",x:1,y:1,position:[1,1]},{selected:false,type:"bishop",id:14,color:"white",x:2,y:1,position:[2,1]},
        {selected:false,type:"none",id:15, color:"blue",x:3,y:1,position:[3,1]},{selected:false,type:"rook",id:16,color:"white",x:4,y:1,position:[4,1]}]




       
    ]
 
export default game