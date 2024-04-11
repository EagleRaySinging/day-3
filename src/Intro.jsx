import "./intro.css";

export default function Intro() {
  const users = [
    {
      id: 1,
      firstName: "Candy",
      lastName: "Wang",
      description: "前端工程師",
      avatar: "https://i.pravatar.cc/300?img=31",
    },
    {
      id: 2,
      firstName: "Josephine",
      lastName: "James",
      description: "UI / UX 設計師",
      avatar: "https://i.pravatar.cc/300?img=32",
    },
    {
      id: 3,
      firstName: "Glen",
      lastName: "Castillo",
      description: "後端工程師",
      avatar: "https://i.pravatar.cc/300?img=33",
    },
  ];

  const userList = users.map((user) => {
    return (
      <li key={user.id}>
        <div className="card">
          <img src={user.avatar} alt="頭貼" />
          <div className="content">
            <h3>
              <b>
                {user.firstName} {user.lastName}
              </b>
            </h3>
            <p>{user.description}</p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div id="root">
      <ul className="list">{userList}</ul>
    </div>
  );
}
