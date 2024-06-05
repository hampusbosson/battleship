import helper from './helper';
import Game from '../code/game';

const winnerModal = (() => {
  const loadWinnerModal = () => {
    const modal = helper.create('div', { className: 'winner-modal' });

    modal.appendChild(loadModalContent());

    return modal;
  };

  const closeModal = () => {
    const modal = document.querySelector('.winner-modal');
    modal.style.display = 'none';
  };

  const loadModalContent = () => {
    const modalContent = helper.create('div', {
      className: 'winner-modal-content',
    });

    const msgBox = helper.create('div', { className: 'winner-modal-message' });
    const winnerMessage = helper.create('div', {
      className: 'winner-message',
      textContent: `${Game.gameWinner()} WIN!`,
    });
    msgBox.append(winnerMessage, helper.loadCommanderIcon(), loadText());
    modalContent.appendChild(msgBox);

    return modalContent;
  };

  const loadText = () => {
    const text = helper.create('div', { id: 'winner-text' });

    return text;
  };

  const initTypingEffectWinner = () => {
    let message =
      Game.gameWinner() === 'COMPUTER'
        ? 'The enemy fleet has outmaneuvered you, Captain. Better luck next time!'
        : 'Mission accomplished, Captain! You truly are the master of the seas.';

    const addCloseButton = () => {
      const button = helper.create('button', {
        id: 'close-winner-modal-btn',
        textContent: 'New Battle',
      });
      const modalContent = document.querySelector('.winner-modal-content');
      setTimeout(() => {
        modalContent.appendChild(button);

        button.addEventListener('click', () => {
          closeModal();
          window.location.reload();
        });
      }, 800);
    };

    helper.typeWriter(message, 'winner-text', 30, () => {
      // Call addCloseButton after typeWriter is done typing
      addCloseButton();
    });
  };

  return { loadWinnerModal, initTypingEffectWinner };
})();

export default winnerModal;
