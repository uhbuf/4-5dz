import React from 'react';
class FirstScreen extends React.Component {
  switch = () => {
    this.props.smena(true);
  };
  render() {
    return (
      <div className='App'>
        <input
          className='form-controle'
          type='text'
          placeholder='Введите ваше имя'
        />
        <button onClick={this.switch}>Войти</button>
      </div>
    );
  }
}
export default FirstScreen;
