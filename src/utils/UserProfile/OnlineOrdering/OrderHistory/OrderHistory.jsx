import {useState} from 'react'

import css from './OrderHistory.module.css'

import orderonlineImg from '/images/orderonline.jpg'

import OrderHistoryCard from '../../../OrderHistoryCard/OrderHistoryCard'
import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

const OrderHistory = () => {
    let [data, setData] = useState([
        {
            id:1,
            imgSrc: orderonlineImg,
            name:"Paradise Biryani",
            address:"Kukatpally, Hyd",
            orderNum:"211",
            items:[{
                itemName: "Panner Biryani",
                qty: 1
            }],
            orderedOn: new Date()?.toString(),
            itemTotal:"150.00",
            coupon: {
                couponName:"TryNew",
                discount:"50"
            },
            taxesandcharges:"30.00",
            totalSavings:"75.00",
            grandTotal:"105.00",
            paymentType:"Using Card",
            orderStatus: "Delivered",
            phoneNum:"8074786491",
            deliveredTo:"My home, kuakpally, hyderabad",
            fssaiNo:"13618013000777",
            fav: false,
            summaryLinkId:"#"
        },
        {
          id:2,
          imgSrc: orderonlineImg,
          name:"Paradise Biryani",
          address:"Kukatpally, Hyd",
          orderNum:"211",
          items:[{
              itemName: "Panner Biryani",
              qty: 1
          }],
          orderedOn: new Date()?.toString(),
          itemTotal:"150.00",
          coupon: {
              couponName:"TryNew",
              discount:"50"
          },
          taxesandcharges:"30.00",
          totalSavings:"75.00",
          grandTotal:"105.00",
          paymentType:"Using Card",
          orderStatus: "Delivered",
          phoneNum:"8074786491",
          deliveredTo:"My home, kuakpally, hyderabad",
          fssaiNo:"13618013000777",
          fav: false,
          summaryLinkId:"#"
      },
      {
        id:3,
        imgSrc: orderonlineImg,
        name:"Paradise Biryani",
        address:"Kukatpally, Hyd",
        orderNum:"211",
        items:[{
            itemName: "Panner Biryani",
            qty: 1
        }],
        orderedOn: new Date()?.toString(),
        itemTotal:"150.00",
        coupon: {
            couponName:"TryNew",
            discount:"50"
        },
        taxesandcharges:"30.00",
        totalSavings:"75.00",
        grandTotal:"105.00",
        paymentType:"Using Card",
        orderStatus: "Delivered",
        phoneNum:"8074786491",
        deliveredTo:"My home, kuakpally, hyderabad",
        fssaiNo:"13618013000777",
        fav: false,
        summaryLinkId:"#"
    }
    ]);

    let [isData, setIsData] = useState(true);

  return (
    <div className={css.outerDiv}>
      {isData ? (
        <div className={css.innerDiv}>
          {data.map((item) => {
            return <OrderHistoryCard udata={item} key={item?.id} />;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
}

export default OrderHistory