import React from "react";
import Modal from "react-modal";

const DeleteModal = (props) => {
  const deleteItem = () => {
    props.setModalState();
    props.handleOnDelete(props.index);
  };

  const cancelDelete = () => {
    props.setModalState();
  };

  return (
    <Modal
      className={"deleteModal"}
      isOpen={props.modalState}
      onRequestClose={() => props.setModalState()}
    >
      <div className={"deleteModalContainer"}>
        <h2 className={"deleteHeading"}>{"Want to delete the entry"}</h2>
        <div className={"btnContainer"}>
          <button className={"yesButton"} onClick={deleteItem}>
            {"Yes"}
          </button>
          <button className={"noButton"} onClick={cancelDelete}>
            {"No"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;