import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'

const Notes = ({notes, setNotes}) => {

    function deleteNote(id){
        setNotes(notes.filter(n => n.id !== id))
    }


    return (
        <Container className='mt-3'>
            {notes.map(note => 
                <Card key={note.id}style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            {note.title}
                        </Card.Title>
                        <Card.Text>
                            {note.text}
                        </Card.Text>
                        <i class="fa-solid fa-trash float-right" onClick={() => deleteNote(note.id)}></i>
                    </Card.Body>
                </Card>
            )}
        </Container>
    )
}

export default Notes