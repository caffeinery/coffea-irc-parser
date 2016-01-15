import {parse} from '../src/index'
const expect = require('chai').expect

// Valid IRCv3.2 Message (with message tags)
const line = '@aaa=bbb;ccc;example.com/ddd=eee :nick!ident@host.com PRIVMSG #test :hello there'

describe('coffea-irc-parser.parse', () => {
  describe('ircv3 message tags', () => {
    it('should parse tags with a value attached to it (non-prefixed)', (done) => {
      let message = parse(line)

      expect(message.tags.aaa).to.eql('bbb')

      done()
    })

    it('should parse tags with a value attached to it (vendor prefixed)', (done) => {
      let message = parse(line)

      expect(message.tags['example.com/ddd']).to.eql('eee')

      done()
    })

    it('should parse tags without a value attached', (done) => {
      let message = parse(line)

      expect(message.tags.ccc).to.eql(true)

      done()
    })
  })
})
