/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from "./orders.module.scss"

/**
 * @typedef {import("@prismicio/client").Content.OrdersSlice} OrdersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OrdersSlice>} OrdersProps
 * @param { OrdersProps }
 */
const Orders = ({ slice }) => {
  return (
    <div className={`${styles.orders} container`}>
      <div className='orders__container'>
        <span className="orders__title">
          {
            slice.primary.title ?
              <PrismicRichText field={slice.primary.title} />
              : <h2>Template slice, update me!</h2>
          }
        </span>
        <div className='orders__img'>
          {
            slice?.items?.map((item, i) =>
              <img key={i} src={item.img.url} alt={item.img.alt} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Orders