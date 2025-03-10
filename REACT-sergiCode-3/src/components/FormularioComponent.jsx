import { useForm } from "../hooks/useForm"
import { useEffect, useRef } from "react"

export const FormularioComponent = () => {
    
    const initialForm = {
      userName: '',
      email: '',
      password: ''
  }
 
  const focusRef = useRef() 
  console.log(focusRef)

  const {formState, onInputChange} = useForm(initialForm)

    const {userName, email, password}  = formState
 
    const onSubmit = (event) => {
      event.preventDefault()
      console.log(formState)
    }

    useEffect(() => {
      focusRef.current.focus()
    }, [])
    
    return (   
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="userName" className="form-label">UserName</label>
            <input 
                type="text" 
                className="form-control" 
                name="userName" 
                placeholder="enter your username"
                value={userName}
                onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
                ref={focusRef}
                type="email" 
                className="form-control" 
                name="email" 
                placeholder="Enter email"
                value={email}
                onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
                type="password" 
                className="form-control" 
                name="password"
                placeholder="password"
                value={password}
                onChange={onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
        )
        }