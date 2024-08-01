import { Check } from "lucide-react";
import { forwardRef } from "react";

const Switch = forwardRef(({ checked, ...props }, ref) => {
    return (
        <label className="cursor-pointer">
            <input type="checkbox" className="hidden" ref={ref} {...props} />
            <div className={`w-14 p-1 rounded-full ${checked ? "bg-blue-200" : "bg-gray-200"}`}>
                <div>
                    {checked && <Check />}
                </div>
            </div>
        </label>
    );
});

export default Switch;
    