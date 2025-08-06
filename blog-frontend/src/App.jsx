import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Article } from './pages/Article'
import { NewArticle } from './pages/NewArticle'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/new' element={<NewArticle />} />
      </Routes>
    </Router>
  )
}
