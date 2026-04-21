import { Typography,Button } from "@mui/material"
export default function DetailsNotFound({title,button}) {
    return (
        <>
            <Typography variant="h4" className="typo">{ title}</Typography>
            <Button
                sx={{ marginTop: 10}} color="primary"
                variant="contained"   >        { button }</Button> 
    </>)
}