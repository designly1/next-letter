import React, { useRef, useState } from 'react'
import { FaCheck, FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';
import { TbCopy } from 'react-icons/tb';
import { BsCheckSquare } from 'react-icons/bs'
import uuid from 'react-uuid';
import InputElement from '@/components/ui/FormControl/InputElement';

// Valid component variants
const types = [
    'text', 'email', 'tel', 'textarea', 'password', 'select'
]

export default function FormControl(props) {
    const {
        type = 'text',
        placeholder,
        name,
        label,
        isInvalid = false,
        isValid = false,
        errorMess = "Please fill this out",
        appendClass,
        mask,
        value,
        options,
        onChange,
        autoComplete,
        autoCapitalize,
        showCopyButton,
        showPasswordButton,
    } = props;
    
    const [isCopied, setIsCopied] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef();
    const inputId = uuid();

    // Valid checks
    if (!types.includes(type)) {
        return <p className="text-red-700">Invalid input type: {type}</p>
    }
    if (isInvalid && isValid) {
        return <p className="text-red-700">Both isInvalid and isValid cannot be true simultaneously!</p>
    }

    // dynamic class configuration
    let className = "p-4 border-2 border-gray-400 rounded-md focus-within:shadow-blue relative flex w-full";
    if (appendClass) className += ' ' + appendClass;

    let inputClass = "focus:outline-none w-full bg-transparent";
    if (isInvalid) {
        inputClass += ' text-red-500';
        className += ' shadow-red';
    }
    else if (isValid) {
        inputClass += ' text-green-500';
        className += ' shadow-green';
    } else {
        inputClass += ' text-blue-200';
    }

    // Pull in cursor from click of outer styling container
    const handleOuterClick = () => {
        inputRef.current && inputRef.current.focus();
    }

    // Value copy button logic
    const copyValue = () => {
        const val = inputRef.current.value;
        navigator.clipboard.writeText(val);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 500);
    }

    // Password toggle button logic
    const toggleShowPassword = () => {
        setShowPassword((oldVal) => (!oldVal));
    }

    // Label
    const Label = () => {
        if (label) {
            return <label className="ml-1 font-medium text-gray-700" htmlFor={inputId}>{label}</label>
        } else {
            return <></>
        }
    }

    // Copy Button
    const CopyButton = () => {
        if (showCopyButton) {
            return (
                <div className="my-auto">
                    <button
                        type="button"
                        className="text-2xl text-gray-300 hover:text-gray-200"
                        onClick={copyValue}
                    >
                        {
                            isCopied
                                ?
                                <BsCheckSquare className="text-green-500" />
                                :
                                <TbCopy />
                        }
                    </button>
                </div>
            )
        } else {
            return <></>
        }
    }

    // Show Password Button
    const ShowPasswordButton = () => {
        if (showPasswordButton) {
            return (
                <div className="my-auto">
                    <button
                        type="button"
                        className="text-2xl text-gray-300 hover:text-gray-200"
                        onClick={toggleShowPassword}
                    >
                        {
                            showPassword
                                ?
                                <FaEyeSlash className="text-red-600" />
                                :
                                <FaEye />
                        }
                    </button>
                </div>
            )
        } else {
            return <></>
        }
    }

    // Validation
    const ValidationIcon = () => {
        if (isValid) {
            return <FaCheck className={`text-green-600 my-auto`} />
        } else if (isInvalid) {
            return <FaTimes className={`text-red-600 my-auto`} />
        } else {
            return <></>
        }
    }

    const Feedback = () => {
        if (isInvalid) {
            return <span className={`text-sm ml-1 text-red-500`}>{errorMess}</span>
        } else {
            return <></>
        }
    }

    return (
        <div className="flex flex-col gap-1" onClick={handleOuterClick}>
            <Label />
            <div className={className}>
                <InputElement
                    inputClass={inputClass}
                    inputId={inputId}
                    inputRef={inputRef}
                    {...props} />
                <div className="flex gap-2 w-full justify-end absolute right-3 top-5">
                    <CopyButton />
                    <ShowPasswordButton />
                    <div className="my-auto flex">
                        <ValidationIcon />
                    </div>
                </div>
            </div>
            <Feedback />
        </div>
    )
}
