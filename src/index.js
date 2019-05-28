import React from 'react'
import sanityClient from 'part:@sanity/base/client'
import styles from './DocumentCount.css'

const client = sanityClient.withConfig
  ? sanityClient.withConfig({apiVersion: '1'})
  : sanityClient

class DocumentCount extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    this.documentCount$ = client.observable.fetch('count(*[]._id)').subscribe(count => this.setState({count}))
  }

  componentWillUnmount() {
    if (this.documentCount$) {
      this.documentCount$.unsubscribe()
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className={styles.container}>
        <h2>
          <div>
            You've got <code>{count}</code> tucked away
          </div>
        </h2>
      </div>
    )
  }
}

export default {
  name: 'document-count',
  component: DocumentCount
}
