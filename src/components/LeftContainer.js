import { BsThreeDots } from "react-icons/bs";

const LeftContainer = ({user}) => {
    return (
        <div className="user__row--left">
              <input type="checkbox" className="input__checkbox" />
              <p className="row__user--name">{user.name}</p>
              <BsThreeDots className="more__icon"/>
            </div>
    )
}
export default LeftContainer;