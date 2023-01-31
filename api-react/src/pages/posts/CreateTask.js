import React, { useState, useContext } from 'react';
import { Form, Button, Select, Input, DatePicker, Checkbox } from 'antd';
import moment from 'moment';
import axios from 'axios';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const { Option } = Select;

const CreateTask = () => {
  const currentUser = useContext(CurrentUserContext);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    due_date: moment(),
    created_by: currentUser.id,
    assigned_to: '',
    attachements: '',
    category: '',
    priority: 5,
    completed: false,
  });

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onDueDateChange = (date, dateString) => {
    setFormData({
      ...formData,
      due_date: moment(date).format("dddd, MMMM Do YYYY"),
    });
  };

  const onCategoryChange = (value) => {
    setFormData({ ...formData, category: value });
  };

  const onPriorityChange = (value) => {
    setFormData({ ...formData, priority: value });
  };

  const onCompletedChange = (event) => {
    setFormData({ ...formData, completed: event.target.checked });
  };
// TODO: Add logic to send formData to Django API endpoint
  const onFormSubmit = (event) => {
    event.preventDefault();
    axios.post('https://rest-api-project5.herokuapp.com/todo/task-create/', formData)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error(error);
        });
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Item label="Title">
        <Input
          name="title"
          value={formData.title}
          onChange={onFormChange}
          required
        />
      </Form.Item>
      <Form.Item label="Content">
        <Input.TextArea
          name="content"
          value={formData.content}
          onChange={onFormChange}
        />
      </Form.Item>
      <Form.Item label="Due Date">
        <DatePicker
          name="due_date"
          value={moment(formData.due_date)}
          onChange={onDueDateChange}
        />
      </Form.Item>
      <Form.Item label="Created By">
        <Input
          name="created_by"
          value={formData.created_by}
          onChange={onFormChange}
          required
        />
      </Form.Item>
      <Form.Item label="Assigned To">
        <Input
          name="assigned_to"
          value={formData.assigned_to}
          onChange={onFormChange}
        />
      </Form.Item>
      <Form.Item label="Attachements">
        <Input
          name="attachements"
          value={formData.attachements}
          onChange={onFormChange}
        />
      </Form.Item>
      <Form.Item label="Category">
        <Select
          name="category"
          value={formData.category}
          onChange={onCategoryChange}
          >
            <Option value="task">Task</Option>
            <Option value="bug">Bug</Option>
            <Option value="feature">Feature</Option>
            </Select>
            </Form.Item>
            <Form.Item label="Priority">
            <Select
                name="priority"
                value={formData.priority}
                onChange={onPriorityChange}
                >
            <Option value={1}>Critical</Option>
            <Option value={2}>High</Option>
            <Option value={3}>Medium</Option>
            <Option value={4}>Low</Option>
            </Select>
            </Form.Item>
            <Form.Item label="Completed">
            <Checkbox checked={formData.completed} onChange={onCompletedChange} />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
            </Form.Item>
            </Form>
            );
            };

            export default CreateTask;