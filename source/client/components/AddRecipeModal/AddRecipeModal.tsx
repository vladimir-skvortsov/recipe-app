import React, { useReducer, FormEvent } from 'react'
import { Modal, Form, Input, Upload, Button, Row, Col, Tag, Tooltip, message } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { FaUpload, FaPlus } from 'react-icons/fa'
import { flow } from 'lodash'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import AddRecipeMutation from '@client/queries/AddRecipe.graphql'

import reducer, { initialState } from './AddRecipeModal.reducer'


interface RecipeProps {
  poster?: string
  name: string
  tags: string[]
}

export interface Props extends FormComponentProps {
  visible: boolean

  closeRecipeModal: () => any
  addRecipe: (props: RecipeProps) => any
}


const AddRecipeModal = ({
  visible,

  closeRecipeModal,
  addRecipe,
  form: { getFieldDecorator, validateFields, resetFields },
}: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  const submitForm = (event?: FormEvent) => {
    if (event && event.preventDefault) event.preventDefault()

    validateFields(async (error, { name, poster }) => {
      const posterFile = poster && poster.fileList.length ? poster.fileList[0].originFileObj : undefined

      try {
        await addRecipe({
          name,
          poster: posterFile,
          tags: state.tags,
        })

        message.success('The recipe was added!')
        closeRecipeModal()

        resetFields()
        dispatch({ type: 'resetTags' })
      } catch (error) {
        message.error('Error')
      }
    })
  }


  return (
    <Modal
      title='Add Recipe'
      visible={visible}
      onCancel={closeRecipeModal}
      okText='Add'
      onOk={submitForm}
    >
      <Form onSubmit={submitForm}>
        <Form.Item label='Name'>
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: 'This field is required' },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label='Poster'>
          {getFieldDecorator('poster')(
            <Upload
              beforeUpload={() => false}
              onChange={({ fileList }) => {
                if (fileList.length > 1) fileList.shift()
              }}
            >
              <Button>
                <Row type='flex' gutter={10} align='middle'>
                  <Col>
                    <FaUpload size={12} />
                  </Col>
                  <Col>
                    Upload
                  </Col>
                </Row>
              </Button>
            </Upload>,
          )}
        </Form.Item>

        <Form.Item label='Tags'>
          {state.tags.map((tag, index) => {
            const isLongTag = tag.length > 20

            const tagElem =
              <Tag key={tag} closable onClose={() => dispatch({ type: 'closeTag', tag })}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>

            return isLongTag
              ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip>
              : tagElem
          })}
          {state.inputVisible && (
            <Input
              autoFocus
              type='text'
              size='small'
              style={{ width: 78 }}
              onBlur={() => dispatch({ type: 'confirmInput' })}
              onPressEnter={({ currentTarget: { value } }) => dispatch({ type: 'confirmInput', tag: value })}
            />
          )}
          {!state.inputVisible && (
            <Tag onClick={() => dispatch({ type: 'showInput' })}>
              <Row type='flex' gutter={10} align='middle'>
                <Col>
                  <FaPlus />
                </Col>
                <Col>
                  New Tag
                </Col>
              </Row>
            </Tag>
          )}
        </Form.Item>
      </Form>
    </Modal>
  )
}


export default flow([
  Form.create(),
  graphql(gql(AddRecipeMutation), {
    props: ({ mutate }) => ({
      addRecipe: (props: RecipeProps) => mutate({ variables: { props } }),
    }),
  }),
])(AddRecipeModal)
