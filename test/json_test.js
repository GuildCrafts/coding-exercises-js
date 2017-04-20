import { expect } from 'chai'
import json from '../src/json'
import sampleJson from './utilities/sampleJson.json'

describe('json()', () => {
  it('Should return a path to 4chan.', () => {
    expect(json(sampleJson, '4chan')).to.equal('favoriteSites -> 1')
  })

  it('Should return the correct path to the second isAwesome.', () => {
    expect(json(sampleJson, false)).to.equal('works -> 1 -> isAwesome')
  })
})
