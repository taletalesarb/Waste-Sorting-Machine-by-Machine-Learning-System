import { useState,useEffect } from "react";

// function PictureGeneralWaste(){
//     const [state, setState] = useState([])
//     useEffect(() => {
//         fetch("http://192.168.1.113:5000/getnumber")
//           .then(response => response.json())
//           .then(data => setState(data));
//     })
//     let max = parseInt(state.numg)
//     let n = 1;
//     const PictureGeneralWaste = [
//             {
//                 picUrl: "/PictureWaste/GeneralWaste/g"+n.toString+".jpg"
//             }
//           ];
//         while (n<max){
//         PictureGeneralWaste.push({  
//             picUrl: "/PictureWaste/GeneralWaste/g"+n.toString+".jpg"
//         })
//         n++;
//         }
    
//     return PictureGeneralWaste;
// }
// export default PictureGeneralWaste;

const PictureGeneralWaste = [
    {
        name:  "g1",
        picUrl: "http://127.0.0.1:5000/get-image/2022-03-07/general/1.jpg"
        
    },
    {  
        name:  "g2",
        picUrl: "http://127.0.0.1:5000/get-image/2022-03-07/general/2.jpg"
        
    },
    {  
        name:  "g3",
        picUrl: "/PictureWaste/GeneralWaste/g3.jpg"
    },
    {  
        name:  "g4",
        picUrl: "/PictureWaste/GeneralWaste/g4.jpg"
    },
    {  
        name:  "g5",
        picUrl: "/PictureWaste/GeneralWaste/g5.jpg"
    },
    {
        name:  "g1",
        picUrl: "/PictureWaste/GeneralWaste/g1.jpg"
    },
    {  
        name:  "g2",
        picUrl: "/PictureWaste/GeneralWaste/g2.jpg"
    },
    {  
        name:  "g3",
        picUrl: "/PictureWaste/GeneralWaste/g3.jpg"
    },
    {  
        name:  "g4",
        picUrl: "/PictureWaste/GeneralWaste/g4.jpg"
    },
    {  
        name:  "g5",
        picUrl: "/PictureWaste/GeneralWaste/g5.jpg"
    },
    {
        name:  "g1",
        picUrl: "/PictureWaste/GeneralWaste/g1.jpg"
    },
    {  
        name:  "g2",
        picUrl: "/PictureWaste/GeneralWaste/g2.jpg"
    },
    {  
        name:  "g3",
        picUrl: "/PictureWaste/GeneralWaste/g3.jpg"
    },
    {  
        name:  "g4",
        picUrl: "/PictureWaste/GeneralWaste/g4.jpg"
    },
    {  
        name:  "g5",
        picUrl: "/PictureWaste/GeneralWaste/g5.jpg"
    }
  ];

export default PictureGeneralWaste;

// export default PictureGeneralWaste;




// let n = 1;

// export const PictureGeneralWaste = [
//     {
//         name:  "g1",
//         picUrl: "/PictureWaste/GeneralWaste/g"+n+".jpg"
//     }
//   ];
// while (n<max){
// PictureGeneralWaste.push({  
//     name:  "g5",
//     picUrl: "/PictureWaste/GeneralWaste/g"+n+".jpg"
// })
// n++;
// }