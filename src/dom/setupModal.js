import helper from './helper';
const player = require('../code/player.js');

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
    msgBox.append(loadCommanderIcon(), loadText());
    modalContent.appendChild(msgBox);

    return modalContent;
  };

  const loadCommanderIcon = () => {
    const iconPath = '../assets/icons/commander.png';
    const iconContainer = helper.create('div', {
      className: 'commander-icon-box',
    });
    const commanderIcon = helper.create('img', {
      src: iconPath,
      className: 'commander-icon',
    });

    iconContainer.appendChild(commanderIcon);

    return iconContainer;
  };

  const loadText = () => {
    const text = helper.create('div', { id: 'welcome-text' });

    return text;
  };

  const typeWriter = (text, elementId, typingSpeed, callback) => {
    let i = 0;
    const element = document.getElementById(elementId);
    element.classList.add('typing-cursor');

    const typing = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, typingSpeed);
      } else {
        element.classList.remove('typing-cursor');
        if (typeof callback === 'function') {
          callback();
        }
      }
    };

    typing();
  };

  const initTypingEffect = () => {
    const message = `Welcome Captain ${player.getPlayerName()}!`;
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

    typeWriter(message, 'welcome-text', 30, () => {
      setTimeout(() => {
        let text = document.getElementById('welcome-text');
        text.innerHTML = '';
        typeWriter(secondMessage, 'welcome-text', 20, addCloseButton);
      }, 1000);
    });
  };

  return {
    loadSetupModal,
    initTypingEffect,
  };
})();

export default SetupModal;
