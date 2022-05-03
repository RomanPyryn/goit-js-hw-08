import throttle from "lodash.throttle";

const FEEDBACK = 'feedback-form-state';

const formData = {};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textreaEl = document.querySelector('.feedback-form textrea')

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 1000));

savedDataOutput();

function onFormSubmit(e) { 
    e.preventDefault();
    console.log('submit');
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK);
};

function onFormInput(e) { 
    formData[e.target.name] = e.target.value;

    console.log(formData);
    localStorage.setItem(FEEDBACK, JSON.stringify(formData));
};

function savedDataOutput() { 
    const savedData = JSON.parse(localStorage.getItem(FEEDBACK));
   
    if (savedData) { 
        console.log(savedData);
        console.log(savedData.email);
        console.log(savedData.message);
        inputEl.textContent = savedData.email;
        textreaEl.textContent = savedData.message;
    };
}; 