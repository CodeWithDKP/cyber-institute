import Benefits from '@/components/courses/benefits'
import CourseList from '@/components/courses/courseList'
import CTA from '@/components/courses/cta'
import Hero from '@/components/courses/hero'
import Journey from '@/components/courses/journey'
import React from 'react'

export default function page() {
  return (
    <>
    <Hero />
    <Journey/>
    <CourseList />
    <Benefits/>
    <CTA/>
    
    </>
  )
}
