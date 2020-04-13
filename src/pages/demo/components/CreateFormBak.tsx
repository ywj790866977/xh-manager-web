import React from 'react';
import {Modal} from 'antd';


interface CreateFormBakProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const CreateFormBak: React.FC<CreateFormBakProps> = (props) => {
  const { modalVisible, onCancel } = props;

  return(
    <Modal
      destroyOnClose
      title="新建规则"
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  )

}

export default CreateFormBak;