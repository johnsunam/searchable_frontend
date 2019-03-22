import React, { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userToken: null
    }
  }

  componentDidMount () {
    let userToken = localStorage.getItem('userToken');
    this.setState({userToken})
  }

  render () {
    return (<div>
      dsdsdsdsd
    </div>)
  }
}

export default Home;
