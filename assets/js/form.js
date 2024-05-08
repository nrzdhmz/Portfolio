const input = document.getElementById("name");
const labels = document.querySelectorAll(".label")
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const next = document.getElementById("next");
const send = document.getElementById("send");

let step = 0;
const data = [];

function getTextForCurrentStep() {
  const currentStepData = data.find((item) => item.step === step);
  return currentStepData ? currentStepData.text : '';
}

function updateDataForCurrentStep(text) {
  const currentStepData = data.find((item) => item.step === step);
  if (currentStepData) {
    currentStepData.text = text;
  } else {
    data.push({ step, text });
  }
}

label1.addEventListener("click", () => {
  step = 0; 
  input.disabled = false;
  input.value = getTextForCurrentStep(); 
});

label2.addEventListener("click", () => {
  step = 1; 
  input.disabled = false;
  input.value = getTextForCurrentStep(); 
});

label3.addEventListener("click", () => {
  step = 2; 
  input.disabled = false;
  input.value = getTextForCurrentStep(); 
});

function toggleInputType() {
  const currentText = input.value.trim();

  if (step === 0) {
    const isNameValid = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s?)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(currentText);
    if (currentText.length > 0 && isNameValid) {
      updateDataForCurrentStep(currentText); 
      input.value = "";
      input.type = "email";
      label1.textContent = data[0].text; 
      label2.style.display = "block";
      step++; 
    } else {
      next.classList.remove("submit-available");
      next.classList.add("submit-error");
    }
  } else if (step === 1) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|aol\.com)$/.test(currentText);
    // const emailRegex = /^([\w]*[\w\.]*(?!\.)@gmail.com)$/.test(currentText);

    if (emailRegex) {
      updateDataForCurrentStep(currentText); 
      input.value = "";
      input.type = "text";
      label2.textContent = data[1].text; 
      label3.style.display = "block";
      step++; 
    } else {
      next.classList.add("submit-error");
    }
  } else if (step === 2) {
    if (currentText.length > 2) {
      updateDataForCurrentStep(currentText); 
      label3.textContent = data[2].text; 
      step++; 
      checkSteps(); 
    } else {
      next.classList.add("submit-error");
    }
  }
}


function checkSendAvailability() {
  const currentText = input.value.trim();
  const isNameValid = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s?)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(currentText);
  if(step === 0){
    send.classList.remove("submit-available");
    send.classList.add("submit-unAvailable");
    next.classList.remove("submit-available");
    next.classList.add("submit-unAvailable");
    if(currentText.length > 0 && isNameValid){
      next.classList.remove("submit-unAvailable");
      next.classList.add("submit-available");
    }else{
      next.classList.remove("submit-available");
      next.classList.remove("submit-error");
      next.classList.add("submit-unAvailable");
    }
  }
  else if(step === 1){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/.test(currentText);
    if (emailRegex) {
      next.classList.remove("submit-error");
      next.classList.add("submit-available");
    }else{
      next.classList.remove("submit-available");
      next.classList.add("submit-unAvailable");
    }
  }
  else if (step === 2) {
    next.classList.remove("submit-available");
    next.classList.add("submit-unAvailable");
    if(currentText.length > 2){
      next.classList.remove("submit-unAvailable");
      next.classList.add("submit-available");
    }
    else{
      send.classList.remove("submit-available");
      send.classList.add("submit-unAvailable");
      next.classList.remove("submit-error");
      next.classList.add("submit-unAvailable");
    }
  }
}

function checkSteps() {
  if (step === 3) {
    send.classList.remove("submit-unAvailable");
    send.classList.add("submit-available");
    next.classList.remove("submit-available");
    next.classList.add("submit-unAvailable");
    input.disabled = true;
  } else {
    input.disabled = false; 
  }
}


function sendMail() {

  if (!send.classList.contains("submit-available")) {
    console.log("Cannot send the message. Check the form inputs.");
    return;
  }

  const from_name = data.find((item) => item.step === 0)?.text;
  const email_id = data.find((item) => item.step === 1)?.text;
  const message = data.find((item) => item.step === 2)?.text;

  if (from_name && email_id && message) {
    const params = {
      from_name,
      email_id,
      message,
    };

    emailjs.send("service_0cmyo62", "template_cbso9im", params).then((res) => {
      alert("Success! " + res.status);
      resetForm();
    });
  } else {
    console.log("Incomplete data. Cannot send email.");
  }
}

function resetForm() {
  step = 0;
  data.length = 0;
  input.type = "text";
  input.value = "";
  input.disabled = false; 
  label1.textContent = "Fill your full name";
  label2.textContent = "now enter your email address";
  label3.textContent = "now write your awesome message :)";
  label2.style.display = "none"
  label3.style.display = "none"
  send.classList.remove("submit-unAvailable");
  send.classList.add("submit-available");
}

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
next.addEventListener("input", checkSendAvailability);
