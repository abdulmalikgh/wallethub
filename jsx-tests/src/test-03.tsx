/**
 * In the following React template, create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. 
 * Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered.
 * This way the application can function as a simple phone book. 
 * When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:
 * 
    First name = Coder
    Last name = Byte
    Phone = 8885559999
 * 
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
    table: {
        borderCollapse: "collapse"
    },
    tableCell: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px'
    },
    form: {
        container: {
            padding: '20px',
            border: '1px solid #F0F8FF',
            borderRadius: '15px',
            width: 'max-content',
            marginBottom: '40px'
        },
        inputs: {
            marginBottom: '5px'
        },
        submitBtn: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: 'lightseagreen',
            fontSize: '14px',
            borderRadius: '5px'
        }
    }
} as const;

function PhoneBookForm({ addEntryToPhoneBook, setFormData }) {
    const [firstname, setFirstname] = useState('Coder')
    const [lastname, setLastname] = useState('Byte')
    const [phone, setPhone] = useState('8885559999')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formObj = {
            firstname,
            lastname,
            phone
        }
        setFormData( form => [...form, formObj])
    }
    return (
        <form onSubmit={e => handleSubmit(e)} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userFirstname'
                name='userFirstname'
                type='text'
                value={firstname}
                required
                onChange={(e) => setFirstname(e.target.value) }
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userLastname'
                name='userLastname'
                type='text'
                value={lastname}
                required
                onChange={(e) => setLastname(e.target.value) }
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userPhone'
                name='userPhone'
                type='text'
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value) }
            />
            <br />
            <input
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
    )
}

function InformationTable({ formData }) {
    return (
        <table style={style.table} className='informationTable'>
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>       
                {
                    formData && formData.
                    sort((a,b) => a.lastname.localeCompare(b.lastname)).
                    map((form) => (
                        <tr>
                            <td>
                                {form.firstname}
                            </td> 
                            <td>
                                {form.lastname}
                            </td> 
                            <td>
                                {form.phone}
                            </td> 
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

function Application(props) {
    const [formData, setFormData] = useState([])
    return (
        <section>
            <PhoneBookForm addEntryToPhoneBook="" setFormData={setFormData} />
            <InformationTable formData={formData}/>
        </section>
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('test-03')
);