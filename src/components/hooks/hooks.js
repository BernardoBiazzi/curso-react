import { useState, useEffect } from "react";

const Hooks = () => {
    const [idade, setIdade] = useState(40);

    const changeAge = () => {
        // se eu só seto idade não atualiza, é quase que um changeDetectorRef.detectChanges()
        setIdade(45);
    };

    // praticamente um ngOnChanges
    useEffect(() => {
        console.log('mudou idade', idade);
    });

    return (
        <div>
            <p>Idade: {idade} anos</p>
            <button onClick={changeAge}>Mudar idade</button>
        </div>
    );
}

export default Hooks;