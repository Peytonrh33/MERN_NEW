import React, {useState}from 'react';




const AuthorForm = (props) =>{
    const [firstName, setFirstName] = useState(props.author.firstName);
    const [lastName, setLastName] = useState(props.author.lastName);

    const {errors} = props;

    const handleSubmit =(e) =>{
        e.preventDefault();

        const authorInfo ={
            firstName,
            lastName
        };

        props.submitFormInformation(authorInfo);
    }

    return(
        <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <button type='submit'>Submit</button>
            </form>
    )
}

export default AuthorForm;