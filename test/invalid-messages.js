import {parse} from '../src/index'
const expect = require('chai').expect

// Valid IRCv3.2 Message (with message tags)
const invalid1 = '@aaa=bbb;ccc;example.com/ddd=eee'
const invalid2 = ':Xack!bae@michealharker.com'

describe('coffea-irc-parser.parse', () => {
  describe('ircv3 message tags', () => {
    it('should thrw on a message with just message-tags', (done) => {
      expect(() => {
        parse(invalid1)
      }).to.throw

      done()
    })

    it('should throw on a mesage without a command', (done) => {
      expect(() => {
        parse(invalid2)
      }).to.throw

      done()
    })
  })
})
