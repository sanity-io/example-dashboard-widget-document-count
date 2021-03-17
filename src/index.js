import React, {useEffect, useState} from 'react'
import sanityClient from 'part:@sanity/base/client'
import styles from './DocumentCount.css'

function DocumentCount() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const documentCount$ = sanityClient.observable.fetch('count(*)').subscribe(setCount)
    return () => documentCount$.unsubscribe()
  }, [])

  return (
    <div className={styles.container}>
      <h2>
        <div>
          You have <code>{count}</code> documents in your dataset
        </div>
      </h2>
    </div>
  )
}

export default {
  name: 'document-count',
  component: DocumentCount
}
