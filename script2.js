window.addEventListener("load", () => {
    getAstronauts();
    async function getAstronauts(){
        const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        let astronauts = await response.json();
        const container = document.getElementById('container');

        astronauts = astronauts.sort(function(a, b) {
            return b.hoursInSpace - a.hoursInSpace;
            });
        
        container.innerHTML = `<p>Number of astronauts: ${astronauts.length+1}</p>`        
        for (let i = 0; i < astronauts.length; i++){
            container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
                            <li>Active: <span id= "active${i}">${astronauts[i].active}</span></li>
                            <li>Skills: ${astronauts[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronauts[i].picture}">
                </div>    
        `;
        let active = document.getElementById(`active${i}`); 
        if (astronauts[i].active == true){
            active.style.color = 'green';
        }

        }
    }

    });