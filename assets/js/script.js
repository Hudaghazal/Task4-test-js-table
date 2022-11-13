const narray=[  "Bret",
"Antonette",
"Samantha",
"Karianne",
"Kamren",
"Leopoldo_Corkery",
"Elwyn.Skiles",
"Maxime_Nienow",
"Delphine",
"Moriah.Stanton",]
const unarray=[
"Leanne Graham",
"Ervin Howell",
"Clementine Bauch",
"Patricia Lebsack",
"Chelsey Dietrich",
"Mrs. Dennis Schulist",
"Kurtis Weissnat",
"Nicholas Runolfsdottir V",
"Glenna Reichert",
"Clementina DuBuque",]
const earray=[ 
"Sincere@april.biz",
"Shanna@melissa.tv",
"Nathan@yesenia.net",
"Julianne.OConner@kory.org",
"Lucio_Hettinger@annie.ca",
"Karley_Dach@jasper.info",
"Telly.Hoeger@billy.biz",
"Sherwood@rosamond.me",
"Chaim_McDermott@dana.io",
"Rey.Padberg@karina.biz",]
let ele = document.getElementById('table');
let  el1= document.querySelector("#name");
let name = narray.map( name => `<li class='list-group-item'>${name}</li>`);
el1.innerHTML += "<ul class='list-group'>"+name.join("")+"</ul>";
let el2 = document.querySelector("#username");
let uname = unarray.map( uname => `<li class='list-group-item'>${uname}</li>`);
el2.innerHTML += "<ul class='list-group'>"+uname.join("")+"</ul>";
let el3 = document.querySelector("#email");
let email = earray.map( email => `<li class='list-group-item'>${email}</li>`);
el3.innerHTML += "<ul class='list-group'>"+email.join("")+"</ul>";
