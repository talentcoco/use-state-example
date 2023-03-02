import React, {useState} from 'react';


const Name = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');


    const firstNameHandler = (e) => {
        //event.target.value
        const {value} = e.target;    

        console.log(value.length);
        if (value.length <5) {
            setFirstName(value);
        }
    }
    const lastNameHandler = (e) => {
        //event.target.value
        const {value} = e.target;
        setLastName(value);

    }

    const submitHandler = (e) => {
        //event.target.value
        e.preventDefault();
        
    }

     return (
        <div>

        <h1> 
        Please enter your first name and last name
        </h1>

        <form>
        <label>
            Enter your first name: 
            <input type="text" 
            placeholder="First Name"
            onChange={firstNameHandler}
            value={firstName}
            />
        </label>
        <br/>
        <br/>
        <label>
            Enter your last name: <input type="text" 
            placeholder="Last Name"
            onChange={lastNameHandler}
            value={lastName}
            />
        </label>


        <br/>
        <br/>

        <button type="submit"
        onClick={submitHandler}

        > SUBMIT</button>
        </form>

        <h3>
        Your first name is {firstName} and your last name is {lastName}

        </h3>
        </div>


     )

}
export default Name;