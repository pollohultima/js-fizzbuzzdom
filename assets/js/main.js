const ul = document.querySelector('ul.list');


for (let i = 1; i <= 100; i++) {

    if (i % 15 === 0) {
        const macaco = `<li class = "red box box--${i}">FizzBuzz</li>`;
        ul.innerHTML += macaco;

    } else if (i % 5 === 0) {
        const macaco = `<li class = "yellow box box--${i}">Buzz</li>`;
        ul.innerHTML += macaco;

    } else if (i % 3 === 0) {
        const macaco = `<li class = "green box box--${i}">Fizz</li>`;
        ul.innerHTML += macaco;

    } else {
        const macaco = `<li class = "box box--${i}">${i}</li>`;
        ul.innerHTML += macaco;
    }
}

