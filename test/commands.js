import {parse} from '../src/index'
const expect = require('chai').expect

// Valid IRCv3.2 Message (with message tags)
const line = '@aaa=bbb;ccc;example.com/ddd=eee :Xack!bae@michealharker.com PRIVMSG #test :hello there'
const awayline = ':Xack!bae@michealharker.com AWAY'

describe('coffea-irc-parser.parse', () => {
  describe('command parsing', () => {
    it('should correctly parse the command when there\'s extra information', (done) => {
      let message = parse(line)

      expect(message.command).to.eql('PRIVMSG')

      done()
    })

    it('should correctly parse the command when there\'s no extra information', (done) => {
      let message = parse(awayline)

      expect(message.command).to.eql('AWAY')

      done()
    })
  })
})
