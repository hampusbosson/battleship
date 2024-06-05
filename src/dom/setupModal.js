import helper from './helper';
import pregame from './pregame';

const SetupModal = (() => {
  const loadSetupModal = () => {
    const modal = helper.create('div', { className: 'setup-modal' });

    modal.appendChild(loadModalContent());

    return modal;
  };

  const closeModal = () => {
    const modal = document.querySelector('.setup-modal');
    modal.style.display = 'none';
  };

  const loadModalContent = () => {
    const modalContent = helper.create('div', {
      className: 'setup-modal-content',
    });
    const msgBox = helper.create('div', { className: 'modal-message' });
    msgBox.append(helper.loadCommanderIcon(), loadText());
    modalContent.appendChild(msgBox);

    return modalContent;
  };

  const loadText = () => {
    const text = helper.create('div', { id: 'welcome-text' });

    return text;
  };

  const initTypingEffectSetup = () => {
    const message = `Welcome Captain ${pregame.getPlayerName()}!`;
    const secondMessage =
      'Plan our formation by selecting the axis and ship and drop it on the map.';

    const addCloseButton = () => {
      const button = helper.create('button', {
        id: 'close-modal-btn',
        textContent: 'Yes Sir!',
      });
      const modalContent = document.querySelector('.setup-modal-content');
      setTimeout(() => {
        modalContent.appendChild(button);

        button.addEventListener('click', () => {
          closeModal();
        });
      }, 800);
    };

    helper.typeWriter(message, 'welcome-text', 30, () => {
      setTimeout(() => {
        let text = document.getElementById('welcome-text');
        text.innerHTML = '';
        helper.typeWriter(secondMessage, 'welcome-text', 20, addCloseButton);
      }, 1000);
    });
  };

  return {
    loadSetupModal,
    initTypingEffectSetup,
  };
})();

export default SetupModal;
