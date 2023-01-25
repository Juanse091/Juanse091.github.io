var counter = 0;

document.getElementById("plus").addEventListener("click", function(){
    counter++;
    document.getElementById("counter").value = counter;
    
});

document.getElementById("minus").addEventListener("click", function(){
    counter--;
    document.getElementById("counter").value = counter;
});
