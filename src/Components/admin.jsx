import React, {useState} from 'react';



function Admin(){
    const [category, setCategory] = useState("");
    const [Topic, setTopic] = useState("");
    const [Content, setContent] = useState("");

    return(
        <form  className="loginForm">
            <label>
            Category:
            <input type="text" value={category} onChange={e => setCategory(e.target.value)}/>
        </label>
        <label>
            Category:
            <input type="text" value={category} onChange={e => setCategory(e.target.value)}/>
        </label>
        <label>
            Topic:
            <input type="text" value={Topic} onChange={e => setTopic(e.target.value)}/>
        </label>
        <label>
            Content:
            <textarea type="text" value={Content} onChange={e => setContent(e.target.value)}/>
        </label>
            <input type="submit" value="Submit"  />
    </form>
    )
}



export default Admin;