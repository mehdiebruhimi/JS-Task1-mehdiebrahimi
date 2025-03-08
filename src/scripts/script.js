const $ = document;

const showWelMsg = () => {
    const msgElem = $.getElementById("welcomeMsg");
    msgElem.innerText = "به دنیای جاوااسکریپت خوش آمدید.";
    msgElem.style.color = "purple";
}



const createPersonObject = () => {
    let person = {
        name: "mehdi",
        age: 23,
        job: "web designer"
    }

    for (key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}



const showCars = () => {
    const carList = ["BMW", "Mercedes-Benz", "Toyota", "Audi", "Tesla"];

    for (let i=0; i<carList.length; i++) {
        console.log(carList[i]);
    }
}



const showDateInfo = () => {
    const nowDate = new Date();
    
    const webDate = nowDate.toLocaleDateString();
    const webTime = nowDate.toLocaleTimeString();
    
    const dateElem = $.getElementById("dateMsg");
    const timeElem = $.getElementById("timeMsg");

    dateElem.innerText = webDate;
    timeElem.innerText = webTime;
}



const showLoginInfo = () => {
    const phoneNumber = $.getElementById("userPhone").value;
    const password = $.getElementById("userPassword").value;

    console.log(`PhoneNumber: ${phoneNumber} - Password: ${password}`);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(password)) {
        alert("رمز عبور امن است")
    }
    else {
        alert("رمز عبور امن نیست")
    }
}