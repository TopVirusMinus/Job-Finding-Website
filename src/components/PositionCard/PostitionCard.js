import CSS from "./PositionCard.module.css"

const PositionCard = ({children, title, subtitle}) => {
    return ( 
        <div className={`w-100  d-flex align-items-center`}>
            <div>{children}</div>
            <div className="ms-3">
                <h6 className="fw-bold mb-1 ">{title}</h6>
                <p className="">{subtitle}</p>
            </div>
        </div>
     );
}
 
export default PositionCard;
