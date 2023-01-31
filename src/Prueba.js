import { Avatar, Skeleton, TextField } from '@mui/material';
import Button from '@mui/material/Button';

const Prueba = () => {
    return (
        <>
        <Skeleton sx={{bgcolor: "blue", borderRadius: 2}} variant='rectangular' width={200} height={100}/>
        </>
    )
}

export default Prueba;