let cont_sorte 
let cont_azar 
function sorte(){ 
   let min = 1;
   let max = 100;
   let dif = max - min;
   let aleatorio = Math.random();
   let num = min + Math.trunc(dif * aleatorio);
   

if( num > 50){
    sorte++;
       let mostar = document.getElementById(`resultado`);
   mostar.innerHTML = `< img src=  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikkQv57ZDZdklf7s5qdpfGxwO2HsOaJz92KTdIuME5fREysNkPiC3FQI&s=10>`;
}else{
    azar++;
       let mostar = document.getElementById(`resultado`);
   mostar.innerHTML = `< img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAX5YI4KFOik0UCR2UWGifEMYd4DO8vh03TbPt9G5C3j5Uvw6_nKZfNDg&s=10>`;
}
}