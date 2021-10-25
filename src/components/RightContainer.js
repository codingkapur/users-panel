
const RightContainer = ({ user }) => {
  const statusColor = (status) => {
    if (status === "In Progress") {
      return "Progress";
    } else if (status === "On Hold") {
      return "Hold";
    } else {
      return status;
    }
  };
  return (
    <div className="user__row--right">
      <p className="row__user--email">{user.email}</p>
      <p className="row__user--phone">{user.phone}</p>
      <p className={`row__user--status ${statusColor(user.status)}`}>
        {user.status}
      </p>
      <p className="row__user--source">{user.source}</p>
      <p className="row__user--date">{user.date}</p>
    </div>
  );
};

export default RightContainer;
