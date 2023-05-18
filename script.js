const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
const newPic = document.querySelector('.new')
const btn = document.querySelector('.btn')
const newHeart = document.querySelector('.heart')

let timesClicked = 0

btn.addEventListener('click', () => {
    
        btn.classList.toggle('active')
        if(btn.classList.contains('active')){
            btn.innerHTML = '<i class="fas fa-solid fa-heart fa-lg heart" ></i>'
        }
        else{
            btn.innerHTML = '<i class="fas fa-regular fa-heart fa-lg heart" ></i>'
        }
})

loveMe.addEventListener('dblclick', (e) => {
    createHeart(e)
})

newPic.addEventListener('dblclick', (e) => {
    createHeartTwo(e)
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft 
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}

const createHeartTwo = (e) => {
    
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft 
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    newPic.appendChild(heart)


    setTimeout(() => heart.remove(), 1000)
    
    btn.classList.toggle('active')
        if(btn.classList.contains('active')){
            btn.innerHTML = '<i class="fas fa-solid fa-heart fa-lg heart" ></i>'
        }
        else{
            btn.innerHTML = '<i class="fas fa-regular fa-heart fa-lg heart" ></i>'
        }
}

