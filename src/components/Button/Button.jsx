import style from './button.module.css';

const Button = ({ title, type = 'submit', loadMore }) => {
  return (
    <button type={type} className={style.Button} onClick={loadMore}>
      {title}
    </button>
  );
};
export default Button;
