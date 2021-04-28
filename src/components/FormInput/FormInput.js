import { Form, Container } from 'react-bootstrap';

function FormInput({onKeyDown ,value, onChange}) {

    return (
        <div>   <Container>
                <Form onSubmit={e => e.preventDefault()}>
                    
                    <Form.Group >
                        <Form.Control type="text" placeholder="Add New Task" onKeyDown={onKeyDown} value={value} onChange={onChange} />
                    </Form.Group>
                </Form>
                </Container>
        </div>
    );
}

export default FormInput;
