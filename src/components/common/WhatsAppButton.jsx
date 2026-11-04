import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

function WhatsAppButton({ message = 'Hello NEXORA, I would like to make an enquiry.' }) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact NEXORA on WhatsApp"
    >
      <MessageCircle size={20} />
      <span>Chat with us</span>
    </a>
  )
}

export default WhatsAppButton