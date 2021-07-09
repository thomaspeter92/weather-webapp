import React from 'react'
import styles from '../styles/search.module.scss'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search({search}) {

    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            search(e.target.value)
        }else  {
            return null
        }
    }

    return (
    <>
        <input 
            className={styles.search} 
            type="text"
            placeholder="Search cities..."
            onKeyPress={(e) => handleKeyPress(e)}
        />
        {/* <FontAwesomeIcon className={styles.search_icon} icon={faSearch} /> */}
    </>
    )
}

export default Search
