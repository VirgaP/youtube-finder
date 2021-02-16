import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import icon from '../assets/svg/looking-glass.svg'

const SearchBar = ({setKeyword, onSearch}) => {
    const [error, setError] = useState("")

    const validate=(input)=>{
        var regex = /^[a-zA-Z_ ]*$/;
        if(input.match(regex)) {
            setError('')
         return true;
        } else { 
            setError('Only letters are allowed')
         return false; 
        }
    }
    const handleInput=(e)=>{
        const {value} = e.target
        const valid = validate(value)
        setKeyword(value)
        if(valid && value.lenght > 1){
            setKeyword(value)
            onSearch();

            if (e.keyCode === 13) {
                e.preventDefault();
                onSearch(value);
            } 
        }
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        onSearch();
    }
    
    return (
        <section className="search">
            <h2 className="title">Search for videos</h2>
            <div className="search__container">
                <form onSubmit={onSubmit}>
                    <Input type="text" 
                        name="keyword"
                        id="keyword" 
                        onChange={handleInput}
                        fullWidth={true}
                        inputProps={{maxLength: 20}}
                    />
                    <Button type="submit" variant="contained"><img src={icon} alt="search-icon" width="20" className="icon"/></Button>
                </form>
                {error&&<span className="error">{error}</span>}
            </div>
        </section>
    )
}

SearchBar.propTypes = {
    setKeyword: PropTypes.func,
    onSearch: PropTypes.func,
}
export default SearchBar
