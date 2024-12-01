import type { WrapperProps } from '@docusaurus/types'
import Footer from '@theme-original/Footer'
import type FooterType from '@theme/Footer'
import React from 'react'

type Props = WrapperProps<typeof FooterType>

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <Footer {...props} />
    </>
  )
}
