/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from "./hero.module.scss"
import Image from 'next/image'

/**
 * @typedef {import("@prismicio/client").Content.HomepageSlice} HomepageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomepageSlice>} HomepageProps
 * @param { HomepageProps }
 */
const Homepage = ({ slice }) => (
    <div className={`${styles.herosection} container`}>
      <div className='herosection__container'>
        <div className='herosection__circle'></div>
        <PrismicRichText field={slice.primary.title} />
      </div>
      <img className="herosection__pizza-image"
        src={slice.primary.img.url}
        alt={slice.primary.img.alt} />
      <div className='herosection__content-container'>
        {slice?.items?.map((item, i) => (
          <div className='herosection__content' key={i}>
            <img className="herosection__logos"
              src={item.img.url}
              alt={item.img.alt} />
            <div className='herosection__title'>
              <PrismicRichText field={item.title} />
            </div>
            <div className='herosection__description'>
              <PrismicRichText field={item.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
)

export default Homepage;