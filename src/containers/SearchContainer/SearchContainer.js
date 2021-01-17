import React from 'react';
import styles from './SearchContainer.module.scss';
import Aux from '../../hoc/Aux';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class SearchContiner extends React.Component {
    constructor(props) {
        super(props)
    }


    // //Call ajax through props, pass up the value upon CLICKING DA BUTTON
    // handleSubmit() {
    //     if(this.cityName !== '') { this.props.handleSubmit()}
    // }

    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            this.props.submit()
        }else  {
            return null
        }
    }

    render() {
        return (
            <Aux>
                <input 
                    className={styles.SearchInput} 
                    type="text" value={this.props.inputValue} 
                    onChange={(e) => this.props.handleChange(e.target.value)}
                    onKeyPress={(e) => this.handleKeyPress(e)} 
                />
                <div 
                    className={styles.SearchButton} 
                    onClick={this.props.submit}>
                        <FontAwesomeIcon icon={faSearch} />
                </div>
            </Aux>
        )
    }
}

export default SearchContiner;