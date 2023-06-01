import { createElement } from "react";

export function preview({ labelTextAfter, labelTextBefore, termsBoolean, termsText }) {
    return (
        <div className="mx-checkbox form-group terms-and-conditions">
            <input type="checkbox" value={termsBoolean}></input>
            <p>
                {labelTextBefore} {termsText} {labelTextAfter}
            </p>
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/TermsAndConditions.css");
}
