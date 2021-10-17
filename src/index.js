
import Navbar from "./Navbar.js";

window.addEventListener("load",()=>{
    const btn = document.getElementById("btn");
      const fn = ()=>{
        displayContainer();
       }
       const debouncedCallback = debouncer(()=>fn(),1000)
       btn.addEventListener("click",debouncedCallback)
    // btn.addEventListener("click", displayContainer);

})

function debouncer(fn, delay){
    let id ;
    return ()=>{
      id && clearTimeout(id);
      id = setTimeout(()=>fn(),delay);
   }
}

function displayContainer(){
    // const search = "Fashion";
    const search = document.getElementById('search').value;
    getData(search)
            // })
}

function getData(search){
    return fetch(`https://api.unsplash.com/photos?&query=${search}&client_id=p7AX1NyU10zWftayzyCe44teq3OyOLpS4UkQDFsf7ss`)
    .then(res=> res.json())
    .then(res=>{
        const container = document.createElement("div");
        container.innerHTML = "";
        const data=res;
        for(let i=0;i<data.length;i++){
            container.append(createCards(data[i],search));
        }

       document.body.append(container);
    })
}

const createCards = (data,search) => {
       console.log(data);
        var div = document.createElement('div');
        div.style.backgroundColor = "aqua";
        div.style.padding = "20px";
        var img = document.createElement('img');
        var p = document.createElement('p');
        img.src = `${data.urls.full}`;
        img.style.height = "600px";
        img.style.width = "100%";
        p.textContent = "Category : " + search;
        p.style.textAlign = "center";
        p.style.fontSize = "20px";
        div.append(img,p);
    return div;
}

// displayContainer();
// document.getElementById("btn").addEventListener("click", displayContainer);

document.body.append(Navbar());