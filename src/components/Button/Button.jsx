import style from './button.module.css';

export const Button = ({ title, type = 'submit', loadMore }) => {
  return (
    <button type={type} className={style.Button} onClick={loadMore}>
      {title}
    </button>
  );
};
