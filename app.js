//Define Global Variables
let sec = ["Home" ,"About Me","Skills","Resume","Education","Testemonials","Portfolio","contact Me"];
let navBar = document.querySelector('ul');
let section = document.getElementsByClassName('sector');
//End Global Variables

//Begin Main Functions
// build the nav
for(let i = 1; i <= section.length; i++)
{
    let navList = document.createElement('li');
    navList.classList.add("sec"+i);
    navBar.appendChild(navList);
    let textOfList = document.createTextNode(sec[i-1]);
    // Scroll to anchor ID using scrollTO event
    const anchor = document.createElement('a');
    //let ids = sector[i-1].id;
    //anchor.setAttribute('href','#'+ids);
    navList.appendChild(anchor);
    anchor.appendChild(textOfList);
    anchor.addEventListener('click',function(){
    section[i-1].scrollIntoView({behavior: "smooth"});
})
}
/*End Main Functions*/
