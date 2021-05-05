import React from 'react'
import { 
    TextField,
    makeStyles
} from '@material-ui/core'
import '../assets/scss/styles.scss'
require('dotenv').config()

const apiURL = `api.openweathermap.org/data/2.5/weather?`

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const ZipSearch = () =>{

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
    setValue(event.target.value);
    };

    return(
        <div>
            <div>
                <TextField 
                className='zipSearchIn'
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax={2}
                value={value}
                onChange={handleChange}
                variant="outlined"
                />
            </div>
        </div>
    )
}

export default ZipSearch