let myPromise = new Promise(function(myPromise, myReject) {
    setTimeout(function() {myReject("I am afraid there is an error!");}, 3000);
});
myPromise.then(function(error) {
    document.getElementById("demo").innerHTML = error;
});