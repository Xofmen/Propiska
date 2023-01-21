let doc = document

let form = doc.forms.form

let a = []
let b = []
let c = []

let put = (box)=>{
        let div = doc.createElement('div')
        let div1 = doc.createElement('div')
        let h1 = doc.createElement('h1')
        h1.innerHTML = "Age"
        let h2 = doc.createElement('h2')
        h2.innerHTML = user.age
        div.append(user.name)
        div1.append(h1)
        div1.append(h2)
        box.append(div)
        div.append(div1)
        div.classList.add('osnova')
        div1.classList.add('color')
}
function kraft(arr,box){
    let get = doc.querySelector(`.${box}`)
    for(let i of arr){
        let div = doc.createElement('div')
        let div1 = doc.createElement('div')
        let h1 = doc.createElement('h1')
        h1.innerHTML = "Age"
        let h2 = doc.createElement('h2')
        h2.innerHTML = i.age
        div.append(i.name)
        div1.append(h1)
        div1.append(h2)
        get.append(div)
        div.append(div1)
        div.classList.add('osnova')
        div1.classList.add('color')
    }
}

form.onsubmit = (event) => {
    event.preventDefault()
    let names = doc.querySelector('.name')
    let ages = doc.querySelector('.age')
    let box1 = doc.querySelector('.box1')
    let box2 = doc.querySelector('.box2')
    let box3 = doc.querySelector('.box3')   
    
    let user = {
        name: names.value,
        age: +ages.value
    }
    
    if(user.age > 0 && user.age <= 25){
        a.push(user)
        kraft(a,'box1')
        
    }else if(user.age > 25 && user.age <= 50){
        b.push(user)
        kraft(b,'box2')
    }else if(user.age > 50){
        c.push(user)
        kraft(c,'box3')
    }else{
        alert('Error')
    }
}

