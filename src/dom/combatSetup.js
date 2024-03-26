import helper from './helper'; 

const CombatSetup = (() => {
    const loadSetupContent = () => {
        helper.restorePage(); 

        const content = document.getElementById('content');
        
        content.appendChild(loadGameboard()); 
    }; 

    const loadGameboard = () => {
        const setupBoard = helper.create('div', { className: 'setup-board'} ); 

        const test = helper.create('h1', { textContent: 'its working'} ); 

        setupBoard.appendChild(test); 

        return setupBoard; 
    }; 

    return {
        loadSetupContent
    };
})(); 

export default CombatSetup; 