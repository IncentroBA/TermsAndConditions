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
            setCurrentValue(currentValue || termsBoolean.value);

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
            <div className={`mx-checkbox form-group terms-and-conditions ${style}`}>
                <input
                    type="checkbox"
                    id={id}
                    onChange={onChangeInput}
                    disabled={disabledValue}
                    value={currentValue}
                ></input>
                <label className="control-label terms-and-conditions__label" htmlFor={id}>
                    <span>{labelTextBefore?.value} </span>
                    <a className="terms-and-conditions__action" onClick={onClickTerms}>
                        {termsText?.value}
                    </a>
                    <span> {labelTextAfter?.value}</span>
                </label>
            </div>
        );
    } else return <div></div>;
}
