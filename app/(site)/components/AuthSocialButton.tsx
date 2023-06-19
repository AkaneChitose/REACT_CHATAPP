import { IconType } from "react-icons";

interface AuthSocialButtonProps{
    icon: IconType,
    onClick:() => void;

    }

const AuthSocialButton:React.FC<AuthSocialButtonProps> = ({icon:Icon, onClick}) => {
    return(
        <button type ="button" className="inline-flex w-full justify-center rounded-md px-4 py-4 text-gray-500 shadow-lg ring-1 ri-insert ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 bg-white" onClick={onClick}>
            <Icon></Icon>
        </button>
    )
}
export default AuthSocialButton;