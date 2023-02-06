import React, { ReactElement } from 'react'
import './Grid.css'
import { AXIS } from '../../const/axis-const'
import { RANDOM_FOR_FOUR, RANDOM_FOR_ONE, RANDOM_FOR_THREE, RANDOM_FOR_TWO } from '../../const/random-const'
import FourDeckShip from '../ship/FourDeckShip'
import ThreeDeckShip from '../ship/ThreeDeckShip'
import TwoDeckShip from '../ship/TwoDeckShip'
import OneDeckShip from '../ship/OneDeckShip'


const Grid = () => {
  const grid: ReactElement[] = []

  for(let x = 0; x < AXIS.X.length; x++) {
    for(let y = 0; y < AXIS.Y.length; y++) {

       if(AXIS.X[x]+1 === RANDOM_FOR_FOUR.X && AXIS.Y[y]+1 === RANDOM_FOR_FOUR.Y) {
          grid.push(<FourDeckShip />)
        }
        if(AXIS.X[x]+1 === RANDOM_FOR_THREE.X && AXIS.Y[y] === RANDOM_FOR_THREE.X) {
          grid.push(<ThreeDeckShip />)
        }
        if(AXIS.X[x] === RANDOM_FOR_THREE.X && AXIS.Y[y] === RANDOM_FOR_THREE.X) {
          grid.push(<ThreeDeckShip />)
        }
        if(AXIS.X[x]+4 === RANDOM_FOR_TWO.X && AXIS.Y[y]+4   === RANDOM_FOR_TWO.X) {
          grid.push(<TwoDeckShip />)
        }
        if(AXIS.X[x] === RANDOM_FOR_TWO.X && AXIS.Y[y]+3 === RANDOM_FOR_TWO.X) {
          grid.push(<TwoDeckShip />)
        }
        if(AXIS.X[x]+2 === RANDOM_FOR_TWO.X && AXIS.Y[y]+3 === RANDOM_FOR_TWO.X) {
          grid.push(<TwoDeckShip />)
        }
        if(AXIS.X[x]+4 === RANDOM_FOR_ONE.X && AXIS.Y[y]+1 === RANDOM_FOR_ONE.X) {
            grid.push(<OneDeckShip />)
        }
        if(AXIS.X[x]+3 === RANDOM_FOR_ONE.X && AXIS.Y[y] === RANDOM_FOR_ONE.X) {
            grid.push(<OneDeckShip />)
        }
        if(AXIS.X[x]+2 === RANDOM_FOR_ONE.X && AXIS.Y[y] === RANDOM_FOR_ONE.X) {
            grid.push(<OneDeckShip />)
        }
        if(AXIS.X[x] === RANDOM_FOR_ONE.X && AXIS.Y[y] === RANDOM_FOR_ONE.X) {
          grid.push(<OneDeckShip />)
        }
         grid.push(<div data-id={`x:${AXIS.X[y]} y:${AXIS.Y[x]}`}></div>)
    }
  }

  return (
      <div className="container">
        <div className="battleship-grid">
         {grid}
        </div>
      </div>
  )
}

export default Grid


