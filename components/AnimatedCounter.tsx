'use client'

import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <span>
        <CountUp 
        end={amount}
        prefix='₹'
        separator=","
        decimals={2}
        decimal="."
    />
    </span>
  )
}

export default AnimatedCounter