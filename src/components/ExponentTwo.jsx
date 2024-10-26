const ExponentTwo = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">{props.count} * {props.count} = <span className="total">4</span></p>
  </div>
);

export default ExponentTwo;