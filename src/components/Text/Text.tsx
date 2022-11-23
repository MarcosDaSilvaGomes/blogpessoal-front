import React from 'react';
import './Text.css'

function Text(props: any) {
  return (
    <h1>Hello {props.nome}!</h1>
  )
}

export default Text