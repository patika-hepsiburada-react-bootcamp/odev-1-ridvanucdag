import getData from './lib/service.js';

//User Id'si 1 olan kullanıcın bilgilerini çekmiş olduk

const data = getData(1);

data.then((result) => console.log(result));