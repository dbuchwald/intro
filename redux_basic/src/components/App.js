import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Grid, PageHeader, Row } from 'react-bootstrap'

const App = () => (
  <div>
    <Grid>
      <Row>
        <PageHeader>
          Sample TO-DO Application
        </PageHeader>
      </Row>
      <Row>  
        <AddTodo />
      </Row>
      <Row>
        <VisibleTodoList />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Grid>
  </div>
)

export default App