import { expect } from 'chai'
import date from '../src/date'

describe('date', () => {

  it('should be a function', function(){
    expect(date).to.be.a('function')
  })

  it('should return date in a string', function(){
    var d = new Date;
    expect(date).to.be.a('date')
  })

})
