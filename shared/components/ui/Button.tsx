import { Button as CustomButton, ButtonProps as CustomButtonProps } from "@/components/ui/button";
interface ButtonProps extends CustomButtonProps {
    children: React.ReactNode
}

export default function Button ({children, ...props}: ButtonProps){
    return( 
        <CustomButton {...props}>
            {children}
        </CustomButton>
    )
}