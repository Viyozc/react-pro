import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from 'actions/page'

class Mypage extends Component {
  componentsWillMount () {

  }
  componentDidMount () {
    this.props.actions.change()
  }
  render () {
    return (
      <h1>MYPAGE</h1>
    )
  }
}
function mapStateToProps (state, ownProps) {
  return {
    data: state.data
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Mypage)
