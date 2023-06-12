import "./ui/TermsAndConditions.css";
import { createElement, useEffect, useState } from "react";

export function TermsAndConditions({ labelTextBefore, labelTextAfter, termsAction, termsBoolean, termsText, ...rest }) {
    const id = rest.name || "";
    const style = rest.class || "";
    const [canRender, setCanRender] = useState(false);
    const [disabledValue, setDisabledValue] = useState(false);
    const [currentValue, setCurrentValue] = useState(null);

    useEffect(() => {
        if (termsBoolean.status === "available") {
            setCurrentValue(termsBoolean.value || currentValue);

            if (termsBoolean.readOnly === true) {
                setDisabledValue(true);
            }
            setCanRender(true);
        }
    }, [currentValue, termsBoolean]);

    function onClickTerms() {
        if (termsAction && termsAction.canExecute) {
            termsAction.execute();
        }
    }

    function onChangeInput(event) {
        setCurrentValue(Boolean(event.target.checked));
        termsBoolean.setValue(Boolean(event.target.checked));
    }

    if (canRender) {
        return (
            <div
                className={`mx-checkbox form-group terms-and-conditions ${style} ${
                    termsBoolean.validation ? "has-error" : ""
                }`}
            >
                <div className="terms-and-conditions__wrapper">
                    <input
                        type="checkbox"
                        id={id}
                        onChange={onChangeInput}
                        disabled={disabledValue}
                        checked={currentValue}
                    ></input>
                    <label className="control-label terms-and-conditions__label" htmlFor={id}>
                        <span>{labelTextBefore?.value} </span>
                        <a className="terms-and-conditions__action" onClick={onClickTerms}>
                            {termsText?.value}
                        </a>
                        <span> {labelTextAfter?.value}</span>
                    </label>
                </div>
                {termsBoolean.validation && (
                    <div className="alert alert-danger mx-validation-message" role="alert">
                        &nbsp;{termsBoolean.validation}
                    </div>
                )}
            </div>
        );
    } else return <div></div>;
}
