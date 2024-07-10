

let newhour=0;
 setInterval(() => {
    const now= new Date();
    let newhour=document.getElementById('hour');
     let hour=now.getHours()
    let ampm=document.getElementById('ampm')
    
    if(hour >= 12){
        hour=hour-12
        ampm.innerHTML='PM'
        }
         if(hour===0){
             hour=12
         }
        
 

 
    newhour.innerHTML=hour.toString().padStart(2,0);
    
    let min=document.getElementById('min')
    min.innerHTML=now.getMinutes().toString().padStart(2,0)
   let sec= document.getElementById('sec')
   sec.innerHTML=now.getSeconds().toString().padStart(2,0)
    
    
}, 500);



// if (newHour >= 12) {
//     period = 'PM';
//     if (newHour > 12) {
//         newHour -= 12;
//     }
// } else if (newHour === 0) {
//     newHour = 12;
// }