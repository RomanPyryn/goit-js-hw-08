import throttle from "lodash.throttle";

const FEEDBACK = 'feedback-form-state';

const formData = {};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) { 
    formData[e.target.name] = e.target.value;

    localStorage.setItem(FEEDBACK, JSON.stringify(formData));
};

const savedData = JSON.parse(localStorage.getItem(FEEDBACK));

if (savedData) {
        savedData.email ? inputEl.value = savedData.email : inputEl.value = '';
        savedData.message ? textareaEl.value = savedData.message : textareaEl.value = '';
    };

function onFormSubmit(e) { 
    e.preventDefault();
    savedData ? console.log('Відпрацьовує savedData', savedData) : console.log('Відпрацьовує formData', formData);
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK);
};


    