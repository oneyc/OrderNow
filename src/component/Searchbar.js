import classes from './Searchbar.module.css'

const Searchbar = (props) => {

    return(
        <div className={classes.searchbar}>
            <input placeholder="Search" onChange={props.handleQueryChange} className={classes.searchbarText}></input>
        </div>
    )
}

export default Searchbar;