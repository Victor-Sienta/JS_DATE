function task1(){
    let dataStr = prompt("Введите дату рождения в формате '2000-01-01'");
    datBD=new Date(dataStr);
    today = new Date();
    let ageYears = Math.round((today.getTime() - datBD.getTime())/(1000*60*60*24*365));
    let ageMonths = Math.round((today.getTime() - datBD.getTime())/(1000*60*60*24*30));
    let ageDays = Math.round((today.getTime() - datBD.getTime())/(1000*60*60*24));
    alert("Возраст: "+ "\n" + ageYears + "г." + "\n" + ageMonths + "мес." + "\n" + ageDays + "дн.")
}