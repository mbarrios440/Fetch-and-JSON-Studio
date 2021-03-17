window.addEventListener("load", () => {
    getAstronauts();
    async function getAstronauts(){
        const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        const astronauts = await response.json();
        const container = document.getElementById('container');

        for (let i = 0; i < astronauts.length; i++){
            container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
                            <li>Active: ${astronauts[i].active}</li>
                            <li>Skills: ${astronauts[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronauts[i].picture}">
                </div>    
        `;
        }
    }
});