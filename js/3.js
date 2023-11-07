function task1(){
    let den= ["воскресенье","понедельник", "вторник", "среда","четверг", "пятница", "суббота"];
    let dat=new Date();
    alert(`Вчера: ${den[dat.getDay()-1]} \nСегодня: ${den[dat.getDay()]} \nЗавтра: ${den[dat.getDay()+1]}`)
}