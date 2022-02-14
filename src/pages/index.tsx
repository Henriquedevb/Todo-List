import type { NextPage } from 'next'
import Head from 'next/head'
import React, { ChangeEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'

import TextField from '@mui/material/TextField';
import { FcPlus } from "react-icons/fc";
import { BiX } from "react-icons/bi";

import styles from '../../styles/Home.module.css'
import TitleHeading from '../components/title';
import { FormTask } from '../components/formTask';
import TodoItem from '../components/todoItem';
import TodoList from '../components/todoList';

interface TodoItem {
  todo: string
  id: string
  isComplete: boolean
}

const Home: NextPage = () => {
  const [task, setTask] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoItem[]>([])


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }
  const handleAddTask = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const id = uuid()
    const newTask = { todo: task, id: id, isComplete: false }

    if (task === '') {
      alert('Por gentileza, insira um todo.')
      return
    }

    setTodoList([...todoList, newTask])
    setTask('')
  }
  const handleCompleteTask = (id: string) => {
    let completeTodo = todoList.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    });
    setTodoList(completeTodo)
  }
  const handleRemoveTask = (id: string) => {
    const newTodo = [...todoList];
    const indexTeste = newTodo.findIndex(todo => todo.id === id);
    newTodo.splice(indexTeste, 1);
    setTodoList(newTodo);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo</title>
        <link rel="shortcut icon" href="/public/icon.png" type="image/png" />
      </Head>

      <TitleHeading>Todo-list</TitleHeading>

      <FormTask onSubmit={handleAddTask}>
        <TextField fullWidth name='task' variant="standard" value={task} onChange={handleChange} />
        <button><FcPlus /></button>
      </FormTask>


      {todoList.length > 0 && (
        todoList.map((todo) => (
          <TodoList key={todo.id}
            className={todo.isComplete ? styles.itemComplete : styles.item}
          >
            <TodoItem
              onClick={() => handleCompleteTask(todo.id)}
              className={styles.itemTask}>
              {todo.todo}
            </TodoItem>
            <button onClick={() => handleRemoveTask(todo.id)} className={styles.removeButton}><BiX /></button>
          </TodoList >
        ))
      )}
    </div >
  )
}

export default Home
