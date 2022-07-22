import React from 'react'
import profileURL from '../images/profile.jpeg'; 


// Styled Components
import { Section, SectionContainer } from '../styles/Sections'
import { AppName } from '../styles/Typography'
import { IconList, Icon } from '../styles/Icons'
import { SearchBar } from '../styles/Searchbar'
import { ProfileAvator } from '../styles/Icons'

// Icons
import { FiSearch } from 'react-icons/fi'
import {TbSquarePlus} from 'react-icons/tb'
import {BsCameraVideo} from 'react-icons/bs'


export default function Main() {
  return (
    <Section>
        <SectionContainer className='pd-t-3 pd-b-3'>
            <div className="flex justify-space-between">
            <AppName>
                SocialO
            </AppName>
            <SearchBar>
                <Icon>
                <FiSearch/>
                </Icon>
                <input type="text" name="search" id="" placeholder='Search for Post' />
            </SearchBar>
            <IconList>
                <Icon>
                    <TbSquarePlus/>
                </Icon>
                <Icon>
                    <BsCameraVideo/>
                </Icon>
                <ProfileAvator>
                    <img src={profileURL} alt="profile-photo" />
                </ProfileAvator>
            </IconList>
            </div>
        </SectionContainer>
    </Section>
  )
}
