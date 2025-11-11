import exprees from 'express';


const app = exprees();

app.use(exprees.json());

app.get('/',(req,res) => {
    return res.status(200).json({message:'server is listening'});
});