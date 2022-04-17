const editable = () => {
    document.getElementById("contentEdit").setAttribute("contenteditable", "true")
    document.getElementById("titleEdit").setAttribute("contenteditable", "true")
    document.getElementById("contentEdit").setAttribute("class", "newClass contenteditable")
    document.getElementById("titleEdit").setAttribute("class", "titleClass h2 contenteditable")
    document.getElementById("editToSave").setAttribute("value", "Save")

}

var count = 0;

const likeBtn = () => {
    document.getElementById("like").setAttribute("value", "Liked")
    // document.getElementById("liked").innerHTML = "1 person liked this!";
    // var btn = document.getElementById("like");
    // btn.onclick = function () {
    count++;
    if (count == 1) {
        document.getElementById("liked").innerHTML = count + " person liked this!"
    }
    else {
        console.log(count)
        document.getElementById("liked").innerHTML = count + " people have liked this!"
    }

    // }
}

const commentBtn = () => {
    var values = document.getElementById("commentVal").value
    console.log(values)

    // const div = document.createElement("div");
    // div.innerText = values;
    // document.body.prepend(div);

    // div.prepend(values);

    // console.log(div.textContent); // "Headline: Some text"


    document.getElementById("commentContainer").innerHTML += ('<div class="container"><div class="card"><div class="card - body"><span>' + values + '</span></div></div></div>')

    // document.getElementById("commentContainer").prepend('<div >' + values + '</div>')

    // document.getElementById("commentContainer").innerHTML += '<div class="card-body"><span class="card-title">' + values + '</span></div>'
}


