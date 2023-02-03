import Image from 'next/image'
import { PrismicLink } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'
import Logo from "../../assets/img/profileLogo.png"
import styles from "../../assets/scss/Modules/navbar.module.scss"

export default function Header({ header, data }) {
  const slices = header?.data?.menu;
  return (
    <div className={styles.header}>
      <div className="header__container">
        <div className="header__list">
          <div className="header__logo">
            <PrismicRichText field={data.logo} />
          </div>
          <nav>
            <ul>
              {
                slices?.map((item, i) =>
                  <div key={i}>
                    <li>
                      <PrismicLink field={item.links}>
                        <PrismicRichText field={item.menus} />
                      </PrismicLink>
                    </li>
                  </div>
                )
              }
            </ul>
          </nav>
          <div className="header__profile">
            <Image className="header__profile-img"
              src={Logo}
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <div className="header__profile-name">
              <PrismicRichText field={data.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}