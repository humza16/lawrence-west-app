import React from "react";

const CheckTick = ({ fill }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="14" fill={fill} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9458 8.62096L11.5925 16.6826L9.3758 14.3143C8.96747 13.9293 8.3258 13.906 7.85913 14.2326C7.40413 14.571 7.2758 15.166 7.5558 15.6443L10.1808 19.9143C10.4375 20.311 10.8808 20.556 11.3825 20.556C11.8608 20.556 12.3158 20.311 12.5725 19.9143C12.9925 19.366 21.0075 9.81096 21.0075 9.81096C22.0575 8.73762 20.7858 7.79262 19.9458 8.60929V8.62096Z" fill="#1053D4" />
        </svg>
    );
};

export default CheckTick;
