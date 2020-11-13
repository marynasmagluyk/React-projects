import React, {useState, useEffect} from 'react';

const SingleColor = ({index, rgb, weight, hexColor}) => {
    const [alert, setAlert] = useState(false);
    let bcg = rgb.join(',');
    const hexValue = `#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
            }, 2000);
        return () => clearTimeout(timeout)
    }, [alert]);

    return (
        <article className={`color ${index > 10 && `color-light`}`}
                 style={{backgroundColor: `rgb(${bcg})`}}
                 onClick={() => {
                     setAlert(true);
                     navigator.clipboard.writeText(hexValue);
                 }
                 }>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hexValue}</p>
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;