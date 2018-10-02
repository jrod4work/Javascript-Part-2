$(document).ready(function(){    
    $(".big").hover(function(){
        $(this).css({height: '+=2%', width: '+=10px'}); //this 
    }, function(){
        $(this).css({height: "", width: ""}); //this 
    });
});

$(document).ready(function(){    
    $(".big1").hover(function(){
        $(this).css({height: '+=2%', width: '+=10px'}); //this 
    }, function(){
        $(this).css({height: "", width: ""}); //this 
    });
});

$(document).ready(function(){    
    $(".big2").hover(function(){
        $(this).css({height: '+=2%', width: '+=10px'}); //this 
    }, function(){
        $(this).css({height: "", width: ""}); //this 
    });
});

let newRequest =  new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let myObj= JSON.parse(this.responseText);
        for (var i=0; i < myObj.length; i++) {
            addRepo(myObj[i].name);
        }
    }
};

newRequest.open("GET","https://api.github.com/users/jrod4work/repos",true)
newRequest.send();

function addRepo(name){
    var node = document.createElement("li");
    var textNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("repoList").appendChild(node);
}

/* function loadRepo() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            results = JSON.parse(this.responseText);
            for (var i = 0; i < results.length; i++) {
                console.log(results[i].name);
                console.log(results);
                var ul = document.getElementById('repos');
                var li = document.createElement('li');
                var a = document.createElement('a');
                li.appendChild(document.createTextNode(results[i].name));
                a.appendChild(li);
                a.setAttribute('href', results[i].html_url);
                ul.appendChild(a);
            }
        }
    };
    xhttp.open('GET', 'repo link here', true);
    xhttp.send();
} */