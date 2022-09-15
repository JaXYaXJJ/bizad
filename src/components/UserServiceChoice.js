function UserServiceChoice(props) {

  const userOptions = [
    {
      id: 1,
      opt: "All",
    },
    {
      id: 2,
      opt: "Email notification",
    },
    {
      id: 3,
      opt: "WhatsApp group notification",
    },
    {
      id: 4,
      opt: "Voice message to phone number",
    },
    {
      id: 5,
      opt: "Message to phone number",
    },
  ]

    return ( 
        <>
        <div className={userOptions}>{props.opt}</div>
        </>
     );
}

export default UserServiceChoice;