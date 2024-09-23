import React from 'react';
import style from './Modal.module.css';

export default function Modal({ isOpen, onClose, onConfirm, text }) {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const onConfirmAndClose = () => {
    onConfirm();
    onClose();
  };

  return (
    <section className={style.overlay} onClick={handleOverlayClick}>
      <div className={style.modal}>
        <h3 className={style.title}>{text} 목록을 모두 삭제할까요?</h3>
        <div className={style.buttons}>
          <button className={style.button_close} onClick={onClose}>
            취소
          </button>
          <button className={style.button_confirm} onClick={onConfirmAndClose}>
            삭제
          </button>
        </div>
      </div>
    </section>
  );
}
