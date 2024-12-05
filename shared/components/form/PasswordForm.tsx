"use client"
import { inter } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    error?: boolean
}
export default function PasswordForm({
    id,
    label,
    error,
    ...props
}: InputFormProps) {
    const { register, formState: { errors } } = useFormContext();
    const [showPassword, setShowPassword] = useState(false)
    const iconClass = errors[id] || error ? 'text-red' : 'text-gray-500'
    // errors[id] && console.log(errors)
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} style={inter.style} className="text-sm">
                {label}
            </label>
            <div className="relative">
                <Input
                    id={id}
                    // className={`${props.className}`}
                    {...props}
                    {...register(id)}
                    type={showPassword ? 'text' : 'password'}
                    className={errors[id] || error ? "border-2 border-red shadow-error": ''}
                    autoComplete="current-password"
                />
                <Button 
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? 
                        <EyeOff className={`h-4 w-4 ${iconClass}`} /> :
                        <Eye className={`h-4 w-4 ${iconClass}`} />}
                </Button>
            </div>

        </div>
    );
}