//import *as React from 'react'
import *as React from 'react'

import { Button } from 'semantic-ui-react'
//export interface ButtonsGroup { compiler: string; framework: string; }

export const ButtonsGroup = () => (
  <Button.Group basic size='small'>
    <Button icon='file' />
    <Button icon='save' />
    <Button icon='upload' />
    <Button icon='download' />
  </Button.Group>
)

