var now = new Date()
var hours = now.getHours()

console.log(`Agora são exatamente ${hours} horas.`)
if(hours >=6 && hours < 12){
    console.log('Bom dia!')
}else if(hours < 18){
    console.log('Boa tarde!')
}else if(hours < 00){
    console.log('Boa noite!')
}else{
    console.log('Boa madrugada!')
}