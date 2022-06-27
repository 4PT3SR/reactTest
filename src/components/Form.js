import {useState,useEffect} from 'react'
function Form () {
    const [username,setUsername] = useState(window.localStorage.getItem('username')|| '');
    const submitHandler = (event) => {
        event.preventDefault();
        console.dir(event.target.elements.username.value);
    }

    const changeHandler =  (event) => {
        let usernameInput = event.target.value
        setUsername(usernameInput.toLowerCase());
    }

    useEffect(()=> {
        window.localStorage.setItem('username',username);
    })
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor='username'>Username:</label>
                <input type="text" id='username' onChange={changeHandler} value={username}/>
                <button type="submit">Submit</button>
            </form>
            <p>Hello {username}</p>
        </div>
    )
}

export default Form