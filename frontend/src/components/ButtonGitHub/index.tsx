import React, { ButtonHTMLAttributes } from "react";
import { buttonStyle } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    bg?: string;
    rounded?: string;
    w?: string;
    h?:string;
    textColor?: string;
    textWeight?: string;
    icon?: string;
    iconSize?: string;
}
function ButtonGitHub({
    bg='bg-transparent',
    rounded='rounded', 
    textColor='text-black',
    textWeight='font-normal',
    w, 
    h, 
    icon,
    iconSize='ri-2x',
    ...rest 
}: IButtonProps) {
    return (           
        <button className={`${buttonStyle} ${iconSize} ${bg} ${rounded} ${textColor} ${w} ${h} ${textWeight} ${icon}`} 
        {...rest}
        />        
    );
}

export {ButtonGitHub}