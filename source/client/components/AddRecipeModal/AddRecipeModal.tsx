import React, { useReducer, FormEvent } from 'react'
import {
  Modal,
  Form,
  Input,
  Upload,
  Button,
  Row,
  Col,
  Tag,
  Tooltip,
  Divider,
  Select as OriginalSelect,
  message,
} from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { FaUpload, FaPlus } from 'react-icons/fa'
import { flow, capitalize } from 'lodash'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import AddRecipeMutation from '@client/queries/AddRecipe.graphql'

import { Select } from './AddRecipeModal.styles'

import reducer, { initialState } from './AddRecipeModal.reducer'


interface Ingredient {
  unit: string
  name: string
}

interface RecipeProps {
  poster?: string
  name: string
  tags: string[]
  description: string


  directions: string[]
  ingredients: Ingredient[]

  calories: number
  protein: number
  carbohydrates: number
  fat: number
}

export interface Props extends FormComponentProps {
  visible: boolean

  closeRecipeModal: () => any
  addRecipe: (props: RecipeProps) => any
  refetchRecipes: () => any
}


const AddRecipeModal = ({
  visible,

  closeRecipeModal,
  addRecipe,
  refetchRecipes,
  form: { getFieldDecorator, validateFields, resetFields },
}: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  const submitForm = (event?: FormEvent) => {
    if (event && event.preventDefault) event.preventDefault()

    validateFields(async (error, values) => {
      const posterFile = values.poster && values.poster.fileList.length ? values.poster.fileList[0].originFileObj : undefined

      const ingredientNames = Object.entries(values)
        .filter(([key]) => /ingredient-\d+?-name/.test(key))
        .map(([, value]) => value) as string[]
      const ingredientQuantities = Object.entries(values)
        .filter(([key]) => /ingredient-\d+?-quantity/.test(key))
        .map(([, value]) => Number(value)) as number[]
      const ingredientUnits = Object.entries(values)
        .filter(([key]) => /ingredient-\d+?-unit/.test(key))
        .map(([, value]) => value) as string[]
      const ingredients = ingredientNames.map((name, index) => ({
        name,
        quantity: ingredientQuantities[index],
        unit: capitalize(ingredientUnits[index]),
      }))

      const directions = Object.entries(values)
        .filter(([key]) => key.indexOf('direction') === 0)
        .map(([, value]) => value) as string[]


      try {
        await addRecipe({
          poster: posterFile,
          name: values.name,
          tags: state.tags,
          description: values.description,

          ingredients,
          directions,

          calories: Number(values.calories),
          protein: Number(values.protein),
          carbohydrates: Number(values.carbohydrates),
          fat: Number(values.fat),
        })

        message.success('The recipe was added!')
        closeRecipeModal()
        refetchRecipes()

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
        <Divider>General</Divider>

        <Form.Item label='Name'>
          {getFieldDecorator('name', {
            initialValue: '',
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'This field is required',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label='Poster'>
          {getFieldDecorator('poster', {
            initialValue: null,
          })(
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

        <Form.Item label='Description'>
          {getFieldDecorator('description', {
            initialValue: '',
          })(<Input.TextArea rows={4} />)}
        </Form.Item>


        <Divider>Ingredients</Divider>

        {state.ingredients.map(id => (
          <Form.Item
            label='Ingredient'
            key={id}
          >
            {getFieldDecorator(`ingredient-${id}-name`, {
              initialValue: '',
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: 'This field is required',
                },
              ],
            })(<Input placeholder='Ingredient Name' />)}

            {getFieldDecorator(`ingredient-${id}-quantity`, {
              initialValue: '',
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: 'This field is required',
                },
              ],
            })(
              <Input
                type='number'
                placeholder='Quantity'
                addonAfter={
                  getFieldDecorator(`ingredient-${id}-unit`, {
                    initialValue: 'item',
                  })(
                    <Select>
                      <OriginalSelect.Option value='item'>item</OriginalSelect.Option>
                      <OriginalSelect.Option value='g'>g</OriginalSelect.Option>
                      <OriginalSelect.Option value='ml'>ml</OriginalSelect.Option>
                      <OriginalSelect.Option value='tsp'>tsp</OriginalSelect.Option>
                      <OriginalSelect.Option value='tbsp'>tbsp</OriginalSelect.Option>
                    </Select>,
                  )
                }
              />,
            )}
            {state.ingredients.length > 1
              ?
                <Row type='flex' justify='end'>
                  <Button
                    onClick={() => dispatch({ type: 'removeIngredient', id })}
                    type='danger'
                  >
                    Remove
                  </Button>
                </Row>
              : null
            }
          </Form.Item>
        ))}

        <Form.Item>
          <Button type='dashed' onClick={() => dispatch({ type: 'addIngredient' })} block>
            <Row type='flex' gutter={10} align='middle'>
              <Col>
                <FaPlus />
              </Col>
              <Col>
                New Ingredient
              </Col>
            </Row>
          </Button>
        </Form.Item>


        <Divider>Directions</Divider>

        {state.directions.map(id => (
          <Form.Item
            label='Direction'
            key={id}
          >
            {getFieldDecorator(`direction-${id}-name`, {
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: 'This field is required',
                },
              ],
            })(<Input placeholder='Direction' />)}

            {state.directions.length > 1
              ?
              <Row type='flex' justify='end'>
                <Button
                  onClick={() => dispatch({ type: 'removeDirection', id })}
                  type='danger'
                >
                  Remove
                      </Button>
              </Row>
              : null
            }
          </Form.Item>
        ))}

        <Form.Item>
          <Button type='dashed' onClick={() => dispatch({ type: 'addDirection' })} block>
            <Row type='flex' gutter={10} align='middle'>
              <Col>
                <FaPlus />
              </Col>
              <Col>
                New Direction
              </Col>
            </Row>
          </Button>
        </Form.Item>


        <Divider>Facts</Divider>

        <Form.Item label='Calories'>
          {getFieldDecorator('calories')(<Input type='number' addonAfter='kcal' min={0} />)}
        </Form.Item>

        <Form.Item label='Protein'>
          {getFieldDecorator('protein')(<Input type='number' addonAfter='g' min={0} />)}
        </Form.Item>

        <Form.Item label='Carbohydrates'>
          {getFieldDecorator('carbohydrates')(<Input type='number' addonAfter='g' min={0} />)}
        </Form.Item>

        <Form.Item label='Fat'>
          {getFieldDecorator('fat')(<Input type='number' addonAfter='g' min={0} />)}
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
