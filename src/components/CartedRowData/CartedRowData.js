import { Box, Typography,TextField } from '@mui/material';
import React,{useState,useContext} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import img from '../CartedProduct/cpImg/Asgaardsofa5.png'
import useStyles from './CartedRowDataStyle';
import { CartContext } from '../CartContext/CartContext';

const CartedRowData = ({product}) => {
    const [value,setValue]=useState(product.quantity);
    const { removeFromCart,calculateSubtotal , updateQuantity} = useContext(CartContext);
    const subtotal=calculateSubtotal(product);

    const handleQuantityChange = (productId,quantity) => {
        updateQuantity(productId,quantity);
      };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
      };
   
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    const classes = useStyles(); 
  return (
    <Box className={classes.cartedRowData}>
        <Box className={classes.imgData}><img className={classes.img} src={product.items[0]} alt='carted product image' /></Box>
        <Typography component="h2" className={classes.textData}>{product.name}</Typography>
        <Typography component="h2" className={classes.textData}>$ {product.price}</Typography>
        
        <TextField className={classes.numOfProduct} id="outlined-number" value={value}  onChange={handleChange} onBlur={()=>handleQuantityChange(product.id,value)}   type="number"  InputLabelProps={{shrink: true,}}/>
        
        <Typography component="h2">$ {subtotal}</Typography>
        <Box >
        <IconButton aria-label="delete" onClick={()=>handleRemoveFromCart(product.id)} style={{ color: '#FBEBB5' }}>
            <DeleteIcon />
        </IconButton>
       </Box>
    </Box>
  )
}

export default CartedRowData;