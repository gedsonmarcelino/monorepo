import { FormEvent, useState } from 'react'

import { login } from '@monorepo/auth';
import { SignInForm } from './types'

function App() {

  const [form, setForm] = useState({} as SignInForm)

  const handleInputChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const { username, password } = form
      const result = await login(username, password)
      window.alert('User is authenticated with success.')
    } catch (error) {
      window.alert('ERROR: Username / Password invalid.')
    }
  }

  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)}>
        <div className="row">
          <label>Username</label>
          <input type="text" value={form.username} onChange={e => handleInputChange('username', e.target.value)} />
        </div>
        <div className="row">
          <label>Password</label>
          <input type="password" value={form.password} onChange={e => handleInputChange('password', e.target.value)} />
        </div>
        <div className="row">
          <input type="submit" value="Sign In" />
        </div>
      </form>
    </div>
  )
}

export default App
