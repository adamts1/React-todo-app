import { Container, Button } from 'react-bootstrap';
import './SortSection.css'


function SortSection({onClick, coubnterComplete}) {

    return (
        <div className="c-sortsection">
            <div className="bold"><span>{coubnterComplete}</span> Items Left</div>
            <div className="button-section">
                <Button onClick={onClick} variant="outline-dark">All</Button>
                <Button onClick={onClick} variant="outline-dark">Active</Button>
                <Button onClick={onClick} variant="outline-dark">Completed</Button>
            </div>
        </div>
    );
}

export default SortSection;
