const numeros = [3, 1, 1, 10, 5, 7, 2];


const suma = numeros.reduce((total, numero) => total + numero, 0);


const menor = Math.min(...numeros);


const mayor = Math.max(...numeros);


const mensaje = `La suma de los números es ${suma}. El número menor es ${menor} y el número mayor es ${mayor}.`;


document.querySelector('p').textContent = mensaje;