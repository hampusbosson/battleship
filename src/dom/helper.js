const helper = (() => {
    const restorePage = () => {
        const content = document.getElementById('content');
        content.innerHTML = ''; 
    };

    const create = (type, data) => {
        if (!type) console.log('missing type'); 

        const element = document.createElement(type); 

        for (const [key, value] of Object.entries(data)) {
            element[key] = value; 
        }

        return element; 
    };


    return {
        create,
        restorePage
    };
})();

export default helper; 