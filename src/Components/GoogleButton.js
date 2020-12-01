import { ReactComponent as GoogleLogo } from '../svg/google.svg';
import {Styles} from '../StyledComp'

export const GoogleButton = () => {
    const {Button} = Styles.Google
    return (
        <Button
            whileHover={{ translateY: -3  }}
        >
            <GoogleLogo style={{width:'auto', height:"70%", marginRight:'5%'}}/>
            <span>SIGN IN WITH GOOGLE</span>
        </Button>
    )
}
