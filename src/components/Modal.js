import './Modal.css'

export default function Modal({ setModalClick, children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button style={{width: "3rem"}} onClick={() => {setModalClick(false)}}>❌</button>
      </div>
    </div>
  )
}