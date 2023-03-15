import './style.css'

import { render, html } from "./vd/vnode";

const vnode: VNode = {
  tag: 'div',
  props: {
    style: 'margin: 0 auto; width: 960px;'
  },
  children: [
    {
      tag: 'h1',
      props: {
        style: {
          'font-size': '18px',
          'color': '#333',
          'font-weight': 600,
          'text-align': 'center'
        }
      },
      children: 'Vanilla Typescript Playground'
    },
    {
      tag: 'div',
      props: {},
      children: html(`Let play with vanilla typescript using Parcel, you can find more info about Parcel
      <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
      `)
    }
  ]
}

// @ts-ignore
const container = document.getElementById('parcel-app')
render(vnode, container)
