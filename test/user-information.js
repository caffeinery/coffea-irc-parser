import {parse} from '../src/index'
const expect = require('chai').expect

// Valid IRCv3.2 Message (with message tags)
const line = '@aaa=bbb;ccc;example.com/ddd=eee :Xack!bae@michealharker.com PRIVMSG #test :hello there'

describe('coffea-irc-parser.parse', () => {
  describe('user information', () => {
    it('should parse the nickname of the sender correctly', (done) => {
      let message = parse(line)

      expect(message.userinfo.is_user).to.eql(true)
      expect(message.userinfo.nick).to.eql('Xack')

      done()
    })

    it('should parse the ident of the sender correctly', (done) => {
      let message = parse(line)

      expect(message.userinfo.is_user).to.eql(true)
      expect(message.userinfo.ident).to.eql('bae')

      done()
    })

    it('should parse the hostnmae of the sender correctly', (done) => {
      let message = parse(line)

      expect(message.userinfo.is_user).to.eql(true)
      expect(message.userinfo.hostname).to.eql('michealharker.com')

      done()
    })

    it('should cater for servers', (done) => {
      let message = parse(':sendak.freenode.net NOTICE #test :This is totally legit!')

      expect(message.userinfo.is_user).to.eql(false)
      expect(message.userinfo.sender).to.eql('sendak.freenode.net')

      done()
    })
  })
})
