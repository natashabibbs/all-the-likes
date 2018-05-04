window.onload = function (){

    var likeCount = localStorage.getItem("like");
    var loveCount = localStorage.getItem("love");
    var laughCount = localStorage.getItem("laugh");

    var likeImage = document.getElementById("like-image");
    var loveImage = document.getElementById("love-image");
    var laughImage = document.getElementById("laugh-image");

    var likeText = document.getElementById("like-count");
    var loveText = document.getElementById("love-count");
    var laughText = document.getElementById("laugh-count");
    
    var clearButton = document.getElementById("clear");

    likeText.innerHTML = likeCount;
    loveText.innerHTML = loveCount;
    laughText.innerHTML = laughCount;

    likeImage.addEventListener("click", function(){
        likeCount++;
        likeText.innerHTML = likeCount;
        localStorage.setItem("like", likeCount);
        console.log("Like Count:", likeCount);
    })
    console.log(likeImage);

    loveImage.addEventListener("click", function(){
        loveCount++;
        
        localStorage.setItem("love", loveCount);
        loveText.innerHTML = loveCount;
        console.log("Love Count:", loveCount);
    })

    laughImage.addEventListener("click", function(){
        laughCount++;
        laughText.innerHTML = laughCount;
        localStorage.setItem("laugh", laughCount);
        console.log("Laugh Count:", laughCount);
    })

    clearButton.addEventListener("click", function(){
        localStorage.clear();
        console.log("Hello");
    })
}