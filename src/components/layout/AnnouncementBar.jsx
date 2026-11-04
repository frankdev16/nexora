import { siteConfig } from '../../config/siteConfig'

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <p>
        Discover premium technology at NEXORA.
        <span>
          Free delivery on orders above{' '}
          {siteConfig.delivery.freeShippingMinimum.toLocaleString(
            siteConfig.locale,
          )}{' '}
          UGX.
        </span>
      </p>
    </div>
  )
}

export default AnnouncementBar