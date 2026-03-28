import Achievements from '@/components/about/achivements'
import Different from '@/components/about/different'
import Hero from '@/components/about/hero'
import Mission from '@/components/about/mission'
import Trainers from '@/components/about/trainers'
import WhoWeAre from '@/components/about/whoWeAre'
import { Train } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <>
    <Hero/>
    <WhoWeAre/>
    <Mission/>
    <Achievements/>
    <Trainers/>
    <Different/>
    </>
  )
}
