import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      setUserName('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')  
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
        <div>
          username
          <input
            id="username"
            type="text"
            value={userName}
            name="Username"
            onChange={({ target }) => setUserName(target.value)}
          />
        </div>
        <div>
          password
          <input
            id="password"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>  
        <button id="login-button" type="submit">login</button>
      </form>
  )

  const blogForm = () => {
    <form onSubmit={addBlog}>
      <input
      value={newBlog}
      onChange={handleBlogChange}
    />
    <button type="submit">save</button>
    </form>
  }

  return (
    <div>
      {user === null ? loginForm() :
      <div>
        <p>{user.name} logged-in</p>
        {blogForm()}
      </div>
      }
      
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App