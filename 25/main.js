const data = new Date('2023-07-02 14:30:00'); // 01/01/1970 Timestamp unix ou época unix

console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getHours());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());

console.log(data.toString());

// console.log(data.getDate());

//Exibe os milessegundo até a data de hoje
console.log(Date.now());