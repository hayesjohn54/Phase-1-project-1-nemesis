// const acceptBtn=document.querySelector(".accept")
// const enemyCard=document.querySelector(".enemyCard")
// const declineBtn= document.querySelector(".decline")
// acceptBtn.addEventListener("mouseenter", ()=>{
//     enemyCard.style.background= "green"
// })

// acceptBtn.addEventListener("mouseleave", ()=>{
//     enemyCard.style.background= "black"
// })

// declineBtn.addEventListener("mouseenter", ()=>{
//     enemyCard.style.background= "red"
// })

// declineBtn.addEventListener("mouseleave", ()=>{
//     enemyCard.style.background= "black"
// })


// fetch('https://randomuser.me/api/')
// .then(res => res.json())
// .then(data => console.log(data.results))


//fetch
fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(randomUser=>{
        console.log(randomUser)
        const generateNewUserBtn = document.querySelector(".generator")
        generateNewUserBtn.addEventListener("click", ()=>{
            generateNewUser(randomUser)
            generateNewUserBtn.remove()
            acceptBtn.addEventListener("click", ()=>{
                acceptBtn.remove()
                declineBtn.remove()
                const congrats= document.createElement("p")
                const phone = document.querySelector(".phone")
                        congrats.textContent=`Congrats, ${randomUser.results[0].name.first} is your Nemesis!`
                phone.append(congrats)

                const randomly = () => Math.random() - 0.5
                const weakness = ['Weakness: Bad Knees', 'Weakness: Stepping on Legos', 'Weakness: Time Zones', 'Weakness: Looking Both Ways Down A One Way Road', 'Weakness: Having Name Spelled Backwards']
                const weaknessInfo = Array(1).fill({})
                const dynamicWeakness = [].concat(weakness).sort(randomly)
                weaknessInfo.forEach((t, i)=> {
                console.info(dynamicWeakness[i])
                phone.append(dynamicWeakness[i])
            })
                
            })
        })
        
    })

//generate new user
function generateNewUser(user){
    const enemyEmail = document.querySelector(".email")
    const enemyName = document.querySelector(".name")
    const enemyAge = document.querySelector(".age")
    const enemyImage= document.querySelector(".image")
    const enemyLoc= document.querySelector(".address")
    const enemyPhone = document.querySelector(".phone")
    enemyName.textContent = `${user.results[0].name.first} ${user.results[0].name.last}`
    enemyPhone.textContent = `Phone: ${user.results[0].phone}` 
    enemyImage.src=user.results[0].picture.large
    enemyEmail.textContent = `Email: ${user.results[0].email}`
    enemyAge.textContent= `Age: ${user.results[0].dob.age}`
    enemyLoc.textContent= `Location: ${user.results[0].location.city}, ${user.results[0].location.state}`
}




//Accept and Decling mouseenter and mouseleave events
const acceptBtn=document.querySelector(".accept")
const enemyCard=document.querySelector(".enemyCard")
const declineBtn= document.querySelector(".decline")
acceptBtn.addEventListener("mouseenter", ()=>{
    enemyCard.style.background= "green"
})

acceptBtn.addEventListener("mouseleave", ()=>{
    enemyCard.style.background= "black"
})

declineBtn.addEventListener("mouseenter", ()=>{
    enemyCard.style.background= "red"
})

declineBtn.addEventListener("mouseleave", ()=>{
    enemyCard.style.background= "black"
})

// accept button click
// acceptBtn.addEventListener("click", ()=>{
//     acceptBtn.remove()
//     declineBtn.remove()
//     const congrats= document.createElement("p")
//     const address= document.querySelector(".address")
//     congrats.textContent="Congrats, you have 1 new enemy!"
//     address.append(congrats)
// })

// submit button
const form = document.querySelector(".message")
form.addEventListener("submit", (e)=>{
    form.reset()
    e.preventDefault()
    alert('You sent your nemesis a message!')
})


// const randomly = () => Math.random() - 0.5
// const stuff = ['Bad Knees', 'Stepping on Legos', 'Time Zones', 'Looking Both Ways on a One Way Road',]

// const traitInfo = Array(1).fill({})
// const dynamicStuff = [].concat(stuff).sort(randomly)

// traitInfo.forEach((t, i)=> {
//     console.info(dynamicStuff[i])
// })