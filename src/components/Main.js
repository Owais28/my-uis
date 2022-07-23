import React from 'react'
import { MainGrid } from '../styles/Grids'
import { Section, SectionContainer } from '../styles/Sections'
import StorySection from './Stories'

export default function Main() {
  return (
    <Section className='pd-t-3 pd-b-3'>
        <SectionContainer>
            <MainGrid>
                <div>
                    <StorySection/>
                </div>
                <div>
                <StorySection/>
                </div>
                <div>
                <StorySection/>
                </div>
            </MainGrid>
        </SectionContainer>
    </Section>
  )
}
