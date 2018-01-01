import React from 'react';
import Modal from 'react-modal';
import { Button, Input, Close, Label } from './Search.styled';

const customStyles = {
  content: {
    top: '25%',
    left: '25%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class City extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({ value: value });
    this.props.handleOnChange(value);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.openModal}>Filter Appartments</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Close onClick={this.closeModal} />
          <Label>
            Search By City
            <Input placeholder="Search By City" value={this.state.value} onChange={this.handleChange} />
          </Label>
        </Modal>
      </div>
    );
  }
}

export default City;
