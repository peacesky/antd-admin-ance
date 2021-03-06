import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Popconfirm, Card } from 'antd'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'


const FormTemplate = ({ filterProps, selectedRowKeys, listProps, modalVisible, modalProps, handleDeleteItems }) => {
  return (
    <Card>
      <Row style={{ marginBottom: 24, textAlign: 'right', fontSize: 13 }}>
        <Col>
          <Popconfirm title={'Are you sure delete these items?'} placement="left" onConfirm={handleDeleteItems} />
        </Col>
      </Row>
      <List {...listProps} />
      {modalVisible && <Modal {...modalProps} />}
    </Card>
  )
}

FormTemplate.propTypes = {
  filterProps: PropTypes.object,
  selectedRowKeys: PropTypes.array,
  listProps: PropTypes.object,
  modalProps: PropTypes.object,
  modalVisible: PropTypes.bool,
  handleDeleteItems: PropTypes.func,
}

// export default connect(({ ppt, loading }) => ({ ppt, loading }))(PPT)
export default FormTemplate
