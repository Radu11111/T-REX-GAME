//LEGEND:
 // 0- empty
 // 1-t-rex
 // 2-cactus

let gameMap = [0,2,0,0,1,0,2,0,2,0]
let ti = 4
let dir = "left"

function drawMap() {
    m.innerHTML = ``
    for(let i = 0; i < gameMap.length; i++) {
        if(gameMap[i] == 0) {
            m.innerHTML += `<div></div>`
        } else if (gameMap[i] == 1) {
            m.innerHTML += `<div class="t-rex ${dir}"></div>`
        } else if (gameMap[i] == 2) {
            m.innerHTML += `<div class="cactus"></div>`
        }
        
    }
}
drawMap()

function action() {
    switch(event.key) {
        case "ArrowLeft":
            // FINISH LEFT MOVEMENT -done
            //HW2:BOUNDARIES
            if(ti> gameMap.length-10) {
            gameMap[ti] = 0
            ti--
            gameMap[ti] = 1
            dir = "left" 
            drawMap() 
            }
        break
        case "ArrowRight":
            if(ti < gameMap.length-1) {
            gameMap[ti] = 0
            ti++
            gameMap[ti] = 1
            dir = "right"
            drawMap()
        }
        break
    }
}