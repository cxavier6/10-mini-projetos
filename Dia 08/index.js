const randomNumber = Math.round(Math.random() * 100);

$("#btn").on("click", function() {
    if(number.value == randomNumber) {
        $('#resposta').html("<p><strong>Você acertou!</strong></p>") 
    } else if(number.value > randomNumber) {
        $('#resposta').html(`<p>Tente um número menor que ${number.value}.</p>`)
    } else if(number.value < randomNumber) {
        $('#resposta').html(`<p>Tente um número maior que ${number.value}.</p>`)
    }
})
  
function resetaNumber() {
    $("#number").val("")
}  

resetaNumber();


