import classes from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal({ children, title, onClose }: ModalProps) {
  const { bg_modal, modal } = classes;

  return (
    <>
      <div className={bg_modal} onClick={onClose} />
      <div className={modal}>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
}
