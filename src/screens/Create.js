import React, { useState} from 'react'
import { Form, Container} from 'react-bootstrap'
import uniqid  from 'uniqid'

const Create = ({setNotes}) => {
    const [form,setForm] = useState({ title: ' ', text:' '})
    const [id, setId] = useState(uniqid())
    function handleChange(event) {
        const {value, name} = event.target
        setForm({ ...form, [name]: value, id})
        console.log(form)
    }

    function addNote() {
        if(form.title !== '' || form.text !== ''){
            setNotes(note => [...note, form])
            setId(uniqid())
            setForm({ title: ' ', text:' '}) 
        }
        
    }
  return (
    <Container>
        <Form className='mt-3' style={{width:"50%"}}>
             <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={handleChange} value={form.title} name="title" type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Text</Form.Label>
                <Form.Control onChange={handleChange} value={form.text} name="text" type="text" placeholder="Enter text" />
            </Form.Group>
        </Form>
        <br></br>
        <button onClick={addNote} className='btn btn-dark'>Add Note</button>
    </Container>
  )
}
export default Create