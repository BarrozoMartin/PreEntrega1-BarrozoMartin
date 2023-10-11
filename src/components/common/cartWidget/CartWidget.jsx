import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero color="primary">
        <ShoppingCartIcon  
          sx={{
            color: '#FFF',
            ml: 4,
            fontSize: 60,
          }}
        />
      </Badge>
    </Link>
  );
};

export default CartWidget;
