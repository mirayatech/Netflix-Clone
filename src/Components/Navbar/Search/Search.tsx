import { useState, ChangeEvent, useRef } from 'react'
import { motion } from 'framer-motion'

import styles from './Search.module.css'
import { SearchIcon } from '../../../utilities'
import { SearchBar, SearchButton } from './style-search'
import useExternalClick from './useExternalClick'

export function Search() {
  const searchRef = useRef<HTMLDivElement | null>(null)
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [searchInput, setSearchInput] = useState<string>('')

  useExternalClick(searchRef, () => {
    setIsSearch(false)
  })

  const onSearchQuery = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value)
  }

  return (
    <div
      ref={searchRef}
      className={isSearch ? styles.expanded : styles.shrinked}
    >
      <SearchButton
        onClick={() => setIsSearch(true)}
        className={isSearch ? styles.absolute : styles.relative}
      >
        <SearchIcon />
      </SearchButton>
      <SearchBar>
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <motion.input
          initial="hidden"
          animate={isSearch ? 'visible' : 'hidden'}
          transition={{ duration: 0.45 }}
          variants={{
            visible: {
              opacity: 1,
              width: '250px',
            },
            hidden: {
              opacity: 0,
              width: 0,
            },
          }}
          type="text"
          id="Search"
          className={styles.searchBar__input}
          value={searchInput}
          onChange={onSearchQuery}
          placeholder="Titles, people, genres"
        />
      </SearchBar>
    </div>
  )
}
