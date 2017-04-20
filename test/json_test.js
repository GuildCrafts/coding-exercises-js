import { expect } from 'chai'
import json from '../src/json'
import sampleJson from '../test/utilities/sampleJson'

describe('json', () => {

  it('should be a function', function(){
    expect(json).to.be.a('function')
  })

  it('should return a string', function(){
    expect(json(sampleJson)).to.be.a('string')
  })

})
