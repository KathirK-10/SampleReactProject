import './PageNotFound.css'
export const PageNotFound = () => {
  return (
    <div className='page404'>
          <h1>404</h1>
          <h2>Oops! Page Not Found</h2>
          <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <a href="/">Go Back Home</a>
    </div>
  )
}
