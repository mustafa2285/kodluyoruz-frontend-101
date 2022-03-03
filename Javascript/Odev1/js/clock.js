const promptName = prompt("Lütfen adınızı giriniz.")
document.querySelector("#myName").innerText = promptName.toUpperCase()



function showCurrentDayAndTime() {
    const date = new Date()
    let [hour, minute, second, day, monthDay, month, year] = [date.getHours(), date.getMinutes(), date.getSeconds(), 
        date.getDay(),date.getDate(), date.getMonth(), date.getFullYear()]
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]



    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    setTimeout(showCurrentDayAndTime, 1000);

    const infoTimer = `${hour}:${minute}:${second}-${days[day]} `
    const infoyear = `${monthDay} - ${months[month]} - ${year}`
    document.querySelector("#myClock").innerText = infoTimer.toUpperCase()
    document.querySelector("#year").innerText = infoyear.toUpperCase()
}
showCurrentDayAndTime();
