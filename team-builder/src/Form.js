import { useState } from 'react';

const initialFormData = {
    name:'',
    email:'',
    role:'Backend Developer'
};

export default function Form(props) {
    const [formData, setFormData] = useState(initialFormData);

    function updateForm(event){
        setFormData({...formData, [event.target.name]: event.target.value});
    };
    function submit(event){
        event.preventDefault();
        props.setTeamMembers([...props.teamMembers, {...formData}]);
        setFormData(initialFormData);
    };

    return (
        <div>
            <h2>Add a Team Member</h2>
            <form onSubmit={submit}>
                <label>Name: <input value={formData.name} type='text' name='name' onChange={updateForm} placeholder='John Doe' required/></label>
                <br/>
                <label>Email: <input value={formData.email} type='email' name='email' onChange={updateForm} placeholder='email123@email.com' required/></label>
                <br/>
                <label>Role: <select value={formData.role} name='role' onChange={updateForm}>
                    <option>Backend Developer</option>
                    <option>Frontend Developer</option>
                    <option>Fullstack Developer</option>
                    <option>Team Lead</option>
                    <option>Intern</option>
                    <option>Designer</option>
                    <option>Quality Assurance</option>
                </select></label>
                <br/>
                <input type='submit'/>
            </form>
        </div>
    )
}