import React from 'react'
import { MainGrid } from '../styles/Grids'
import { Section, SectionContainer } from '../styles/Sections'
import StorySection from './Stories'

export default function Main() {
  return (
    <Section>
        <SectionContainer>
            <MainGrid>
                <div>
                    <StorySection/>
                </div>
                <div>
                {/* <Stories/> */}
                </div>
                <div>
                {/* <Stories/> */}
                </div>
            </MainGrid>
        </SectionContainer>
    </Section>
  )
}
