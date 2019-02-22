import React from 'react'
import sanityClient from 'part:@sanity/base/client'
import styles from './DocumentCount.css'

const documentCount$ = sanityClient.observable.fetch('count(*[]{_id})')

class DocumentCount extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    documentCount$.subscribe(count => {
      this.setState({count})
    })
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
