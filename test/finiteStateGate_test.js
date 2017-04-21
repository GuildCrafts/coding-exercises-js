import { expect } from 'chai'
import gate from '../src/finiteStateGate'

describe('gate()', function(){

  it('should be a function', function(){
    expect(gate).to.be.a('function')
  })

  it('When receiving a string of remote actions it returns an array of proper gate states', function(){
    expect(gate("remoteClicked,cycleComplete,remoteClicked,remoteClicked,remoteClicked,remoteClicked,remoteClicked,cycleComplete")).to.deep.equal([ 'Gate: CLOSED',
  'Gate: OPENING',
  'Gate: OPEN',
  'Gate: CLOSING',
  'Gate: STOPPED_WHILE_CLOSING',
  'Gate: OPENING',
  'Gate: STOPPED_WHILE_OPENING',
  'Gate: CLOSING',
  'Gate: CLOSED' ])
  })
})
