import { Twitter } from 'lucide-react'

const ContactSection = () => {
  return (
    <div className="ContactSection">
      <ul>
        <li className="flex flex-row space-x-2">
          <Twitter className="text-twitter" />
          <span>twitter:</span>{' '}
          <a
            href="https://twitter.com/taylordotcat"
            target={'_blank'}
            rel="noreferrer">
            @taylordotcat
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContactSection
