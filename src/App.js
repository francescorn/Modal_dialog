import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [modalClick, setModalClick] = useState(false);

  const showMyModal = () => {
    setModalClick(true);
  };

  return (
    <div className="App">
      <h1>Create a Modal Dialog</h1>
      <button onClick={showMyModal}>Show Modal</button>
      {modalClick && (
        <Modal setModalClick={setModalClick}>
          <h1>Modal</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit nam et reprehenderit quibusdam temporibus
            officia dolorum quo sint nemo quis, laborum, quasi nisi fugit praesentium debitis repudiandae! Sapiente, omnis.
          </p>
        </Modal>
      )}
    </div>
  );
}

export default App;