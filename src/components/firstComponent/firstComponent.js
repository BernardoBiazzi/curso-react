import './firstComponent.css';
import AnotherComponent from '../anotherComponent/anotherComponent';

function FirstComponent() {
    return (
        <div className="firstComponent">
            <p>First Component</p>
            <AnotherComponent></AnotherComponent>
            <button onClick={() => {console.log('teste')}}>Botão</button>
        </div>
    );
}

export default FirstComponent;