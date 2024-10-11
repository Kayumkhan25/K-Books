# K-Books

for database

<ul>
<li>install mongoose</li>
<li>import mongoose in index.js</li>
<li>provide url in .env file. To use .env in index.js install & import dotenv & write it in index.js dotenv.config();</li>
<li> store mongourl in a variable in index.js using 'process.env.mongoUrl'</li>
<li>to connect database -
    try {
    mongoose.connect(URL);
    console.log("Database Connected");
    } catch (error) {
        console.log("Get error: ", error);
    }
</li>
<li>to define schema create a folder model and inside that folder create a file </li>
<li>for schema- 
    const Schema = mongoose.Schema({
    id: Number,
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String
})

const Book = mongoose.model("Book", Schema);

export default Book;
</li>
<li>after defining schema create a controller file inside a controller folder. Import model in this.</li>
<li>For controller- 

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        // 200: success
        res.status(200).json(book);
    } catch (error) {
        console.log("error:", error);
        // 500: internal server error
        res.status(500).json(error);
    }
}
</li>
<li>then create a route file inside a route folder</li>
<li>After that on that file -

import express from "express";
import { getBook } from "../controller/bookController.js";

const router = express.Router();

router.get("/", getBook);

export default router;
</li>
 
<li>import route file in index.js</li>
<li>app.use("/book", bookRoute);</li>
<li>the data will not send from backend to frontend as both are running on different port</li>
<li>so install & import cores in index.js and write 
app.use(cors()); in index.js
 </li>
 
 <li>For frontend install and import axios for fetch data from backend</li>
 <li>On your frontend file define an [] in a variable using useState()</li>
 <li>use useEffect(() => {
    const functionName = async() => {
        try{
            const res = await axios.get("http://localhost:8080/book"); // as we use book route in backend
            setVariable(res.data)
        }
        catch(err){
            console.log(err);
        }
    };
    functionName();
 }, []) 
 </li>
 <li>after tht map your data or however you want to show</li>
