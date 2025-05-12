const express = require("express");;
const app = express();

app.use(express.urlencoded({extended:true}));
//login form
app.get('/',(req,res) => {
    res.send(`
    <h2>Login</h2>
    <form method="POST" action="/login">
      <input name="userid" placeholder="User ID" required><br><br>
      <input name="password" type="password" placeholder="Password" required><br><br>
      <button type="submit">Login</button>
    </form>
        `);
});

//handle login

app.post('/login',(req,res)=>{
    const {userid,password} = req.body;
    if(userid =="admin"&& password == "admin123") {
        res.send('<h2>Login Successful ✅</h2>')
    }
    else {
        res.send('<h2>Invalid Credentials ❌</h2>');
    }
});


app.listen(3030,()=>{
    console.log('http://localhost:3030');
});