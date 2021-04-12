 
let document_body = document.body

let container = document.createElement("div")
container.setAttribute("class","container")

let header_div = document.createElement("div")
header_div.setAttribute("class","container")
header_div.setAttribute("style","text-align:center;")

let header = document.createElement("h1")
header.setAttribute("style","color:black;font-family: Times New Roman ;margin-top:20px;font-size:50px;")
header.innerText = "NEWYORK TIMES";
header_div.appendChild(header)

let nav_bar = document.createElement("nav")
nav_bar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light")

let navbar_button = document.createElement("button")
navbar_button.setAttribute("class","navbar-toggler")
navbar_button.setAttribute("type","button")
navbar_button.setAttribute("data-toggle","collapse")
navbar_button.setAttribute("data-target","#navbar")
navbar_button.setAttribute("aria-controls","navbar")
nav_bar.appendChild(navbar_button)

let navbar_button_span1 = document.createElement("span")
navbar_button_span1.setAttribute("class","navbar-toggler-icon") 
navbar_button.appendChild(navbar_button_span1)

let nav_bar_div = document.createElement("div")
nav_bar_div.setAttribute("class","collapse navbar-collapse justify-content-center")
nav_bar_div.setAttribute("id","navbar")

let nav_ul = document.createElement("ul")
nav_ul.setAttribute("class","navbar-nav")

let file1 = document.createElement("li")
file1.setAttribute("class","nav-item")
let a1 = document.createElement("a")
a1.setAttribute("class","nav-link btn")
a1.setAttribute("style","color:black; font-family: Times New Roman")
a1.innerText = "HOME"
a1.setAttribute("id","home")
a1.addEventListener("click",function(){
    processData("home")
})
file1.appendChild(a1)
nav_ul.appendChild(file1)

let file2 = document.createElement("li")
file2.setAttribute("class","nav-item")
let a2 = document.createElement("a")
a2.setAttribute("class","nav-link btn")
a2.setAttribute("style","color:black; font-family: Times New Roman")
a2.innerText = "WORLD"
a2.setAttribute("id","world")
a2.addEventListener("click",function(){
    processData("world")
})
file2.appendChild(a2)
nav_ul.appendChild(file2)

let file3 = document.createElement("li")
file3.setAttribute("class","nav-item")
let a3 = document.createElement("a")
a3.setAttribute("class","nav-link btn")
a3.setAttribute("style","color:black; font-family: Times New Roman")
a3.innerText = "POLITICS"
a3.setAttribute("id","politics")
a3.addEventListener("click",function(){
    processData("politics")
})
file3.appendChild(a3)
nav_ul.appendChild(file3)

let file4 = document.createElement("li")
file4.setAttribute("class","nav-item")
let a4 = document.createElement("a")
a4.setAttribute("class","nav-link btn")
a4.setAttribute("style","color:black; font-family: Times New Roman")
a4.innerText = "MAGAZINE"
a4.setAttribute("id","politics")
a4.addEventListener("click",function(){
    processData("magazine")
})
file4.appendChild(a4)
nav_ul.appendChild(file4)

let file5 = document.createElement("li")
file5.setAttribute("class","nav-item")
let a5 = document.createElement("a")
a5.setAttribute("class","nav-link btn")
a5.setAttribute("style","color:black; font-family: Times New Roman")
a5.innerText = "TECHNOLOGY"
a5.setAttribute("id","technology")
a5.addEventListener("click",function(){
    processData("technology")
})
file5.appendChild(a5)
nav_ul.appendChild(file5)

let file6 = document.createElement("li")
file6.setAttribute("class","nav-item")
let a6 = document.createElement("a")
a6.setAttribute("class","nav-link btn")
a6.setAttribute("style","color:black; font-family: Times New Roman")
a6.innerText = "SCIENCE"
a6.setAttribute("id","science")
a6.addEventListener("click",function(){
    processData("science")
})
file6.appendChild(a6)
nav_ul.appendChild(file6)

let file7 = document.createElement("li")
file7.setAttribute("class","nav-item")
let a7 = document.createElement("a")
a7.setAttribute("class","nav-link btn")
a7.setAttribute("style","color:black; font-family: Times New Roman")
a7.innerText = "HEALTH"
a7.setAttribute("id","health")
a7.addEventListener("click",function(){
    processData("health")
})
file7.appendChild(a7)
nav_ul.appendChild(file7)

let file8 = document.createElement("li")
file8.setAttribute("class","nav-item")
let a8 = document.createElement("a")
a8.setAttribute("class","nav-link btn")
a8.setAttribute("style","color:black; font-family: Times New Roman")
a8.innerText = "SPORTS"
a8.setAttribute("id","sports")
a8.addEventListener("click",function(){
    processData("sports")
})
file8.appendChild(a8)
nav_ul.appendChild(file8)

let file9 = document.createElement("li")
file9.setAttribute("class","nav-item")
let a9 = document.createElement("a")
a9.setAttribute("class","nav-link btn")
a9.setAttribute("style","color:black; font-family: Times New Roman")
a9.innerText = "ARTS"
a9.setAttribute("id","arts")
a9.addEventListener("click",function(){
    processData("arts")
})
file9.appendChild(a9)
nav_ul.appendChild(file9)

let file10 = document.createElement("li")
file10.setAttribute("class","nav-item")
let a10 = document.createElement("a")
a10.setAttribute("class","nav-link btn")
a10.setAttribute("style","color:black; font-family: Times New Roman")
a10.innerText = "FASHION"
a10.setAttribute("id","fashion")
a10.addEventListener("click",function(){
    processData("fashion")
})
file10.appendChild(a10)
nav_ul.appendChild(file10)

let file11 = document.createElement("li")
file11.setAttribute("class","nav-item")
let a11 = document.createElement("a")
a11.setAttribute("class","nav-link btn")
a11.setAttribute("style","color:black; font-family: Times New Roman")
a11.innerText = "FOOD"
a11.setAttribute("id","food")
a11.addEventListener("click",function(){
    processData("food")
})
file11.appendChild(a11)
nav_ul.appendChild(file11)

let file12 = document.createElement("li")
file12.setAttribute("class","nav-item")
let a12 = document.createElement("a")
a12.setAttribute("class","nav-link btn")
a12.setAttribute("style","color:black; font-family: Times New Roman")
a12.innerText = "TRAVEL"
a12.setAttribute("id","travel")
a12.addEventListener("click",function(){
    processData("travel")
})
file12.appendChild(a12)
nav_ul.appendChild(file12)

nav_bar_div.appendChild(nav_ul)

let main_div = document.createElement("div")
main_div.setAttribute("class","container")


nav_bar.appendChild(nav_bar_div)
container.appendChild(header_div)
container.appendChild(nav_bar)
document_body.appendChild(container)
document_body.appendChild(main_div)

let api_key = "La86Y4WXqAZn2JNPy6jQWsOMvOxY63cc"

async function getData(url){
    let data = await fetch(url)
    let arr = await data.json()
    return arr
}

async function processData(section){ 
	main_div.innerHTML = ""
    let arr = await getData(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${api_key}`)
    data = arr["results"]
    for(i of data){
        var container = document.createElement("div");
        container.setAttribute("class","container");
        container.setAttribute("style","margin-top:30px;width:100%;")

        var row = document.createElement("div");
        row.setAttribute("class","row");

        var card = document.createElement("div");
        card.setAttribute("class","card");
        card.setAttribute("style","width:100%;")

        var left = document.createElement("div");
        left.setAttribute("class","col-md-8 col-md-pull-4");

        var sec_card = document.createElement("div");
        sec_card.setAttribute("class","sectioncard");
        sec_card.innerHTML = section.toUpperCase();

        var titlecard = document.createElement("div");
        titlecard.setAttribute("class","titlecard");
        titlecard.innerHTML = i["title"]

        var datecard = document.createElement("div");
        datecard.setAttribute("class","datecard");
        datecard.innerHTML = i["published_date"]

        var abstractcard = document.createElement("div");
        abstractcard.setAttribute("class","abstractcard");
        abstractcard.innerHTML = i["abstract"];

        var continuereading = document.createElement("a");
        continuereading.setAttribute("class","continuereading");
        continuereading.setAttribute("href",`${i["url"]}`)
        continuereading.innerHTML = "Continue reading";

        left.append(sec_card,titlecard, datecard, abstractcard, continuereading);

        var right = document.createElement("div");
        right.setAttribute("class","col-md-4 col-md-push-4");
        right.setAttribute("style","text-align:right");

        var thumb_image = document.createElement("img");
        thumb_image.setAttribute("class","img-thumbnail");
        thumb_image.setAttribute("src",`${i["multimedia"][2]["url"]}`);
        console.log(i["multimedia"][1]["url"])

        right.append(thumb_image);

        var innerrow = document.createElement("div");
        innerrow .setAttribute("class","row card-body");

        innerrow.append(left,right)
        card.append(innerrow);
        row.append(card);
        container.append(row);
        main_div.append(container);
    }

}

 document.addEventListener("DOMContentLoaded", function(event) {
   document.getElementById("home").click()
  });
