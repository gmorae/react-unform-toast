import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ToastContainer, toast, Zoom } from 'react-toastify';


import Input from './components/Input';
import List, { User } from './components/List';

import './global.css';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<User> = (data, { reset }) => {
    const { name, email, password } = data;

    if (name && email) {
      setUsers([...users, data])
      toast.success('Cadastrado com sucesso', { transition: Zoom })
      reset()
    } else {
      !name && toast.error('O campo nome é obrigatório!', { transition: Zoom })
      !email && toast.error('O campo e-mail é obrigatório!', { transition: Zoom })
      !password && toast.error('O campo senha é obrigatório!', { transition: Zoom })
    }

  };

  return (
    <>
      <ToastContainer />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" label="Nome completo" />
        <Input name="email" label="Email" />
        <Input name="password" type="password" label="Senha" />
        <button type="submit">Enviar</button>
      </Form>

      <List users={users} />
    </>
  )
};

export default App;