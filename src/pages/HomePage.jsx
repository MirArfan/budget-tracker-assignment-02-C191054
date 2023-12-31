import React from 'react'
import Nav_bar from '../components/header_section/nav_bar'
import Entry from '../components/add_entry_section/Entry'
import IncomeExpanseList from '../components/Income_expense_section/IncomeExpanseList'
import HeroContent from '../components/hero_section/heroContent'


function HomePage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-400 to-violet-600">
        <Nav_bar/>
        <HeroContent/>
        <Entry/>
      </div>
      <IncomeExpanseList/>
    </div>

  )
}

export default HomePage