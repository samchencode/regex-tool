import React from 'react';
import ReactDom from 'react-dom';

interface ModalProps {
  children: React.ReactNode | React.ReactNode[];
  visible?: boolean;
}

class Modal extends React.Component<ModalProps> {
  el = document.createElement('div');

  constructor(props: ModalProps) {
    super(props);

    this.el.className = 'modal';
  }

  componentDidMount() {
    const root = document.getElementById('modal-root');
    if (root === null) throw Error('modal-root not found');
    root.appendChild(this.el);
  }

  componentWillUnmount() {
    const root = document.getElementById('modal-root');
    root?.removeChild(this.el);
  }

  render() {
    if(this.props.visible) {
      this.el.classList.add('modal--visible');
    } else {
      this.el.classList.remove('modal--visible');
    }

    return ReactDom.createPortal(<>{this.props.children}</>, this.el);
  }
}

export default Modal;
