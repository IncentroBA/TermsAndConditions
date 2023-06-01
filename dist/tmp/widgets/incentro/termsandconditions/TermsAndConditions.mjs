import { useState, useEffect, createElement } from 'react';

function TermsAndConditions({
  labelTextBefore,
  labelTextAfter,
  termsAction,
  termsBoolean,
  termsText,
  ...rest
}) {
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
    return createElement("div", {
      className: `mx-checkbox form-group terms-and-conditions ${style}`
    }, createElement("input", {
      type: "checkbox",
      id: id,
      onChange: onChangeInput,
      disabled: disabledValue,
      value: currentValue
    }), createElement("label", {
      className: "control-label terms-and-conditions__label",
      htmlFor: id
    }, createElement("span", null, labelTextBefore?.value, " "), createElement("a", {
      className: "terms-and-conditions__action",
      onClick: onClickTerms
    }, termsText?.value), createElement("span", null, " ", labelTextAfter?.value)));
  } else return createElement("div", null);
}

export { TermsAndConditions };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVybXNBbmRDb25kaXRpb25zLm1qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL1Rlcm1zQW5kQ29uZGl0aW9ucy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi91aS9UZXJtc0FuZENvbmRpdGlvbnMuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXJtc0FuZENvbmRpdGlvbnMoeyBsYWJlbFRleHRCZWZvcmUsIGxhYmVsVGV4dEFmdGVyLCB0ZXJtc0FjdGlvbiwgdGVybXNCb29sZWFuLCB0ZXJtc1RleHQsIC4uLnJlc3QgfSkge1xuICAgIGNvbnN0IGlkID0gcmVzdC5uYW1lIHx8IFwiXCI7XG4gICAgY29uc3Qgc3R5bGUgPSByZXN0LmNsYXNzIHx8IFwiXCI7XG4gICAgY29uc3QgW2NhblJlbmRlciwgc2V0Q2FuUmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZGlzYWJsZWRWYWx1ZSwgc2V0RGlzYWJsZWRWYWx1ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2N1cnJlbnRWYWx1ZSwgc2V0Q3VycmVudFZhbHVlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRlcm1zQm9vbGVhbi5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShjdXJyZW50VmFsdWUgfHwgdGVybXNCb29sZWFuLnZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1zQm9vbGVhbi5yZWFkT25seSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHNldERpc2FibGVkVmFsdWUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRDYW5SZW5kZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFZhbHVlLCB0ZXJtc0Jvb2xlYW5dKTtcblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tUZXJtcygpIHtcbiAgICAgICAgaWYgKHRlcm1zQWN0aW9uICYmIHRlcm1zQWN0aW9uLmNhbkV4ZWN1dGUpIHtcbiAgICAgICAgICAgIHRlcm1zQWN0aW9uLmV4ZWN1dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgc2V0Q3VycmVudFZhbHVlKEJvb2xlYW4oZXZlbnQudGFyZ2V0LmNoZWNrZWQpKTtcbiAgICAgICAgdGVybXNCb29sZWFuLnNldFZhbHVlKEJvb2xlYW4oZXZlbnQudGFyZ2V0LmNoZWNrZWQpKTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUmVuZGVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG14LWNoZWNrYm94IGZvcm0tZ3JvdXAgdGVybXMtYW5kLWNvbmRpdGlvbnMgJHtzdHlsZX1gfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50VmFsdWV9XG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgdGVybXMtYW5kLWNvbmRpdGlvbnNfX2xhYmVsXCIgaHRtbEZvcj17aWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bGFiZWxUZXh0QmVmb3JlPy52YWx1ZX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXJtcy1hbmQtY29uZGl0aW9uc19fYWN0aW9uXCIgb25DbGljaz17b25DbGlja1Rlcm1zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXJtc1RleHQ/LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7bGFiZWxUZXh0QWZ0ZXI/LnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHJldHVybiA8ZGl2PjwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJUZXJtc0FuZENvbmRpdGlvbnMiLCJsYWJlbFRleHRCZWZvcmUiLCJsYWJlbFRleHRBZnRlciIsInRlcm1zQWN0aW9uIiwidGVybXNCb29sZWFuIiwidGVybXNUZXh0IiwicmVzdCIsImlkIiwibmFtZSIsInN0eWxlIiwiY2xhc3MiLCJjYW5SZW5kZXIiLCJzZXRDYW5SZW5kZXIiLCJ1c2VTdGF0ZSIsImRpc2FibGVkVmFsdWUiLCJzZXREaXNhYmxlZFZhbHVlIiwiY3VycmVudFZhbHVlIiwic2V0Q3VycmVudFZhbHVlIiwidXNlRWZmZWN0Iiwic3RhdHVzIiwidmFsdWUiLCJyZWFkT25seSIsIm9uQ2xpY2tUZXJtcyIsImNhbkV4ZWN1dGUiLCJleGVjdXRlIiwib25DaGFuZ2VJbnB1dCIsImV2ZW50IiwiQm9vbGVhbiIsInRhcmdldCIsImNoZWNrZWQiLCJzZXRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImh0bWxGb3IiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOztBQUdPLFNBQVNBLGtCQUFrQkEsQ0FBQztFQUFFQyxlQUFlO0VBQUVDLGNBQWM7RUFBRUMsV0FBVztFQUFFQyxZQUFZO0VBQUVDLFNBQVM7RUFBRSxHQUFHQyxJQUFBQTtBQUFLLENBQUMsRUFBRTtBQUNuSCxFQUFB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