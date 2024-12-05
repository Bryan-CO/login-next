"use client"
import { inter } from "@/app/fonts";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    error?: boolean
    button?: boolean
}
export default function InputForm({
    id,
    label,
    button,
    error,
    ...props
}: InputFormProps) {
    const { register, formState: { errors } } = useFormContext();
    // errors[id] && console.log(errors)
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} style={inter.style} className="text-sm">
                {label}
            </label>
                <Input
                    id={id}
                    // className={`${props.className}`}
                    {...props}
                    {...register(id)}
                    type="text"
                    className={errors[id] || error ? "border-2 border-red-500 shadow-error" : ""}
                />
            </div>
    );
}