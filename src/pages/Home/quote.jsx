import quote from "/src/assets/quote.png"
const Quote = () => {
    return ( <>
        <div className="quote_wrapper">
            <fieldset className="fieldset_one">
                <legend  className="legend_one"><img src={quote} alt="open Quote" /></legend>
                Any application that can be writen in javascript will eventuallt be writen in javascript
            </fieldset>
            <fieldset className="fieldset_two">
                <legend className="legend_two"><img src={quote} alt="close Quote" /></legend>
               - Atwood's Law
            </fieldset>
        </div>
    </> );
}
 
export default Quote;