let container = document.body.querySelector('.container')


function getData(){
    fetch('https://api.github.com/users/john-smilga/followers?per_page=100')
    .then(response => response.json())
    .then(data => {
       data.forEach(function(element, index){
        
          let profile = document.createElement('div');
          profile.classList.add('profile')
          profile.classList.add('inactive')
          profile.innerHTML = `
          <img src='${element.avatar_url}'>
          <h4>${element.login}</h4>
          <a href="${element.html_url}">View Profile</a>

          `
         
         container.appendChild(profile)
        })
    });
  
}

getData();

setTimeout(function(){
    let profileAll = document.body.querySelectorAll('.profile')

    for (let i=0;i<11;i++){
      profileAll[i].classList.remove("inactive")
    }



let buttons = document.body.getElementsByTagName('span');

for (let i=0;i<buttons.length;i++){
    
    buttons[i].addEventListener('click', function(){
        for (let i=0;i<profileAll.length;i++){
            profileAll[i].classList.add("inactive")
        }
        for (let l=((i*10));l<(i*10+10);l++){
        profileAll[l].classList.remove("inactive")
        }
        for (let i=0;i<buttons.length;i++){ 
            buttons[i].style.backgroundColor = "#8BCBF9";
            buttons[i].style.color = "black";

        }
        buttons[i].style.backgroundColor = "black"
        buttons[i].style.color = "white"
        console.log(`click button ${i}`)
    })
}




},300)





