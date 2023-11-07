function task1(){
    today = new Date();
    d = today.getHours()
    if (d > 3 && d <11)
        {
        alert("Доброе утро");
        }
    else if (d > 12 && d<17)
        {
        alert("Добрый день");
        }
    else
        {
        alert("Добрый вечер");
        }
}