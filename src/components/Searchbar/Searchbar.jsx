import style from './searchbar.module.css';
import { useState } from 'react';

const Searchbar = ({ getSearchKey }) => {
  const [searchKey, setsearchKey] = useState('');

  const sendSearchKey = e => {
    e.preventDefault();
    getSearchKey(searchKey);
  };

  const handleInput = ({ target }) => {
    setsearchKey(target.value);
  };

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={sendSearchKey}>
        <button type="submit" className={style.SearchForm_button}>
          <span className={style.SearchForm_button_label}>Search</span>
        </button>
        <input
          className={style.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchKey}
          required
          onChange={handleInput}
        />
      </form>
    </header>
  );
};

// class Searchbar extends Component {
//   state = {
//     searchKey: '',
//   };

//   sendSearchKey = e => {
//     e.preventDefault();
//     this.props.getSearchKey(this.state.searchKey);
//   };

//   handleInput = ({ target }) => {
//     this.setState({ searchKey: target.value });
//   };

//   render() {
//     const { searchKey } = this.state;
//     const { sendSearchKey, handleInput } = this;
//     return (
//       <header className={style.Searchbar}>
//         <form className={style.SearchForm} onSubmit={sendSearchKey}>
//           <button type="submit" className={style.SearchForm_button}>
//             <span className={style.SearchForm_button_label}>Search</span>
//           </button>
//           <input
//             className={style.SearchForm_input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={searchKey}
//             required
//             onChange={handleInput}
//           />
//         </form>
//       </header>
//     );
//   }
// }

export default Searchbar;
