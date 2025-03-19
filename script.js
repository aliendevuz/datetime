const datetime = document.getElementById("datetime");
const age = document.getElementById("age");
const muchal = document.getElementById("muchal");
const birthday = document.getElementById("birthday");
const burj = document.getElementById("burj");
const left = document.getElementById("left");

function calculate() {
    const date = new Date(datetime.value);
    if (isNaN(date)) {
        alert("Iltimos, tug'ilgan kuningizni kiriting!");
        return;
    }
    const now = new Date();
    
    let years = now.getFullYear() - date.getFullYear();
    if (now.getMonth() < date.getMonth() || (now.getMonth() === date.getMonth() && now.getDate() < date.getDate())) {
        years--;
    }
    age.textContent = years;
    
    const muchalNames = ["Sichqon", "Sigir", "Yo'lbars", "Quyon", "Ajdar", "Ilon", "Ot", "Qo'y", "Maymun", "Tovuq", "It", "Tovuq"];
    muchal.textContent = muchalNames[(date.getFullYear() - 4) % 12];
    
    const months = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"];
    birthday.textContent = `${date.getDate()} - ${months[date.getMonth()]}`;
    
    const burjNames = [
        ["O'g'oqotar", 19], ["Qovg'a", 18], ["Baliq", 20], ["Qo'y", 19], ["Buzoq", 20], ["Egizaklar", 20],
        ["Qisqichbaqa", 22], ["Arslon", 22], ["Parizod", 22], ["Tarozi", 22], ["Chayon", 21], ["O'qotar", 21], ["O'g'oqotar", 31]
    ];
    const month = date.getMonth();
    const day = date.getDate();
    burj.textContent = day > burjNames[month][1] ? burjNames[month + 1][0] : burjNames[month][0];
    
    const nextBirthday = new Date(now.getFullYear(), date.getMonth(), date.getDate());
    if (nextBirthday < now) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }
    const diffTime = nextBirthday - now;
    left.textContent = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}