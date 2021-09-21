import axios from 'axios';

const getData = async (userID) =>{
    try
    {
        //Aşağıda belirttiğimiz değerlere göre verileri getirmiş olduk
        //Önce UserId aldık
        const {data:users} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
        //Bu id'nin postlarını tutup get ettik.
        const {data:posts} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
        //User ve Post verilerini return ettik
        return { users, posts }
    }
    catch(err)
    {
        //Try kısmındaki code ile sonuç alamama ihtimalinde, kullanıcıya catch kısmında err.mesage loglamış olduk.
        console.log(err.message);
    }
    
}

export default getData;