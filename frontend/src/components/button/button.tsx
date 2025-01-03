import cl from './button.module.scss'

interface ButtonProps {
  onClick: () => void;
  title: string;
}

export function Button({onClick, title}: ButtonProps) {
  return (
    <div className={cl['container']}>
      <button onClick={onClick} className={cl['container__button']}>
        {title}
      </button>
    </div>
  );
}