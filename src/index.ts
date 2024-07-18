import type { Webflow as WebflowType } from '@finsweet/ts-utils'

export const Webflow = window.Webflow as WebflowType

Webflow.push(() => {
  //Write your code here

  console.log('Hello World')
})
