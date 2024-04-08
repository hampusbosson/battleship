import helper from './helper';

const SetupModal = (() => {

    const loadSetupModal = () => {
        const modal = helper.create('div', { className: 'setup-modal' });
        const modalContent = helper.create('div', { className: 'setup-modal-content' });

        modal.appendChild(modalContent);

        return modal;
    };

    return {
        loadSetupModal
    };
})(); 

export default SetupModal;