import { FormError } from "../components/Common/Forms/FormErrors"
import Input from "../components/Common/Forms/Input"
import Textarea from "../components/Common/Forms/Textarea";

export const createInput = (name, register, props) => {
    return (
        <Input name={name} register={register} {...props} />
    );
}

export const createTextarea = (name, register, placeholder,
    errorClass, textareaClass, rows, props) => {
    return (
        <Textarea name={name} register={register}
            placeholder={placeholder}
            errorClass={errorClass}
            textareaClass={textareaClass}
            rows={rows} />
    );
}

export const createFormError = (className, icon,
    message, figureClass) => {
    return(
        <FormError className={className}
            icon={icon}
            message={message}
            figure={figureClass} />
    );
}