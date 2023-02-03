/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from "./slider.module.scss"

/**
 * @typedef {import("@prismicio/client").Content.SlliderSlice} SlliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SlliderSlice>} SlliderProps
 * @param { SlliderProps }
 */
const Sllider = ({ slice }) => (
  <section className={`${styles.slidesection}`}>
    <Splide aria-label="My Favorite Images">
      {
        slice?.items?.map((item, i) =>
          <SplideSlide key={i}>
            <img className='slidesection__img' src={item.img.url} alt={item.img.alt} />
          </SplideSlide>
        )
      }
    </Splide>
  </section>
)

export default Sllider