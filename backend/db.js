const mongoose=require('mongoose');
const mongoURL="mongodb+srv://aryansri666:Carrerbegins@cluster0.lmtwp6a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURL,{//mongoose se connection is happening not using .env
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});
module.exports=db;