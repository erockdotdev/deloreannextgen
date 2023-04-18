import React from 'react'

function ModelJZDPage(props: any) {
  console.log('props', props)
  return <div>ModelJZD</div>
}

export default ModelJZDPage

export async function getServerSideProps(context: any) {
  return {
    props: {
      stuff: 'things',
    }, // will be passed to the page component as props
  }
}
