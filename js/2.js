function task1(){
    today = new Date();
    nextDate = new Date("2023-12-31")
    daysLeftNY = Math.round((nextDate.getTime() - today.getTime())/(1000*60*60*24));
    alert(`До Нового Года осталось: ${daysLeftNY} дн.`)
}