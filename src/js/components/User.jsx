const User = ({ modalOpen, setModalOpen, name, setName }) => {
  return (
    <div className="container text-center p-2">
      <button onClick={() => setModalOpen(!modalOpen)}>
        {modalOpen ? "Close" : "User"}
      </button>
      {modalOpen && (
        <div className=" p-2">
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      )}
    </div>
  );
};

export default User;
